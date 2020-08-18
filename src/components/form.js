import React, { Component } from 'react';
import axios from 'axios';
import Header from './style';

class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            zipCode: '' 
        };
    }
    changeHandler = e => {
        // let fname= e.target.firstName
        // let lname= e.target.lastName
        // let email = e.target.email
        // let ph = e.target.phone
        // let zcode = e.target.zipCode
        this.setState({ [e.target.name]: e.target.value})
    }
    submitHandler = e => {
        e.preventDefault();
        console.log(this.state)
        axios
            .post('https://rest.digishaala.com/api/roamers/all', this.state)
            .then(response => {
                console.log(response)
            })
    }
    render() { 
        const { firstName, lastName, email, phone, zipCode } = this.state
        return (
            <div>
                <Header/>
                <form onSubmit={this.submitHandler}>
                    <div>
                        First Name
                        <input
                            type='text'
                            name='firstName'
                            value={firstName}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        Last Name
                        <input
                            type='text'
                            name='lastName'
                            value={lastName}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        Email
                        <input
                            type='text'
                            name='email'
                            value={email}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        Phone
                        <input
                            type='text'
                            name='phone'
                            value={phone}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div>
                        ZipCode
                        <input
                            type='text'
                            name='zipCode'
                            value={zipCode}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        );
    }
}
 
export default Form;