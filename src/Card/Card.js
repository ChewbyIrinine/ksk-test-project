import React from "react";

import "./Card.css";

const Card = () => {
	return (
		<div className="card">
			<div className="card__heading">
				<h2 className="card__title">Card 1</h2>
			</div>
			<div className="card__content">
				<label className="card__id">A</label>
				<hr />
				<label className="card__creation-date">12.03.2021</label>
				<hr />
				<label className="card__invoice-number">1</label>
				<hr />
				<label className="card__arrival-time">
					from 30.03.2021 by 31.03.2021
				</label>
				<hr />
				<label className="card__type">RUED</label>
				<hr />
			</div>
		</div>
	);
};

export default Card;
