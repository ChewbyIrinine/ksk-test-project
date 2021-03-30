import React from "react";

import "./CardsField.css";
import Card from "../Card";

const CardsField = ({ items }) => {
	const elements = items.map((item) => {
		return (
			<div key={item.id}>
				<Card {...item}/>
			</div>
		);
	});

	return <div className="cards-field">{elements}</div>;
};

export default CardsField;
