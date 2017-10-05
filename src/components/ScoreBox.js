import React from 'react';

const ScoreBox = ({score, handleClick}) => {
	
	let generateFinalMsg = () => {
	  	switch(score) {
	    	case 0, 1:
	      		return 'Oh boy! What a disaster!...';
	    	case 2, 3:
	     		 return 'Nothing to be prouf of...';
		    case 4, 5:
		      	return 'There is much room for improvement.';
		    case 6, 7:
		      	return 'Not bad. Nothing special though.';
		    case 8, 9:
		      	return 'Good work! Very solid result.';
		    case 10:
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