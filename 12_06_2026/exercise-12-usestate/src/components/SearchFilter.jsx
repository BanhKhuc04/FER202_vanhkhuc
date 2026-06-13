import { useState } from "react";

const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"];

export default function SearchFilter() {
  const [query, setQuery] = useState("");
  const filtered = items.filter((i) =>
    i.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <ul>
        {filtered.map((i) => <li key={i}>{i}</li>)}
      </ul>
    </div>
  );
}
