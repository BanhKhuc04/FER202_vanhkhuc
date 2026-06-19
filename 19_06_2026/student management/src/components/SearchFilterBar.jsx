import { MAJOR_FILTER_OPTIONS } from '../data/majors'

export default function SearchFilterBar({
  searchText,
  onSearchChange,
  majorFilter,
  onMajorFilterChange,
}) {
  return (
    <div className="search-filter-bar">
      <div className="form-group">
        <label htmlFor="search">Search by Name</label>
        <input
          id="search"
          type="text"
          value={searchText}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search students by name..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="majorFilter">Filter by Major</label>
        <select
          id="majorFilter"
          value={majorFilter}
          onChange={(event) => onMajorFilterChange(event.target.value)}
        >
          {MAJOR_FILTER_OPTIONS.map((major) => (
            <option key={major} value={major}>
              {major}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
