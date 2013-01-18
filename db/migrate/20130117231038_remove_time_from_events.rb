class RemoveTimeFromEvents < ActiveRecord::Migration
  def up
    remove_column :events, :time
  end

  def down
    add_column :events, :time, :string
  end
end
