import { Navbar, Nav, Container, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

function Header({ cartCount }) {
  return (
    <Navbar
      bg="light"
      expand="lg"
      sticky="top"
      className="shadow-sm py-3"
      style={{ zIndex: 999 }}
    >
      <Container>
        <Navbar.Brand href="#" className="fw-bold fs-3">
          Shop <span className="text-danger">FASHION</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto gap-3">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Products</Nav.Link>
            <Nav.Link href="#">Men</Nav.Link>
            <Nav.Link href="#">Women</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>

          <div
            className="position-relative fs-4"
            style={{ cursor: 'pointer' }}
          >
            <FaShoppingCart />

            <Badge
              bg="danger"
              pill
              className="position-absolute top-0 start-100 translate-middle"
            >
              {cartCount}
            </Badge>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;