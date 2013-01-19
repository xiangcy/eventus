class Event < ActiveRecord::Base
  attr_accessible :content, :place, :time, :title, :endtime
  belongs_to :user
  has_reputation :votes, source: :user, aggregated_by: :sum
  
  validates :user_id, presence: true
  validates :content, presence: true
  validates :place, presence: true
  validates :time, presence: true
  validates :endtime, presence: true
  validates :title, presence: true
  
  #default_scope order: "events.created_at DESC"
  
  def self.future
    where("time > ?", ::Time.now )
  end
  
  def self.futuresearch(search)
    if search
      
    else
      self.future
    end
  end
  
end
