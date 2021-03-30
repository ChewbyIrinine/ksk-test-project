import React from "react";

import Filters from "../Filters";
import Sorting from "../Sorting";
import CardsField from "../CardsField";
import Footer from "../Footer";

import "./App.css";

import Logo from "../img/content (2) 1.svg";

export default class App extends React.Component {
	render() {
		return (
			<div className="app">
				<header className="header">
					<div className="header__center">
						<h1 className="app-text header__label">
							Тестовое задание
						</h1>
						<img className="header__image" src={Logo} alt="Logo" />
					</div>
				</header>
				<div className="content">
					<div className="content__center">
						<Filters />
						<div className="sorting">
							<Sorting />
						</div>
						<div className="cards-field">
							<CardsField />
						</div>
					</div>
				</div>
				<div className="footer">
					<Footer />
				</div>
			</div>
		);
	}
}
