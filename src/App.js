import React, { Component } from 'react';
import './App.css';
import Topo from './Topo';
import Filtro from './Filtro';
import Listagem from './Listagem';

class App extends Component {
  constructor(){
    super();

    this.state = {
      jobs: []
    }

    this.filter = this.filter.bind(this);
  }

  filter(jobsFiltrados){
    this.setState({
      jobs: jobsFiltrados
    });
  }

  render() {
    return (
      <div className="container">
        <Topo />
        <Filtro filter={ this.filter } />
        <Listagem />
      </div>
    );
  }

  busca(){
    alert('faz a busca!')
  }
}

export default App;
