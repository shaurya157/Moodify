import React from 'react';
import PlaylistIndexItemContainer from './playlist_index_item_container';
import Masonry from 'react-masonry-component';

class PlaylistIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestUserPlaylists(this.props.currentUser.id);
  }
  render(){
    const playlists = this.props.playlists.map((playlist) =>
      <PlaylistIndexItemContainer playlist={playlist} key={playlist.id}/>
    );

    return (
      <div className='recommended-playlists'>
        <div className='recommended-playlists-header'>Recommended Playlists</div>
          <Masonry className='recommended-playlists-container'
            elementType={'ul'}
            options={{fitWidth: true, columnWidth: 250 }}>
             {playlists}
           </Masonry>
        </div>
  );
  }
}

export default PlaylistIndex;
