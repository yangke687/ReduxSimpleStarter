import React, {
	Component
} from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: 'surfboards'
		};
	}

	render() {
		return (
			<div className="search-bar">
				<input 
					value={this.state.term}
					onChange={this.onInputChange.bind(this)} />
			</div>
		);
	}

	onInputChange(evt) {
		let text = evt.target.value;
		this.setState({
			term: text
		});
		if (text) {
			this.props.onSearchTermChange(text);
		}
	}
}

export default SearchBar;