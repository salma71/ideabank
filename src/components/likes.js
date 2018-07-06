import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementLikes } from '../actions'
import { reduxForm } from 'redux-form'

class Likes extends Component {

    constructor(props) {

        super(props);
        this.state = {
            likes: 0,
            updated: false
        }
        this.updateLikes = this.updateLikes.bind(this);
    }

    updateLikes() {
        // debugger;

        // const { id } = this.props.match.params;
        // debugger;
        // this.props.incrementLikes(id)
        this.setState((prevState) => {

            return {
                likes: prevState.likes + 1,
                updated: true
                }
                // () => {
                //     this.props.incrementLikes(2)
                // }
            })
            
    }

    render() {

        return (
            <div>
                <button 
                    className="btn btn-success" 
                    onClick={this.updateLikes}>
                    Like <strong>{this.state.likes}</strong>
                </button> 
            </div>
        );
    }
}
// export default Likes
export default reduxForm({
    // some config options
    form: 'IdeaLikeForm'
})(
    connect(null, { incrementLikes })(Likes)
)
