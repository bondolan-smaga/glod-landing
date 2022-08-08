import { Button, Row, Col, Checkbox, Input, Typography } from "antd";
import "./index.css"

export default function Newslettersignup() {
  const { Title } = Typography;
  return (
    <Row id="newslet-row"
      style={{
        backgroundColor: "rgb(0, 0, 0)",
        color: "rgb(255, 255, 255)",
        textAlign: "center",
        padding:" 175px 75px",
      }}
    >
      <Col xs={{ span: 24 }}>
        <Row justify="center">
          <Title id="newslet-text" style={{ color: "white" }} level={3}>
            DON'T MISS OUT…
          </Title>
        </Row>
        <Row justify="center">
          <Col xs={{ span: 24 }}>
            <Title id="newslet-text" style={{ color: "white" }} level={2}>
              SUMMER SALE IS LIVE!
            </Title>
          </Col>
        </Row>
        <Row justify="center">
          <Col xs={{ span: 24 }}>
            <Title id="newslet-text" style={{ color: "white" }} level={2}>
              SIGN UP FOR EVEN GREATER DISCOUNTS
            </Title>
          </Col>
        </Row>
        <Row justify="center">
          <Col xs={{span:24}} xl={{span:16}}
          >
            <Row gutter={16} justify="center">
              <Col xs={{span:24}} xl={{span:12}}>
                <Input id="input-email"
                  style={{
                    minWidth: "100%",
                    padding: "12px 8px",
                    display: "inline-block",
                    margin: "2.5px 10px 10px 0px",
                    color: "rgb(0, 0, 0)",
                    fontFamily: "Gipson-Regular, sans-serif",
                    fontSize: "12px",
                    background: "rgb(255, 255, 255)",
                    height: "45px",
                    borderRadius:"5px",
                  }}
                  placeholder="Enter your email address"
                />
              </Col>
              <Col xs={{span:24}} xl={{span:4}}>
                <Button
                  ghost
                  id="btn-subs"
                  style={{
                    textAlign: "center",
                    padding:"12px 8px",
                    display: "flex",
                    margin: "0px 10px 10px 0px",
                    color: "#000000",
                    fontFamily: "Gipson-Regular, sans-serif",
                    fontSize: "12px",
                    fontWeight: 'bold',
                    background: "#747d8c",
                    minWidth: "100%",
                    height: "50px",
                    lineHeight: "25px",
                    borderRadius: "5px",
                    letterSpacing: ".5px",
                    position: "relative",
                    textTransform: "uppercase",
                    boxShadow: "none",
                  }}
                >
                  SUBSCRIBE NOW
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row justify="center">
          <Col xs={{ span: 24 }} xl={{ span: 24 }}>
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
      </Col>
    </Row>
  );
}
