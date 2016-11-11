import React from 'react';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';
import {withRouter, Link} from 'react-router';
import {authModalStyle} from '../../util/modal_styles';
import Footer from './footer';

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
    if(!this.props.currentUser.id){
      buttons = (
        <div className='login-buttons'>
          <button onClick={this.openModal.bind(this, 'login', false)}>Login!</button>
          <button onClick={this.openModal.bind(this, 'signup', false)}>Sign up!</button>
          <button onClick={this.openModal.bind(this, 'login', true)}
            className='demo-user'>Demo</button>
        </div>
        );
    } else {
      buttons = <button onClick={this.handleButtonIfLoggedIn}>Explore! </button>;
    }
    return (
      <main className='overlay-main'>
        <div className='overlay'>
          <div className='introduction'>
            <img className='homepage' src={'http://res.cloudinary.com/djv7nouxz/image/upload/v1478885155/helm_logo6_fzqb63.png'}></img>
            <h1>Moodify</h1>
            {buttons}
          </div>
          <div className='introduction2'>
            Add cool info about app here
          </div>
        </div>

        <Footer />
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
