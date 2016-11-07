import React from 'react';
import SongIndexContainer from '../songs/song_index_container';
import PlaylistIndexContainer from '../playlists/playlist_index_container';

class Browse extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    this.props.requestAllSongs();
  }

  render(){
    return(
      <section className='browse'>
        <div className='browse-container'>
          <h1 className='header'>
            Browse
          </h1>
          <SongIndexContainer songs={this.props.songs}
            location='browse'/>
          <PlaylistIndexContainer />
        </div>
      </section>
    );
  }
}

export default Browse;
