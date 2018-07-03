// this is a container
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchIdeas } from '../actions';
import AddIdeaButton from './addIdeaButton';
import Likes from './likes'

class IdeasIndex extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = { ideas: this.state }
    //     // this.setState ({ ideas })
    // }

    // handleClick(e){
    //     this.setState({ ideas: !this.state.title })
    // }
    componentDidMount() { 
        // this.props.setState({ ideas })
        this.props.fetchIdeas()
    }

    // this fun will run immed after this component is rendered
    // which go and fetch some data or initiate one time loading process
    renderIdeas() {
        return _.map(this.props.ideas, idea => {
            return (
                <li className="list-group-item" key={idea.id}>
                <Link to={`/ideas/${idea.id}`}>
                    {idea.title} <br />
                        
                </Link>
                    <Likes />
                    {/* {idea.created_at} */}
                </li>
            )
        })
    }

    render() {
        // console.log('the props',this.props.ideas)
        return(
            <div>
                <AddIdeaButton />
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