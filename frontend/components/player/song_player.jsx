import React from 'react';
import ReactPlayer from 'react-player';
// import Playbar from './playbar';

class SongPlayer extends React.Component {
  constructor(props){
    super(props);
    this.state = {progress: 0};
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
    if(this.props.playqueue && this.props.playqueue.length !== 0){
      this.setState({progress: 0});
      this.props.goForward();
    }
  }

  startPreviousSong(){
    this.setState({progress: 0});
    this.props.goBack();
  }

  updatePlaybar({played}){
    this.setState({progress: played * 100});
  }

  render () {
    return (
      <div className='song-player'>
        <ReactPlayer
        url={this.props.song.audio_url}
        playing={this.props.playing} hidden={true}
        onEnded={this.startNextSong}
        onProgress={this.updatePlaybar}/>

        <div className='progress-bar'>
          <div className='audio-progress'
            style={{width: `${this.state.progress}%`}}>
          </div>
          <div className='progress-circle'
            style={{left: `${this.state.progress - 8}px`}}>
          </div>
        </div>

        <div className='song-controls'>
          <div onClick={this.startPreviousSong} className='playqueue-previous'>
            <img src='http://res.cloudinary.com/djv7nouxz/image/upload/v1478412309/previous_button_dteyd7.png'></img>
          </div>
          <div onClick={this.togglePlay} className='playqueue-resume'>
            <img src='http://res.cloudinary.com/djv7nouxz/image/upload/v1478412042/play_button_zl1jcp.png'></img>
          </div>
          <div onClick={this.startNextSong} className='playqueue-next'>
            <img src='http://res.cloudinary.com/djv7nouxz/image/upload/v1478412310/next_button_zzezii.png'></img>
          </div>
        </div>
      </div>
  );
  }
}

export default SongPlayer;
