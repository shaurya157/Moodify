import React from 'react';

class PlaylistIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const playlists = this.props.playlists.map((playlist) =>
      <PlaylistIndexItemContainer playlist={playlist}/>
    );

    return (<div>
      <div className='recommended-playlists-header'>Recommended Playlists</div>
      {playlists}
    </div>);
  }
}

export default PlaylistIndex;
