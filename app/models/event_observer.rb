class EventObserver < ActiveRecord::Observer
  def before_destroy(event)
    event.participants.each do |participant|
        n = Notification.new
        n.kind = 'destroy'
        n.seen = event.attendrelations.find_by_participant_id(participant.id).event_title
        n.user_id = participant.id
        n.save
        Pusher[('private-'+n.user_id.to_s())].trigger('new_message', { })
    end
    event.attendrelations.each do |attendrelation|
      attendrelation.destroy
    end
  end
  
  def after_update(event)
    event.participants.each do |participant|
        n = Notification.new
        n.sender_id = event.id
        n.kind = 'edit'
        n.seen = 'false'
        n.user_id = participant.id
        n.save
        Pusher[('private-'+n.user_id.to_s())].trigger('new_message', { })
      end
  end
end
