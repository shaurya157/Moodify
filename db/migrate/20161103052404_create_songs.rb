class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.string :artist, null: false
      t.string :album, null: false
      t.string :song_image_url, null: false
      t.string :audio_url, null: false
      t.string :song_duration

      t.timestamps null: false
    end

    add_index :songs, [:title, :song_image_url, :audio_url]
  end
end
