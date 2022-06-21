import React, { Component } from "react";
import "../css/formulario.css"
export class FormularioCadastro extends Component{
    constructor(props){
        super(props)
        this.titulo = "";
        this.texto = ""
    }
    _handleTitleChange(evento){
        evento.stopPropagation()
        this.titulo = evento.target.value
    }
    _handleTextChange(evento){
        evento.stopPropagation()
        this.texto = evento.target.value
    }
    _criarNota(evento){
        evento.preventDefault();
        evento.stopPropagation();
        this.props.criarNota(this.titulo,this.texto);

    }
    render(){
        return(
            <form className="form-nota" onSubmit={this._criarNota.bind(this)}>
                <input className="form-titulo" 
                    type="text" 
                    placeholder='Título'
                    maxLength={30}
                    onChange={this._handleTitleChange.bind(this)} />

                <textarea rows={15} 
                    className="form-texto" 
                    placeholder='Escreva sua nota'
                    onChange={this._handleTextChange.bind(this)} />

                <button type="submit" className="form-botao">Criar Nota</button>
            </form>
        )
    }
}