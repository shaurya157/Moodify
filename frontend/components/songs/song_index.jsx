import React from 'react';
import SongIndexItemContainer from './song_index_item_container';

const SongIndex = ({songs, location}) => {
  const songList = songs.map((song, idx) => (
    <li key={idx}>
      <SongIndexItemContainer song={song} />
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
