import "./index.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Row, Col, Input, Button, Menu, Typography, Badge } from "antd";
import { SearchOutlined, HeartOutlined, MenuOutlined } from "@ant-design/icons";
import logoNavbar from "../../assets/GLOD WEB/LOGO GLOD TXT W.jpg"
const { Title } = Typography;


const burgerBar = (
  <Menu style={{ top: '1.3rem' }}
    items={[
      {
        key: "men",
        label: (
          <Link to="/catalogue">
            <Title level={5}>
              JERSEYS
            </Title>
          </Link>
        ),
      },
      {
        key: "accessories",
        label: (
          <Link to="/catalogue">
            <Title level={5}>
              ACCESSORIES
            </Title>
          </Link>
        ),
      },
      {
        label: (
          <Link to="/about">
            <Title level={5}>
              ABOUT US
            </Title>
          </Link>
        )
      }
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
      <Col xs={{ span: 6 }} md={{ span: 4 }} lg={{span:4}} xl={{ span: 4 }} id="logo">
        <Link to="/" >
          <img id="gambarlogo"
            src={logoNavbar}
            style={{ width: '150px', height: "64px" }}
            alt="GLOD"
          />
        </Link>
      </Col>
      <Col md={{ span: 12 }} lg={{span:12}} xl={{ span: 12 }} id="menu">
            <Link to="/catalogue" className="main-menu">JERSEYS</Link>
            <Link to="/catalogue" className="main-menu" >ACCESSORIES</Link>
            <Link to="/about" className="main-menu" >ABOUT US</Link>
      </Col>
      <Col xs={{ span: 15 }} md={{ span: 8 }} xl={{ span: 8 }}>
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
            <Link to="/favorite">
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
          <Dropdown overlay={burgerBar} placement={"bottomLeft"} overlayStyle={{ width: '100%', height: '50px' }}>
            <MenuOutlined />
          </Dropdown>
        </Button>
      </Col>
    </Row>
  );
}
