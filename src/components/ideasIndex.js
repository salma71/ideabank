// this is a container
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchIdeas, fetchIdeasSuccess } from '../actions';
import AddIdeaButton from './addIdeaButton';
import Likes from './likes'

class IdeasIndex extends Component {
    componentDidMount() {
        if(this.props.loading)
        {
            this.props.fetchIdeas()
        }
    }

    renderIdeas() {
        return _.map(this.props.ideas, idea => {
            return (
                <li className="list-group-item" key={idea.id}>
                <Link to={`/ideas/${idea.id}`}>
                    {idea.title} <br />
                </Link>
                    <Likes ideaId={idea.id} likes={idea.likes}/>
                    {/* {idea.created_at} */}
                </li>
            )
        })
    }

    render() {
        if(this.props.loading) {
            return "Loading..."
        }

        return(
            <div>
                <AddIdeaButton />
                <h3>Ideas</h3>
                <ul className="list-group">
                {/* {this.state.renderIdeas()} */}
                    {this.renderIdeas()} 
                </ul>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        loading: state.ideas.loading,
        ideas: state.ideas.ideas
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchIdeas: () => {
//             dispatch(fetchIdeas()).then((response) => {
//                dispatch(fetchIdeasSuccess(response.payload.data)) 
//             });
//         }
//     }
// }
    export default connect(mapStateToProps, { fetchIdeas })(IdeasIndex);