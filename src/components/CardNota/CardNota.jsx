import React, { Component } from "react";
import "./CardNota.css";
class CardNota extends Component {
  render() {
    return (
      <section className="card-nota">
        <h3 className="card-nota_titulo">{this.props.titulo}</h3>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default CardNota;
