import { Col, Row, Typography, Button, Image } from "antd";
import CarouselProductCard from "../carousel-product-card";
import { Link } from "react-router-dom";
const { Title, Paragraph } = Typography;

export default function FavouriteList() {
  return (
    <>
      <Col
        span={24}
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <Col span={16}>
          <Title
            style={{
              marginBottom: 0,
              fontWeight: "bolder",
              textAlign: "center",
              fontFamily: "Edu VIC WA NT Beginner",
              fontSize: "larger",
            }}
            level={2}
          >
            MY FAVORITES
          </Title>
          <Paragraph
            style={{ fontFamily: "Edu VIC WA NT Beginner", fontSize: "larger" }}
          >
            My Favourites is a great way to keep track of your personal
            must-haves and their availability. And, most importantly, it just
            takes one click to move an item from the list and into your shopping
            cart.
          </Paragraph>
          <Row
            style={{
              marginTop: "80px",
              fontFamily: "Edu VIC WA NT Beginner",
              fontSize: "larger",
            }}
          >
            <Paragraph style={{ marginRight: "auto" }}>
              YOU HAVE 2 PRODUCTS UNDER MY FAVOURITE
            </Paragraph>
            <Button
              hoverable
              id="save_btn"
              style={{
                marginRight: "5px",
                bottom: "11px",
                backgroundColor: "white",
                color: "black",
              }}
            >
              LOGIN AND SAVE
            </Button>
          </Row>
          <Row
            style={{
              borderTop: "1pt solid grey",
              borderBottom: "1pt solid grey",
            }}
          >
            <Image
              style={{ margin: "30px 0px" }}
              src="https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-hummel-master-catalog/default/dwce12e8d3/images/packshot/212573-7165.png?sw=150&sh=150&q=70"
            />
            <Col
              style={{
                marginTop: "35px",
                marginLeft: "20px",
                height: "130px",
                marginRight: "auto",
              }}
            >
              <h3>Nama barang</h3>
              <h3 style={{ marginBottom: "60px" }}>COLOR : LIGHTGREY</h3>
              <Link to="/" style={{ textDecoration: "underline" }}>
                Remove
              </Link>
            </Col>
            <Col style={{ marginTop: "35px", textAlign: "right" }}>
              <p
                id="discount price"
                style={{
                  color: "#c00",
                  fontFamily: "Gibson-SemiBold, sans-serif",
                  letterSpacing: "0",
                  fontSize: "12px",
                  fontWeight: "700",
                }}
              >
                19,97 €
              </p>
              <p
                style={{
                  color: "#000",
                  letterSpacing: "0",
                  fontSize: "12px",
                  fontFamily: "Gibson-Regular,sans-serif",
                  textDecoration: "line-through",
                  marginBottom: "60px",
                }}
              >
                39,95 €
              </p>
              <Button
                id="size_btn"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  width: "150px",
                  height: "45px",
                }}
              >
                CHOOSE SIZE
              </Button>
            </Col>
          </Row>
          <Row
            style={{
              borderTop: "1pt solid grey",
              borderBottom: "1pt solid grey",
            }}
          >
            <Image
              style={{ margin: "30px 0px" }}
              src="https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-hummel-master-catalog/default/dwce12e8d3/images/packshot/212573-7165.png?sw=150&sh=150&q=70"
            ></Image>
            <Col
              style={{
                marginTop: "35px",
                marginLeft: "20px",
                height: "130px",
                marginRight: "auto",
              }}
            >
              <h3>Nama barang</h3>
              <h3 style={{ marginBottom: "60px" }}>COLOR : LIGHTGREY</h3>
              <Link to="/" style={{ textDecoration: "underline" }}>
                Remove
              </Link>
            </Col>
            <Col style={{ marginTop: "35px", textAlign: "right" }}>
              <p
                id="discount price"
                style={{
                  color: "#c00",
                  fontFamily: "Gibson-SemiBold, sans-serif",
                  letterSpacing: "0",
                  fontSize: "12px",
                  fontWeight: "700",
                }}
              >
                19,97 €
              </p>
              <p
                style={{
                  color: "#000",
                  letterSpacing: "0",
                  fontSize: "12px",
                  fontFamily: "Gibson-Regular,sans-serif",
                  textDecoration: "line-through",
                  marginBottom: "60px",
                }}
              >
                39,95 €
              </p>
              <Button
                id="size_btn"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  width: "150px",
                  height: "45px",
                }}
              >
                CHOOSE SIZE
              </Button>
            </Col>
          </Row>
          <Row
            style={{
              borderTop: "1pt solid grey",
              borderBottom: "1pt solid grey",
            }}
          >
            <Image
              style={{ margin: "30px 0px" }}
              src="https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-hummel-master-catalog/default/dwce12e8d3/images/packshot/212573-7165.png?sw=150&sh=150&q=70"
            ></Image>
            <Col
              style={{
                marginTop: "35px",
                marginLeft: "20px",
                height: "130px",
                marginRight: "auto",
              }}
            >
              <h3>Nama barang</h3>
              <h3 style={{ marginBottom: "60px" }}>COLOR : LIGHTGREY</h3>
              <Link to="/" style={{ textDecoration: "underline" }}>
                Remove
              </Link>
            </Col>
            <Col style={{ marginTop: "35px", textAlign: "right" }}>
              <p
                id="discount price"
                style={{
                  color: "#c00",
                  fontFamily: "Gibson-SemiBold, sans-serif",
                  letterSpacing: "0",
                  fontSize: "12px",
                  fontWeight: "700",
                }}
              >
                19,97 €
              </p>
              <p
                style={{
                  color: "#000",
                  letterSpacing: "0",
                  fontSize: "12px",
                  fontFamily: "Gibson-Regular,sans-serif",
                  textDecoration: "line-through",
                  marginBottom: "60px",
                }}
              >
                39,95 €
              </p>
              <Button
                id="size_btn"
                style={{
                  backgroundColor: "black",
                  color: "white",
                  width: "150px",
                  height: "45px",
                }}
              >
                CHOOSE SIZE
              </Button>
            </Col>
          </Row>
        </Col>
      </Col>
      <Col>
        <Row>
          <Col span={24}>
            <CarouselProductCard
              style={{ margin: "100px 0" }}
              tag={"YOU MAY ALSO LIKE"}
            />
          </Col>
        </Row>
      </Col>
    </>
  );
}
