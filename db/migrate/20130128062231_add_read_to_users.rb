class AddReadToUsers < ActiveRecord::Migration
  def change
    add_column :users, :read, :integer
  end
end
