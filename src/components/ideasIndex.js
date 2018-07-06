// this is a container
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchIdeas } from '../actions';
import AddIdeaButton from './addIdeaButton';
import Likes from './likes'

class IdeasIndex extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     // ideasindex: { 
        //     ideas: this.props.ideas
        //     // loading: false 
        //     }
        // }
        // this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentWilMount() {
        // if(!this.state.props)
        this.props.actions.fetchIdeas()
    }
// }

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
    return {ideas: state.ideas}
    // return { ideas: state.ideas[ownProps.match.params] }
}
export default connect(mapStateToProps, { fetchIdeas })(IdeasIndex);

// const mapStateToProps = (state) => {
//     return { ideasIndex: state.ideas.ideasIndex }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchIdeas: () => {
//             dispatch(fetchIdeas()).then((response) => {
//                 dispatch(fetchIdeasSuccess(response.payload.data));
//             });
//         }
//     }
// }