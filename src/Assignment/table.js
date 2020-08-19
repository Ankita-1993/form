import React from 'react';
import axios from 'axios';

import ReactTable from "react-table";
import "react-table/react-table.css";

import Form from "./form2";

const API = 'https://rest.digishaala.com/api/roamers/all';

class Transactions extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            posts: [],
            // isLoading: false,
            // error: null
        };
    }

    handleAddTransaction() {
        console.log("New button clicked")
    }

    componentDidMount() {
        const url = 'https://rest.digishaala.com/api/roamers/all';
        fetch(url, {
            method: 'GET'
        }).then(response=> response.json()).then(posts =>{
            this.setState({posts: posts})
        })
    }

    render() {
        const {posts} = this.state;
        return (
            <div>
                <div>
                    <ReactTable
                        data = {posts}
                        columns = {[
                            {
                                Header: "First Name",
                                accessor: "firstName",
                                width: 200
                            },
                            {
                                Header: "Last Name",
                                accessor: "lastName",
                                width: 400
                            },
                            {
                                Header: "Phone",
                                accessor: "phone",
                                width: 200
                            },
                            {
                                Header: "Email",
                                accessor: "email",
                                width: 200
                            },
                            {
                                Header: "ZipCode",
                                accessor: "zipCode",
                                width: 200
                            },
                            {
                                Header: "Num Visits",
                                accessor: "numVisits",
                                width: 200
                            },
                            {
                                Header: "Last Visited On",
                                accessor: "lastVisitedOn",
                                width: 400
                            }
                        ]}
                        defaultPageSize = {5}
                        sortable ={false}
                        noDataText={"please wait..."}
                        manual
                        style={{
                        height: "800px"
                        }}
                        className="-striped -highlight"
                    />
                </div>
                <div><Form /></div>
                <button onClick={() => this.handleAddTransaction()} type="button">New +</button>
            </div>
        )
    };
}

export default Transactions;