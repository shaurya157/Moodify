import React from 'react';

const SongIndexItem = ({song}) => {
  return (
    <div className='song-index-item'>
      <img src={song.song_image_url} className='song-index-item-image'></img>
      <div className='song-details'>
        <span className='song-index-item-title'>{song.title}</span>
        <span className='song-index-item-artist'>{song.artist}</span>
        <span className='song-index-item-album'>{song.album}</span>
      </div>
    </div>
  );
};

export default SongIndexItem;

// :: need to fill this item with the details of the song
