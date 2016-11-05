import React from 'react';

class Player extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let song = this.props.song;

    if(this.props.playing){
      return(
        <div className='player'>
          <div className='current-song-details'>
            <img src={song.song_image_url}></img>
            <div>{song.title}</div>
            <div>{song.artist}</div>
          </div>
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
