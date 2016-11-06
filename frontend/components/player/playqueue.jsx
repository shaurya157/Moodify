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
    let playqueue = this.props.playqueue.map((song, idx) => (
      <tr key={idx} onClick={this.playSong(song)}>
        <td>{song.title}</td>
        <td>{song.artist}</td>
      </tr>
    ));

    return(
      <div className='playqueue'>
        <table>
          <tr>
            <th>Title</th>
            <th>Artist</th>
          </tr>
          {playqueue}
        </table>
      </div>
    );
  }
}

export default PlayQueue;
