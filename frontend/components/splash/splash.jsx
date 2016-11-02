import React from 'react';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';
import {withRouter, Link} from 'react-router';
import {authModalStyle} from '../../util/modal_styles';

document.addEventListener('DOMContentLoaded', () => {
  Modal.setAppElement(document.body);
});

class Splash extends React.Component {
  constructor(props){
    super(props);
    this.state = {authModal: false, formType:''};
  }

  componentWillReceiveProps(nextProps){
  if(nextProps.currentUser && nextProps.currentUser.id){
    this.props.router.push('/app');
    }
  }

  openModal(type){
    this.props.clearErrors();
    this.setState({authModal: true, formType: type});
  }

  closeModal(){
    this.setState({authModal: false});
  }

  toggleForm(){
    if(this.state.formType === 'signup'){
      this.setState({formType: 'login'});
    }else{
      this.setState({formType: 'signup'});
    }
  }

  render(){
    return (
      <main>
        <button onClick={this.openModal.bind(this, 'login')}>Login!</button>
        <button onClick={this.openModal.bind(this, 'signup')}>Sign up!</button>

        <Modal isOpen={this.state.authModal}
           onRequestClose={this.closeModal.bind(this)}
           style={authModalStyle}>

         <SessionFormContainer formType={this.state.formType}
            closeModal={this.closeModal.bind(this)}
            toggleForm={this.toggleForm.bind(this)}
          />
        </Modal>
      </main>
    );
  }

}

export default Splash;
