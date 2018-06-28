import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import ReactDom from 'react-dom';
export default class AddIdeaButton extends Component {
    render() {
        return (
    <div className="text-xs-right">
        <Link className="btn btn-primary" to="/ideas/new">
            Add Idea
        </Link>
    </div>
        )
    }
}