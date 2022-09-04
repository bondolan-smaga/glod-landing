import {
  Dropdown,
  Row,
  Col,
  Input,
  Button,
  Menu,
  Typography,
  Form,
} from "antd";
import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { SearchOutlined, MenuOutlined } from "@ant-design/icons";
import "./index.scss";
import logoNavbar from "../../assets/GLOD WEB/LOGO GLOD TXT W.jpg";
const { Title } = Typography;

const burgerBar = (
  <Menu
    style={{ top: "1.3rem" }}
    items={[
      {
        key: "men",
        label: (
          <Link to="/catalogue">
            <Title level={5}>MEN</Title>
          </Link>
        ),
      },
      {
        key: "accessories",
        label: (
          <Link to="/catalogue">
            <Title level={5}>WOMEN</Title>
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
    console.log("masuk sini");
    setInputQuery(searchParams.get("q"));
  }, []);

  function handleOnSearch() {
    console.log(inputQuery, "input val");
    navigate(`/catalogue?q=${inputQuery}`);
  }
  return (
    <Row>
      <Col
        xs={{ span: 6 }}
        sm={{ span: 4 }}
        md={{ span: 4 }}
        lg={{ span: 4 }}
        xl={{ span: 4 }}
      >
        <Link to="/">
          <img
            id="gambarlogo"
            src={logoNavbar}
            style={{ width: "150px", height: "64px" }}
            alt="GLOD"
          />
        </Link>
      </Col>
      <Col md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }} id="menu">
        <Link to="/catalogue" className="main-menu">
          MEN
        </Link>
        <Link to="/catalogue" className="main-menu">
          WOMEN
        </Link>
        <Link to="/about" className="main-menu">
          ABOUT US
        </Link>
      </Col>
      <Col
        xs={{ span: 15 }}
        sm={{ span: 17 }}
        md={{ span: 8 }}
        lg={{ span: 8 }}
        xl={{ span: 8 }}
      >
        <Form onFinish={handleOnSearch}>
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
      <Col span={3} id="side-menu">
        <Button style={{ border: "none", height: "100%" }}>
          <Dropdown
            overlay={burgerBar}
            placement={"bottomLeft"}
            overlayStyle={{ width: "100%", height: "50px" }}
          >
            <MenuOutlined />
          </Dropdown>
        </Button>
      </Col>
    </Row>
  );
}
