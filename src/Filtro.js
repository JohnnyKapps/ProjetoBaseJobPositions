import React, { Component } from 'react';

class Filtro extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchText: "",
            location: ""
        }

        this._busca = this._busca.bind(this);
        this._searchTextChanged = this._searchTextChanged.bind(this);
        this._locationChanged = this._locationChanged.bind(this);
    }

    _searchTextChanged(event){
        this.setState({
            searchText: event.target.value
        });
    }

    _locationChanged(event){
        this.setState({
            location: event.target.value
        });
    }

    _busca() {
        let jobsFiltrados = [];
        
        var result = this.state.jobs.filter(function(v, i) {
            return (v["title"].indexOf(this.state.searchText) > -1 || v["location"] == this.state.location);
          })

        this.props.filter(result);
    }

    render(){
        return (
            <div className="filtro">
                <h2 className="titulo">Busque sua vaga</h2>
                <input type="text" 
                    placeholder={"Nome da vaga..."} 
                    value={ this.state.searchText } 
                    onChange={ this._searchTextChanged }
                    />
                <select value={ this.state.location } 
                    onChange={ this._locationChanged }>
                    <option value={null}>Localidade</option>
                    <option value={"RJ"}>RJ</option>
                    <option value={"SP"}>SP</option>
                    <option value={"MG"}>MG</option>
                    <option value={"RS"}>RS</option>
                </select>
                <a onClick={ this._busca }>Buscar</a>
            </div>
        )
    }
}

export default Filtro;