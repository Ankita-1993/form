import React, { Component } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

class ExportToExcel extends Component {
    render() { 
        return (
            <div style={{marginRight: '25px'}}>
                <ReactHTMLTableToExcel
                    id='test-table-xls-button'
                    className='export'
                    table = 'table-to-xls'
                    filename='filtredData'
                    sheet='tablexls'
                    buttonText='Export'/>
                <table hidden='true' id='table-to-xls'>
                    <thread>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>ZipCode</th>
                            <th>Num visits</th>
                            <th>Last Visited On</th>
                        </tr>
                    </thread>
                    <tbody>
                        {
                            this.props.posts.map(post =>{
                                return(
                                    <tr key={post.id}>
                                        <td>{post.firstname}</td>
                                        <td>{post.lastname}</td>
                                        <td>{post.phone}</td>
                                        <td>{post.email}</td>
                                        <td>{post.zipcode}</td>
                                        <td>{post.numvisits}</td>
                                        <td>{post.lastvisitedon}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default ExportToExcel;