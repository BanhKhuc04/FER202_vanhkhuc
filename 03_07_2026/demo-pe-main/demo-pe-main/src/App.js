
import MovieListPage from "./pages/MovieListPage";
import TicketCreation from "./pages/TicketCreation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/movies" element={<MovieListPage />} />
        <Route path="/tickets/create" element={<TicketCreation />} />
        <Route path="*" element={<Navigate to="/movies" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;