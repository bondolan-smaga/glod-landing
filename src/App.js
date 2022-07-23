import { Routes, Route } from "react-router-dom";

import { HomePage, AboutPage, FavoritePage, CataloguePage, DetailProductPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/favorite" element={<FavoritePage />} />
      <Route path="/catalogue" element={<CataloguePage />} />
      <Route path="/product/1" element={<DetailProductPage />} />
    </Routes>
  );
}

export default App;
