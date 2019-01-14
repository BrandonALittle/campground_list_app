import React from 'react';
import { Consumer } from './Context';

const Modal = () => {

	let back = e => {
		e.stopPropagation();
		history.goBack();
	};

	return (
		<div
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				background: "rgba(0, 0, 0, 0.15)"
			}}
		>
			<div
				className="modal"
				style={{
					position: "absolute",
					background: "#fff",
					top: 25,
					left: "10%",
					right: "10%",
					padding: 15,
					border: "2px solid #444"
				}}
			>
				<Consumer>
					{ ({ actions }) => (
						<div>
							<h1>Add a Campground</h1>
							<input type="text" />
							<button type="button" onClick={back}>
								Close
							</button>
							<button type="button" onClick={() => actions.addCampground('Banana')}>
								Add Campground
							</button>
						</div>
					)}
				</Consumer>
			</div>
		</div>
	);
}

export default Modal;