import React from 'react';

class PlayQueue extends React.Component {
  constructor(props){
    super(props);
    this.playSong = this.playSong.bind(this);
    this.deleteSong = this.deleteSong.bind(this);
  }

  playSong(){
    return (event) => {
      this.props.playSong(event.target.value);
    };
  }

  deleteSong(){
    return (event) => {
      this.props.deleteSongFromQueue(event.target.value);
    };
  }

  render(){
    let playqueue = this.props.playqueue.map((song, idx) => (
      <tr key={idx} value={song}>
        <td>{song.title}</td>
        <td>{song.artist}</td>
        <td>{song.song_duration}</td>
        <td value={song.id} onClick={this.deleteSong}>Delete</td>
      </tr>
    ));

    return(
      <div className='playqueue'>
        <table>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Duration</th>
            <th>Delete</th>
          </tr>
          {playqueue}
        </table>
      </div>
    );
  }
}

export default PlayQueue;
