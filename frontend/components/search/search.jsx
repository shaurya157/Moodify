import React from 'react';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {songs:[], users:[], playlists:[], query: ""};
  }

  handleChange(){

  }

  render(){
    return (
      <div className='search'>
        <div className='search-bar'>
          <input type='text' onChange={this.handleChange}>

          </input>
        </div>
      </div>
    );
  }
}

export default Search;
