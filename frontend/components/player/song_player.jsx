import React from 'react';
import ReactPlayer from 'react-player';

class SongPlayer extends React.Component {
  constructor(props){
    super(props);
    this.togglePlay = this.togglePlay.bind(this);
    this.startNextSong = this.startNextSong.bind(this);
    this.startPreviousSong = this.startPreviousSong.bind(this);
  }

  togglePlay (){
    if(this.props.playing === true){
      this.props.pauseSong();
    }  else {
      this.props.playSong();
    }
  }

  startNextSong(){
    this.props.goForward();
  }

  startPreviousSong(){
    this.props.goBack();
  }

  render () {
    return (
      <div>
        <ReactPlayer
        url={this.props.song.audio_url}
        playing={this.props.playing} hidden={true}
        className='song-player'
        onEnded={this.startNextSong}/>
        <button onClick={this.togglePlay}>Toggle play</button>
        <button onClick={this.startPreviousSong}>Previous</button>
        <button onClick={this.startNextSong}>Next</button>
      </div>
  );
  }
}

export default SongPlayer;
