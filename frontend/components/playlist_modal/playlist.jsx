import React from 'react';
import Modal from 'react-modal';
import {playlistModalStyle} from '../../util/modal_styles';
import PlaylistTable from './playlist_table';
import {withRouter} from 'react-router';

class Playlist extends React.Component {
  constructor(props){
    super(props);
    this.state = {playListModal: false};
    this.closeModal = this.closeModal.bind(this);
    this.playPlaylist = this.playPlaylist.bind(this);
  }

  componentWillMount(){
    let id = this.props.params.playlistId;
    this.props.requestPlaylist(id);
  }

  componentDidMount(){
    this.openModal();
  }

  openModal(){
    this.setState({playListModal: true});
  }

  playPlaylist(playlist){
    return(event) => {
      this.props.playPlaylist(playlist);
    };
  }

  closeModal(){
    this.props.clearPlaylist();
    this.setState({playListModal: false});
    this.props.router.push('/app');
  }

  render(){
    return(
      <div>
        <Modal isOpen={this.state.playListModal}
           onRequestClose={this.closeModal}
           style={playlistModalStyle(this.props.playing)}
           className='playlist-modal'>

           <PlaylistTable playlist={this.props.playlist}
             playPlaylist={this.playPlaylist}/>

        </Modal>
      </div>
    );
  }
}

export default withRouter(Playlist);
