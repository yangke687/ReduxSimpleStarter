import React, {
	Component
} from 'react';

import {
	fetchPosts
} from '../actions';

import {
	connect
} from 'react-redux';

class PostsIndex extends Component {
	componentDidMount() {
		// fetching posts data
		this.props.fetchPosts();
	}
	render() {
		return (
			<div>
				Posts Index
			</div>
		);
	}
}

export default connect(null, {
	fetchPosts
})(PostsIndex);