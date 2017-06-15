import React, {
	Component
} from 'react';

import {Field,reduxForm} from 'redux-form';

class PostsNew extends Component {

	renderSingleField(field){
		return (
			<div className="form-group">
				<label htmlFor="">{field.label}</label>
				<input className="form-control" type="text" {...field.input} />
			</div>
		);
	}

	render() {
		return (
			<form>
				<Field 
					label="Title"
					name="title"
					component={this.renderSingleField} />
				<Field 
					label="Tags"
					name="tags"
					component={this.renderSingleField} />
				<Field 
					label="Post Content"
					name="content"
					component={this.renderSingleField} />
			</form>
		);
	}
}

export default reduxForm({
	form: 'PostsNewForm' // just pass a unique string	
})(PostsNew);