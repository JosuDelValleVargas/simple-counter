import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//create your first component
const Home = (props) => {
	return (
		<div className="container">
		<div className="row text-center">
			<h1 className="col bg-dark text-white " ><i className="fa fa-clock"></i>   {props.numero6}   {props.numero5}   {props.numero4}   {props.numero3}   {props.numero2}   {props.numero1}</h1>
		</div>
		</div>
	);
};

export default Home;
