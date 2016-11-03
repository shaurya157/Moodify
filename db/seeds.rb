# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create({username: 'DemoUser', password: 'password'})

Song.create({title: 'Viva la Vida', artist: 'Coldplay',
            album: 'Death and all his friends', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478198878/art_vivalavida_ed7e9i.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478198769/Coldplay_-_Viva_La_Vida_eozpbm.mp3',
            song_duration: '4:02'})

Song.create({title: 'Hymn for the Weekend', artist: 'Coldplay',
            album: 'Hymn for the Weekend', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478198878/hqdefault_qfszvd.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478198887/Coldplay_-_Hymn_For_The_Weekend_Official_video_j3rghk.mp3',
            song_duration: '4:20'})

Song.create({title: 'Strawberry Swing', artist: 'Coldplay',
            album: 'Death and all his friends', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478198878/220px-Coldplaystrawberryswing_j9emrx.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478198888/Coldplay_-_Strawberry_Swing_gmar7g.mp3',
            song_duration: '4:13'})
