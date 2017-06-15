import React, {
	Component
} from 'react';

import {Field,reduxForm} from 'redux-form';

class PostsNew extends Component {

	renderSingleField(field){
		return (
			<div className="form-group">
				<label htmlFor="">{field.label}</label>
				<input 
					className="form-control" 
					type="text" 
					{...field.input} />
				{field.meta.error}
			</div>
		);
	}

	handleSubmit(evt){
		evt.preventDefault();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<Field 
					label="Title"
					name="title"
					component={this.renderSingleField} />
				<Field 
					label="Categories"
					name="categories"
					component={this.renderSingleField} />
				<Field 
					label="Post Content"
					name="content"
					component={this.renderSingleField} />
				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}

function validate(values){
	// console.log(values);
	const errors = {};

	// validate the inputs from 'values'
	if (values.title && values.title.length < 3) {
		errors.title = "Enter a title that is at least 3 characters";
	}

	if (!values.title) {
		errors.title = "Enter a title";
	}

	if (!values.categories) {
		errors.categories = "Enter some categories";
	}

	if( !values.content ) {
		errors.content = "Enter some contents please";
	}

	// if errors is empty, the form is fine to submit
	// if errors has any properties , redux form assumes form is invalid
	return errors;
}

export default reduxForm({
	validate,
	form: 'PostsNewForm' // just pass a unique string	
})(PostsNew);