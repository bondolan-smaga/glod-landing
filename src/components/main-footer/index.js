import { Link } from "react-router-dom";
import { Row, Col, Typography} from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Footer } from "antd/lib/layout/layout";

const { Title } = Typography;

export default function MainFooter() {
  return (
    <Row>
      <Col xs={{ span: 12 }} xl={{ span: 12 }}>
        <img src="" alt="failed load image">
        </img>
        <Title
          style={{
            width: "200px",
            textAlign: "center",
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Title>
      </Col>
      <Col>
        <Title level={3}>Social</Title>
        <Row style={{ fontSize: "30px" }}>
          <Link to="/">
            <FacebookOutlined style={{ marginRight: '10px' }} />
          </Link>
          <Link to="/">
            <TwitterOutlined style={{ marginRight: '10px' }} />
          </Link>
          <Link to="/">
            <InstagramOutlined style={{ marginRight: '10px' }} />
          </Link>
          <Link to="/">
            <YoutubeOutlined style={{ marginRight: '10px' }} />
          </Link>
        </Row>
        {/* tanda tangan */}
      </Col>
    </Row>
  )
}
