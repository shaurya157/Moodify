// putting this on hold till reducer is configured
import React from 'react';
import {withRouter} from 'react-router';
import Modal from 'react-modal';
import {searchModalStyle} from '../../util/modal_styles';
import SearchContainer from '../search/search_container';

class Sidebar extends React.Component {
  constructor(props){
    super(props);
    this.redirectToBrowse = this.redirectToBrowse.bind(this);
    this.redirectToProfilePage = this.redirectToProfilePage.bind(this);
    this.state = {searchModal: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal(){
    this.setState({searchModal: true});
  }

  closeModal(){
    this.props.clearSearch();
    this.setState({searchModal: false});
  }

  redirectToBrowse(){
    this.props.router.push('/app');
  }

  redirectToProfilePage(){
    this.props.router.push(`/app/users/${this.props.currentUser.id}`);
  }

  render(){
    return (
    <div className='sidebar'>
      <div className='logo' onClick={this.redirectToBrowse}>
        <img src={'http://res.cloudinary.com/djv7nouxz/image/upload/v1478885155/helm_logo6_fzqb63.png'}></img>
      </div>

      <ul>
        <li className='search' onClick={this.openModal}>
          <div className='sidebar-item'>
            <img src={'http://res.cloudinary.com/djv7nouxz/image/upload/h_100/v1478417702/search_logo_pmandn.png'}></img>
            <p>Search</p>
          </div>
        </li>

        <li>
          <div className='sidebar-item' onClick={this.redirectToBrowse}>
            <img src={'http://res.cloudinary.com/djv7nouxz/image/upload/v1478899326/headphones_1_a5kmem.png'}></img>
            <p>Browse</p>
          </div>
        </li>
      </ul>

      <div className='user-profile-sidebar'
        onClick={this.redirectToProfilePage}>
        <img src={this.props.currentUser.profile_image_url}></img>
      </div>

      <Modal isOpen={this.state.searchModal}
         onRequestClose={this.closeModal}
         style={searchModalStyle}>
         <SearchContainer closeModal={this.closeModal}/>
      </Modal>
    </div>);
  }
}

export default withRouter(Sidebar);
