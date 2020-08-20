import React, { Component } from 'react';
import axios from 'axios';
import Header from './style';
import { Button } from 'react-bootstrap';
import './button.css';
import './form.css';
import Assign from './table2';
import history from './../history';

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            zipCode: '',
        };
    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value})
    }
    submitHandler = e => {
        e.preventDefault();
        console.log(this.state)
        axios.post('https://rest.digishaala.com/api/roamers/all', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error =>{
                console.log(error)
            })
    }
    render() { 
        const { firstName, lastName, email, phone, zipCode } = this.state
        return (
            <div>
                <Header/>
                <form onSubmit={this.submitHandler} className='form'>
                    <div>
                        <label htmlFor='firstName'>First Name</label>
                            <input
                                className='form-control'
                                type="text"
                                name="firstName"
                                value={firstName}
                                onChange={this.changeHandler}
                            />
                    </div>
                    <div>
                        <label htmlFor='lastName'>Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={lastName}
                                onChange={this.changeHandler}
                            />
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                            <input
                                type="text"
                                name="email"
                                value={email}
                                onChange={this.changeHandler}
                            />
                    </div>
                    <div>
                        <label htmlFor='phone'>Phone</label>
                            <input
                                type="text"
                                name="phone"
                                value={phone}
                                onChange={this.changeHandler}
                            />
                    </div>
                    <div>
                        <label htmlFor='zipCode'>ZipCode</label>
                            <input
                                type="text"
                                name="zipCode"
                                value={zipCode}
                                onChange={this.changeHandler}
                            />
                    </div>
                    <br/>
                    <button className='form' onClick={() =>history.push('/userlist')} type='submit'>SUBMIT</button>
                </form>
            </div>
        );
    }
}
 
export default Form;