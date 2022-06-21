import React, { Component } from 'react';
import "../css/card-nota.css"
export class CardNota extends Component {

    render() { 
        return (
            <section className='card-nota'>
                <header>
                    <h3 className='nota-titulo'>{this.props.titulo}</h3>
                </header>
                <p className='nota-conteudo'>{this.props.texto}</p>
            </section>
        );
    }
}