import { Carousel } from 'react-bootstrap';

function Banner() {
  return (
    <Carousel controls indicators interval={3000} pause="hover">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img3.thuthuatphanmem.vn/uploads/2019/10/14/anh-lookbook-thoi-trang_113854100.jpg"
          alt="Fashion Collection"
          style={{ height: '700px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h2>FASHION COLLECTION 2026</h2>
          <p>Discover the latest fashion trend.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiRpgs-VxiqZWypWO1Sz8yLpNGaPgy3K24qlXwF4uA9NimVxNLjJldl15jBQ7EkThFUzHldi0AW1RPB-lomZV5_aKVcj53O5vAWl2-et28p4DuTxfEDHusFj7HvMGQ7cBnEuvJr8EUtKFCoSZAzvi65WOJgusPyeGpE6CVK8cPxQlzDeOi90GjKQOecfA/s3456/4x2%20banner%20design1.jpg"
          alt="Summer Sale"
          style={{ height: '700px', objectFit: 'cover' }}
        />
        <Carousel.Caption>
          <h2>SUMMER SALE UP TO 50%</h2>
          <p>Enjoy special discount on selected products.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.fmplus.com.vn/uploads/news/1ca3baa2-b00e-4cd1-9412-fafeff117718.jpg"
          alt="New Arrivals"
          style={{
            height: '700px',
            objectFit: 'cover',
            objectPosition: 'top',
          }}
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