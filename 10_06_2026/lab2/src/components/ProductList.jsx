import { Container, Row, Col } from 'react-bootstrap';
import products from '../data/products';
import ProductCard from './ProductCard';

function ProductList({ onAddToCart }) {
  return (
    <Container fluid className="my-5 product-section px-5">
      <h2 className="text-center product-title">Our Products</h2>

      <Row className="g-4">
        {products.map((product) => (
          <Col key={product.id} lg={4} md={6} sm={12}>
            <ProductCard product={product} onAddToCart={onAddToCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;