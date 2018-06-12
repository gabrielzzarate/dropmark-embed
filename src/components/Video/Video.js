import React from 'react';
import styles from './styles.css';
import layout from '../../styles/layout.css';
import playBtn from '../../images/playbtn.png';

const Video = ({ description, thumbnails, name, url, }) => {
	return (
		<figure className={styles.video}>
			<div className={styles.row}>
				<div className={styles.columnDescription}>	
					<h2>{name}</h2>
					<div dangerouslySetInnerHTML={{ __html: description }} />
				</div>
				<div className={styles.columnVideo}>
					<a href={url} className={styles.player}>
						<img className={styles.thumbnail} src={thumbnails.large} alt={name} />
						<div className={styles.playBtnOuter}>
							<div className={styles.playBtnInner}>
								<div className={styles.playBtn}>
									<img src={playBtn} alt="Icon: Play" />
									<span> Watch Video </span>
								</div>
							</div>
						</div>
					</a> 
				</div>
			</div>
		</figure>
	);
}

export default Video;