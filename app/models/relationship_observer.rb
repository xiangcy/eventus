class RelationshipObserver < ActiveRecord::Observer
  def after_create(relationship)
    n = Notification.new
    n.sender_id = relationship.liker_id
    n.kind = 'like'
    n.seen = 'false'
    n.user_id = relationship.liked_id
    n.save
    Pusher[('private-'+n.user_id.to_s())].trigger('new_message', { })
  end
  
end
