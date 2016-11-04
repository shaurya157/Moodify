import React from 'react';
import SongIndexItem from './song_index_item';

const SongIndex = ({songs, location}) => {
  const songList = songs.map((song, idx) => (
    <li key={idx}>
      <SongIndexItem song={song}/>
    </li>
  ));

  if(location === 'browse'){
    return(
      <div className='recommended-songs'>
        <div className='recommended-songs-header'>Recommended Songs</div>
        <div className='recommended-songs-list'>
          <ul>
            {songList}
          </ul>
        </div>
      </div>
    );
  }
};

export default SongIndex;
