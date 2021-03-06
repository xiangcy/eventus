class EventsController < ApplicationController
  before_filter :signed_in_user, only: [:show, :create, :new, :edit, :update, :destroy, :vote]
  before_filter :correct_user, only: [:edit, :update, :destroy]
  
  def index
    @events = Event.futuresearch(params).find_with_reputation(:votes, :all, { :order => 'votes DESC'}).paginate(
                                       :page => params[:page], :per_page => 5)
    @city = params[:city]
    @category = params[:category]
    @timeperiod = params[:timeperiod]
    @goodpeople = User.all.sort_by{|user| -user.likers.count}[0..4]
  end
  
  def show
    @event = Event.find(params[:id])
    @new_comment = Comment.build_from(@event, current_user.id, "")
  end
  
  def new
    @event = current_user.events.build if signed_in?
  end
  
  def create
    @event = current_user.events.build(params[:event])
    if @event.save
      flash[:success] = "Event created!"
      redirect_to @event
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
      redirect_to @event
    else
      render 'edit'
    end
  end
  
  def destroy
    Event.find(params[:id]).destroy
    flash[:success] = "Event deleted!"
    redirect_to current_user
  end
  
  def vote
    value = params[:type] == "up" ? 1 : -1
    @event = Event.find(params[:id])
    @event.add_or_update_evaluation(:votes, value, current_user)
    respond_to do |format|
      format.html { redirect_to :back, notice: "Thank you for voting" }
      format.js
    end
  end
  
  private
  
    def correct_user
      @event = Event.find(params[:id])
      unless current_user == @event.user
        redirect_to(root_path)
      end
    end
  
  
end
