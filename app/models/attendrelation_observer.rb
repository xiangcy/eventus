class AttendrelationObserver < ActiveRecord::Observer
  def after_create(attendrelation)
    n = Notification.new
    n.sender_id = attendrelation.event_id
    n.link_id = attendrelation.participant_id
    n.kind = 'attend'
    n.seen = 'false'
    n.user_id = attendrelation.event.user.id
    n.save
    Pusher[('private-'+n.user_id.to_s())].trigger('new_message', { })
  end
end
