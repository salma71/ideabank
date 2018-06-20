import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIdeas } from '../actions'

class IdeasIndex extends Component {
    componentDidMount() {
        this.props.fetchIdeas()
    }
    // this fun will run immed after this component is rendered
    // which go and fetch some data or initiate one time loading process

    render() {
        console.log(this.props.ideas)
        return(
            <div>
                #IdeasIndex 
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {ideas: state.ideas}
}
export default connect(mapStateToProps, { fetchIdeas })(IdeasIndex);
// 