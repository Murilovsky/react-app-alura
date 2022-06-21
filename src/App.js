import React, { Component } from 'react'
import { FormularioCadastro } from './components/formCadastro';
import { ListaDeNotas } from './components/listaDeNotas';
import "./css/reset.css"
import "./css/app.css"
class App extends Component {
  constructor(){
    super()
    this.state = {notas:[]}
  }

  criarNota(titulo,texto){
    const novaNota = {titulo,texto}
    const NotasNovas = [...this.state.notas,novaNota]
    const novoEstado = {notas:NotasNovas}
    console.log(NotasNovas)
    this.setState(novoEstado)
  }

  render(){
    return (
      <div className='app-container'>
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </div>
    );
    
  }
}

export default App;
