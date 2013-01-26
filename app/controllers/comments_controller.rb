class CommentsController < ApplicationController
  def create
    @comment = Comment.build_from(Event.find(params[:comment][:event_id]), current_user.id, params[:comment][:body])
    @comment.save
    if params[:comment][:commentable_type] == 'Comment'
      Comment.last.move_to_child_of(Comment.find(params[:comment][:commentable_id]))
    end
    redirect_to Event.find(params[:comment][:event_id])
  end
  
end
