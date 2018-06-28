import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import ReactDom from 'react-dom';
export default class BackButton extends Component {
    render() {
        return (
            
        <Link to="/ideas" className="btn btn-primary">Back</Link>
        )
    }
}