import React, {
	Component
} from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		};
		this.onInputChange = this.onInputChange.bind(this);
	}
	onInputChange(evt) {
		const term = evt.target.value;
		this.setState({
			term: term
		});
	}
	render() {
		return (
			<div className="input-group">
				<input 
					placeholder="Get a five day forcast in your favorite cities"
					className="form-control"
					value={this.state.term}
					onChange = {this.onInputChange}
					/>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</div>
		);
	}
}