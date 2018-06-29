import React from 'react';
import { Link } from 'react-router-dom'
// import ReactDom from 'react-dom';
const AddIdeaButton = () =>
    <div className="text-xs-right">
        <Link className="btn btn-primary" to="/ideas/new">
            Add Idea
        </Link>
    </div>

export default AddIdeaButton;
// convert to stateless