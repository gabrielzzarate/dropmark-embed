import "babel-polyfill";
import React from 'react';
import { render } from 'react-dom';
import styles from './styles/global.css';

import Header from './components/Header/Header';
import VideoEmbed from './containers/VideoEmbed';

const App = () => {
	return (
		<div className={styles.global}>
			<Header />
			<VideoEmbed />
		</div>
	);
};

render(<App />, document.getElementById('app'));
