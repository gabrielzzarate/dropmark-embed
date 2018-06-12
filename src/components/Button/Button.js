import React from 'react';
import styles from './styles.css';

const Button = ({ children }) => {
	return (
		<a
			href="#"
			className={styles.Button}
		>
			{children}
		</a>
	);
}

export default Button;