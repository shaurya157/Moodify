import React from 'react';

class SongActions extends React.Component{
  constructor(props){
    super(props);
  }

  addSongToQueue(song){
    return () => {
      this.props.addSongToQueue(song);
    };
  }

  render(){
    return(
      <div className='song-actions-2'>
        <img src='https://res.cloudinary.com/djv7nouxz/image/upload/q_50/v1478656649/ellipsis_szfcs8.png'></img>
        <ul className='default-hidden'>
          <li onClick={this.props.playSong(this.props.song)}>
            <span>Play</span>
          </li>
          <li onClick={this.addSongToQueue(this.props.song)}>
            <span>Add to Play Queue</span>
          </li>
          <li>
            <span>Add to...</span>
          </li>
        </ul>
      </div>
    );
  }
}
export default SongActions;
