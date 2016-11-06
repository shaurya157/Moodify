# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
bio     | text      |
profile_image_url   | string    |
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## songs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
artist      | string    | not null
album      | string    | not null
song_image_url   | string    |
audio_url   | string    | not null
song_duration      | string    |

## playlists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null,
description | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed
playlist_image_url   | string    |
image_file_type | string |
image_file_size | string |

## playlist_follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer    | not null, foreign key (references users), indexed
playlist_id | integer   | not null, foreign key (references playlists), indexed


## user_follows
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
follower_id | integer   | not null, foreign key (references users), indexed
followee_id | integer   | not null, foreign key (references users), indexed

## playlist_songs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
playlist_id | integer   | not null, foreign key (references playlists), indexed
song_id    | integer   | not null, foreign key (references songs), indexed
