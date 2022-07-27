import "./index.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Row, Col, Input, Button, Menu, Typography, Badge } from "antd";
import { SearchOutlined, HeartOutlined, MenuOutlined } from "@ant-design/icons";
import logoNavbar from "../../assets/GLOD WEB/LOGO GLOD TXT W.jpg"
const { Title } = Typography;

const drop = (
  <Menu style={{ top: '1.3rem' }}
    items={[
      {
        key: "1",
        label: (
          <Link to={"/catalogue"}>
            <Title level={5}>Jersey</Title>
          </Link>
        ),
      },
      {
        key: "2",
        label: (
          <Link to={"/catalogue"}>
            <Title level={5}>Accessories</Title>
          </Link>
        ),
      },
    ]}
  />
);

const burgerBar = (
  <Menu style={{ top: '1.3rem' }}
    items={[
      {
        key: "1",
        label: (
          <Title level={5}>
            MEN
          </Title>
        ),
        children: [{
          label : drop
        }]
      },
      {
        key: "2",
        label: (
          <Title level={5}>
            WOMEN
          </Title>
        ),
        children: [
          {
            label: drop
          }
        ]
      },
    ]}
  />
);

export default function MainNavbar() {

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
      <Col xs={{ span: 6 }} xl={{ span: 4 }} id="logo">
        <Link to="/" >
          <img id="gambarlogo"
            src={logoNavbar}
            style={{ width: '150px', height: "64px" }}
            alt="GLOD"
          />
        </Link>
      </Col>
      <Col span={12} id="menu">
        <Row>
          <Col span={3}>
            <Dropdown overlay={drop} placement="bottom" overlayStyle={{ top: '30px' }} >
              <Link to="/">MEN</Link>
            </Dropdown>
          </Col>
          <Col span={3}>
            <Dropdown overlay={drop} placement="bottom" overlayStyle={{ top: '30px' }}>
              <Link to="/">WOMAN</Link>
            </Dropdown>
          </Col>
          <Col span={12} id="about">
            <Link to="/about">ABOUT US</Link>
          </Col>
        </Row>
      </Col>
      <Col xs={{ span: 15 }} lg={{ span: 6 }} xl={{ span: 8 }}>
        <Row>
          <Col
            span={16}
            style={{
              borderLeft: "1px solid grey",
              borderRight: "1px solid grey",
            }}
          >
            <Input
              size="large"
              placeholder="search"
              bordered={false}
              prefix={<SearchOutlined />}
            />
          </Col>
          <Col
            span={8}
            style={{ textAlign: "center", borderRight: "1px solid grey" }}
          >
            <Link to="/favourite">
              <Button type="text">
                <Badge count={count} size="small" offset={[3, 0]} showZero color="black">
                  <HeartOutlined style={{ fontSize: "20px", color: "grey" }} />
                </Badge>
              </Button>
            </Link>
          </Col>
        </Row>
      </Col>
      <Col span={3} id="side-menu" >
        <Button style={{ border: 'none', height: '100%' }}>
          <Dropdown overlay={burgerBar} placement={"bottom"} overlayStyle={{ width: '400px', height: '50px'}}>
            <MenuOutlined />
          </Dropdown>
        </Button>
      </Col>
    </Row>
  );
}
