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
				creationDate: "2021-03-12",
				invoiceNumber: 1,
				arrivalTimeFrom: "2021-03-30",
				arrivalTimeBy: "2021-03-31",
				type: "RUED",
			},
			{
				id: 2,
				creationDate: "2020-12-07",
				invoiceNumber: 1,
				arrivalTimeFrom: "2020-03-05",
				arrivalTimeBy: "2020-03-10",
				type: "RUEX",
			},
			{
				id: 3,
				creationDate: "2020-10-02",
				invoiceNumber: 1,
				arrivalTimeFrom: "2021-01-03",
				arrivalTimeBy: "2021-01-07",
				type: "RUSG",
			},
			{
				id: 4,
				creationDate: "2021-01-13",
				invoiceNumber: 1,
				arrivalTimeFrom: "2021-05-31",
				arrivalTimeBy: "2021-06-03",
				type: "RUED",
			},
			{
				id: 5,
				creationDate: "2021-02-05",
				invoiceNumber: 1,
				arrivalTimeFrom: "2021-04-11",
				arrivalTimeBy: "2021-04-12",
				type: "RUEX",
			},
		],

		filterArrivalFrom: "",
		filterArrivalBy: "",
	};

	filter(items, filterArrivalFrom, filterArrivalBy) {
		let filteredArr = items;
		console.log(filteredArr);
		if (filterArrivalFrom !== "") {
			filteredArr = filteredArr.filter(
				(item) => item.arrivalTimeFrom >= filterArrivalFrom
			);
		}
		console.log(filteredArr);
		if (filterArrivalBy !== "") {
			filteredArr = filteredArr.filter(
				(item) => item.arrivalTimeBy <= filterArrivalBy
			);
		}
		console.log(filteredArr);
		return filteredArr;
	}

	onFilterChange = (filterArrivalFrom, filterArrivalBy) => {
		this.setState({ filterArrivalFrom, filterArrivalBy });
		console.log("Изменение фильтра");
	};

	render() {
		const { items, filterArrivalFrom, filterArrivalBy } = this.state;

		const visibleItems = this.filter(
			items,
			filterArrivalFrom,
			filterArrivalBy
		);

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
							className="btn btn-light app-text add-button"
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
						<Filters
							filterArrivalFrom={filterArrivalFrom}
							filterArrivalBy={filterArrivalBy}
							onFilterChange={this.onFilterChange}
						/>
						<Sorting />
						<CardsField items={visibleItems} />
					</div>
				</div>
				<footer className="footer"></footer>
			</div>
		);
	}
}
