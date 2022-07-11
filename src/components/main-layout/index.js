import { Helmet } from "react-helmet-async";
import { Layout } from "antd";
import { MainNavbar, MainFooter } from "../index";

const { Header, Content, Footer } = Layout;

export default function MainLayout({ children, meta, ...props }) {
  const { title } = meta || {};

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={title} />
      </Helmet>
      <Header style={{ padding: "0 15px", backgroundColor: "#ffffff" }}>
        <MainNavbar/>
      </Header>
      <Content style={{ backgroundColor: "#ffffff", padding: "0 15px" }}>
        {children}
      </Content>
      <Footer style={{ padding: "0" }}>
        <MainFooter />
      </Footer>
    </Layout>
  );
}

