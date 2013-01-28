class CommentsController < ApplicationController
  def create
    @comment = Comment.build_from(Event.find(params[:comment][:event_id]), current_user.id, params[:comment][:body])
    @comment.save
    redirect_to Event.find(params[:comment][:event_id])
  end
  
end
