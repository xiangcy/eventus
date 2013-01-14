class Event < ActiveRecord::Base
  attr_accessible :content, :place, :time, :user_id
end
