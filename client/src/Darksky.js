
import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';


class Darksky extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            result: ''
        }
    }

        check = e => {
            const req = '/darksky?city=' + this.state.city
            axios.get(req)
                .then(response => {
                    alert(response.data.response);
                })
        }

  
render() {
    return (
        <div className="App">
            <h2>Weather App</h2>
            <div>
                <input type="text" placeholder="Enter city name" onChange={(e) => this.setState({ city: e.target.value })}></input>
                  <Button onClick={this.check}>Get Data</Button>
                
                  {/* <button onClick={() => this.check(this.state.city)}>Get data</button> 
                 <button onClick={() => this.props.changePage('Home')}>Go Back</button> */}

            </div>
            { this.state.result ? 
                (<div className="card">
                    <h2>{this.state.result.params && this.state.result.params.city}</h2>
                    <h1>{this.state.result.response}</h1>
                    <div className="sky">
                        <div className="sun"></div>
                        <div className="cloud">
                            <div className="circle-small"></div>
                            <div className="circle-tall"></div>
                            <div className="circle-medium"></div>
                        </div>
                    </div>
                </div>)
                : null
            }
        </div>
    );
}
}

export default Darksky;
