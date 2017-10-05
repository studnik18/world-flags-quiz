import React from 'react';


const SelectContinents = ({handleStart, handleCheck, countries}) => {
	return (
		<div className="main-container start-screen">
			<h4 className="title"> Select continents which will be covered during the game. <br/>
			Watch out though - dependent territories may be very tricky! </h4>
			<form id="continents">
				<input onChange={handleCheck} type="checkbox" name="EU" defaultChecked/>Europe<br/>
				<input onChange={handleCheck} type="checkbox" name="AS" defaultChecked/>Asia<br/>
				<input onChange={handleCheck} type="checkbox" name="AF" defaultChecked/>Africa<br/>
				<input onChange={handleCheck} type="checkbox" name="AM" defaultChecked/>The Americas<br/>
				<input onChange={handleCheck} type="checkbox" name="AO" defaultChecked/>Australia & Oceania<br/>
				<input onChange={handleCheck} type="checkbox" name="DEP"/>Dependent Territories<br/>				
			</form>
			<form id="turns">
				<h4> Number of turns: </h4>
				<input type="radio" name="turnNumber" value="5" defaultChecked/>5
				<input type="radio" name="turnNumber" value="10"/>10
			</form>
			{countries === 0 ? <h4> Come on! Pick at least one continent! </h4> :
			<button id="start" onClick={handleStart}> Start game! </button>}
		</div>
	);

}





export default SelectContinents;

