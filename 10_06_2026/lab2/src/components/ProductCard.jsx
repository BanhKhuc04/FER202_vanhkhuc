import { useState } from 'react';
import { Card, Button, Badge } from 'react-bootstrap';

function ProductCard({ product, onAddToCart }) {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    onAddToCart(product);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <Card className="h-100 shadow-sm">
      <Card.Img
        variant="top"
        src={product.image}
        style={{
          width: '100%',
          aspectRatio: '1 / 1',
          objectFit: 'cover',
        }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>

        <Card.Text className="fw-bold text-danger">
          {product.price}
        </Card.Text>

        <Badge bg="success" className="mb-3 align-self-start">
          {product.status}
        </Badge>

        <Button
          variant={added ? 'secondary' : 'success'}
          className="mt-auto"
          onClick={handleClick}
        >
          {added ? '✓ Added to Cart' : 'Add to Cart'}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;