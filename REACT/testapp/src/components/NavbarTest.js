import Navbar from "react-bootstrap/Navbar";

import {
  Form,
  Button,
  FormGroup,
  FormControl,
  ControlLabel,
  Nav,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavbarTest.css";

function NavbarTest() {
  return (
    <Navbar className="nav-color" bg="bg-transparent" variant="dark">
      <Navbar.Brand href="#home">Halilurrahman</Navbar.Brand>
      <Nav className="mr-auto">
      
        {/* <Nav.Link href="#features">Portfolio</Nav.Link> */}
        {/* <Nav.Link href="#home">About me..</Nav.Link>
        <Nav.Link href="#pricing">Art & Calligraphy</Nav.Link> */}
       
      </Nav>
      <Form inline>
      <Button  variant="outline-primary">Portfolio</Button>
      <Button variant="outline-primary">About me..</Button>
        <Button className="nav-color" variant="outline-primary">Art & Calligraphy</Button>
        <Button  variant="outline-primary">Contact!</Button>
        <Button  variant="outline-primary">Search</Button>
      </Form>
    </Navbar>

    // <nav class="navbar navbar-toggleable-sm navbar-trans navbar-inverse">
		// 		<div class="container">
		// 			<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarToggler-1" aria-controls="navbarToggler-1" aria-expanded="false" aria-label="Toggle navigation">
		// 				<span class="navbar-toggler-icon"></span>
		// 			</button>
		// 			<a class="navbar-brand" href="#">Bootstrap 4 Cover Nav</a>
		// 			<div class="collapse navbar-collapse pull-xs-right justify-content-end" id="navbarToggler-1">
		// 				<ul class="navbar-nav mt-2 mt-md-0">
		// 					<li class="nav-item active">
		// 						<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
		// 					</li>
		// 					<li class="nav-item">
		// 						<a class="nav-link" href="#">About</a>
		// 					</li>
		// 					<li class="nav-item">
		// 						<a class="nav-link" href="#">Our Work</a>
		// 					</li>
		// 					<li class="nav-item">
		// 						<a class="nav-link" href="#">Contact</a>
		// 					</li>
		// 					<li class="nav-item">
		// 						<a class="btn btn-outline-white btn-outline" href="#"><i class="fa fa-user"></i> Login
		// 						</a>
		// 					</li>
		// 				</ul>
		// 			</div>
		// 		</div>
		// 	</nav>
  );
}
export default NavbarTest;
