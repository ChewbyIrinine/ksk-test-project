import React from "react";

import "./AddForm.css";

const AddForm = ({ modalActive, onModalOff }) => {
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
				<div className="add-form__fields">
					<label className="add-form__label">Номер накладной </label>
					<input
						className="form-control add-form__input"
						type="number"
						placeholder="Введите значение"
					></input>
					<label className="add-form__label">Тип заказа </label>
					<select className="form-control add-form__select">
						<option value="RUED">RUED</option>
						<option value="RUEX">RUEX</option>
						<option value="RUSG">RUSG</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default AddForm;
