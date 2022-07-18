import "./index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Row, Col, Input, Button, Menu, Typography, Badge } from "antd";
import { SearchOutlined, HeartOutlined,MenuOutlined } from "@ant-design/icons";

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

export default function TryResponsive() {
  const [count] = useState(0);
  // const increase = () => {
  //   setCount(count + 1);
  // };

  // const decline = () => {
  //   let newCount = count - 1;

  //   if (newCount < 0) {
  //     newCount = 0;
  //   }

  //   setCount(newCount);
  // }

  return (
    <Row id="responsive-nav">
      <Col lg={{span:4}} xl={{span:4}} id="logo">
        <Link to="/">
          <img id="gambarlogo"
            src="https://www.hummel.net/on/demandware.static/-/Library-Sites-hummel-shared/default/dwfdab3d01/homepage/logo.svg"
            style={{ height: "25px" }}
            alt="hummel"
          />
        </Link>
      </Col>
      <Col span={12} id="menu">
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
          <Col span={12} id="about">
            <Link to="/about">ABOUT US</Link>
          </Col>
        </Row>
      </Col>
      <Col id="seach-fav" lg={{span:6}} xl={{span:8}} style={{ marginLeft: 'auto' }}>
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
            <Link to="/favourite">
              <Button type="text">
                <Badge count={count} size="small" offset={[3, 0]} showZero color="cyan">
                  <HeartOutlined style={{ fontSize: "20px", color: "grey" }} />
                </Badge>
              </Button>
            </Link>
          </Col>
        </Row>
      </Col>
      <Col span={3} id="side-menu">
        <Button style={{border:'none',height:'100%'}}>
          <MenuOutlined />
        </Button>
      </Col>
    </Row>
  );
}
