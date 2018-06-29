import React from 'react';
// import ReactDom from 'react-dom';

const About = () => 
            <div>
                <header className="page-footer font-small blue pt-4 mt-4">
                    <div className="container-fluid text-center text-md-left">
                        <h5 className="text-uppercase">IdeaBank</h5>
                        <p>IdeaBank is a web application which let the user to save their brainstorming ideas.
                            the application used React framework as a frontend, Redux library as a middleware.
                            For the form, Redux form library has been used to handle the action creator wiring 
                            for me.
                            <strong>For the Back-end</strong> I used Ruby-on-Rails framework and JSON API to handle
                            my data.
                        </p>
                        <br />
                        <hr />
                    </div>
                </header>
            </div>
    
export default About;
//convert to stateless