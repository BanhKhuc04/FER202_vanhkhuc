import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4 mt-5">
      <Container>
        <h5>Student Information</h5>
        <p className="mb-1">Name: Khúc Việt Anh</p>
        <p className="mb-1">Student ID: HE190444</p>
        <p className="mb-1">Class: SE2009</p>
        <p className="mb-0">Email: vanhkhuc2k5@gmail.com</p>
      </Container>
    </footer>
  );
}

export default Footer;