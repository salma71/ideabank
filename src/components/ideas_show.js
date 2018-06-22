import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchIdea, deleteIdea, patchIdea} from '../actions';

class IdeasShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchIdea(id);
    }

    onDeleteClick(){
        const { id } = this.props.match.params;
        this.props.deleteIdea(id, () => {
            this.props.history.push('/')
        })
    }

    onEditClick() {
        const { id } = this.props.match.params;
        this.props.patchIdea(id, () => {
            this.props.history.push(`/ideas/${id}`)
        })
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
                <Link to="/ideas" className="btn btn-primary">Back</Link>
                <button 
                className="btn btn-danger pull-xs-right"
                onClick={this.onDeleteClick.bind(this)}
                >
                    Delete
                </button>
                {/* <Link to={`/ideas/${id}/edit`} className="btn btn-secondary">Edit</Link> */}
                <button 
                className="btn btn-secondary pull-xs-right"
                onClick={this.onEditClick.bind(this)}
                >
                    Edit
                </button>
            </div>
        )
    }
}

function mapStateToProps({ideas}, ownProps) {
    // return {posts}
    return {idea: ideas[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {fetchIdea, deleteIdea, patchIdea})(IdeasShow);