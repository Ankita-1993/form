import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import ExportToExcel from './ExportToExcel';
import './button.css'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import history from './../history';
import './table2.css';
class Assign extends Component {
    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        // const url = 'https://jsonplaceholder.typicode.com/posts';
        // fetch(url, {
        //     method: 'GET'
        // }).then(response=> response.json()).then(posts =>{
        //     this.setState({posts: posts})
        // })
        axios.get('https://rest.digishaala.com/api/roamers/all')
        .then(response => {
            console.log(response)
            this.setState({posts:response.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }
    render() {
        const data = this.state.posts; 
        const style = {
            fontSize: '25px',
            color: 'rgba(0, 0, 0, 0.884)',
            textAlign: 'center',
            fontStyle: 'inherit'
        }
        const columns = [
            {
                Header: "First Name",
                accessor: "firstName",
                style: {
                    textAlign: 'left'
                }
            },
            {
                Header: "Last Name",
                accessor: "lastName"
            },
            {
                Header: "Phone",
                accessor: "phone"
            },
            {
                Header: "Email",
                accessor: "email"
            },
            {
                Header: "ZipCode",
                accessor: "zipCode",
                style: {
                    textAlign: "center"
                }
            },
            {
                Header: "Num Visits",
                accessor: "numVisits",
                style: {
                    textAlign: "center"
                }
            },
            {
                Header: "Last Visited On",
                accessor: "lastVisitedOn"
            },
        ]
        return (
            <div>
                <header>
                    <h1 style={style}>User List</h1>
                </header>
                <ReactTable
                    className= "-striped -highlight"
                    columns = {columns}
                    data = {data}
                    defaultPageSize={5}
                    noDataText={"please wait..."}
                >

                {(state, filtredData, instance) =>{
                    this.reactTable = state.pageRows.map(post => {return post._original});
                    return (
                        <div>
                            { filtredData() }
                            <ExportToExcel posts={this.reactTable}/>                          
                            <Button className='button' variant="btn btn-success" onClick={() => history.push('/')}>Add</Button>
                            
                            {/* <BrowserRouter>
                                <div>
                                    <Link to='/form'>
                                        <button className='button' type='submit'>Add</button>
                                    </Link>
                                    <Switch>
                                        <Route path='/form' component={Form}/>
                                    </Switch>
                                </div>                               
                            </BrowserRouter> */}
                            {/* <button >Add</button> */}
                            {/* <button className='button' type='submit'><Link to='/form'>Add</Link></button> */}
                        </div>
                    )
                }}

                </ReactTable> 
            </div>                   
        );
    }
}
export default Assign;