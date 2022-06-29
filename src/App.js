// import "antd/dist/antd.css"
// pages
import Home from "./pages/home";
import Banner from "./components/home-banner";
import ProductCard from "./components/product-card";
import AboutPage from "./pages/about";
import Newslettersignup from "./components/newsletter-signup";
import Breadcrumbs from "./components/breadcrumbs";

// import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Breadcrumbs />
      {/* <Newslettersignup /> */}
      {/* <Banner />
      <ProductCard />
      <AboutPage /> */}
    </div>
  );
}

export default App;
