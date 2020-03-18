import React, { Component } from 'react'
import { Button, Form, Container } from 'react-bootstrap'
import axios from 'axios'

export class Xposed extends Component {
	constructor(props) {
		super(props)

		this.state = {
			password: '',
			isEmpty: true
		}
	}

	varifyInput = () => {
		if (this.state.password === '') {
			this.setState({ isEmpty: true })
		} else {
			this.setState({ isEmpty: false })
		}
	}

	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
		this.varifyInput()
		console.log(this.state);

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
				<Container>
					<h2>Xposed</h2>
					<Form style={{ textAlign: 'left' }}>
						<Form.Group controlId="password" onInput={this.handleChange}>
							<Form.Label>Enter a password:</Form.Label>
							<Form.Control type="password" />
						</Form.Group>
						{this.state.isEmpty && (<Button variant="secondary" href='#' disabled>Check it</Button>)}
						{!this.state.isEmpty && (<Button onClick={this.check}>Check it</Button>)}
					</Form>
				</Container>
			</div>
		)
	}
}

export default Xposed
