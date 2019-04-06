import React, { Component } from 'react';

class Card extends Component {
    constructor(props){
        super(props);

    }

    componentDidMount(){
        console.log(this.props.job)
    }

    render(){
        return (
            <div className="card">
                <h3>{this.props.job.title}</h3>
                <span>{this.props.job.location}</span>
                <p>{this.props.job.description}</p>
            </div>
        )
    }
}

export default Card;