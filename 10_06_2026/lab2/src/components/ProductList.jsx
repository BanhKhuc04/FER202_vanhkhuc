import { Container, Row, Col } from 'react-bootstrap';
import products from '../data/products';
import ProductCard from './ProductCard';

function ProductList({ onAddToCart, cartItems }) {
  return (
    <Container className="my-5">
      <h2 className="text-center fw-bold mb-4">Our Products</h2>

      <Row>
        {products.map((product) => {
          const isAdded = cartItems.some((item) => item.id === product.id);

          return (
            <Col key={product.id} md={4} sm={6} xs={12} className="mb-4">
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
                isAdded={isAdded}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default ProductList;