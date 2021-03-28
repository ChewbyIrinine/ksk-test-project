import React from "react";

const Filters = () => {
	return (
		<div>
			<h2>Filters</h2>
			<label>ID</label>
			<input type="text" placeholder="Enter value"></input>
			<label>Invoice number</label>
			<input type="text" placeholder="Enter value"></input>
			<label>Time of arrival for unloading</label>
			<label>from</label>
			<input type="date"></input>
			<label>by</label>
			<input type="date"></input>
			<label>Order type</label>
			<select>
				<option>RUED</option>
				<option>RUEX</option>
				<option>RUSG</option>
			</select>
		</div>
	);
};

export default Filters;
