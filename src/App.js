import "./App.scss";
import { Routes, Route } from "react-router-dom";

import {
  HomePage,
  AboutPage,
  CataloguePage,
  DetailProductPage,
  // FavoritePage,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/catalogue" element={<CataloguePage />} />
      <Route path="/product/:id" element={<DetailProductPage />} />
      {/* <Route path="/favorite" element={<FavoritePage />} /> */}
    </Routes>
  );
}

export default App;
