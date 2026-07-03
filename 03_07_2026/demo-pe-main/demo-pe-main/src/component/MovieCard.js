import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function MovieCard({ movie }) {
  const navigate = useNavigate();
  const movieGenres = Array.isArray(movie.genre) ? movie.genre : [];

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={movie.thumbnail || '/movie_thumbnail.png'} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>Genre: {movieGenres.join('; ') || 'N/A'}</Card.Text>
        <Card.Text>Duration: {movie.duration} minutes</Card.Text>
        <Button
          className="mt-auto"
          onClick={() => navigate(`/tickets/create?movie_id=${movie.id}`)}
        >
          Create Ticket
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;