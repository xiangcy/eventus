class CommentObserver < ActiveRecord::Observer
  def after_create(comment)
    if comment.user.id != Event.find(comment.commentable_id).user.id
      n = Notification.new
      n.sender_id = comment.commentable_id
      n.link_id = comment.user.id
      n.kind = 'comment'
      n.seen = 'false'
      n.user_id = Event.find(comment.commentable_id).user.id
      n.save
      Pusher[('private-'+n.user_id.to_s())].trigger('new_message', { })
    end
  end
end
