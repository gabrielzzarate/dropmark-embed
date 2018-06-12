import React, { Component } from 'react';
import layout from '../styles/layout.css';

import GalleryItem from '../components/GalleryItem/GalleryItem';

class GalleryEmbed extends Component {
	state = { gallery: null };
	
	async componentDidMount() {
		const res = await fetch('http://demo.dropmark.com/456842.json');
		const gallery = await res.json();
		this.setState({ gallery });
	}

	renderGallery() {
		if(this.state.gallery === null) {
			return;
		}

		const gallery = this.state.gallery.items.map(item => {
			return <GalleryItem key={item.id} {...item} />
		});

		return gallery;
	}

	render() {
		return (
			<section>
				<div className={layout.container}>
						{ this.renderGallery() }
				</div>
			</section>
		);
	}
}

export default GalleryEmbed;
