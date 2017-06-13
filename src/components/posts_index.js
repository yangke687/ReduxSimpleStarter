import React, {
	Component
} from 'react';

import {
	fetchPosts
} from '../actions';

import {
	connect
} from 'react-redux';

import _ from 'lodash';

class PostsIndex extends Component {
	componentDidMount() {
		// fetching posts data
		this.props.fetchPosts();
	}
	renderPosts() {
		return _.map(this.props.posts, post => {
			console.log(post);
			return (
				post.title && <li className="list-group-item" key={post.id}>{post.title}</li>
			);
		});
	}
	render() {
		return (
			<div>
				<h3>Posts Index</h3>
				<ul>
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		posts: state.posts
	};
}

export default connect(mapStateToProps, {
	fetchPosts
})(PostsIndex);