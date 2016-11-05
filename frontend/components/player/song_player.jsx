import React from 'react';
import ReactPlayer from 'react-player';

class SongPlayer extends React.Component {
  constructor(props){
    super(props);
    this.progress = 0;
    this.togglePlay = this.togglePlay.bind(this);
    this.startNextSong = this.startNextSong.bind(this);
    this.startPreviousSong = this.startPreviousSong.bind(this);
    this.updatePlaybar = this.updatePlaybar.bind(this);
  }

  togglePlay (){
    if(this.props.playing === true){
      this.props.pauseSong();
    }  else {
      this.props.playSong();
    }
  }

  startNextSong(){
    if(this.props.playqueue.length === 1){
      this.props.pauseSong();
    } else {
      this.props.goForward();
    }
  }

  startPreviousSong(){
    this.props.goBack();
  }

  updatePlaybar({played}){
    this.progress = played * 100;
  }

  render () {
    return (
      <div>
        <ReactPlayer
        url={this.props.song.audio_url}
        playing={this.props.playing} hidden={true}
        className='song-player'
        onEnded={this.startNextSong}
        onProgress={this.updatePlaybar}/>

        <div className='progress-bar'>
          <div className='audio-progress'
            style={{width: `${document.documentElement.clientWidth*this.progress}%`}}>
          </div>
          <div className='progress-circle'
            style={{left: `${document.documentElement.clientWidth*this.progress - 8}px`}}>
          </div>
        </div>

        <button onClick={this.togglePlay}>Toggle play</button>
        <button onClick={this.startPreviousSong}>Previous</button>
        <button onClick={this.startNextSong}>Next</button>

      </div>
  );
  }
}

export default SongPlayer;
