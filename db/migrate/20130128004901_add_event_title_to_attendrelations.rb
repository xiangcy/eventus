class AddEventTitleToAttendrelations < ActiveRecord::Migration
  def change
    add_column :attendrelations, :event_title, :string
  end
end
