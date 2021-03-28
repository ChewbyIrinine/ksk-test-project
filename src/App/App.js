import React from "react";

import Header from "../Header";
import Filters from "../Filters";
import Sorting from "../Sorting";
import CardsField from "../CardsField";
import Footer from "../Footer";

import "./App.css";

export default class App extends React.Component {
	render() {
		return (
			<div className="app">
				<div className="header">
					<Header />
				</div>
				<div className="filters">
					<Filters />
				</div>
				<div className="sorting">
					<Sorting />
				</div>
				<div className="cards-field">
					<CardsField />
				</div>
				<div className="footer">
					<Footer />
				</div>
			</div>
		);
	}
}
