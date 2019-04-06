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

    this._filter = this._filter.bind(this);
    this._loadJobs = this._loadJobs.bind(this);
  }

  componentDidMount(){
    this._loadJobs();
  }

  _loadJobs(){
    var jobs = [
      {
        title: "Analista Senior",
        description: "Vaga de analista senior para a empresa XPTO",
        location: "SP"
      },
      {
        title: "Analista Senior",
        description: "Vaga de analista senior para a empresa XPTO",
        location: "SP"
      },
      {
        title: "Analista Senior",
        description: "Vaga de analista senior para a empresa XPTO",
        location: "SP"
      },
      {
        title: "Analista Senior",
        description: "Vaga de analista senior para a empresa XPTO",
        location: "SP"
      }
    ]

    this.setState({
      jobs: jobs
    })
  }

  _filter(jobsFiltrados){
    this.setState({
      jobs: jobsFiltrados
    });
  }

  render() {
    return (
      <div className="container">
        <Topo />
        <Filtro filter={ this._filter } jobs={this.state.jobs} />
        <Listagem jobs={this.state.jobs} />
      </div>
    );
  }

  busca(){
    alert('faz a busca!')
  }
}

export default App;
