import React from 'react';

class SongActions extends React.Component{
  constructor(props){
    super(props);

    this.state = {phase: 1, title: ""};
    this.addSongsView = this.addSongsView.bind(this);
    this.removeSongsView = this.removeSongsView.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addSongToPlaylist = this.addSongToPlaylist.bind(this);
    this.addCreatePlaylistView = this.addCreatePlaylistView.bind(this);
    this.removeCreatePlaylistView = this.removeCreatePlaylistView.bind(this);
    this.resetView = this.resetView.bind(this);
    this.updateForm = this.updateForm.bind(this);
  }

  addSongToQueue(song){
    return () => {
      this.props.addSongToQueue(song);
    };
  }

  addSongsView(){
    this.setState({phase: 2});
  }

  removeSongsView(){
    this.setState({phase: 1});
  }

  addCreatePlaylistView(){
    this.setState({phase: 3});
  }

  removeCreatePlaylistView(){
    this.setState({phase: 2});
  }

  resetView(){
    this.setState({phase: 1});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.createPlaylist({title: this.state.title, user_id: this.props.currentUser.id}, this.props.song.id);
    this.props.requestUserPlaylists(this.props.currentUser.id);
  }

  addSongToPlaylist(songId, playlistId){
    return() => {
      this.props.addSongToPlaylist(songId, playlistId);
    };
  }

  updateForm(event){
      event.preventDefault();
      this.setState({title: event.target.value});
  }

  render(){
    if(this.state.phase === 1){
      return(
        <div className='song-actions-2'>
          <img src='https://res.cloudinary.com/djv7nouxz/image/upload/q_50/v1478656649/ellipsis_szfcs8.png'
            className='song-actions-back-button'></img>
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
    } else if (this.state.phase === 2) {
      let playlists = this.props.createdPlaylists.map(el => (
        <li key={el.id}
            onClick={this.addSongToPlaylist(this.props.song.id, el.id)}>
          <span>{el.title}</span>
        </li>
      ));
      return (
        <div className='song-actions-2' onMouseLeave={this.resetView}>
          <img src='https://res.cloudinary.com/djv7nouxz/image/upload/q_50/v1478656649/ellipsis_szfcs8.png'
            className='song-actions-back-button'></img>
          <ul className='default-hidden' >
            <li onClick={this.removeSongsView} className='back-button-form'>
              <img src='https://res.cloudinary.com/djv7nouxz/image/upload/v1478755394/left-arrow_arqkps.png'></img>
              <span>Add to...</span>
            </li>
            <li onClick={this.addCreatePlaylistView}>
              <span>Create new playlist</span>
            </li>
            {playlists}
          </ul>
        </div>
      );
    } else {
      return (
        <div className='song-actions-2' onMouseLeave={this.resetView}>
        <img src='https://res.cloudinary.com/djv7nouxz/image/upload/q_50/v1478656649/ellipsis_szfcs8.png'
          className='song-actions-back-button'></img>
        <ul className='default-hidden-2'>
          <li onClick={this.removeCreatePlaylistView} className='back-button-form'>
            <img src='https://res.cloudinary.com/djv7nouxz/image/upload/v1478755394/left-arrow_arqkps.png'></img>
            <span>New playlist</span>
          </li>
          <li className='create-playlist-form'>
            <form onSubmit={this.handleSubmit}>
              <input type='text' placeholder='Name'
                onChange={this.updateForm} />
              <button type='submit' value='Submit'>Create Playlist</button>
            </form>
          </li>
        </ul>
      </div>);
    }
  }
}
export default SongActions;
