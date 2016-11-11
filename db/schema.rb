# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161106165540) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "playlist_follows", force: :cascade do |t|
    t.integer  "user_id",     null: false
    t.integer  "playlist_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "playlist_follows", ["user_id", "playlist_id"], name: "index_playlist_follows_on_user_id_and_playlist_id", using: :btree

  create_table "playlist_songs", force: :cascade do |t|
    t.integer  "playlist_id", null: false
    t.integer  "song_id",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "playlist_songs", ["song_id", "playlist_id"], name: "index_playlist_songs_on_song_id_and_playlist_id", using: :btree

  create_table "playlists", force: :cascade do |t|
    t.string   "title",              null: false
    t.integer  "user_id",            null: false
    t.string   "playlist_image_url", null: false
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
  end

  add_index "playlists", ["user_id"], name: "index_playlists_on_user_id", using: :btree

  create_table "songs", force: :cascade do |t|
    t.string   "title",          null: false
    t.string   "artist",         null: false
    t.string   "album",          null: false
    t.string   "song_image_url", null: false
    t.string   "audio_url",      null: false
    t.string   "song_duration"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "songs", ["title", "song_image_url", "audio_url"], name: "index_songs_on_title_and_song_image_url_and_audio_url", using: :btree

  create_table "user_follows", force: :cascade do |t|
    t.integer  "follower_id", null: false
    t.integer  "followee_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "user_follows", ["follower_id", "followee_id"], name: "index_user_follows_on_follower_id_and_followee_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",          null: false
    t.string   "bio"
    t.string   "profile_image_url"
    t.string   "password_digest",   null: false
    t.string   "session_token",     null: false
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
