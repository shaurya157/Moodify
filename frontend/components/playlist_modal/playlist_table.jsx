import React from 'react';
import SongActionsContainer from './song_actions_container';
import {withRouter, Link} from 'react-router';

class PlaylistTable extends React.Component {
  constructor(props){
    super(props);

    this.togglePlaylistFollow = this.togglePlaylistFollow.bind(this);
  }

  togglePlaylistFollow(playlistId){
    if(this.props.followed === false){
      return this.props.createPlaylistFollow(playlistId);
    } else {
      return this.props.deletePlaylistFollow(playlistId);
    }
  }

  componentWillMount(){
    this.setState({following: this.props.followed});
  }

  redirectToUser(id){
    return () => {
      this.props.router.push(`/app/users/${id}`);
    };
  }

  render(){
    let divStyle = {
      backgroundImage: `url(${this.props.playlist.playlist_image_url})`,
      backgroundSize: `cover`,
      backgroundPosition: `50%`,
    };

    let songs = this.props.playlist.songs.map((song, idx)=>(
      <tr key={song.id} onDoubleClick={this.props.playSong(song)}>
        <td className='playlist-table-playsong' onClick={this.props.playSong(song)}>
          <img src='https://res.cloudinary.com/djv7nouxz/image/upload/q_50/v1478395268/play_button_xe3rjt.png'></img>
        </td>
        <td>{idx + 1}</td>
        <td>{song.title}</td>
        <td>{song.artist}</td>
        <td>{song.album}</td>
        <td className='playlist-table-song-actions'>
          <SongActionsContainer />
        </td>
        <td>{song.song_duration}</td>
      </tr>
    ));

    let followButton;
    if(this.props.followed){
      followButton = <button onClick={this.togglePlaylistFollow(this.props.playlist.id) } className='unfollow-button'>Unfollow</button>;
    } else {
      followButton = <button onClick={this.togglePlaylistFollow(this.props.playlist.id) } className='follow-button'>Follow</button>;
    }

    return (
      <div className='playlist-table'>
        <div className='playlist-table-image'
          style={divStyle}>
          <span className='playlist-table-title'>{this.props.playlist.title}</span>
        </div>
        <div className='playlist-table-details'>
          Created by <span className='to-highlight'
                      onClick={this.redirectToUser(this.props.playlist.user_id)}>
          {this.props.playlist.username}
        </span>

          {followButton}
          <button onClick={this.props.playPlaylist(this.props.playlist) } className='play-button'>Play</button>
        </div>
        <table>
          <tr>
            <th className='table-header-playsong'></th>
            <th>#</th>
            <th>TITLE</th>
            <th>ARTIST</th>
            <th>ALBUM</th>
            <th></th>
            <th>DURATION</th>
          </tr>
          {songs}
        </table>
      </div>
    );
  }
}


export default withRouter(PlaylistTable);
