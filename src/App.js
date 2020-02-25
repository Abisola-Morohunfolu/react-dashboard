import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import './styles/App.scss';
import SideNav from './components/SideNav';
import Header from './components/Header';
import Orders from './components/Orders/Orders';
import Production from './components/Production/Production';

function App() {
	return (
		<div className="App">
			<SideNav />
			<Header />
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Orders} />
					<Route path="/production" component={Production} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
