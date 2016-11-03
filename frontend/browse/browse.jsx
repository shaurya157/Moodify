import React from 'react';
import SongIndexContainer from '../songs/song_index_container';

class Browse extends React.Component{
  constructor(props){
    super(props);
    this.state = {songs: props.songs};
  }

  componentDidMount(){
    this.props.requestAllSongs();
  }

  render(){
    return(
      <section className='songs-index'>
        <SongIndexContainer songs={this.state.songs}/>
      </section>
    );
  }
}

export default Browse;
