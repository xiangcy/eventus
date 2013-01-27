class Notification < ActiveRecord::Base
  attr_accessible :sender_id, :seen, :kind, :user_id
  belongs_to :user
end
