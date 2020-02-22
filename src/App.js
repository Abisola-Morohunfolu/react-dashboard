import React from 'react';
import classes from './styles/utilities/Button.module.scss';
import './styles/App.scss';

function App() {
	return (
		<div className="App">
			<button className={`${classes.Button} ${classes.OutlineGrey}`}>Get Started</button>
		</div>
	);
}

export default App;
