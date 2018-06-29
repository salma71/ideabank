import React from 'react';
import { Link } from 'react-router-dom';
// import ReactDom from 'react-dom';

const MyFooter = () =>
            <div>
                <footer className="page-footer font-small blue pt-4 mt-4">
                    <div className="container-fluid text-center text-md-left">
                        <hr />
                        <h5 className="text-uppercase">More info</h5>
                        <p>You can see the source code on: 
                            <Link to="https://github.com/salma71/ideaBank">Github Repo</Link> <br />
                              BlogPost: <Link to="https://medium/salmaeng71">Medium</Link>
                        </p>
                    </div>
                </footer>
            </div>

export default MyFooter;


