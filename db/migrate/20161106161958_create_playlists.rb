class CreatePlaylists < ActiveRecord::Migration
  def change
    create_table :playlists do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.integer :user_id, null: false
      t.string :playlist_image_url, null: false

      t.timestamps null: false
    end

    add_index :playlists, [:user_id]
  end
end
