import React from "react";
import SimpleCounter from "./SimpleCounter"; 
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

function calculateSeconds(aCounter, placeValue){
	return Math.floor(aCounter/placeValue) % 10 ;
}

//create your first component
const Home = ({counter}) => {
	return (
		<>
			<SimpleCounter 
				thousandsDigit = {calculateSeconds(counter, 1000)}
				hundredsDigit = {calculateSeconds(counter, 100)}
				tensDigit = {calculateSeconds(counter, 10)}
				onesDigit = {calculateSeconds(counter, 1)}
			/>
		</>
	);
};

export default Home;