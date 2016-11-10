import React from 'react';

class SongActions extends React.Component{
  constructor(props){
    super(props);

    this.state = {addingSongsView: false};
    this.addSongsView = this.addSongsView.bind(this);
    this.removeSongsView = this.removeSongsView.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addSongToPlaylist = this.addSongToPlaylist.bind(this);
  }

  addSongToQueue(song){
    return () => {
      this.props.addSongToQueue(song);
    };
  }

  addSongsView(){
    this.setState({addingSongsView: true});
  }

  removeSongsView(){
    this.setState({addingSongsView: false});
  }

  handleSubmit(){
    console.log('submitting');
  }

  addSongToPlaylist(songId, playlistId){
    return() => {
      this.props.addSongToPlaylist(songId, playlistId);
    };
  }

  render(){
    if(!this.state.addingSongsView){
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
            <li onClick={this.addSongsView}>
              <span>Add to...</span>
            </li>
          </ul>
        </div>);
    } else {
      let playlists = this.props.createdPlaylists.map(el => (
        <li key={el.id}
            onClick={this.addSongToPlaylist(this.props.song.id, el.id)}>
          {el.title}
        </li>
      ));
      return (
        <div className='song-actions-2'>
          <img src='https://res.cloudinary.com/djv7nouxz/image/upload/q_50/v1478656649/ellipsis_szfcs8.png'></img>
          <ul className='default-hidden'>
            <li onClick={this.removeSongsView}>
              <img src='https://res.cloudinary.com/djv7nouxz/image/upload/q_10/v1478755394/left-arrow_arqkps.png'></img>
            </li>
            <li>
              <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Create new playlist'></input>
              </form>
            </li>
            {playlists}
          </ul>
        </div>
      );
    }
  }
}
export default SongActions;
