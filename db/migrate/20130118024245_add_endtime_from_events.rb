class AddEndtimeFromEvents < ActiveRecord::Migration
  def change
    add_column :events, :endtime, :datetime
  end
end
