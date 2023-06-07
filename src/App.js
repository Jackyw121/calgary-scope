// Import React
import React from "react";

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col }
		from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

// Import Custom CSS
import "./App.css";

// Import from react-router-dom
import { BrowserRouter as Router, Routes,
	Route, Link } from "react-router-dom";



// App Component
const App = () => {
return (
	<Router>
	<div className="App">
		<header className="App-header">
		<Navbar bg="danger" variant="dark">
			<Container>
			<Navbar.Brand>
				<Link to={"/home"}
				className="nav-link">
				Calgary Scope
				</Link>
			</Navbar.Brand>

			<Nav className="justify-content-end">
				<Nav>
				<Link to={"/create-account"}
					className="nav-link">
					Create Account
				</Link>
				</Nav>

				<Nav>
				<Link to={"/log-in"}
					className="nav-link">
					Log in
				</Link>
				</Nav>
			</Nav>
			</Container>
		</Navbar>
		</header>


	</div>
	</Router>
);
};

export default App;
