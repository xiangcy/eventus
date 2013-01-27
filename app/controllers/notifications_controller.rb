class NotificationsController < ApplicationController
  def index
    if signed_in?
      @notifications = current_user.notifications.order('created_at DESC')
    end
    respond_to do |format|
        format.js
    end
  end
end
