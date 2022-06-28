// import "antd/dist/antd.css"
import "./App.css";
import Banner from "./components/component-banner";
import ProductCard from "./components/product-card";

import Home from "./pages/home";
// pages
import AboutPage from "./pages/about";
// import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Home />
      <Banner />
      <ProductCard />
      <AboutPage />
    </div>
  );
}

export default App;
