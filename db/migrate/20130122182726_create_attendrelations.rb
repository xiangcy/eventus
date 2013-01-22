class CreateAttendrelations < ActiveRecord::Migration
  def change
    create_table :attendrelations do |t|
      t.integer :participant_id
      t.integer :event_id

      t.timestamps
    end
    
    add_index :attendrelations, :participant_id
    add_index :attendrelations, :event_id
    add_index :attendrelations, [:participant_id, :event_id], unique: true
  end
end
