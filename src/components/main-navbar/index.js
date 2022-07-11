import "./index.css";

import { Link } from "react-router-dom";
import { Dropdown, Row, Col, Input, Button, Menu, Typography } from "antd";
import { SearchOutlined, HeartOutlined } from "@ant-design/icons";

const { Title } = Typography;

const drop = (
  <Menu
    items={[
      {
        key: "1",
        label: (
          <Link to={"/"}>
            <Title level={5}>Jersey</Title>
          </Link>
        ),
      },
      {
        key: "2",
        label: (
          <Link to={"/"}>
            <Title level={5}>Accessories</Title>
          </Link>
        ),
      },
    ]}
  />
);

export default function MainNavbar() {
  return (
    <Row>
      <Col span={4}>
        <img
          src="https://www.hummel.net/on/demandware.static/-/Library-Sites-hummel-shared/default/dwfdab3d01/homepage/logo.svg"
          style={{ height: "25px" }}
          alt="hummel"
        />
      </Col>
      <Col span={12}>
        <Row>
          <Col span={3}>
            <Dropdown overlay={drop} placement="bottom" arrow>
              <Link to="/">MEN</Link>
            </Dropdown>
          </Col>
          <Col span={3}>
            <Dropdown overlay={drop} placement="bottom" arrow>
              <Link to="/">WOMAN</Link>
            </Dropdown>
          </Col>
          <Col span={18}>
            <Link to="/about">ABOUT US</Link>
          </Col>
        </Row>
      </Col>
      <Col span={8}>
        <Row>
          <Col
            span={16}
            style={{
              borderLeft: "1px solid grey",
              borderRight: "1px solid grey",
            }}
          >
            <Input size="large" placeholder="search" bordered={false} prefix={<SearchOutlined />} />
          </Col>
          <Col
            span={8}
            style={{ textAlign: "center", borderRight: "1px solid grey" }}
          >
            <Button type="text">
              <HeartOutlined style={{ fontSize: "18px", color: "grey" }} />
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
