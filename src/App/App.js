import React from "react";

import Header from "../Header";
import Filters from "../Filters";
import Sorting from "../Sorting";
import CardsField from "../CardsField";
import Footer from "../Footer";

export default class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<Filters />
				<Sorting />
				<CardsField />
				<Footer />
			</div>
		);
	}
}
