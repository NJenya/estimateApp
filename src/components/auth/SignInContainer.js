import React, {Component} from 'react';
import {connect} from 'react-redux';
import SignIn from './SignIn';
import {
  updateEmailText,
  updatePasswordText,
} from '../../../redux/signInReducer';

class SignInContainer extends Component {
  render() {
    return <SignIn {...this.props} />;
  }
}

let mapStateToProps = state => ({
  email: state.signInScreen.email,
  password: state.signInScreen.password,
});

export default connect(
  mapStateToProps,
  {updateEmailText, updatePasswordText},
)(SignInContainer);
