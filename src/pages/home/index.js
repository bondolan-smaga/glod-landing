// import { Button } from "antd";
import { Col, Layout, Row, Typography, Button, Carousel, List } from "antd";
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";

import Navbar from "../../components/main-navbar";
import Banner from "../../components/home-banner";
import ProductCard from "../../components/product-card";
import MainFooter from "../../components/main-footer";
import Newslettersignup from "../../components/newsletter-signup";
import FavouriteLIst from "../../components/favourite-product-card";

const { Title } = Typography;
const { Header, Content, Footer } = Layout;

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const data = ["New in", "Sustainability", "Sportswear", "Sneakers"];

export default function HomePage(props) {
  const { setRenderedPage } = props;
  return (
    <Layout>
      <Header style={{ backgroundColor: "#ffffff" }}>
        <Navbar />
      </Header>
      <Content style={{ margin: "0 15px" }}>
        {/* MAIN CONTENTS */}
        <Row>
          <Col span={24}>
            <Banner style={{ margin: "30px 0" }} />
          </Col>
          {/* BEST OF SALE */}
          <Col span={24}>
            <Row>
              <Col span={24}>
                <Title level={3}>BEST OF SALE</Title>
              </Col>
              <Col span={24}>CAROUSEL DISINI</Col>
            </Row>
          </Col>
          <Col span={24}>
            <Banner style={{ margin: "30px 0" }} />
          </Col>
          <Col span={24}>
            <Row gutter={[8, 0]}>
              <Col span={12}>
                <Banner style={{ margin: "30px 0" }} />
              </Col>
              <Col span={12}>
                <Banner style={{ margin: "30px 0" }} />
              </Col>
            </Row>
          </Col>
          {/* NEW SEASON OF FAVOURITES */}
          <Col span={24}>
            <Row>
              <Col span={24}>
                <Title level={3}>NEW SEASON OF FAVOURITES</Title>
              </Col>
              <Col span={24}>CAROUSEL DISINI</Col>
            </Row>
          </Col>
          <Col span={24}>
            <Banner style={{ margin: "30px 0" }} />
          </Col>
        </Row>
        {/* recommendation */}
        <Row>
          <Col span={24}>
            <Row>
              <Title
                style={{
                  textTransform: "uppercase",
                  display: "inline-block",
                  marginRight: "auto",
                }}
                level={3}
              >
                Get inspired by these styles
              </Title>
              <div>
                <Button icon={<DoubleLeftOutlined />}></Button>
                <Button icon={<DoubleRightOutlined />}></Button>
              </div>
            </Row>
          </Col>
          <Col span={24}>
            <Carousel>
              <div>
                <h3 style={contentStyle}>1</h3>
              </div>
              <div>
                <h3 style={contentStyle}>2</h3>
              </div>
              <div>
                <h3 style={contentStyle}>3</h3>
              </div>
              <div>
                <h3 style={contentStyle}>4</h3>
              </div>
            </Carousel>
          </Col>
        </Row>
        {/* tranding */}
        <Row
          style={{
            margin: "100px 235px",
          }}
        >
          <Col span={24}>
            <Title
              style={{
                textTransform: "uppercase",
              }}
              level={3}
            >
              What's trending at the moment
            </Title>
          </Col>
          <Col span={24}>
            <Row>
              <Col span={8}>
                <List
                  header={
                    <Title style={{ marginBottom: 0 }} level={5}>
                      Popular men's
                    </Title>
                  }
                  split={false}
                  dataSource={data}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
              </Col>
              <Col span={8}>
                <List
                  header={
                    <Title style={{ marginBottom: 0 }} level={5}>
                      Popular men's
                    </Title>
                  }
                  split={false}
                  dataSource={data}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
              </Col>
              <Col span={8}>
                <List
                  header={
                    <Title style={{ marginBottom: 0 }} level={5}>
                      Popular men's
                    </Title>
                  }
                  split={false}
                  dataSource={data}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Content>
      <Footer>
        <MainFooter />
      </Footer>
    </Layout>
  );
}
