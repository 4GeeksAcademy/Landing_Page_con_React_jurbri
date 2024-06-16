import React from "react";
import { NavBar } from "./navbar.jsx"
import { Jumbotron } from "./jumbotron.jsx"
import { Card } from "./card.jsx"
import { Footer } from "./footer.jsx"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container">
			<NavBar />
			<Jumbotron />
			<div className="cards">
				<div className="card-group">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
			<Footer />
		</div>

	);
};

export default Home;
