import React, { Component } from 'react';
/*import ReactDOM from 'react-dom';*/

class FlagsMainContainer extends Component {

	constructor(props) {
		super(props);

		this.state = {
			turn: 0,
			score: 0,
			countriesArray: []
		};

	}

	render() {

		return (

			<div className="main-container">
				<div id="header">
				</div>

				<div className="content">

					<div id="flagImage">
					</div>

					<div id="answersButtons">
					</div>

				</div>

				

				<div id="footer">
				</div>

			</div>

		);

	}

}


export default FlagsMainContainer;
