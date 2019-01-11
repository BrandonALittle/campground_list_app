import React from 'react';
import {
	BrowserRouter,
	Route,
} from 'react-router-dom';

import CampgroundList from './CampgroundList';
import CampgroundDetails from './CampgroundDetails';

const App = () => {
	return (
		<BrowserRouter>
			<div id="content">
				<CampgroundList />
				<CampgroundDetails />
				<Route path="/add" component={AddCampground} />
			</div>	
		</BrowserRouter>
	);
}