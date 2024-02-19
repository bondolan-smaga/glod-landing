import { Dropdown, Row, Col, Input, Menu, Typography, Form } from "antd";
import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";

import "./index.scss";
import logoNavbar from "../../assets/GLOD WEB/logo banner glod.png";
const { Title } = Typography;

const burgerBar = (
  <Menu
    className="gld-margin-top-md"
    items={[
      {
        label: (
          <Link to="/catalogue">
            <Title level={5}>JERSEYS</Title>
          </Link>
        ),
      },
      {
        label: (
          <Link to="/catalogue">
            <Title level={5}>ACCESSORIES</Title>
          </Link>
        ),
      },
      {
        label: (
          <Link to="/about">
            <Title level={5}>ABOUT US</Title>
          </Link>
        ),
      },
    ]}
  />
);

export default function MainNavbar() {
  const navigate = useNavigate();
  const [inputQuery, setInputQuery] = useState("");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setInputQuery(searchParams.get("q"));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleOnSearch() {
    navigate(`/catalogue?q=${inputQuery}`);
  }
  return (
    <Row align="middle">
      <Col xs={{ span: 6 }} sm={{ span: 4 }} md={{ span: 18 }}>
        <Link to="/">
          <img className="brand-logo" src={logoNavbar} alt="GLOD" />
        </Link>
        <Link to="/catalogue" className="main-menu link-text">
          JERSEYS
        </Link>
        <Link to="/catalogue" className="main-menu link-text">
          ACCESSORIES
        </Link>
        <Link to="/about" className="main-menu link-text">
          ABOUT US
        </Link>
      </Col>
      <Col xs={{ span: 15 }} sm={{ span: 17 }} md={{ span: 6 }}>
        <Form className="search-form" onFinish={handleOnSearch}>
          <Input
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            size="large"
            placeholder="search"
            bordered={false}
            prefix={<SearchOutlined />}
          />
        </Form>
      </Col>
      <Col className="side-menu" span={3}>
        <Dropdown
          overlay={burgerBar}
          placement={"bottomLeft"}
          overlayStyle={{ width: "100%", height: "50px" }}
          trigger={["click"]}
        >
          <MenuOutlined className="gld-margin-right-sm" />
        </Dropdown>
      </Col>
    </Row>
  );
}
