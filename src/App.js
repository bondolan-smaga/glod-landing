import { Routes, Route, Link } from "react-router-dom";

// pages
import { HomePage, AboutPage, FavouritePage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/favourite" element={<FavouritePage />} />
    </Routes>
  );
}

export default App;
