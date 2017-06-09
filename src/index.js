import _ from 'lodash';
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
			videos: [],
			selectedVidel: null
		};
		// initial searching
		this.videoSearch('surfboards');
	}
	onVideoSelect(selectedVideo) {
		this.setState({
			selectedVideo
		});
	}
	onVideoTermChange(term) {
		return _.debounce(function(term) {
			this.videoSearch(term);
		}.bind(this), 300);
	}
	videoSearch(term) {
		ytSearch({
			key: API_KEY,
			term: term,
		}, function(videos) {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		}.bind(this));
	}
	render() {
		// const videoSearch = _.debounce((term) => {
		// 	this.videoSearch(term)
		// }, 300);
		return (
			<div>
				<SearchBar onSearchTermChange={this.onVideoTermChange.bind(this)()} />
				<VideoDetails video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={this.onVideoSelect.bind(this)}
					videos={this.state.videos}/>
			</div>
		);
	}
}


// take this component's generated HTML 
// and put it on page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));