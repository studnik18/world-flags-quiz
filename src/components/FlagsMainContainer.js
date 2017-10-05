import React from 'react';

/*import ReactDOM from 'react-dom';*/

/*class FlagsMainContainer extends Component {*/

const FlagsMainContainer = ({country, score, turnsLeft, answers, handleAnswer, messageShown, manageNext, correct}) => {

		let background = {
			backgroundPosition: `-${country.left}px -${country.top}px`	
		};

		let msg = correct ? 'Yeah! Good answer pal! Keep it going!' : 'Ooops... This is not a correct answer...';

		return (

			<div className="main-container">
				<div id="header">
					<p> Current score: {score}<br/>
					Turns left: {turnsLeft}</p>
					<p>Choose correct answer:</p>
				</div>

				<div className="content">
					
					<div id="flag">
						<div id="flagImage" style={background}></div>
					</div>

					<div id="answersButtons">
						<button className={answers[0] === country.name ? 'correct' : 'incorrect'}
						onClick={!messageShown ? handleAnswer : ''}>
							{answers[0]}
						</button>
						<button className={answers[1] === country.name ? 'correct' : 'incorrect'}
						onClick={!messageShown ? handleAnswer : ''}>
							{answers[1]}
						</button>
						<button className={answers[2] === country.name ? 'correct' : 'incorrect'}
						onClick={!messageShown ? handleAnswer : ''}>
							{answers[2]}
						</button>
					</div>
				</div>
				
				<div id="footer">

					<p> World flags quiz v2.0 </p> 
					{messageShown ? <div className="msg"><p>{msg}</p><button onClick={manageNext}>Next</button></div> : ''}
				</div>

			</div>

		);
	
}


export default FlagsMainContainer;
