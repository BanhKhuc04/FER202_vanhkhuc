import { Form } from 'react-bootstrap';

function GenreSidebar({ genres, selectedGenres, onToggle }) {
  return (
    <div>
      <h3>Genres</h3>
      {genres.map(g => (
        <Form.Check
          key={g}
          type="checkbox"
          label={g}
          checked={selectedGenres.includes(g)}
          onChange={() => onToggle(g)}
        />
      ))}
    </div>
  );
}

export default GenreSidebar;