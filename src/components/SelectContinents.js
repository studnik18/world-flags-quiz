import React from 'react';


const SelectContinents = ({handleClick}) => {
	return (
		<div className="main-container">
			<h4> Select continents which will be covered during the game. <br/>
			Watch out though - dependent territories may be very tricky! </h4>
			<form id="continents">
				<input type="checkbox" name="EU" defaultChecked/>Europe<br/>
				<input type="checkbox" name="AS" defaultChecked/>Asia<br/>
				<input type="checkbox" name="AF" defaultChecked/>Africa<br/>
				<input type="checkbox" name="AM" defaultChecked/>The Americas<br/>
				<input type="checkbox" name="AO" defaultChecked/>Australia & Oceania<br/>
				<input type="checkbox" name="DEP"/>Dependent Territories<br/>				
			</form>
			<form id="turns">
				<h4> Number of turns: </h4>
				<input type="radio" name="turnNumber" value="5" defaultChecked/>5
				<input type="radio" name="turnNumber" value="10"/>10
			</form>
			<button onClick={handleClick}> Start game! </button>
		</div>
	);

}





export default SelectContinents;

