import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIdea } from '../actions';

class IdeasShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchIdea(id);
    }

    render() {
        const { idea } = this.props;

        if (!idea) {
            return <div>Loading!...</div>
        }

        return (
            <div>
                {/* Ideas show page */}
                <h3>{idea.title}</h3>
                <p>{idea.body}</p>
            </div>
        )
    }
}

function mapStateToProps({ideas}, ownProps) {
    // return {posts}
    return {idea: ideas[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchIdea})(IdeasShow);