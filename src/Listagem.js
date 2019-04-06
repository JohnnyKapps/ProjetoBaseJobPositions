import React, { Component } from 'react';
import Card from './Card';

class Listagem extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="listagem">
                {
                    this.props.jobs &&
                        this.props.jobs.map((job, index) => {
                            return (
                                <Card job={job} key={index} />
                            )
                        })
                }
            </div>
        )
    }
}

export default Listagem;