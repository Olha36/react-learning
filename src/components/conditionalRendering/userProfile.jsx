import { Component } from 'react';
import '../../css/userProfile.css';

export default class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
    };
  }

  handleToggleLogin = () => {
    this.setState((prevState) => {
      return {
        isLogged: !prevState.isLogged,
      };
    });
  };
  render() {
    const { isLogged } = this.state;
    if (isLogged) {
      // If the user is logged out, show a "Log in" button and a message like "Please log in to access your account."
      return (
        <div className='login-container'>
          <p>Please log in to access your account.</p>
          <button onClick={this.handleToggleLogin}>Log in</button>
        </div>
      );
    } else {
      return (
        <div className='login-container'>
          <p>Please log out to save your data.</p>
          <button onClick={this.handleToggleLogin}>Log out</button>
        </div>
      );
    }
  }
}
