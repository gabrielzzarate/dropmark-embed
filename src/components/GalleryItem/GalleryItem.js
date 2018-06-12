import React from 'react';
import styles from './styles.css';
import layout from '../../styles/layout.css';
import Button from '../Button/Button';

const GalleryItem = ({ description, thumbnails, name, link, url }) => {
	return (
		<figure className={styles.item}>
			<div className={styles.row}>
				<div className={styles.columnImg}>
					<a href={url} className={styles.imgPreview}>
						<img className={styles.thumbnail} src={thumbnails.large} alt={name} />
						<div className={styles.imgPreviewOuter}>
							<div className={styles.imgPreviewInner}>
								<div className={styles.imgPreviewText}>
									<span>View Larger</span>
								</div>
							</div>
						</div>
					</a> 
				</div>
				<div className={styles.columnDescription}>	
					<h2>{name}</h2>
					<p>{description}</p>
					<Button href={link}>Learn More</Button>
				</div>
			</div>
		</figure>
	);
}

export default GalleryItem;