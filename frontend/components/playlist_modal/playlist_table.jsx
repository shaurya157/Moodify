import React from 'react';

const PlaylistTable = ({playlist}) => {
  let divStyle = {
    backgroundImage: `url(${playlist.playlist_image_url})`,
    backgroundSize: `cover`,
    backgroundPosition: `50%`,
  };

  let songs = playlist.songs.map((song, idx)=>(
    <tr key={song.id}>
      <td>{idx + 1}</td>
      <td>{song.title}</td>
      <td>{song.artist}</td>
      <td>{song.album}</td>
      <td>{song.song_duration}</td>
    </tr>
  ));

  return (
    <div className='playlist-table'>
      <div className='playlist-table-image'
        style={divStyle}>
        <span className='playlist-table-title'>{playlist.title}</span>
      </div>
      <div className='playlist-table-details'>
        Created by {playlist.username}
      </div>
      <table>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Duration</th>
        </tr>
        {songs}
      </table>


    </div>
  );
};

export default PlaylistTable;
