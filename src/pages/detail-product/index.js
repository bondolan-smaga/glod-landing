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
          lg={{ span: 12 }}
          xl={{ span: 12 }}
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
        <Col span={11} xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 12 }}>
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
                <Col span={6} xs={{ span: 6 }} key={colorImage}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <button
                      style={{
                        backgroundColor: "#eaeaea",
                        width: "65px",
                        height: "65px",
                        borderRadius: "50%", // Make the button circular
                        border: "none", // Remove border
                        margin: "0.5rem", // Adjust margins
                        padding: "0", // Remove padding
                        cursor: "pointer", // Change cursor to pointer on hover
                        display: "flex", // Add flex display to center content vertically
                        justifyContent: "center", // Center content horizontally
                        alignItems: "center", // Center content vertically
                      }}
                    >
                      <Image
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          borderRadius: "50%",
                        }}
                        src={colorImage}
                      />
                    </button>
                  </div>
                </Col>
              );
            })}
          </Row>
          <Row
            gutter={[8, 0]}
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {catalogueProducts[0].sizes.map((size) => {
              return (
                <Col
                  span={4}
                  key={size}
                  style={{
                    width: "1rem",
                    height: "3rem",
                    border: "1px solid #000",
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "5px",
                    marginRight: "5px",
                  }}
                >
                  {size}
                </Col>
              );
            })}
          </Row>
          <Row style={{ marginTop: "10px" }}>
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
          <CarouselProductCard tag={"RELATED PRODUCT"} show={4} scroll={4} />
        </Col>
        <Col span={24}>
          <Newslettersignup />
        </Col>
      </Row>
    </MainLayout>
  );
}
