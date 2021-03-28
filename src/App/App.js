import React from "react";

//import Header from "../Header";
import Filters from "../Filters";
import Sorting from "../Sorting";
import CardsField from "../CardsField";
import Footer from "../Footer";

import "./App.css";

export default class App extends React.Component {
	render() {
		return (
			<div className="app">
				<header className="header">
					<h1 className="header__label">Тестовое задание</h1>
				</header>
				<div className="central-content">
					<div className="filters">
						<Filters />
					</div>
					<div className="sorting">
						<Sorting />
					</div>
					<div className="cards-field">
						<CardsField />
					</div>
				</div>
				<div className="footer">
					<Footer />
				</div>
			</div>
		);
	}
}
