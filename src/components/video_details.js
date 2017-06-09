import React, {
	Component
} from 'react';

class VideoDetails extends Component {
	render() {
		const videoId = this.props.id.videoId;
		const url = `https://www.youtube.com/embed/${videoId}`;
		return (
			<div className="video-detail col-md-8">
				<div className="embed-responsive embed-responsive-16by9">
					<iframe className="embed-responsive-item" src={url}></iframe>
				</div>
				<div className="details">
					<div>{this.props.snippet.title}</div>
					<div>{this.props.snippet.description}</div>
				</div>
			</div>
		);
	}
}

export default VideoDetails;