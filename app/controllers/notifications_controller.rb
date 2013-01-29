class NotificationsController < ApplicationController
  def index
    if signed_in?
      @notifications = current_user.notifications.order('created_at DESC')
      @notifications.each do |notification|
        notification.update_attributes(seen: 'true')
      end
    end
    respond_to do |format|
        format.js
    end
  end
end
