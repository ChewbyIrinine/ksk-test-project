import React from "react";

import "./Filters.css";

export default class Filters extends React.Component {
	render() {
		const {
			filterId,
			filterInvoiceNumber,
			filterArrivalFrom,
			filterArrivalBy,
			onFilterChange,
		} = this.props;

		return (
			<div className="filters">
				<div className="filters__heading">
					<h2 className="filters-text filters__heading-label">
						Filters
					</h2>
				</div>
				<div className="filters__content">
					<label className="filters-text filters__content-label">
						ID
					</label>
					<input
						className="form-control filters__input"
						type="text"
						placeholder="Enter value"
						value={filterId}
						onChange={(event) =>
							onFilterChange(
								event.target.value,
								filterInvoiceNumber,
								filterArrivalFrom,
								filterArrivalBy
							)
						}
					></input>
					<label className="filters-text filters__content-label">
						Invoice number
					</label>
					<input
						className="form-control filters__input"
						type="number"
						placeholder="Enter value"
						value={filterInvoiceNumber}
						onChange={(event) =>
							onFilterChange(
								filterId,
								event.target.value,
								filterArrivalFrom,
								filterArrivalBy
							)
						}
					></input>
					<label className="filters-text filters__content-label">
						Time of arrival for unloading
					</label>
					<div className="filters__date">
						<label className="filters-text filters__content-label--date">
							from
						</label>
						<input
							className="form-control filters__date-input--from"
							type="date"
							value={filterArrivalFrom}
							onChange={(event) =>
								onFilterChange(
									filterId,
									filterInvoiceNumber,
									event.target.value,
									filterArrivalBy
								)
							}
						></input>
						<label className="filters-text filters__content-label--date">
							by
						</label>
						<input
							className="form-control filters__date-input--by"
							type="date"
							value={filterArrivalBy}
							onChange={(event) =>
								onFilterChange(
									filterId,
									filterInvoiceNumber,
									filterArrivalFrom,
									event.target.value
								)
							}
						></input>
					</div>
					<label className="filters-text filters__content-label">
						Order type
					</label>
					<select className="form-select filters__select">
						<option>RUED</option>
						<option>RUEX</option>
						<option>RUSG</option>
					</select>
				</div>
			</div>
		);
	}
}
