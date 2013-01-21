class AddAttributesToUsers < ActiveRecord::Migration
  def change
    add_column :users, :gender, :string
    add_column :users, :hobby, :string
    add_column :users, :blog, :string
  end
end
