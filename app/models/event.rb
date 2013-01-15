class Event < ActiveRecord::Base
  attr_accessible :content, :place
  belongs_to :user
  
  validates :user_id, presence: true
  validates :content, presence: true
  validates :place, presence: true
  validates :time, presence: true
  
  default_scope order: "events.created_at DESC"
end
