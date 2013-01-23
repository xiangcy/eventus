class AttendrelationsController < ApplicationController
  before_filter :signed_in_user
  
  def create
    @event = Event.find(params[:attendrelation][:event_id])
    current_user.attend!(@event)
    redirect_to @event  
  end
  
  def destroy
    @event = Attendrelation.find(params[:id]).event
    current_user.unattend!(@event)
    redirect_to @event
  end
end
