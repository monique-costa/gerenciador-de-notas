import React, { Component } from "react";
import "./FormularioCadastro.css";
class FormularioCadastro extends Component {

  constructor(props){
    super(props);
    this.titulo ="";
    this.texto ="";
  }

  _handleMudancaTitulo(evento){
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento){
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
    
  }

  render() {
    return (
      <section className="form-section">

        <h1 className="form-h1">Gerenciador de Notas</h1>

        <form className="form-cadastro"
          onSubmit={this._criarNota.bind(this)}
        >
          <input
            type="text"
            placeholder="Título"
            className="form-cadastro_input"
            onChange={this._handleMudancaTitulo.bind(this)}
          />
          <textarea
            rows={15}
            placeholder="Escreva sua nota..."
            className="form-cadastro_input"
            onChange={this._handleMudancaTexto.bind(this)}
          />
          <button className="form-cadastro_input form-cadastro_submit">
            criar nota!
          </button>
        </form>

      </section>
    );
  }
}

export default FormularioCadastro;