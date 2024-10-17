// Create a sign-up form with fields for a user's email and password.

// Add validation to show error messages conditionally:
// If the email field is empty or invalid, display "Please enter a valid email."
// If the password is too short, display "Password must be at least 8 characters."
// Display a "Submit" button, and when all validations pass, display a success message like "Sign up successful."
import { Component } from 'react';
import { FaHome } from 'react-icons/fa';
import '../../css/formValidation.css';

export default class FormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: '',
      successMessage: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validateForm = () => {
    let emailError = '';
    let passwordError = '';

    if (!this.state.email.includes('@')) {
      emailError = 'Please enter a valid email.';
    }

    if (this.state.password.length < 8) {
      passwordError = 'Password must be at least 8 characters.';
    }

    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validateForm();
    if (isValid) {
      this.setState({ successMessage: 'Sign up successful.' });
    }
  };

  render() {
    return (
      <>
        <FaHome />
        <div className='form-validation'>
          <h3>Sign up</h3>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              id='email'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            {this.state.emailError && <span className='error-message'>{this.state.emailError}</span>}

            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            {this.state.passwordError && <span className='error-message'>{this.state.passwordError}</span>}

            <button type='submit'>Submit</button>
            {this.state.successMessage && <p>{this.state.successMessage}</p>}
          </form>
        </div>
      </>
    );
  }
}
