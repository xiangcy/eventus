class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :time
      t.string :place
      t.string :content
      t.integer :user_id

      t.timestamps
    end
  end
end
