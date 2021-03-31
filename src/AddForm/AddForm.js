import React from "react";

import "./AddForm.css";

export default class AddForm extends React.Component {
	state = {
		label: "",
	};

	onLabelChange = (event) => {
		this.setState({
			label: event.target.value,
		});
	};

	render() {
		const { modalActive, onModalOff } = this.props;

		return (
			<div
				className={modalActive ? "add-form modal-active" : "add-form"}
				onClick={() => onModalOff()}
			>
				<div
					className={
						modalActive
							? "add-form__content modal-active"
							: "add-form__content"
					}
					onClick={(e) => e.stopPropagation()}
				>
					<h2 className="add-form__heading">Добавление</h2>
					<form
						className="add-form__fields"
						onSubmit={(event) => event.preventDefault()}
					>
						<label className="add-form__label">
							Номер накладной{" "}
						</label>
						<input
							className="form-control add-form__input"
							type="number"
							placeholder="Введите значение"
							onChange={this.onLabelChange}
						/>
						<label className="add-form__label">Тип заказа </label>
						<select className="form-control add-form__select">
							<option value="RUED">RUED</option>
							<option value="RUEX">RUEX</option>
							<option value="RUSG">RUSG</option>
						</select>
					</form>
				</div>
			</div>
		);
	}
}
