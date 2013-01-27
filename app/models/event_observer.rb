class EventObserver < ActiveRecord::Observer
  def before_destroy(event)
    event.participants.each do |participant|
        n = Notification.new
        n.kind = 'destroy'
        n.seen = title
        n.user_id = participant.id
        n.save
        Pusher[('private-'+n.user_id.to_s())].trigger('new_message', { })
      end
  end
end
