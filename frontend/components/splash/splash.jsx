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

    this.openDemoModal = this.openDemoModal.bind(this);
    this.state = {authModal: false, formType:''};
    this.handleButtonIfLoggedIn = this.handleButtonIfLoggedIn.bind(this);
  }

  componentWillReceiveProps(nextProps){
  if(nextProps.currentUser && nextProps.currentUser.id){
    this.props.router.push('/app');
    }
  }

  openModal(type, demo){
    this.props.clearErrors();
    this.setState({authModal: true, formType: type, demo: demo});
  }

  openDemoModal(){
    this.props.clearErrors();
    this.setState({authModal: true, formType: 'login', demo: true});
  }

  closeModal(){
    this.setState({authModal: false, demo: false});
  }

  toggleForm(){
    this.props.clearErrors();

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
          <button onClick={this.openModal.bind(this, 'login', false)}>Login!</button>
          <button onClick={this.openModal.bind(this, 'signup', false)}>Sign up!</button>
          <button onClick={this.openModal.bind(this, 'login', true)}>Demo</button>
        </div>
        );
    } else {
      buttons = <button onClick={this.handleButtonIfLoggedIn}>Explore! </button>;
    }
    return (
      <main className='overlay-main'>
        <div className='overlay'>
          <div className='introduction'>
            <img className='homepage' src={'assets/logo.png'}></img>
            <h1>Moodify</h1>
            {buttons}
          </div>
        </div>
        <div className='hello'>Hello</div>


        <Modal isOpen={this.state.authModal}
           onRequestClose={this.closeModal.bind(this)}
           style={authModalStyle}>

         <SessionFormContainer formType={this.state.formType}
            closeModal={this.closeModal.bind(this)}
            toggleForm={this.toggleForm.bind(this)}
            demo={this.state.demo}
          />
        </Modal>
      </main>
    );
  }

}

export default Splash;
