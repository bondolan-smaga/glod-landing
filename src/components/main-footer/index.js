import { Link } from "react-router-dom";
import { Row, Col, Typography } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import "./index.css";
import logoFooter1 from "../../assets/GLOD WEB/LOGO GLOD MONOCR B.jpg";

const { Title } = Typography;

export default function MainFooter() {
  return (
    <Row
      style={{ backgroundColor: "black", color: "white", padding: "10px 20px 10px" }}
    >
      <Col
        xs={{ span: 12, order: 1 }}
        xl={{ span: 8 }}
        style={{ textAlign: "left" }}
      >
        <img
          src={logoFooter1}
          alt=""
          style={{ width: "50px", height: "50px" }}
        />
        {/* <img src={logoFooter2} alt="" style={{width:'50px', height:'50px'}}/> */}
      </Col>
      <Col
        xs={{ span: 24, order: 3 }}
        xl={{ span: 8, order: 2 }}
        style={{
          textAlign: "center",
          justifyContent: "center",
          alignContent: "center",
          display: "flex",
        }}
      >
        <Title
          id="copyright"
          level={5}
          style={{ color: "white", padding: "10px 0px", fontSize: "15px", margin: "0" }}
        >
          GLOD Sportwear ©2022 Created by GLOD
        </Title>
      </Col>
      <Col id="social" xs={{ span: 12, order: 2 }} xl={{ span: 8, order: 3 }}>
        <Row style={{ fontSize: "30px", color: "white" }} justify="end">
          <Link to="/">
            <FacebookOutlined
              style={{ margin: " 0px 8px", color: "white", fontSize: "25px" }}
            />
          </Link>
          <Link to="/">
            <TwitterOutlined
              style={{ margin: " 0px 8px", color: "white", fontSize: "25px" }}
            />
          </Link>
          <Link to="/">
            <InstagramOutlined
              style={{ margin: " 0px 8px", color: "white", fontSize: "25px" }}
            />
          </Link>
          <Link to="/">
            <YoutubeOutlined
              style={{ margin: " 0px 8px", color: "white", fontSize: "25px" }}
            />
          </Link>
        </Row>
        {/* tanda tangan */}
      </Col>
    </Row>
  );
}
