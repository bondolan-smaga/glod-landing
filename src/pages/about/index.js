import { useState } from "react";
import {
  Layout,
  Menu,
  Image,
  Row,
  Col,
  Typography,
  Button,
  Carousel,
  List,
} from "antd";
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";
import Navbar from "../../components/main-navbar";
import MainFooter from "../../components/main-footer";

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

const items = [
  {
    label: "Home",
    key: "home",
  },
  {
    label: "People",
    key: "people",
  },
  {
    label: "Planet",
    key: "planet",
  },
  {
    label: "Purpose",
    key: "purpose",
  },
  {
    label: "Materials",
    key: "materials",
  },
];
const data = ["New in", "Sustainability", "Sportswear", "Sneakers"];
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function AboutPage() {
 
  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <Layout>
      <Header
        style={{
          backgroundColor: "white",
        }}
      >
        <Navbar/>
      </Header>
      <Header
        style={{
          backgroundColor: "#ebebeb",
        }}
      >
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          style={{
            justifyContent: "center",
            backgroundColor: "#ebebeb",
            textTransform: "uppercase",
          }}
        />
      </Header>
      <Content
        style={{
          backgroundColor: "white",
          padding: "0px 15px",
        }}
      >
        {/* main content */}
        <Row>
          {/* banner */}
          <Col
            style={{
              margin: "30px 0",
            }}
            span={24}
          >
            <Image
              width="100%"
              src="https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Library-Sites-hummel-shared/default/dw50f4ac1a/Company Karma/1480c650_Karma_Videoposter.jpg"
            />
          </Col>
          {/* ceo */}
          <Col
            style={{
              marginBottom: "16px",
            }}
            span={24}
          >
            <Row>
              <Col span={12}>
                <Image
                  width="100%"
                  src="https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Library-Sites-hummel-shared/default/dw5fe0f700/Company Karma/KARMA_Landingpage_575x600_Allan_4.jpg"
                />
              </Col>
              <Col span={12}>
                <Row style={{ height: "100%" }} justify="center" align="middle">
                  <Col
                    style={{
                      textAlign: "center",
                      padding: "60px",
                    }}
                    span={24}
                  >
                    <Title level={4}>
                      <em>
                        “As a company, we believe in acting responsibly. For
                        hummel®, Company Karma means that you get what you give.
                        We are committed to do business while doing more good in
                        the world. It’s our mission.
                      </em>
                    </Title>
                    <Title level={4}>
                      <em>
                        Through People, Planet and Purpose we seek to grow and
                        act sustainably – with the aim to drive change and pave
                        the way for a better tomorrow. For our planet, as well
                        as for our people.”
                      </em>
                    </Title>
                    <Paragraph>- Allan Vad Nielsen, CEO hummel®.</Paragraph>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          {/* navigation */}
          <Col
            style={{
              marginBottom: "50px",
            }}
            span={24}
          >
            <Row gutter={[32, 0]}>
              <Col span={6}>
                <Image
                  style={{
                    width: "100%",
                  }}
                  src="https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Library-Sites-hummel-shared/default/dwa1d4e23b/Company%20Karma/KARMA_Landingpage_700x700_People_1.jpg"
                />
              </Col>
              <Col span={6}>
                <Image
                  style={{
                    width: "100%",
                  }}
                  src="https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Library-Sites-hummel-shared/default/dwadbc8695/Company%20Karma/KARMA_Landingpage_700x700_Planet_1.jpg"
                />
              </Col>
              <Col span={6}>
                <Image
                  style={{
                    width: "100%",
                  }}
                  src="https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Library-Sites-hummel-shared/default/dw55c4629a/Company%20Karma/KARMA_Landingpage_700x700_Purpose_1.jpg"
                />
              </Col>
              <Col span={6}>
                <Image
                  style={{
                    width: "100%",
                  }}
                  src="https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Library-Sites-hummel-shared/default/dwdf0fdd43/Company%20Karma/KARMA_Landingpage_700x700_Materials_2.jpg"
                />
              </Col>
            </Row>
          </Col>
          {/* company karma */}
          <Col
            style={{
              textAlign: "center",
              marginBottom: "50px",
            }}
            span={24}
          >
            <Title level={1}>WHAT IS COMPANY KARMA?</Title>
            <Paragraph>
              We seek to grow sustainably and have done so for more than 20
              years. Through our PURPOSE projects, we want to make a true impact
              by initiating change and supporting others to do the same.
              Challenging conventions. Fighting for empowerment and inclusivity,
              while celebrating the game. Changing perspectives. We’re known for
              being a bit ballsy, stepping outside the lines, and providing the
              playing field needed to create understanding, respect, and unity.
            </Paragraph>
            <Paragraph>
              We have an equal urge to work just as passionately with PLANET by
              reducing our footprint and with our PEOPLE by making sure that
              everyone working for or at hummel® is treated with respect.
              Ultimately, our Company Karma Strategy and our 3 P's are a
              long-term commitment to do better.
            </Paragraph>
            <Paragraph>Let's Play For Change.</Paragraph>
          </Col>
          {/* banner */}
          <Col
            style={{
              marginBottom: "50px",
            }}
            span={24}
          >
            <Image
              width="100%"
              src="https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Library-Sites-hummel-shared/default/dw50f4ac1a/Company Karma/1480c650_Karma_Videoposter.jpg"
            />
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
            <Carousel afterChange={onChange}>
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
        <MainFooter/>
      </Content>
    </Layout>
  );
}
