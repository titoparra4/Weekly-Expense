import React, { Component } from 'react';

class Presupuesto extends Component {
	render() {
		return <div className="alert alert-primary">Presupuesto: $ {this.props.Presupuesto}</div>;
	}
}
export default Presupuesto;
