import React from 'react';
import SideNav from './components/SideNav';
import './styles/App.scss';
import Header from './components/Header';

function App() {
	return (
		<div className="App">
			<SideNav />
			<Header />
		</div>
	);
}

export default App;
