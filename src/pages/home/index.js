// import { Button } from "antd";
import Breadcrumbs from "../../components/breadcrumbs";
import Navbar from "../../components/main-navbar";
import ProductCard from "../../components/product-card";
import TrendingFooter from "../../components/trending-footer";

export default function HomePage(props) {
  const { setRenderedPage } = props

  return (
    <>
      <Navbar />
      <Breadcrumbs />
      <ProductCard />
      <TrendingFooter />
      <h1>home page</h1>
      <button onClick={() => setRenderedPage('about')}>
        Go to about page
      </button>
    </>
  );
}
