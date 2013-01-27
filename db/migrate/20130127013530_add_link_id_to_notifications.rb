class AddLinkIdToNotifications < ActiveRecord::Migration
  def change
    add_column :notifications, :link_id, :integer
  end
end
