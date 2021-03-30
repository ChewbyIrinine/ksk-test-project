import React from "react";

import "./Sorting.css";

const Sorting = () => {
	return (
		<div className="sorting">
			<select className="sorting__select" defaultValue="default">
				<option disabled value="default" style={{ display: "none" }}>
					Sorting
				</option>
				<option>Sort by ID: ascending</option>
				<option>Sort by ID: descending</option>
				<option>Sort by Date of creation: ascending</option>
				<option>Sort by Date of creation: descending</option>
				<option>Sort by Order type: ascending</option>
				<option>Sort by Order type: descending</option>
			</select>
			<label className="sorting__label">
				<input className="sorting__checkbox" type="checkbox" />
				Enable drag and drop
			</label>
		</div>
	);
};

export default Sorting;
