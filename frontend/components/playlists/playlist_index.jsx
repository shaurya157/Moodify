import React from 'react';
import PlaylistIndexItemContainer from './playlist_index_item_container';

class PlaylistIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestFollowedPlaylists(this.props.currentUser.id);
  }
  render(){
    const playlists = this.props.playlists.map((playlist) =>
      <PlaylistIndexItemContainer playlist={playlist} key={playlist.id}/>
    );

    return (
      <div className='recommended-playlists'>
        <div className='recommended-playlists-header'>Recommended Playlists</div>
        <div className='recommended-playlists-container'>
          {playlists}
        </div>
      </div>
  );
  }
}

export default PlaylistIndex;
