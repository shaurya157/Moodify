import React from 'react';

class PlayQueue extends React.Component {
  constructor(props){
    super(props);
    this.playSong = this.playSong.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
  }

  playSong(song){
    return (event) => {
      this.props.playSong(song);
    };
  }

  deleteSong(){
    return (event) => {
      this.props.deleteSongFromQueue(event.target.value);
    };
  }

  render(){
    let playqueueSongs = this.props.playqueue.map((song, idx) => (
      <tr key={idx} onClick={this.playSong(song)}>
        <td>{song.title}</td>
        <td>{song.artist}</td>
      </tr>
    ));

    let playqueue;
    if(this.props.playqueue.length === 0){
      playqueue =
      <div>

      </div>;
    } else {
      playqueue =
      <table>
        <tbody>
            <tr>
              <th>Title</th>
              <th>Artist</th>
            </tr>
            {playqueueSongs}
        </tbody>
      </table>;
    }

    return(
      <div className='playqueue'>
        {playqueue}
      </div>
    );
  }
}

export default PlayQueue;
