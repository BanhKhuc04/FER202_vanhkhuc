import { useState } from 'react';
import { Navbar, Nav, Container, Badge, Offcanvas, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';

function Header({ cartCount, cartItems, onRemoveFromCart }) {
  const [showCart, setShowCart] = useState(false);

  return (
    <>
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
              onClick={() => setShowCart(true)}
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

      <Offcanvas show={showCart} onHide={() => setShowCart(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="d-flex align-items-center mb-3 border-bottom pb-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '70px',
                    height: '70px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginRight: '12px',
                  }}
                />

                <div className="flex-grow-1">
                  <h6 className="mb-1">{item.name}</h6>
                  <p className="mb-1 text-danger fw-bold">{item.price}</p>
                  <p className="mb-0">Quantity: {item.quantity}</p>
                </div>

                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => onRemoveFromCart(item.id)}
                >
                  Remove
                </Button>
              </div>
            ))
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;