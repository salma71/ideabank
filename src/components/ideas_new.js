import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'  // similar to connect helper

class IdeasNew extends Component {
    renderField(field) {
        // return some amount of JSX
        // this field argument have some props and eventhandlers we should be able to wire it up
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input 
                className="form-control"
                type="text"
                {...field.input}
                />
                {field.meta.error}
            </div>
        )
    }
    onSubmit(values){
        console.log(values);
    }
    render() {
        const { handleSubmit } = this.props;

        return(
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field 
                    // this Field component is know how to deal with Redux form only 
                    // don't know how to show myself on the screen
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
                    save
                    </button>
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
    form: 'IdeasNewForm' //as name of the form - this name should be unique
})(IdeasNew);