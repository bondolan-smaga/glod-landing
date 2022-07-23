import { Col, Row, Typography, Button, Image } from "antd";
import CarouselProductCard from "../carousel-product-card";
import { Link } from "react-router-dom";
import "./index.css";
import productImage from "../../assets/GLOD WEB/BRSFC 01.jpg";
import Countdown from "antd/lib/statistic/Countdown";
const { Title, Paragraph } = Typography

export default function FavoriteList() {
  return (
    <Row id="product-row">
      <Col
        span={24}
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "3.125em"
        }}
      >
        <Col span={16}>
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
          <Row style={{
            marginTop: "5em",
            fontFamily: 'Gibson-SemiBold, sans-serif'
          }}>
            <Col span={24}>
              <Paragraph style={{ marginRight: "auto" }}>
                YOU HAVE 2 PRODUCTS UNDER MY FAVORITE
              </Paragraph>
            </Col>
          </Row>
          <Row
            style={{
              padding: "2em 0em",
              borderTop: "1pt solid grey",
              borderBottom: "1pt solid grey",
            }}
          >
            <Col lg={{ span: 5 }} xs={{ span: 12 }}>
              <Image
                src={productImage}
              />
            </Col>
            <Col lg={{ span: 18 }} xs={{ span: 12 }} style={{ padding: "0em 0em 0em 1em" }}>
              <Row>
                <Col span={20}>
                  <Title level={5}>Nama barang</Title>
                  <Paragraph style={{
                    fontFamily: "Gibson-SemiBold, sans-serif",
                  }}>COLOR : LIGHTGREY</Paragraph>
                </Col>
                <Col lg={{ span: 4 }} xs={{ span: 24 }}>
                  <p
                    id="discount price"
                    style={{
                      color: "#c00",
                      fontSize: "0.75rem",
                      fontWeight: "700",
                    }}
                  >
                    19,97 €
                  </p>
                  <p
                    style={{
                      color: "#000",
                      fontSize: "0.75rem",
                      textDecoration: "line-through",
                    }}
                  >
                    39,95 €
                  </p>
                </Col>
                <Col span={24}>
                  <Row style={{ marginTop: "2.5em" }}>
                    <Link to="/" style={{
                      textDecoration: "underline",
                      color: "blue",
                      marginRight: "auto"
                    }}>Remove</Link>
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
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Col>
      <CarouselProductCard style={{ margin: '6.25em 0' }} tag={'YOU MAY ALSO LIKE'} />
    </Row>
  );
}
