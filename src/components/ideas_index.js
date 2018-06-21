// this is a container
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchIdeas } from '../actions';

class IdeasIndex extends Component {
    componentDidMount() {
        this.props.fetchIdeas()
    }
    // this fun will run immed after this component is rendered
    // which go and fetch some data or initiate one time loading process
    renderIdeas() {
        return _.map(this.props.ideas, idea => {
            return (
                <li className="list-group-item" key={idea.id}>
                <Link to={`/ideas/${idea.id}`}>
                    {idea.title}
                </Link>
                </li>
            )
        })
    }
    render() {
        // console.log(this.props.ideas)
        return(
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/ideas/new">
                        Add Idea
                    </Link>
                </div>
                <h3>Ideas</h3>
                <ul className="list-group">
                    {this.renderIdeas()}
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {ideas: state.ideas}
}
export default connect(mapStateToProps, { fetchIdeas })(IdeasIndex);
// 