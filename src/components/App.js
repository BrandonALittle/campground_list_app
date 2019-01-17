import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CampgroundList from './CampgroundList';
import CampgroundDetails from './CampgroundDetails';
import Modal from './Modal';

class App extends React.Component {
	previousLocation = this.props.location;

	componentWillUpdate(nextProps) { // 
		let { location } = this.props;

		if (
			nextProps.history.action !== "POP" &&
			(!location.state || !location.state.modal)
		) {
			this.previousLocation = this.props.location;
		}
	}

	render() {
		let { location } = this.props;

		let isModal = !!(
			location.state &&
			location.state.modal &&
			this.previousLocation !== location
		);

		return (
				<div id="main-content">
					<Switch location={isModal ? this.previousLocation : location}>
						<Route exact path="/" render={() => (
							<React.Fragment>
								<CampgroundList />
								<CampgroundDetails />
							</React.Fragment>
						)} />
					</Switch>
					{isModal ? <Route path="/add" component={Modal} /> : null} {/* render modal if targeted */}
				</div>
		);
	}
}

export default App;