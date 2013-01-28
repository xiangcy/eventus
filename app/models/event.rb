class Event < ActiveRecord::Base
  attr_accessible :content, :place, :time, :title, :endtime, :city, :category, :event_image
  belongs_to :user
  has_reputation :votes, source: :user, aggregated_by: :sum
  has_many :attendrelations, foreign_key: "event_id"
  has_many :participants, through: :attendrelations, source: :participant
  mount_uploader :event_image, ImageUploader
  acts_as_commentable
  
  
  validate :start_time, :end_time
  def start_time
    if !time.blank?
      if ::Time.now > time
        errors.add(:time, "Error: Can't be in the past, change your start time.")
      end
    end
  end
  
  def end_time
    if !time.blank? and !endtime.blank?
      if endtime < time
        errors.add(:endtime, "Error: End time should be later than start time.")
      end
    end
  end
  
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
  
  def self.past
    where("time < ?", ::Time.now )
  end
  
  def self.futuresearch(params)
    if params[:timeperiod].blank?
      if params[:city].blank? && params[:category].blank?
        where("time > ?", ::Time.now )
      elsif params[:city].blank? && !params[:category].blank?
        where("time > ? AND category = ?", ::Time.now, params[:category])
      elsif !params[:city].blank? && params[:category].blank?
        where("time > ? AND city = ?", ::Time.now, params[:city])
      else
        where("time > ? AND category = ? AND city = ?", ::Time.now, params[:category], params[:city])
      end
    else
      t = params[:timeperiod]
      if params[:city].blank? && params[:category].blank?
        where("time > ? AND time < ?", ::Time.now, ::Time.now + t.to_i )
      elsif params[:city].blank? && !params[:category].blank?
        where("time > ? AND time < ? AND category = ?", ::Time.now, ::Time.now + t.to_i, params[:category])
      elsif !params[:city].blank? && params[:category].blank?
        where("time > ? AND time < ? AND city = ?", ::Time.now, ::Time.now + t.to_i, params[:city])
      else
        where("time > ? AND time < ? AND category = ? AND city = ?", ::Time.now, ::Time.now + t.to_i, params[:category], params[:city])
      end
    end
  end
  


  #acts_as_gmappable

	#def gmaps4rails_address
	#describe how to retrieve the address from your model, if you use directly a db column, you can dry your code, see wiki
	#  "#{self.street}, #{self.city}, #{self.country}" 
	#end
  
end
