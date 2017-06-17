import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    // fetching posts data
    this.props.fetchPosts();
  }
  renderPosts() {
    return _.map(this.props.posts,
      post => post.title && (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>),
    );
  }
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">Add a Post</Link>
        </div>
        <h3>Posts</h3>
        <ul>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

PostsIndex.propTypes = {
  fetchPosts: PropTypes.func,
  posts: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
