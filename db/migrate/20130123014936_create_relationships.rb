class CreateRelationships < ActiveRecord::Migration
  def change
    create_table :relationships do |t|
      t.integer :liker_id
      t.integer :liked_id

      t.timestamps
    end
    
    add_index :relationships, :liker_id
    add_index :relationships, :liked_id
    add_index :relationships, [:liker_id, :liked_id], unique: true
  end
end
