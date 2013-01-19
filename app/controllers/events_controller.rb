class EventsController < ApplicationController
  before_filter :signed_in_user, only: [:create, :new, :edit, :update, :destroy, :vote]
  before_filter :correct_user, only: [:edit, :update, :destroy]
  
  def index
    @events = Event.futuresearch(params[:cities]).find_with_reputation(:votes, :all, { :order => 'votes DESC'})
  end
  
  def show
    @event = Event.find(params[:id])
  end
  
  def new
    @event = current_user.events.build if signed_in?
  end
  
  def create
    @event = current_user.events.build(params[:event])
    if @event.save
      flash[:success] = "Event created!"
      redirect_to current_user
    else
      render 'new'
    end
  end
  
  def edit
    @event = Event.find(params[:id])
  end
  
  def update
    @event = Event.find(params[:id])
    if @event.update_attributes(params[:event])
      flash[:success] = "Event Updated"
      redirect_to current_user
    else
      render 'edit'
    end
  end
  
  def destroy
    Event.find(params[:id]).destroy
    flash[:success] = "Event destroyed"
    redirect_to current_user
  end
  
  def vote
    value = params[:type] == "up" ? 1 : -1
    @event = Event.find(params[:id])
    @event.add_or_update_evaluation(:votes, value, current_user)
    redirect_to :back, notice: "Thank you for voting"
  end
  
  private
  
    def correct_user
      @event = Event.find(params[:id])
      unless current_user == @event.user
        redirect_to(root_path)
      end
    end
  
  
end
