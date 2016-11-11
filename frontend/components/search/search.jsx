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

  render(){
    let songs =
    <ul>
      {this.props.search.songs.map(el => (
        <li key={el.id} onClick={this.playSong(el)}>
          <div>
            <img src={el.song_image_url}></img>
            <div>
              <span>{el.title}</span>
              <span>{el.artist}</span>
              <span>{el.album}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>;


    let users =
    <ul>
      {this.props.search.users.map(el => {
        return (
          <li key={el.id} onClick={this.redirectToUser(el.id)}>
            <img src={this.shortenedUrl(el.profile_image_url)}></img>
            <span>{el.username}</span>
          </li>
        );
      })}
    </ul>;


    let playlists =
    <ul>
      {this.props.search.playlists.map(el => (
        <li key={el.id} onClick={this.redirectToPlaylist(el.id)}>
          <img src={this.shortenedUrl(el.playlist_image_url)}></img>
          <span>{el.title}</span>
        </li>
      ))}
    </ul>;

    return (
      <div className='search'>
        <div className='search-bar'>
          <input type='text' onChange={this.handleChange}>
          </input>
        </div>

        {songs}
        {users}
        {playlists}
      </div>
    );
  }
}

export default withRouter(Search);
