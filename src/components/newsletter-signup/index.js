import "./index.scss";
import { Button, Row, Col, Input, Typography } from "antd";

export default function Newslettersignup() {
  const { Title } = Typography;
  return (
    <Row className="news-letter-container" justify="center">
      <Col xs={{ span: 24 }} className="max-container">
        <Title className="text-white small-title" level={5}>
          DON'T MISS OUT…
        </Title>
        <Title className="text-white big-title" level={2}>
          SIGN UP FOR OUR NEWSLETTER
        </Title>
        <Title className="text-white big-title" level={2}>
          GET 10% OFF YOUR FIRST ORDER
        </Title>
        <Row gutter={[20, 0]} className="gld-margin-top-lg">
          <Col span={24} md={16} className="input-container">
            <Input
              className="gld-margin-bottom-sm max-input-width"
              size="large"
              placeholder="Enter your email address"
            />
          </Col>
          <Col span={24} md={8} className="input-container">
            <Button
              className="gld-margin-bottom-sm max-button-width"
              size="large"
              block
            >
              SUBSCRIBE NOW
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
