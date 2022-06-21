import React, { Component } from "react";
import { CardNota } from "./nota";
import "../css/lista-notas.css"

export class ListaDeNotas extends Component{

    render(){
        return (
            <ul className="notas-lista">
                {this.props.notas.map((nota,index)=>{
                    return(
                         <li key={index}>
                            <CardNota titulo={nota.titulo} texto={nota.texto}/>
                         </li>
                    )
                })}
            </ul>
        )
    }
}