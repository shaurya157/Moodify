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
      <div>
        <ul>
          {songList}
        </ul>
      </div>
    );
  }
};

export default SongIndex;
