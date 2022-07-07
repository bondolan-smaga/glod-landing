// import { Button } from "antd";
import {Layout} from "antd";
import { Header, Content, Footer } from "antd/lib/layout/layout"

import Navbar from "../../components/main-navbar";
import Banner from "../../components/home-banner";
import ProductCard from "../../components/product-card";
import MainFooter from "../../components/main-footer";
import Newslettersignup from "../../components/newsletter-signup";

export default function HomePage(props) {
  const { setRenderedPage } = props
  return (
    <>
      <Layout>
        <Header style={{backgroundColor:'#ffffff'}}>
          <Navbar />
        </Header>
        <Content>
          <Banner />
          <ProductCard />
          <Newslettersignup/>
        </Content>
        <Footer>
          <MainFooter/>
        </Footer>
      </Layout>
      <button onClick={() => setRenderedPage('about')}>
        Go to about page
      </button>
    </>
  );
}
