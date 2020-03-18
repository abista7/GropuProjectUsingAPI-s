import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import axios from 'axios'

export class Xposed extends Component {
    constructor(props) {
        super(props)

        this.state = {
            password: ''
        }
    }

    check = e => {
        const req = '/xposed?password=' + this.state.password
        axios.get(req)
            .then(response => {
                alert(response.data.response);
            })
    }

    render() {
        return (
            <div>
                <h2>Xposed</h2>
                <div>
                    Enter a password:
                    <input
                        id="password"
                        onChange={e => this.setState({ [e.target.id]: e.target.value })}
                    />
                </div>
                    <Button onClick={this.check}>Check it</Button>
            </div>
        )
    }
}

export default Xposed
