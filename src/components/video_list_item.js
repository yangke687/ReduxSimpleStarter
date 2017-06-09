import React, {
	Component
} from 'react';

class VideoListItem extends Component {
	render() {
		return (
			<li className="list-group-item" onClick={this.props.onVideoSelect.bind(this,this.props.video)}>
				<div className="video-list media">
					<div className="media-left">
						<img className="media-object" src={this.props.video.snippet.thumbnails.default.url} />
					</div>
					<div className="media-body">
						<div className="media-heading">{this.props.video.snippet.title}</div>
					</div>
				</div>
			</li>
		);
	}
}

export default VideoListItem;