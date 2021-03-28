import React from "react";

const Sorting = () => {
	return (
		<div>
			<select>
				<option disabled defaultValue style={{ display: "none" }}>
					Sorting
				</option>
				<option>Sort by ID: ascending</option>
				<option>Sort by ID: descending</option>
				<option>Sort by Date of creation: ascending</option>
				<option>Sort by Date of creation: descending</option>
				<option>Sort by Order type: ascending</option>
				<option>Sort by Order type: descending</option>
			</select>
			<label>
				<input type="checkbox" />
				Enable drag and drop
			</label>
			<button>Add</button>
		</div>
	);
};

export default Sorting;
