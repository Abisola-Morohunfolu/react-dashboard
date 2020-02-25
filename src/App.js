import React from 'react';
import SideNav from './components/SideNav';
import './styles/App.scss';
import Header from './components/Header';
// import Title from './components/Title';
import Orders from './components/Orders/Orders';

function App() {
	return (
		<div className="App">
			<SideNav />
			<Header />
			<Orders />
		</div>
	);
}

export default App;
