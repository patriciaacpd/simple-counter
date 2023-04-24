import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Home = ({first,second,third, fourth,fifth,sixth}) => {
	return (
		
			<div className ="d-flex justify-content-center bg-black text-white fs-1 p-3 my-3 mx-2 gap-2">
			<div className="bg-dark border border-secondary rounded p-2"><i className ="far fa-clock"></i></div>
			<div className="bg-dark border border-secondary rounded p-2 ">{sixth}</div>
			<div className="bg-dark border border-secondary rounded p-2 ">{fifth}</div>
			<div className="bg-dark border border-secondary rounded p-2 ">{fourth}</div>
			<div className="bg-dark border border-secondary rounded p-2 ">{third}</div>
			<div className="bg-dark border border-secondary rounded p-2 ">{second}</div>
			<div className="bg-dark border border-secondary rounded p-2 ">{first}</div>
			
			</div>
			
	);
};

export default Home;
