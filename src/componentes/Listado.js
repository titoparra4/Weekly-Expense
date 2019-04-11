import React, { Component } from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types';

class Listado extends React.Component {
	render() {
		return (
			<div className="gastos-realizados">
				<h2>List</h2>
				{Object.keys(this.props.gastos).map((key) => <Gasto key={key} gasto={this.props.gastos[key]} />)}
			</div>
		);
	}
}

Listado.propTypes = {
	gastos: PropTypes.object.isRequired
};

export default Listado;
