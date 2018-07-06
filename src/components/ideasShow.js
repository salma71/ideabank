import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchIdea, deleteIdea } from '../actions';
import BackButton from './backButton';

class IdeasShow extends Component {
    componentDidMount() {
        if (!this.props.idea) {
            // debugger;
            const { id } = this.props.match.params;
            this.props.fetchIdea(id);
    }
}
    // make sure you're not forcing the api call every refresh

    onDeleteClick = () => {
        const { id } = this.props.match.params;
        // debugger;
        this.props.deleteIdea(id, () => {
            this.props.history.push('/')
        })
    }

    render() {
        const { idea } = this.props;
        if (!idea) {
            return <div>Loading!...</div>
        }

        return (
            <div>
                <h2>Ideas show page</h2>
                <h3>{idea.title}</h3>
                <p>{idea.body}</p>
                <div className="text-xs-right">
                    <BackButton />
                    <button 
                    className="btn btn-danger pull-xs-right"
                    onClick={this.onDeleteClick}
                    >
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ideas}, ownProps) {

    return {idea: ideas[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchIdea, deleteIdea})(IdeasShow);