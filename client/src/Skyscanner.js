import React, { Component } from 'react'
import { Button, Form, Container, Spinner } from 'react-bootstrap'
import axios from 'axios'
export class Skyscanner extends Component {

	constructor(props) {
		super(props)
		this.state = {
			inputField: '',
			outputField: '',
			isLoading: false,
		}
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
		console.log(this.state);
	}

	fetchData = e => {
		this.setState({ isLoading: true })
		setTimeout(() => {
			axios.get('/skyscanner?airport=' + this.state.inputField.toUpperCase())
				.then(res => {
					this.setState({ isLoading: false })
					console.log(res.data)
					this.setState({ outputField: res.data.response })
				}).catch(e => console.log(e))
		}, 1000)
	}

	render() {
		return (
			<div>
				<Container>
					<h2>Sky Scanner</h2>
					<br/>
					<h4>This API will find the least expensive flight for from SFO to any airport on first of December 2020 </h4>
						<Form style={{ textAlign: 'left' }}>
							<Form.Group controlId="inputField" onInput={this.handleChange}>
							<Form.Label>Enter an airport destination:</Form.Label>
							<Form.Control type="text" placeholder='for example JFK'/>
							</Form.Group>
							<Button onClick={this.fetchData}>Find the cheapest flight</Button>{' '}
								{this.state.isLoading && (<Button>
								<Spinner
									animation='border'
									role='status'
									size='sm'
								/>
								Loading...
							</Button>
							)}
						</Form>
						<br/>
				{this.state.outputField && (<h3 style={{color:'green'}}>{this.state.outputField}</h3>)}
				</Container>
			</div>
		)
	}
}

export default Skyscanner
