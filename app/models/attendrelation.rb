class Attendrelation < ActiveRecord::Base
  attr_accessible :event_id, :participant_id
  
  belongs_to :participant, class_name: "User"
  belongs_to :event, class_name: "Event"
  
  validates :participant_id, presence: true
  validates :event_id, presence: true
  
end
