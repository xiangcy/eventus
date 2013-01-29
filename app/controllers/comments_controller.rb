class CommentsController < ApplicationController
  def create
    @comment = Comment.build_from(Event.find(params[:comment][:event_id]), current_user.id, params[:comment][:body])
    @comment.save
    respond_to do |format|
      format.html { Event.find(params[:comment][:event_id]) }
      format.js
    end 
  end
  
end
