import { Col, Row, Image, Carousel, Typography, Space, Button } from "antd";
// import { OmitProps } from "antd/lib/transfer/ListBody";

import {
  MainLayout,
  Newslettersignup,
  CarouselProductCard,
} from "../../components";
import { seo_meta } from "../../constants/seo";
import "./index.scss";
import { catalogueProducts } from "../../constants/products";

const Title = Typography;

const contentStyle = {
  height: "fit-content",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#eaeaea",
};

export default function DetailProductPage() {
  return (
    <MainLayout meta={seo_meta.detailProduct}>
      {/* <Row>
        <Breadcrumbs></Breadcrumbs>
      </Row> */}
      <Row gutter={[24, 8]}>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 24 }}
          lg={{ span: 8 }}
          xl={{ span: 8 }}
        >
          <Carousel autoplay={true}>
            {catalogueProducts[0].images.map((image) => {
              return (
                <div>
                  <h3 style={contentStyle}>
                    <Image
                      className="main-product"
                      style={{
                        backgroundColor: "#eaeaea",
                        marginTop: "6px",
                      }}
                      src={image}
                    />
                  </h3>
                </div>
              );
            })}
          </Carousel>
        </Col>
        <Col span={11} xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 8 }}>
          <Row>
            <Col
              style={{
                float: "left",
                marginRight: "10px",
                marginBottom: "10px",
                fontSize: "10px",
                letterSpacing: ".5px",
                padding: "3px 5px",
                color: "#fff",
                lineHeight: "10px",
                fontFamily: "Gibson-Medium,sans-serif",
                backgroundColor: "black",
                fontWeight: "bold",
              }}
            >
              {catalogueProducts[0].tags}
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                float: "left",
                fontSize: "12px",
                letterSpacing: ".5px",
                fontFamily: "Gibson-SemiBold, sans-serif",
                fontWeight: "bold",
                textTransform: "uppercase",
                color: "rgba(0,0,0,.45)",
              }}
            >
              {catalogueProducts[0].product}
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                color: "#000",
                fontSize: "20px",
                letterSpacing: "0.5px",
                lineHeight: "25px",
                fontWeight: "bold",
                marginBottom: "10px",
                textTransform: "uppercase",
                fontFamily: "Gibson-SemiBold, sans-serif",
              }}
            >
              {catalogueProducts[0].type}
            </Col>
          </Row>
          <Row>
            <Col
              span={2}
              style={{
                backgroundColor: "#d03a3a",
                color: "#fff",
                fontSize: "12px",
                letterSpacing: ".5px",
                padding: "5px 5px 0px 5px",
                fontFamily: "Gibson-SemiBold, sans-serif",
                fontWeight: "bold",
                textAlign: "center",
                marginRight: "10px",
              }}
            >
              {catalogueProducts[0].discount}
            </Col>
            <Col
              style={{
                color: "#000",
                letterSpacing: "0",
                fontSize: "20px",
                fontFamily: "Gibson-Regular,sans-serif",
                marginRight: "10px",
                textDecoration: "line-through",
              }}
            >
              {catalogueProducts[0].price}
            </Col>
            <Col
              style={{
                color: "#c00",
                fontFamily: "Gibson-SemiBold, sans-serif",
                letterSpacing: "0",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              {catalogueProducts[0].discountPrice}
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                marginTop: "10px",
              }}
            >
              {catalogueProducts[0].description}
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                marginTop: "10px",
              }}
            >
              <Title level={5} style={{ fontWeight: "bold" }}>
                Product Detail
              </Title>
              <Space style={{ fontWeight: "bold", color: "#2800aa" }}>
                {catalogueProducts[0].detail}
              </Space>
            </Col>
          </Row>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 6 }}
          xl={{ span: 6 }}
        >
          <Row>
            <Col>Color:</Col>
          </Row>
          <Row
            gutter={[8, 8]}
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {catalogueProducts[0].colorImages.map((colorImage) => {
              return (
                <Col span={4} xs={{ span: 6 }}>
                  <Image
                    style={{
                      backgroundColor: "#eaeaea",
                      marginTop: "6px",
                      marginRight: "10px",
                    }}
                    width={40}
                    src={colorImage}
                  />
                </Col>
              );
            })}
          </Row>
          <Row
            gutter={[0, 0]}
            style={{
              marginTop: "20px",
            }}
          >
            {catalogueProducts[0].sizes.map((size) => {
              return (
                <Col
                  span={4}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderStyle: "solid",
                    borderWidth: "1px",
                    borderRadius: "3px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginRight: "5px",
                  }}
                >
                  {size}
                </Col>
              );
            })}
          </Row>
          <Row style={{ marginTop: "20px" }}>
            <Col span={24}>
              <Button
                style={{
                  backgroundColor: "#03AC0E",
                  borderRadius: "15px",
                  color: "white",
                }}
              >
                Go to Tokopedia
              </Button>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row span={24}>
            <Col span={24} style={{ margin: "10px 0" }}>
              <CarouselProductCard
                tag={"RELATED PRODUCT"}
                show={4}
                scroll={4}
              />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Newslettersignup />
        </Col>
      </Row>
    </MainLayout>
  );
}
