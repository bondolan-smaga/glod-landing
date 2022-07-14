import { Col, Row, Typography, List } from "antd";

import Banner from "../../components/banner";
import { CarouselProductCard, MainLayout, Newslettersignup } from "../../components";

const { Title } = Typography;

const data = ["New in", "Sustainability", "Sportswear", "Sneakers"];


export default function HomePage(props) {
  return (
    <MainLayout meta={{ title: "Homepage | GLOD" }}>
      {/* MAIN CONTENTS */}
      <Row>
        <Col span={24}>
          <Banner style={{ margin: "0 0" }} />
        </Col>
        {/* BEST OF SALE */}
        <Col span={24}>
          <Row>
            <Col span={24}>
              <CarouselProductCard tag={'BEST OF SALE'} />
            </Col>
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
          <Row span={24}>
            <Col span={24} style={{ margin: '10px 0' }}>
              <CarouselProductCard tag={'NEW SEASON FAVOURITES'} />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Banner style={{ margin: "30px 0" }} />
        </Col>
      </Row>
      {/* recommendation */}
      <Row>
        <Col span={24}>
          <CarouselProductCard tag={'GET INSPIRED BY THIS STYLE'}/>
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
      <Row>
        <Col span={24}>
          <Newslettersignup />
        </Col>
      </Row>
    </MainLayout>
  );
}
