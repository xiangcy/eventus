class MakeSomeChanges < ActiveRecord::Migration
  def up
    change_column :events, :content, :text, :limit => nil
  end

  def down
  end
end
