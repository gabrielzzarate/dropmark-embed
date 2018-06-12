import React from 'react';
import styles from './styles.css';

const Button = ({ href, children }) => {
	return (
		<a
			href={href}
			target="_blank"
			className={styles.Button}
		>
			{children}
		</a>
	);
}

export default Button;