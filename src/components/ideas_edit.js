import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'  // similar to connect helper
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { patchIdea, fetchIdea } from '../actions';
// export const fields = ['title', 'body']


class IdeasEdit extends Component {
    //     onEditClick() {
    //     const { id } = this.props.match.params;
    //     this.props.patchIdea(id, () => {
    //         this.props.history.push(`/ideas/${id}/edit`)
    //     })
    // }
    // constructor(props, context){
    //     super(props, context)
    //     this.state = {isEditing: false}
    //     this.toggleEdit = this.toggleEdit.bind(this);
    // }
    // toggleEdit() {
    //     this.setState({ isEditing: !this.state.isEditing })
    // }

    // componentDidMount() {
    //     const { id } = this.props.match.params;
    //     this.props.fetchIdea(id);
    // }

    renderField(field) {

        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.touched ? field.meta.error : ''}
            </div>
        )
    }
    onSubmit(values) {
        console.log(values);
        const { id } = this.props.match.params;
        // debugger;
        this.props.patchIdea(id, () => {
            // console.log(this.props)
            this.props.history.push(`/ideas/${id}`)
        })

        // this.props.patchIdea(values, () => {
        //     this.props.history.push('/')
        // })
    }
    render() {
        const { handleSubmit } = this.props;
        // console.log(handleSubmit)

        return (
            <div>
                <h2>Edit form</h2>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        label="Idea Title:"
                        name="title" //what piece of state the user want to create
                        component={this.renderField} //takes fun to display the component - help Field to 
                    // show himself on the screen
                    />
                    <Field
                        label="Idea Body:"
                        name="body"
                        component={this.renderField}
                    />
                    <button
                        type="submit"
                        className="btn btn-primary"
                    >
                        Edit
                    </button>
                    <Link to="/" className="btn btn-danger">Back to ideas list</Link>
                </form>
            </div>
        )
    }
}

function validate(values) {
    // console.log(values) -> {title: 'dfhajszhf', body: 'sjhlkjsdfh'}
    const errors = {}
    if (!values.title || values.title.length < 3) {
        errors.title = "Title can't be blank!";
    }
    if (!values.body) {
        errors.body = "Body can't be blank!"
    }
    return errors;
}

export default reduxForm({
    // some config options
    validate, // same as in ES6 validate: validate;
    form: 'IdeasEditForm', //as name of the form - this name should be unique
})(
    connect(null, { patchIdea })(IdeasEdit)
)