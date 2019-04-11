import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormularioGasto extends Component {
	nombreGasto = React.createRef();
	cantidadGasto = React.createRef();

	crearGasto = (e) => {
		e.preventDefault();

		const gasto = {
			nombreGasto: this.nombreGasto.current.value,
			cantidadGasto: this.cantidadGasto.current.value
		};

		console.log(gasto);

		this.props.agregarGasto(gasto);

		e.currentTarget.reset();
	};

	render() {
		return (
			<form onSubmit={this.crearGasto}>
				<h2>Add your expenses here</h2>
				<div className="campo">
					<label>Name Expense</label>
					<input ref={this.nombreGasto} className="u-full-width" type="text" placeholder="Ej. Transport" />
				</div>

				<div className="campo">
					<label>Quantity</label>
					<input ref={this.cantidadGasto} className="u-full-width" type="text" placeholder="Ej. 300" />
				</div>

				<input className="button-primary u-full-width" type="submit" value="Add" />
			</form>
		);
	}
}

FormularioGasto.propTypes = {
	agregarGasto: PropTypes.func.isRequired
};

export default FormularioGasto;
