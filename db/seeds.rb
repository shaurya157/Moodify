# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create({username: 'DemoUser', password: 'password'})
User.create({username: 'Shaurya', password: 'password'})
User.create({username: 'Shawn', password: 'password'})
User.create({username: 'Adele', password: 'password'})
User.create({username: 'David', password: 'password'})
User.create({username: 'Taylor', password: 'password'})

Song.create({title: 'Viva la Vida', artist: 'Coldplay',
            album: 'Death and all his friends', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478198878/art_vivalavida_ed7e9i.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478198769/Coldplay_-_Viva_La_Vida_eozpbm.mp3',
            song_duration: '4:02'})

Song.create({title: 'Hymn for the Weekend', artist: 'Coldplay',
            album: 'A Head Full of Dreams', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478278754/hqdefault_nkvcjx.png',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478198887/Coldplay_-_Hymn_For_The_Weekend_Official_video_j3rghk.mp3',
            song_duration: '4:20'})

Song.create({title: 'Strawberry Swing', artist: 'Coldplay',
            album: 'Death and all his friends', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478198878/220px-Coldplaystrawberryswing_j9emrx.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478198888/Coldplay_-_Strawberry_Swing_gmar7g.mp3',
            song_duration: '4:13'})

Song.create({title: 'Stitches', artist: 'Shaw Mendez',
            album: 'Stitches', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478279819/c95185f1364d5a5061a3df99360c41a4_d8nypn.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478279820/Shawn_Mendes_-_Stitches_Official_Video_bqrzhl.mp3',
            song_duration: '3:59'})

Song.create({title: 'Ignite', artist: 'Zedd',
            album: 'League of Legends', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478279715/zedd_ignite_huoobq.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478279730/Zedd-_IgniteWorlds_2016_-_League_of_Legends_yjxf6h.mp3',
            song_duration: '3:46'})

Song.create({title: 'A Head Full of Dreams', artist: 'Coldplay',
            album: 'A Head Full of Dreams', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478453323/Coldplay_-_A_Head_Full_of_Dreams_nrngz2.png',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478452130/01_-_A_Head_Full_of_Dreams_-_Musicfire.in_hst7cg.mp3',
            song_duration: '3:44'})

Song.create({title: 'Birds', artist: 'Coldplay',
            album: 'A Head Full of Dreams', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478453323/Coldplay_-_A_Head_Full_of_Dreams_nrngz2.png',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478452136/02_-_Birds_-_Musicfire.in_qdxmf0.mp3',
            song_duration: '3:49'})

Song.create({title: 'Adventure of a Lifetime', artist: 'Coldplay',
            album: 'A Head Full of Dreams', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478453323/Coldplay_-_A_Head_Full_of_Dreams_nrngz2.png',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478453096/05._Adventure_Of_A_Lifetime_igbp86.mp3',
            song_duration: '4:23'})

Song.create({title: 'Everglow', artist: 'Coldplay',
            album: 'A Head Full of Dreams', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478453323/Coldplay_-_A_Head_Full_of_Dreams_nrngz2.png',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478453097/04._Everglow_zz6crr.mp3',
            song_duration: '4:42'})

Song.create({title: 'Fun', artist: 'Coldplay',
            album: 'A Head Full of Dreams', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478453323/Coldplay_-_A_Head_Full_of_Dreams_nrngz2.png',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478453097/06._Fun_feat._Tove_Lo_wso4tl.mp3',
            song_duration: '3:43'})

Song.create({title: 'Kaleidoscope', artist: 'Coldplay',
            album: 'A Head Full of Dreams', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478453323/Coldplay_-_A_Head_Full_of_Dreams_nrngz2.png',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478453099/07._Kaleidoscope_nwzktu.mp3',
            song_duration: '1:51'})

Song.create({title: 'Color Spectrum', artist: 'Coldplay',
            album: 'A Head Full of Dreams', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478453323/Coldplay_-_A_Head_Full_of_Dreams_nrngz2.png',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478453103/10._Colour_Spectrum_mpto7g.mp3',
            song_duration: '1:00'})

Song.create({title: 'Amazing Day', artist: 'Coldplay',
            album: 'A Head Full of Dreams', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478453323/Coldplay_-_A_Head_Full_of_Dreams_nrngz2.png',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478453114/09._Amazing_Day_includes_hidden_track_X_Marks_the_Spot_xhxeoz.mp3',
            song_duration: '3:55'})

Song.create({title: 'Army of One', artist: 'Coldplay',
            album: 'A Head Full of Dreams', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478453323/Coldplay_-_A_Head_Full_of_Dreams_nrngz2.png',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478453119/08._Army_Of_One_lfkpak.mp3',
              song_duration:'6:16'})

Song.create({title: 'Up and Up', artist: 'Coldplay',
            album: 'A Head Full of Dreams', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478453323/Coldplay_-_A_Head_Full_of_Dreams_nrngz2.png',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478453119/11._Up_Up_amb2mp.mp3',
              song_duration:'6:45'})

Song.create({title: 'Keep the Family Close', artist: 'Drake',
            album: 'Views', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478453949/image5_d8e45p.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478453839/01_Keep_the_Family_Close_q4hghn.mp3',
              song_duration:'5:28'})

Song.create({title: 'Hype', artist: 'Drake',
            album: 'Views', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478453949/image5_d8e45p.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478453820/05_Hype_qkjh6v.mp3',
              song_duration:'3:29'})

Song.create({title: '9', artist: 'Drake',
            album: 'Views', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478453949/image5_d8e45p.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478453823/02_9_qfk6d6.mp3',
              song_duration:'4:15'})

Song.create({title: 'Feel No Ways', artist: 'Drake',
            album: 'Views', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478453949/image5_d8e45p.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478453824/04_Feel_No_Ways_i8gafp.mp3',
              song_duration:'4:00'})

Song.create({title: 'Weston Road Flows', artist: 'Drake',
            album: 'Views', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478453949/image5_d8e45p.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478453829/06_Weston_Road_Flows_mfowms.mp3',
              song_duration:'4:13'})

Song.create({title: 'With You', artist: 'Drake',
            album: 'Views', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478453949/image5_d8e45p.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478453839/08_With_You_feat._PARTYNEXTDOOR_lhx3vt.mp3',
              song_duration:'3:15'})

Song.create({title: 'Still Here', artist: 'Drake',
            album: 'Views', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478453949/image5_d8e45p.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478453841/10_Still_Here_kdyqgk.mp3',
              song_duration:'3:09'})

Song.create({title: 'Faithful', artist: 'Drake',
            album: 'Views', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478453949/image5_d8e45p.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478453847/09_Faithful_feat._Pimp_C_dvsn_mjfb5b.mp3',
              song_duration:'4:50'})

Song.create({title: 'Redemption', artist: 'Drake',
            album: 'Views', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478453949/image5_d8e45p.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478453850/07_Redemption_kc3k1c.mp3',
              song_duration:'5:34'})

Song.create({title: 'One Dance', artist: 'Drake',
            album: 'Views', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478453949/image5_d8e45p.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478453852/12_One_Dance_feat._Wizkid_Kyla_n7mw5r.mp3',
              song_duration:'2:54'})

Song.create({title: 'Hotline Blind', artist: 'Drake',
            album: 'Views', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478453949/image5_d8e45p.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478453874/20_Hotline_Bling_nfkrhp.mp3',
              song_duration:'4:27'})

Song.create({title: 'Water Under the Bridge', artist: 'Adele',
            album: '25', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478454461/adele_m0kokc.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478454406/06_Water_Under_the_Bridge_tyeafs.mp3',
              song_duration:'3:50'})

Song.create({title: 'Hello', artist: 'Adele',
            album: '25', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478454461/adele_m0kokc.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478454405/01_Hello_jxr11h.mp3',
              song_duration:'4:55'})

Song.create({title: 'I Miss You', artist: 'Adele',
            album: '25', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478454461/adele_m0kokc.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478454413/03_I_Miss_You_nby5md.mp3',
              song_duration:'5:48'})

Song.create({title: 'Remedy', artist: 'Adele',
            album: '25', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478454461/adele_m0kokc.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478454413/05_Remedy_dajk3r.mp3',
              song_duration:'4:05'})

Song.create({title: 'When We Were Young', artist: 'Adele',
            album: '25', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478454461/adele_m0kokc.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478454413/04_When_We_Were_Young_cxg9h1.mp3',
              song_duration:'4:50'})

Song.create({title: 'River Lea', artist: 'Adele',
            album: '25', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478454461/adele_m0kokc.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478454426/07_River_Lea_xvlxop.mp3',
              song_duration:'3:45'})

Song.create({title: 'All I ask', artist: 'Adele',
            album: '25', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478454461/adele_m0kokc.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478454434/10_All_I_Ask_rpilzg.mp3',
              song_duration:'4:31'})

Song.create({title: 'Sweetest Devotion', artist: 'Adele',
            album: '25', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478454461/adele_m0kokc.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478454437/11_Sweetest_Devotion_jgbhoa.mp3',
              song_duration:'4:11'})

Song.create({title: 'Lay Me Down', artist: 'Adele',
            album: '25', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478454461/adele_m0kokc.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478454444/13_Lay_Me_Down_thkiey.mp3',
              song_duration:'4:30'})

Song.create({title: "Can't Let GO", artist: 'Adele',
            album: '25', song_image_url: 'http://res.cloudinary.com/djv7nouxz/image/upload/v1478454461/adele_m0kokc.jpg',
            audio_url:'http://res.cloudinary.com/djv7nouxz/video/upload/v1478454437/12_Can_t_Let_Go_iues2n.mp3',
              song_duration:'3:18'})
