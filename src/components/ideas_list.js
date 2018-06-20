import React, { Component } from 'react';
import {connect} from 'react-redux';

class IdeasList extends Component {
    componentDidMount() {
        this.props.fetchIdeas();
    }

    renderIdeas() {
        return this.props.ideas, idea => {
            return (
                <li className="list-group-item" key={idea.id}>
                    
                        {idea.title}
           
                </li>
            )
        }
    }
    render() {
        return(
            <div>
                Ideas 
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {ideas: state.ideas}
}
export default IdeasList;