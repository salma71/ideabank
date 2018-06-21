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
            </div>
        )
    }

    render() {
        return(
            <div>
                <form>
                    <Field 
                    // this Field component is know how to deal with Redux form only 
                    // don't know how to show myself on the screen
                    label="Title:"
                    name="title" //what piece of state the user want to create
                    component={this.renderField} //takes fun to display the component - help Field to 
                    // show himself on the screen
                    />
                    <Field 
                    label="Body:"
                    name="body"
                    component={this.renderField}
                    />
                </form>
            </div>
        )
    }
}

export default reduxForm({
    // some config options
    form: 'IdeasNewForm' //as name of the form - this name should be unique
})(IdeasNew);