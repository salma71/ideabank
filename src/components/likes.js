import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        this.props.incrementLikes
        // if (!this.state.updated) {
            this.setState((prevState) => {
                return {
                    likes: prevState.likes + 1,
                    updated: true
                };
            });
        // } else {

        //     this.setState((prevState) => {
        //         return {
        //             likes: prevState.likes - 1,
        //             updated: false
        //         };
        //     });
        // }
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
function mapStateToProps(){

}
export default connect(mapStateToProps)(Likes);


