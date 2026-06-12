import { Container, Row, Col } from 'react-bootstrap';
import products from '../data/products';
import ProductCard from './ProductCard';

function ProductList({ onAddToCart }) {
  return (
    <Container fluid className="product-section">
      <h2 className="text-center mb-5">Our Products</h2>

      <Row className="g-4 justify-content-center">
        {products.map((product) => (
          <Col xs={12} sm={6} lg={4} key={product.id}>
            <ProductCard
              product={product}
              onAddToCart={onAddToCart}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;