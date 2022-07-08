import { Layout } from "antd";
import FavouriteLIst from "../../components/favourite-product-card";
import MainFooter from "../../components/main-footer";
import Navbar from "../../components/main-navbar";

const { Header, Content, Footer } = Layout;

export default function FavouritePage() {
  return (
    <Layout>
      <Header style={{backgroundColor:'white'}}>
        <Navbar />
      </Header>
      <Content>
        <FavouriteLIst />
      </Content>
      <Footer>
        <MainFooter />
      </Footer>
    </Layout>
  );
}
