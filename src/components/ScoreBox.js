import React from 'react';

const ScoreBox = ({score, handleClick, maxTurns}) => {
	
	let generateFinalMsg = () => {
	  	switch(score/maxTurns) {
	    	case 0, 0.1:
	      		return 'Oh boy! What a disaster!...';
	    	case 0.2, 0.3:
	     		 return 'Nothing to be prouf of...';
		    case 0.4, 0.5:
		      	return 'There is much room for improvement.';
		    case 0.6, 0.7:
		      	return 'Not bad. Nothing special though.';
		    case 0.8, 0.9:
		      	return 'Good work! Very solid result.';
		    case 1:
		      	return 'Magnificent! I bow before You.';
		   }
	};

	return (
		<div className="main-container score-box">
			<h2>Your score: {score}</h2>
			<h4>{generateFinalMsg()}</h4>		
			<button onClick="handleClick">Play again</button>
		</div>





	);
}

export default ScoreBox;