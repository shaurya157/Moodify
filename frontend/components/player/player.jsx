import React from 'react';
import SongPlayerContainer from './song_player_container';
import PlayQueueContainer from './playqueue_container';

class Player extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let song = this.props.song;

    if(song.id){
      let divStyle = {
        backgroundImage: `url(${song.song_image_url})`,
        backgroundSize: `cover`,
        backgroundPosition: `50%`,
      };

      return(
        <div className='player'>
          <div className='current-song-details'>
            <div className='current-song-image'
              style={divStyle}>
            </div>
            <div className='current-song-title'>{song.title}</div>
            <div className='current-song-artist'>{song.artist}</div>
          </div>
          <SongPlayerContainer />
          <PlayQueueContainer />
        </div>
      );
    } else {
      return(
        <div className='player-not-playing'></div>
      );
    }

  }
}

export default Player;
