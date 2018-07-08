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
    //    this.setState((prevState) => {

    //         return {
    //             likes: prevState.likes + 1,
    //             updated: true
    //             }
    //         })


        //    , () => {
        //        const { id } = this.params.match.params
        //        this.props.incrementLikes(id, this.state.likes)
        //    }

// debugger
        this.props.incrementLikes(this.props.ideaId, this.props.likes + 1)
    }
    // updateLikes() {
    //     this.incrementLikes((prevState) => {

    //         return {
    //             likes: prevState.likes + 1,
    //             updated: true
    //             }
    //         })

    // }
    // incrementLikes(id, num) {
    //     // const {id} = this.params.match.params
    //     this.props.dispatch({type: 'INC_LIKES'})
    // }

    render() {
        return (
            <div>
                <button 
                    className="btn btn-success" 
                    onClick={this.updateLikes}>
                    Like <strong>{this.props.likes}</strong>
                </button> 
            </div>
        );
    }
}

// export default Likes

// function mapStateToProps(state){
//     debugger
//     return {
//         likes: state.likes
//     }
// }
export default connect(null, { incrementLikes})(Likes)

