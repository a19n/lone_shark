import React from 'react';

<<<<<<< HEAD
export default class Login extends React.Component {
=======
export default class Register extends React.Component {
>>>>>>> front-end
  constructor(props) {
    super(props);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
<<<<<<< HEAD
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getInitialState() {
    return { username: '' };
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.username);
    console.log(this.state.username);

    Accounts.createUser({
      username: this.state.username,
      password: this.state.password
    });
=======
    this.handlePasswordConfirmedChange = this.handlePasswordConfirmedChange.bind(this);
    this.passwordMatch = this.passwordMatch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }

  handlePasswordConfirmedChange(e) {
    this.setState({confirmedPassword: e.target.value})
  }


  handleSubmit(event) {
    event.preventDefault();

    if (this.passwordMatch(this.state.password, this.state.confirmedPassword)) {
      console.log('passwords match');
      Accounts.createUser({
        username: this.state.username,
        password: this.state.password
      });
    } else {
      console.log('passwords do not match')
    }
  }

  passwordMatch(password, confirmedPassword) {
    if (password === confirmedPassword) {
      return true;
    }
>>>>>>> front-end
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="username"
          onChange= {this.handleUsernameChange}
        />

        <input
          type="text"
          placeholder="password"
          onChange= {this.handlePasswordChange}
        />

        <input
<<<<<<< HEAD
=======
          type="text"
          placeholder="confirm password"
          onChange= {this.handlePasswordConfirmedChange}
        />

        <input
>>>>>>> front-end
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}
