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
					<span>Design Replays</span>
					<div>
						<Link to="/signup">
							Signup
						</Link>
					</div>
					<Link to="#">
						Get Email Updates
					</Link>
				</nav>

				<main>
					<div className="Sidebar">
						<div className="Sidebar-ToolSelector">
							<select>
								<option>Photoshop</option>
								<option>AfterEffects</option>
								<option>ZBrush</option>
							</select>
						</div>
						<div className="Sidebar-Section">
							<p className="Sidebar-Section-Title">
								Tags
							</p>
							<input type="text" placeholder="Search tags" />
							<div className="Sidebar-List">
								<ul>
									<li>
										<span>Alphas</span>
										<span>3</span>
									</li>
									<li>
										<span>Blob Brush</span>
										<span>2</span>
									</li>
									<li>
										<span>Clay Brush</span>
										<span>4</span>
									</li>
									<li>
										<span>Clay Buildup Brush</span>
										<span>12</span>
									</li>
								</ul>
								<p>Show All</p>
							</div>
						</div>
						<div className="Sidebar-Section">
							<p className="Sidebar-Section-Title">
								Minimum Rating
							</p>
							<div className="Sidebar-StarContainer">
							</div>
						</div>
						<div className="Sidebar-Section">
							<p className="Sidebar-Section-Title">
								Uploaded After
							</p>
							<input type="date" />
						</div>
						<div className="Sidebar-Section">
							<p className="Sidebar-Section-Title">
								Length
							</p>
							<input type="text" placeholder="00:00:00" />
							&nbsp; - &nbsp;
							<input type="text" placeholder="20:00:00" />
						</div>
						<div className="Sidebar-Section">
							<p className="Sidebar-Section-Title">
								Audio
							</p>
							<label>
								<input type="radio" />
								Yes
							</label>
							<label>
								<input type="radio" />
								No
							</label>
						</div>
						<div className="Sidebar-Section">
							<p className="Sidebar-Section-Title">
								Series
							</p>
							<label>
								<input type="radio" />
								Yes
							</label>
							<label>
								<input type="radio" />
								No
							</label>
						</div>
						<div className="Sidebar-Section">
							<p className="Sidebar-Section-Title">
								Series
							</p>
							<input type="text" placeholder="00:00:00" />
							&nbsp; - &nbsp;
							<input type="text" placeholder="20:00:00" />
						</div>
						<div className="Sidebar-FooterSection">
						</div>
					</div>
					<div className="Gallery">
						<div className="Gallery-Item">
						</div>
						<div className="Gallery-Item">
						</div>
						<div className="Gallery-Item">
						</div>
						<div className="Gallery-Item">
						</div>
					</div>
				</main>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {};
}

export default connect(mapStateToProps, actions)(Home);