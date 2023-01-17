import React from "react";
import firebase from "firebase";
import Login from "./Login";
import base, { firebaseApp } from "../base";

class SignIn extends React.Component {
  submitedUserId = React.createRef();

  state = {
    uid: null,
    userId: null,
    owner: null,
  };

  signIn = (event) => {
    // 1, prevent default / page relaod
    event.preventDefault();
    // 2. get the text from the input
    console.log(this.submitedUserId.current.value);
    const userId = this.submitedUserId.current.value.toUpperCase();
    //3. change the page to the  '/bugtracker/userId' submited
    this.props.history.push(`/bugtracker/${userId}`);
  };

  authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
  };

  render() {
    return (
      <div className='sign-in-wrapper'>
        <form
          className='sign-in'
          onSubmit={this.signIn}
        >
          <h1 className='app-title'>Bug Hunter - Bug Tracker</h1>
          <h2 className='sign-in-prompt'>Please sign in.</h2>

          <input
            type='text'
            required
            placeholder='User Name'
            ref={this.submitedUserId}
          />

          <button
            className='sign-in-button'
            type='submit'
          >
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
