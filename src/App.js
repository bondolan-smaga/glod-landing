import "./App.scss";
import { Routes, Route } from "react-router-dom";

import {
  HomePage,
  AboutPage,
  CataloguePage,
  DetailProductPage,
} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/catalogue" element={<CataloguePage />} />
      <Route path="/product/:id" element={<DetailProductPage />} />
    </Routes>
  );
}

export default App;
