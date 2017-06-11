import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux';
import {
	bindActionCreators
} from 'redux';
import {
	fetchWeather
} from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		};
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onInputChange(evt) {
		const term = evt.target.value;
		this.setState({
			term: term
		});
	}
	onFormSubmit(evt) {
		evt.preventDefault();
		// we need to go and fetch weather data
		const city = this.state.term;
		this.props.fetchWeather(city);
		this.setState({
			term: ''
		});
	}
	render() {
		return (
			<form className="input-group" onSubmit={this.onFormSubmit}>
				<input 
					placeholder="Get a five day forcast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange = {this.onInputChange}
					/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchWeather: fetchWeather
	}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);