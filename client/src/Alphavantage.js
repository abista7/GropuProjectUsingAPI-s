import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'

export class Alphavantage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            symbol: '',
            data:''
        }
    }

    check = e => {
        console.log(this.state.symbol)

        const req = '/alphavantage?symbol=' + this.state.symbol
        console.log(req)
        axios.get(req)
            .then(response => {
                console.log(response.data);
                this.setState({ data : response.data.response })
            })
    }

    render() {
        return (
            <div>
                <h2>Alpha Vantage</h2> <br/>
                <div>
                    Enter a Stock Symbol:
                    <input
                        id="input-field"
                        onChange={e => this.setState({ symbol: e.target.value })}
                    />
                   
                </div>  <br/> 
                    <Button onClick={this.check} id="fetch-data">Fetch</Button>
                    <br/> <br/>
                    <div><h3>{this.state.data}</h3></div>
            </div>
        )
    }
}

export default Alphavantage
