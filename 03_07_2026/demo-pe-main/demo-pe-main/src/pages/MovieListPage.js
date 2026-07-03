import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

import SearchBar from "../component/SearchBar";
import GenreSidebar from "../component/GenreSidebar";
import MovieList from "../component/MovieList";

function MovieListPage() {
  const API_URL = "http://localhost:9999/movies";

  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");

  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedGenres, setSelectedGenres] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        status ? `${API_URL}?status=${status}` : API_URL
      );
      setMovies(response.data);
      setAllMovies(response.data);
    };

    fetchMovies();
  }, [status]);

  const allGenres = [
    ...new Set(allMovies.flatMap((m) => m.genre || [])),
  ];

  const filteredMovies = movies.filter((m) => {
    const matchSearch = m.title
      .toLowerCase()
      .startsWith(searchText.toLowerCase());

    const matchGenre =
      selectedGenres.length === 0 ||
      (m.genre || []).some((g) => selectedGenres.includes(g));

    return matchSearch && matchGenre;
  });

  return (
    <Container fluid className="mt-3">
      <Row>
        <Col md={12}>
          <SearchBar
            searchText={searchText}
            setSearchText={setSearchText}
          />
        </Col>
      </Row>

      <Row className="mt-3">
        <Col md={3}>
          <GenreSidebar
            genres={allGenres}
            selectedGenres={selectedGenres}
            setSelectedGenres={setSelectedGenres}
          />
        </Col>

        <Col md={9}>
          <MovieList movies={filteredMovies} />
        </Col>
      </Row>
    </Container>
  );
}

export default MovieListPage;