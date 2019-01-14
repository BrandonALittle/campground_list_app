import React from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import Modal from './Modal';

import CampgroundList from './CampgroundList';
import CampgroundDetails from './CampgroundDetails';

const App = () => {
	return (
		<Router>
			<div id="content">
				<Switch>
					<CampgroundList />
					<CampgroundDetails />
				</Switch>
				<Modal />
			</div>
		</Router>
	);
}

export default App;