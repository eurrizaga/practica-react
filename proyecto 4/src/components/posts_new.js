import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderTitleField(field) {
        return (
            <div>
                <input
                    type="text" 
                /*
                    el campo de abajo bindea el Field superior con el input en todo lo que hace a sus listeners, esto incluye eventos tales como:
                    onChange={field.input.onChange}
                    onFocus={field.input.onFocus}
                    onBlur={field.input.onBlur}

                 */
                    {...field.input}
                />
            </div>
        );
    }
    render () {
        return (
            <form>
                <Field
                    name="title"
                    component={this.renderTitleField} />
            </form>
        )
    }
}

export default reduxForm({
    from: 'PostsNewForm'
})(PostsNew);