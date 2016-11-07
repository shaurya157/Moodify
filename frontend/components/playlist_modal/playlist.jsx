import React from 'react';

class Playlist extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        {this.props.playlist.title}
      </div>
    );
  }
}

export default Playlist;
