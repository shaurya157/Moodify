class CreateUserFollows < ActiveRecord::Migration
  def change
    create_table :user_follows do |t|
      t.string :follower_id, null: false
      t.string :followee_id, null: false

      t.timestamps null: false
    end

    add_index :user_follows, [:follower_id, :followee_id]
  end
end
