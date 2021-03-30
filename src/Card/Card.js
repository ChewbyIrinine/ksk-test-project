import React from "react";

import "./Card.css";

const Card = ({
	id,
	creationDate,
	invoiceNumber,
	arrivalTimeFrom,
	arrivalTimeBy,
	type,
}) => {
	return (
		<div className="card">
			<div className="card__heading">
				<h2 className="card__title">Card 1</h2>
			</div>
			<div className="card__content">
				<label className="card__id">
					{String.fromCharCode(id + 64)}
				</label>
				<hr />
				<label className="card__creation-date">{creationDate}</label>
				<hr />
				<label className="card__invoice-number">{invoiceNumber}</label>
				<hr />
				<label className="card__arrival-time">
					From {arrivalTimeFrom} — by {arrivalTimeBy}
				</label>
				<hr />
				<label className="card__type">{type}</label>
				<hr />
			</div>
		</div>
	);
};

export default Card;
