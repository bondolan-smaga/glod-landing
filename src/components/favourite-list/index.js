import { Col, Row, Typography, Button, Image } from "antd";
import CarouselProductCard from "../carousel-product-card";
import { Link } from "react-router-dom";
import "./index.css";
const { Title, Paragraph } = Typography

export default function FavouriteList() {
  return (
    <Row id="product-row">
      <Col
        span={24}
        style={{ display: "flex", justifyContent: "center", marginTop: "3.125em" }}
      >
        <Col span={20}>
          <Title
            style={{
              marginBottom: 0,
              fontWeight: "bolder",
              textAlign: "center",
              fontFamily: 'Gibson-SemiBold, sans-serif',
            }}
            level={2}
          >
            MY FAVORITES
          </Title>
          <Row style={{ marginTop: "5em", fontFamily: 'Gibson-SemiBold, sans-serif' }}>
            <Col span={8}>
              <Paragraph style={{ marginRight: "auto" }}>
                YOU HAVE 2 PRODUCTS UNDER MY FAVOURITE
              </Paragraph>
            </Col>
            <Col span={16}>
              <Button
                id="save_btn"
                style={{
                  marginRight: "0.3em",
                  bottom: "0.6em",
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                LOGIN AND SAVE
              </Button>
            </Col>
          </Row>
          <Row
            style={{
              borderTop: "1pt solid grey",
              borderBottom: "1pt solid grey",
            }}
          >
            <Col>
              <Image
                style={{ margin: "1.875em 0em" }}
                src="https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-hummel-master-catalog/default/dwce12e8d3/images/packshot/212573-7165.png?sw=150&sh=150&q=70"
              ></Image>
            </Col>
            <Col
              style={{
                marginTop: "2em",
                marginLeft: "1.25em",
                height: "8em",
                marginRight: "auto",
              }}
            >
              <h3>Nama barang</h3>
              <h3 style={{ marginBottom: "3.75em" }}>COLOR : LIGHTGREY</h3>
              <Link to="/" style={{ textDecoration: "underline" }}>Remove</Link>
            </Col>
            <Col style={{ marginTop: "2.1875em", textAlign: "right" }}>
              <p
                id="discount price"
                style={{
                  color: "#c00",
                  fontFamily: "Gibson-SemiBold, sans-serif",
                  letterSpacing: "0",
                  fontSize: "0.75rem",
                  fontWeight: "700",
                }}
              >
                19,97 €
              </p>
              <p
                style={{
                  color: "#000",
                  letterSpacing: "0",
                  fontSize: "0.75rem",
                  fontFamily: "Gibson-Regular,sans-serif",
                  textDecoration: "line-through",
                  marginBottom: "3.75em",
                }}
              >
                39,95 €
              </p>
              <Button
                id="size_btn"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  width: "9.375em",
                  height: "2.8em",
                }}
              >
                CHOOSE SIZE
              </Button>
            </Col>
          </Row>
        </Col>
      </Col>
      <CarouselProductCard style={{ margin: '6.25em 0' }} tag={'YOU MAY ALSO LIKE'} />
    </Row>
  );
}
