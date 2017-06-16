import React, { Component } from 'react'

import { Field, reduxForm } from 'redux-form'

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { createPost } from '../actions';

class PostsNew extends Component {

  renderSingleField (field) {
    const { meta:{touched, error } } = field
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <label htmlFor=''>
          {field.label}
        </label>
        <input className='form-control' type='text' {...field.input} />
        <div className='text-help'>
          {touched ? error : null}
        </div>
      </div>
    )
  }

  onSubmit (values) {
    // this === component
    // console.log('values', values)
    this.props.createPost(values);
  }

  render () {
    const { handleSubmit } = this.props
    console.log(handleSubmit);
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label='Title' name='title' component={this.renderSingleField} />
        <Field label='Categories' name='categories' component={this.renderSingleField} />
        <Field label='Post Content' name='content' component={this.renderSingleField} />
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    )
  }
}

function validate (values) {
  // console.log(values)
  const errors = {}

  // validate the inputs from 'values'
  if (values.title && values.title.length < 3) {
    errors.title = 'Enter a title that is at least 3 characters'
  }

  if (!values.title) {
    errors.title = 'Enter a title'
  }

  if (!values.categories) {
    errors.categories = 'Enter some categories'
  }

  if (!values.content) {
    errors.content = 'Enter some contents please'
  }

  // if errors is empty, the form is fine to submit
  // if errors has any properties , redux form assumes form is invalid
  return errors
}

export default reduxForm({
  validate,
  form: 'PostsNewForm' // just pass a unique string	
})(
  connect(null,{createPost})(PostsNew)
)
