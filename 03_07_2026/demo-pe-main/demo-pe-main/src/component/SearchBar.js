import { Form } from 'react-bootstrap';

function SearchBar({ value, onChange }) {
  return (
    <Form.Control
      placeholder="Search by title (starts with) ..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}

export default SearchBar;