class CreateNotifications < ActiveRecord::Migration
  def change
    create_table :notifications do |t|
      t.integer :sender_id
      t.string :kind
      t.boolean :seen
      t.integer :user_id

      t.timestamps
    end
  end
end
