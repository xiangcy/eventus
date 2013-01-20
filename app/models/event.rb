class Event < ActiveRecord::Base
  attr_accessible :content, :place, :time, :title, :endtime, :city, :category
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
  
  def self.futuresearch(params)
    if params[:city].blank? && params[:category].blank?
      self.future
    elsif params[:city].blank? && !params[:category].blank?
      where("time > ? AND category = ?", ::Time.now, params[:category])
    elsif !params[:city].blank? && params[:category].blank?
      where("time > ? AND city = ?", ::Time.now, params[:city])
    else
      where("time > ? AND category = ? AND city = ?", ::Time.now, params[:category], params[:city])
    end
  end


  #acts_as_gmappable

	#def gmaps4rails_address
	#describe how to retrieve the address from your model, if you use directly a db column, you can dry your code, see wiki
	#  "#{self.street}, #{self.city}, #{self.country}" 
	#end
  
end
