import { useNavigate } from "react-router-dom";
import { Card, Row, Col, Typography } from "antd";

const { Title, Text } = Typography;

export default function ProductCard(props) {
  let navigate = useNavigate();

  function linkToDetail() {
    navigate(`/product/${props.id}`);
  }

  return (
    <Row
      style={{
        marginBottom: "2.5em",
      }}
    >
      <Card
        onClick={() => linkToDetail(props.id)}
        style={{
          margin: "0.63em",
          borderRadius: "3%",
        }}
        hoverable
        cover={
          <Row gutter={[0, 16]}>
            <img
              alt="img not found"
              src={props.image}
              style={{
                borderRadius: "3% 3% 0 0",
                width: "100%",
                height: "100%",
              }}
            />
          </Row>
        }
      >
        <Row>
          <Col span={24}>
            <Title level={5}>{props.product}</Title>
          </Col>
          <Col span={24} style={{ marginBottom: "0.5em" }}>
            <Text
              style={{ textDecoration: "line-through", marginRight: "0.8em" }}
            >
              Rp {props.price}
            </Text>
            <Text type="danger">
              Rp {props.price - (50 / 100) * props.price}
            </Text>
          </Col>
          <Col span={24}>
            <Text style={{ fontWeight: "700" }}>Warna Tersedia: {props.colors.join(", ")}</Text>
          </Col>
        </Row>
      </Card>
    </Row>
  );
}
