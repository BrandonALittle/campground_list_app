import React from 'react';
import { Consumer } from './Context';

class Modal extends React.Component {
	
	input = React.createRef();

	render() {
		let history = this.props.history; // get router history
		let back = e => {
			e.stopPropagation(); 
			history.goBack(); // return to previous location
		};


		return (
			<div id="modal-container">
				<div id="modal">
					<Consumer>
						{ ({ actions }) => (
							<div>
								<h1>Add a Campground</h1>
								<form>
									<input type="text" name="campgroundName" ref={this.input}/>
									<button type="button" onClick={back}>
										Close
									</button>
									<button type="submit" onClick={(e) => {
										e.preventDefault();
										actions.addCampground(this.input.current.value);
										back(e)
									}}>
										Add Campground
									</button>
								</form>
							</div>
						)}
					</Consumer>
				</div>
			</div>
		);
	}
}

export default Modal;