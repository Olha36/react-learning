import { Component } from 'react';
import ReturnHome from './ReturnHome';
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
    return (
      <>
          <ReturnHome />
        <div className='login-container'>
          {isLogged ? (
            <>
              <p>Please log in to access your account.</p>
              <button onClick={this.handleToggleLogin}>Log in</button>
            </>
          ) : (
            <>
              <p>Please log out to save your data.</p>
              <button onClick={this.handleToggleLogin}>Log out</button>
            </>
          )}
        </div>
      </>
    );
  }
}
