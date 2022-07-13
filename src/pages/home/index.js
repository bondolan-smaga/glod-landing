import { Col, Row, Typography, Button, Carousel, List } from "antd";
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";

import Banner from "../../components/banner";
import { MainLayout } from "../../components";

const { Title } = Typography;

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const data = ["New in", "Sustainability", "Sportswear", "Sneakers"];

export default function HomePage() {
  return (
    <MainLayout meta={{ title: "Homepage | GLOD" }}>
      {/* MAIN CONTENTS */}
      <Row>
        <Col span={24}>
          <Banner style={{ margin: "0 0" }} background={"url(https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Library-Sites-hummel-shared/default/dw184bfe8a/homepage/UDSALG%20OG%20KAMPAGNER/1480x650_Hero_SALE_SS22_1.jpg)"}/>
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
          <Banner style={{ margin: "30px 0" }} background={"url(https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Library-Sites-hummel-shared/default/dwd1379773/homepage/STYLE/1480x650_Hero_Training_4.0.jpg)"}/>
        </Col>
        <Col span={24}>
          <Row gutter={[8, 0]}>
            <Col span={12}>
              <Banner style={{ margin: "30px 0" }} background={"url(https://www.hummel.net/on/demandware.static/-/Library-Sites-hummel-shared/default/dw6c9591c7/homepage/STYLE/720x600_Split_Legacy_Core_V2_2.0.jpg)"} />
            </Col>
            <Col span={12}>
              <Banner style={{ margin: "30px 0" }} background={"url(https://www.hummel.net/on/demandware.static/-/Library-Sites-hummel-shared/default/dwecfc136d/homepage/STYLE/720x600_Split_FTW_3.1.jpg)"}/>
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
          <Banner style={{ margin: "30px 0" }} background={"url(https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Library-Sites-hummel-shared/default/dw68b5796f/homepage/1480x650_SPORT_FOOTBALL_1.0.jpg)"}/>
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
    </MainLayout>
  );
}
