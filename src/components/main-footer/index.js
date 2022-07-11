import { Link } from "react-router-dom";
import { Row, Col, Typography, List } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const { Title } = Typography;
const leftest = [
  <footer
    style={{
      display: "flex",
      width: "100px",
      textAlign: "center",
      justifyContent: "center",
      marginLeft: "75px",
    }}
  >
    Ant Design ©2018 Created by Ant UED sidai sjdsadslk dmaskldmsi sdsijasij
  </footer>,
];
const left = [
  "About Hummel",
  "History",
  "Press",
  "Corporate",
  "Sponsorships - Football",
  "Sponsorships - Handball",
  "Jobs",
  "Contact",
];
const mid = [
  "FAQ",
  "Delivery",
  "Returns",
  "Size Guide",
  "My Account",
  "Terms & Conditions",
  "Privacy Policy",
  "Cookies",
  "Contact",
];
const right = [
  "Core",
  "Authentic",
  "Authentic Charge",
  "Concept Move",
  "Stadil",
  "Stadil Jr.",
  "Sport Style",
  "hummel HIVE",
];
const rightest = [
  <>
    <Col>
      <h2>Social</h2>
      <div style={{ fontSize: "50px" }}>
        <FacebookOutlined />
        <TwitterOutlined />
        <InstagramOutlined />
        <YoutubeOutlined />
      </div>

      {/* tanda tangan */}
    </Col>
  </>,
];

export default function MainFooter() {
  return (
    <Row
      style={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#dfe4ea",
        padding: "50px 0 80px 0",
      }}
    >
      <Col span={6}>
        <List
          gutter={[0, 8]}
          header={
            <img
              alt=""
              src="https://www.hummel.net/on/demandware.static/-/Library-Sites-hummel-shared/default/dwe879875b/footer/logo-small.svg"
              style={{ height: "60px", width: "160px", marginLeft: "45px" }}
            />
          }
          split={false}
          dataSource={leftest}
          renderItem={(item) => (
            <List.Item style={{ alignItem: "center" }}>{item}</List.Item>
          )}
        />
      </Col>
      <Col span={4}>
        <List
          header={
            <Title style={{ marginBottom: 0, fontWeight: "bolder" }} level={5}>
              HUMMELS
            </Title>
          }
          split={false}
          dataSource={left}
          renderItem={(item) => (
            <List.Item style={{ fontSize: "smaller" }}>{item}</List.Item>
          )}
        />
      </Col>
      <Col span={4}>
        <List
          header={
            <Title style={{ marginBottom: 0, fontWeight: "bolder" }} level={5}>
              CUSTOMER SERVICE
            </Title>
          }
          split={false}
          dataSource={mid}
          renderItem={(item) => (
            <List.Item style={{ fontSize: "smaller" }}>{item}</List.Item>
          )}
        />
      </Col>
      <Col span={4}>
        <List
          header={
            <Title style={{ marginBottom: 0, fontWeight: "bolder" }} level={5}>
              COLLECTIONS
            </Title>
          }
          split={false}
          dataSource={right}
          renderItem={(item) => (
            <List.Item style={{ fontSize: "smaller" }}>{item}</List.Item>
          )}
        />
      </Col>
      <Col span={6}>
        <List
          header={
            <Title style={{ marginBottom: 0, fontWeight: "bolder" }} level={5}>
              <Link to="/" style={{ color: "black" }}>CREATE ACCOUNT</Link>
            </Title>
          }
          split={false}
          dataSource={rightest}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Col>
    </Row>
  );
}
