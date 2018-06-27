import React, { Component } from 'react';
// import ReactDom from 'react-dom';

export default class About extends Component {
    render() {
        return (
            <div>
                <header className="page-footer font-small blue pt-4 mt-4">
                    <div className="container-fluid text-center text-md-left">
                        <h5 className="text-uppercase">About</h5>
                        <p>IdeaBank is a web application which led the user to save their brainstorming ideas.</p>
                    </div>
                </header>
            </div>
        )
    }
}