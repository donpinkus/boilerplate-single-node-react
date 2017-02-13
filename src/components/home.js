import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {
	componentWillMount(){
		// this.props.fetchMessage();
	}

	render() {
		return (
			<div>
				<nav className="Header">
					<span>Boilerplate</span>
					<br/>
					<br/>
					<Link to="/signup">
						Signup
					</Link>
					<br/>
					<Link to="/signin">
						Sign In
					</Link>
				</nav>

				<br/><br/>

				<div>Hello! Welcome to your beautiful boilerplate.</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {};
}

export default connect(mapStateToProps, actions)(Home);