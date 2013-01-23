class Relationship < ActiveRecord::Base
  attr_accessible :liked_id, :liker_id
  
  belongs_to :liker, class_name: "User"
  belongs_to :liked, class_name: "User"
  
  validates :liker_id, presence: true
  validates :liked_id, presence: true
end
