import React, { Component } from 'react'
import { Button, Form, Container, Spinner } from 'react-bootstrap'
import axios from 'axios'

export class Xposed extends Component {
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
			axios.get('/xposed?password=' + this.state.inputField)
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
					<h2>Xposed</h2>
					<Form style={{ textAlign: 'left' }}>
						<Form.Group controlId="inputField" onInput={this.handleChange}>
							<Form.Label>Enter a password:</Form.Label>
							<Form.Control type="text" placeholder='qwerty'/>
						</Form.Group>
						<Button onClick={this.fetchData}>Check it</Button>{' '}
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
						{this.state.outputField && (<h3 style={{color:'red'}}>{this.state.outputField}</h3>)}
				</Container>
			</div>
		)
	}
}

export default Xposed
