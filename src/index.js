import "babel-polyfill";
import React from 'react';
import { render } from 'react-dom';
import styles from './styles/global.css';

import Header from './components/Header/Header';
import GalleryEmbed from './containers/GalleryEmbed';

const App = () => {
	return (
		<div className={styles.global}>
			<Header />
			<GalleryEmbed />
		</div>
	);
};

render(<App />, document.getElementById('app'));
