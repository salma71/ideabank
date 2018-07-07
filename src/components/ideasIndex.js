// this is a container
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchIdeas, fetchIdeasSuccess } from '../actions';
import AddIdeaButton from './addIdeaButton';
import Likes from './likes'

class IdeasIndex extends Component {
    componentWilMount() {
        // if(!this.state.props)
        this.props.fetchIdeas()
    }
// }

    renderIdeas(ideas) {
        return ideas.map((idea) => {
            return (
                <li className="list-group-item" key={idea.id}>
                    <Link style={{ color: 'black' }} to={"ideas/" + idea.id}>
                        <h3 className="list-group-item-heading">{idea.title}</h3>
                    </Link>
                </li>
            );
        });
    }

    render() {
        const { ideas, loading} = this.props.ideasIndex;
        console.log(ideas)
        // if (loading) {
        //     return <div className="container"><h1>Ideas</h1><h3>Loading...</h3></div>
        // } 
        return(
            <div>
                <AddIdeaButton />
                <h3>Ideas</h3>
                <ul className="list-group">
                {/* {this.state.renderIdeas()} */}
                    {this.renderIdeas(ideas)} 
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        ideasIndex: state.ideas.ideasIndex
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchIdeas: () => {
            dispatch(fetchIdeas()).then((response) => {
                dispatch(fetchIdeasSuccess(response.payload.data))
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IdeasIndex);