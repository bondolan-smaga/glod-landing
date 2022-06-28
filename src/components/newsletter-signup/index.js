import { Button, Row, Col, Checkbox, Input, Typography } from "antd";

export default function Newslettersignup() {
  const { Title } = Typography;
  return (
    <div
      style={{
        backgroundColor: "rgb(0, 0, 0)",
        color: "rgb(255, 255, 255)",
        padding: "75px 165px",
        textAlign: "center",
        margin: "60px 0px",
        position: "relative",
      }}
    >
      <Row justify="center">
        <Col>
          <Title style={{ color: "white" }} level={4}>
            DON'T MISS OUT…
          </Title>
        </Col>
      </Row>
      <div style={{ marginBottom: "45px" }}>
        <Row justify="center">
          <Col>
            <Title style={{ color: "white" }} level={2}>
              SUMMER SALE IS LIVE!
            </Title>
          </Col>
        </Row>
        <Row justify="center">
          <Col>
            <Title style={{ color: "white" }} level={2}>
              SIGN UP FOR EVEN GREATER DISCOUNTS
            </Title>
          </Col>
        </Row>
      </div>
      <Row>
        <div
          style={{
            display: "flex",
            alignSelf: "center",
            alignContent: "center",
            alignItems: "center",
            margin: "0px auto 24px",
            justifyContent: "center",
          }}
        >
          <Input
            style={{
              maxWidth: "300px",
              padding: "12px 8px",
              display: "inline-block",
              margin: "0px 10px 0px 0px",
              color: "rgb(0, 0, 0)",
              fontFamily: "Gipson-Regular, sans-serif",
              fontSize: "12px",
              background: "rgb(255, 255, 255)",
              height: "50px",
            }}
            placeholder="Enter your email address"
          />
          <Button
            ghost
            id="button-subscribe"
            style={{
              paddingTop: "12px",
              paddingRight: "8px",
              paddingBottom: "12px",
              paddingLeft: "8px",
              display: "inline-block",
              margin: "0px 10px 0px 0px",
              color: "#000000",
              fontFamily: "Gipson-Regular, sans-serif",
              fontSize: "12px",
              background: "#ffffff",
              minWidth: "164px",
              height: "50px",
              lineHeight: "25px",
              borderRadius: "2px",
              letterSpacing: ".5px",
              position: "relative",
              textTransform: "uppercase",
              boxShadow: "none",
            }}
          >
            SUBSCRIBE NOW
          </Button>
        </div>
      </Row>
      <Row justify="center">
        <Col span={24}>
          <Checkbox
            style={{
              fontFamily: "Gibson-Regular, sans-serif",
              fontSize: "1rem",
              fontWeight: "400",
              lineHeight: "1.5",
              color: "white",
              textAlign: "left",
            }}
            value="Yes, I accept the terms and conditions for hummel® newsletter. Read more"
          >
            Yes, I accept the terms and conditions for hummel® newsletter. Read
            more
          </Checkbox>
        </Col>
      </Row>
    </div>
  );
}
