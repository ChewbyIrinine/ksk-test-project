import React from "react";

import Filters from "../Filters";
import Sorting from "../Sorting";
import CardsField from "../CardsField";

import "./App.css";

import Logo from "../img/content (2) 1.svg";

export default class App extends React.Component {
	state = {
		items: [
			{
				id: 1,
				creationDate: "2021-3-12",
				invoiceNumber: 1,
				arrivalTimeFrom: "2021-3-30",
				arrivalTimeBy: "2021-3-31",
				type: "RUED",
			},
            {
				id: 2,
				creationDate: "2021-3-12",
				invoiceNumber: 1,
				arrivalTimeFrom: "2021-3-30",
				arrivalTimeBy: "2021-3-31",
				type: "RUED",
			},
            {
				id: 3,
				creationDate: "2021-3-12",
				invoiceNumber: 1,
				arrivalTimeFrom: "2021-3-30",
				arrivalTimeBy: "2021-3-31",
				type: "RUED",
			},
            {
				id: 4,
				creationDate: "2021-3-12",
				invoiceNumber: 1,
				arrivalTimeFrom: "2021-3-30",
				arrivalTimeBy: "2021-3-31",
				type: "RUED",
			},
		],
	};

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
						<button
							className="app-text add-button"
							onClick={() => {
								console.log(
									document.querySelector(
										".filters__date-input--from"
									).value
								);
							}}
						>
							ДОБАВИТЬ
						</button>
						<Filters />
						<Sorting />
						<CardsField items={this.state.items} />
					</div>
				</div>
				<footer className="footer"></footer>
			</div>
		);
	}
}
