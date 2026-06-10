import { Carousel } from 'react-bootstrap';

function Banner() {
  return (
    <Carousel controls indicators interval={3000} pause="hover">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1600&q=80"
          alt="Fashion Collection"
          style={{ height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h2>FASHION COLLECTION 2026</h2>
          <p>Discover the latest fashion trend.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1600&q=80"
          alt="Summer Sale"
          style={{ height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h2>SUMMER SALE UP TO 50%</h2>
          <p>Enjoy special discount on selected products.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80"
          alt="New Arrivals"
          style={{ height: '500px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h2>NEW ARRIVALS</h2>
          <p>Explore our newest clothing collection.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;