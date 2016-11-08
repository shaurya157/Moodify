import React from 'react';

const PlaylistTable = ({playlist, playPlaylist}) => {
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
        Created by <span clasName='to-highlight'>{playlist.username}</span>

          <button>Follow</button>
          <button onClick={playPlaylist(playlist)}>Play</button>
      </div>
      <table>
        <tr>
          <th>#</th>
          <th>TITLE</th>
          <th>ARTIST</th>
          <th>ALBUM</th>
          <th>DURATION</th>
        </tr>
        {songs}
      </table>


    </div>
  );
};

export default PlaylistTable;
