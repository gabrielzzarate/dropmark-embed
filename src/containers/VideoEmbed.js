import React, { Component } from 'react';
import layout from '../styles/layout.css';

import Video from '../components/Video/Video';

class VideoEmbed extends Component {
	state = { videos: null };
	
	async componentDidMount() {
		const res = await fetch('http://demo.dropmark.com/456842.json');
		const videos = await res.json();
		this.setState({ videos: videos });
	}

	renderVideos() {
		if(this.state.videos === null) {
			return;
		}

		const videos = this.state.videos.items.map(video => {
			return <Video key={video.id} {...video} />
		});

		return videos;
	}

	render() {
		console.log('state', this.state);
		return (
			<section>
				<div className={layout.container}>
					{ this.renderVideos() }
				</div>
			</section>
		);
	}
}

export default VideoEmbed;
