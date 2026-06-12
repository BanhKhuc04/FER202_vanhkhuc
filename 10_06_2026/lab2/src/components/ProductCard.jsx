import { useState } from 'react';
import { Card, Button, Badge, Toast, ToastContainer } from 'react-bootstrap';

function ProductCard({ product, onAddToCart }) {
  const [added, setAdded] = useState(false);
  const [showToast, setShowToast] = useState(false);  

  function handleClick() {
    onAddToCart(product);
    setShowToast(true);
    setAdded(true);

    setTimeout(function () {
      setAdded(false);
      setShowToast(false);
    }, 2000);
  }

  return (
    <Card className="h-100 shadow-sm product-card">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>

        <Card.Text className="fw-bold text-danger">
          {product.price}
        </Card.Text>
        <ToastContainer position="top-end" className="p-3" style={{ zIndex: 9999 }}>
          <Toast
            bg="success"
            show={showToast}
            onClose={() => setShowToast(false)}
            delay={2000}
            autohide
          >
            <Toast.Body className="text-white fw-bold">
              Added {product.name} to cart successfully!
            </Toast.Body>
          </Toast>
        </ToastContainer>

        <Badge bg="success" className="mb-3 align-self-start">
          {product.status}
        
        </Badge>

        <Button
          
          variant={added ? 'secondary' : 'success'}
          className="mt-auto"
          
          onClick={product.status === 'Available' ? handleClick : undefined}
        >
          {added ? '✓ Added to Cart' : 'Add to Cart'}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;




// import { useState } from 'react';

// //    setTimeout(function () {
//       setAdded(false);
//     }, 2000);


// import { useState } from 'react';
// import { Card, Button, Badge, Toast, ToastContainer } from 'react-bootstrap';



// //    <ToastContainer position="top-end" className="p-3" style={{ zIndex: 9999 }}>
//       <Toast
//         bg="success"
//         show={showToast}
//         onClose={() => setShowToast(false)}
//         delay={2000}
//         autohide
//       >
//         <Toast.Body className="text-white fw-bold">
//           Added {product.name} to cart successfully!
//         </Toast.Body>
//       </Toast>
//     </ToastContainer>















