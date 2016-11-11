import React from 'react';
import {withRouter} from 'react-router';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {query: ""};
    this.handleChange = this.handleChange.bind(this);
    this.shortenedUrl = this.shortenedUrl.bind(this);
    this.playSong = this.playSong.bind(this);
    this.redirectToUser = this.redirectToUser.bind(this);
    this.redirectToPlaylist = this.redirectToPlaylist.bind(this);
    this.divStyle = this.divStyle.bind(this);
  }

  handleChange(event){
    let that = this;
    this.setState({query: event.target.value}, () => {
      that.props.requestSearch(this.state.query);
    });
  }

  shortenedUrl(url){
    let indexOfUpload = url.indexOf('upload');
    let croppedImageUrl = url.slice(0, indexOfUpload) + ('upload/h_250') + url.slice(indexOfUpload + 6, url.length);
    return croppedImageUrl;
  }

  playSong(song){
    return ()=>{
      this.props.closeModal();
      this.props.playSong(song);
    };
  }

  redirectToUser(userId){
    return () => {
      this.props.closeModal();
      this.props.router.push(`/app/users/${userId}`);
    };
  }

  redirectToPlaylist(playlistId){
    return () => {
      this.props.closeModal();
      this.props.router.push(`/app/playlist/${playlistId}`);
    };
  }

  divStyle(url) {
    let shortUrl = this.shortenedUrl(url);
    return {
      backgroundImage: `url(${shortUrl})`,
      backgroundSize: `cover`,
      backgroundPosition: `50%`,
    };
  }

  render(){
    let showSongs, showPlaylists, showUsers;

    let songs =
    <ul>
      {this.props.search.songs.map(el => (
        <li key={el.id} onClick={this.playSong(el)}>
          <div style={this.divStyle(el.song_image_url)}
            className='search-image'></div>
          <div className='details'>
            <span>{el.title}</span>
            <span>{el.artist}</span>
            <span>{el.album}</span>
          </div>
        </li>
      ))}
    </ul>;

  if(this.props.search.songs.length > 0){
    showSongs =
    <div className='search-item'>
      <span>Songs</span>
      {songs}
    </div>;
  }

    let users =
    <ul>
      {this.props.search.users.map(el => {
        return (
          <li key={el.id} onClick={this.redirectToUser(el.id)}>
            <div style={this.divStyle(el.profile_image_url)}
              className='search-image'></div>
            <div className='details'>
              <span>{el.username}</span>
            </div>
          </li>
        );
      })}
    </ul>;

    if(this.props.search.users.length > 0){
      showUsers =
      <div className='search-item'>
        <span>Users</span>
        {users}
      </div>;
    }

    let playlists =
    <ul>
      {this.props.search.playlists.map(el => (
        <li key={el.id} onClick={this.redirectToPlaylist(el.id)}>
          <div style={this.divStyle(el.playlist_image_url)}
            className='search-image'></div>
          <span className='details'>
            <span>{el.title}</span>
          </span>
        </li>
      ))}
    </ul>;

    if(this.props.search.playlists.length > 0){
      showUsers =
      <div className='search-item'>
        <span>Playlists</span>
        {playlists}
      </div>;
    }

    return (
      <div className='search'>
        <div className='search-bar'>
          <input type='text' onChange={this.handleChange}
            placeholder='Search'>
          </input>
        </div>

        {showSongs}
        {showPlaylists}
        {showUsers}
      </div>
    );
  }
}

export default withRouter(Search);
