# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  email      :string(255)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ActiveRecord::Base
  attr_accessible :email, :name, :password, :password_confirmation, :gender, :hobby, :blog, :city, :image
  has_secure_password
  has_many :events
  has_many :attendrelations, foreign_key: "participant_id", dependent: :destroy
  has_many :attended_events, through: :attendrelations, source: :event
  has_many :relationships, foreign_key: "liker_id", dependent: :destroy
  has_many :liked_users, through: :relationships, source: :liked
  has_many :reverse_relationships, foreign_key: "liked_id", class_name: "Relationship", dependent: :destroy
  has_many :likers, through: :reverse_relationships, source: :liker
  has_many :notifications
  mount_uploader :image, ImageUploader
  #has_many :evaluations, class_name: "RSevaluation", as: :source
  
  before_save { |user| user.email = email.downcase }
  before_save :create_remember_token
  validates :name, presence: true, length: {maximum: 30}, uniqueness: true
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  validates :email, presence: true, format: { with: VALID_EMAIL_REGEX },
                    uniqueness: { case_sensitive: false }
  validates :password, length: { minimum: 6 }, :if => :validate_password?
  validates :password_confirmation, presence: true, :if => :validate_password?
  #def voted_for?(event)
 #   evaluations.where(target_type: event.class, target_id: event.id).present?
 # end
 
  def validate_password?
    password.present? || password_confirmation.present?
  end
  
  def attending?(event)
    attendrelations.find_by_event_id(event.id)
  end
  
  def attend!(event)
    attendrelations.create!(event_id: event.id)
  end
  
  def unattend!(event)
    attendrelations.find_by_event_id(event.id).destroy
  end
  
  def liking?(other_user)
    relationships.find_by_liked_id(other_user.id)
  end
  
  def like!(other_user)
    relationships.create!(liked_id: other_user.id)
  end
  
  def unlike!(other_user)
    relationships.find_by_liked_id(other_user.id).destroy
  end
  
  private
    
    def create_remember_token
      self.remember_token = SecureRandom.urlsafe_base64
    end
end
