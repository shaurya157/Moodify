class CreatePlaylistSongs < ActiveRecord::Migration
  def change
    create_table :playlist_songs do |t|
      t.integer :playlist_id, null: false
      t.integer :song_id, null: false

      t.timestamps null: false
    end

    add_index :playlist_songs, [:song_id, :playlist_id]
  end
end
