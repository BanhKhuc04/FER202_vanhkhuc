import { Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';

function MovieList({ movies }) {
  if (movies.length === 0) {
    return <p>No movies found.</p>;
  }

  return (
    <Row>
      {movies.map(m => (
        <Col md={3} key={m.id} className="mb-4">
          <MovieCard movie={m} />
        </Col>
      ))}
    </Row>
  );
}

export default MovieList;