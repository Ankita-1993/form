import React from 'react';
import axios from 'axios';

const API = 'https://rest.digishaala.com/api/roamers/all';

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        zipCode: '' 
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {
        firstName,
        lastName,
        email,
        phone,
        zipCode 
    } = this.state;

    axios.post(API, {
        firstName,
        lastName,
        email,
        phone,
        zipCode 
      })
      .then((result) => {
        console.log(result)
      });
  }

  render() {

    const {
        firstName,
        lastName,
        email,
        phone,
        zipCode 
    } = this.state;

    return (
        <form onSubmit={this.onSubmit}>
            <p>First Name</p>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={this.onChange}
            />
            <p>Last Name</p>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.onChange}
            />
            <p>Email</p>
            <input
              type="text"
              name="email"
              value={email}
              onChange={this.onChange}
            />
            <p>phone</p>
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={this.onChange}
            />
            <p>ZipCode</p>
            <input
              type="text"
              name="zipCode"
              value={zipCode}
              onChange={this.onChange}
            />
            <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;