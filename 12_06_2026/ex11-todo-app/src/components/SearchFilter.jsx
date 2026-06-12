import { useState } from "react";

const DEFAULT_ITEMS = [
  "React",
  "NodeJs",
  "MongoDB",
  "Express",
  "Angular",
  "VueJs",
];

function SearchFilter() {
  const [query, setQuery] = useState("");

  const filtered = DEFAULT_ITEMS.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="card">
      <h2 className="card-title">🔍 Search Filter</h2>

      <div className="form-group">
        <input
          type="text"
          className="text-input"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <ul className="filter-list">
        {filtered.length > 0 ? (
          filtered.map((item) => (
            <li key={item} className="filter-item">
              {item}
            </li>
          ))
        ) : (
          <li className="empty-msg">No results found.</li>
        )}
      </ul>
    </div>
  );
}

export default SearchFilter;
