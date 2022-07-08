import { Routes, Route} from "react-router-dom";

// pages
import { HomePage, AboutPage, FavouritePage,CataloguePage} from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/favourite" element={<FavouritePage />} />
      <Route path="/catalogue" element={<CataloguePage />} />
    </Routes>
  );
}

export default App;
