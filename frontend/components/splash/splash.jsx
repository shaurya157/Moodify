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
    this.handleButtonIfLoggedIn = this.handleButtonIfLoggedIn.bind(this);
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

  handleButtonIfLoggedIn(){
    this.props.router.push('/app');
  }
  render(){
    let buttons;
    if(!this.props.currentUser){
      buttons = (
        <div className='login-buttons'>
          <button onClick={this.openModal.bind(this, 'login')}>Login!</button>
          <button onClick={this.openModal.bind(this, 'signup')}>Sign up!</button>
        </div>
        );
    } else {
      buttons = <button onClick={this.handleButtonIfLoggedIn}>Explore! </button>;
    }
    return (
      <main className='overlay-main'>
        // <div className='overlay'>
        //   <img src={'assets/splash_background'}></img>
        // </div>

        <div className='introduction'>
          <h1>Big title!</h1>
          <h3>Small Description 1</h3>
          <h3>Small Desription 2</h3>
          <h3>Small Description 3</h3>
          {buttons}
        </div>


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
