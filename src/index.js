import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';
import ytSearch from 'youtube-api-search';

const API_KEY = "AIzaSyC4Iqc1wb5oW_8CcTlqBlV-w4wTtB2-11E";

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';

// create a new component
// this component should produce some HTML
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			videos: []
		};
		// fetching searching results
		ytSearch({
			key: API_KEY,
			term: 'surfboards',
		}, function(videos) {
			this.setState({
				videos
			});
		}.bind(this));
	}
	render() {
		return (
			<div>
				<SearchBar />
				<VideoDetails video={this.state.videos[0]} />
				<VideoList videos={this.state.videos}/>
			</div>
		);
	}
}


// take this component's generated HTML 
// and put it on page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));