import {Link} from "react-router-dom"
import { Breadcrumb, Row, Col, Button } from "antd";
import {
  DoubleLeftOutlined
} from '@ant-design/icons';

export default function Breadcrumbs(props) {
  return (
    <Row>
      <Col span={24}>
        <Breadcrumb
          style={{
            lineHeight: "16px",
            letterSpacing: ".5px",
            fontFamily: "Gibson-SemiBold,sans-serif",
            textTransform: "uppercase",
            marginBottom: "20px",
            color: "black",
            fontSize: "12px",
            fontWeight: "bold",
            verticalAlign: "middle",
            textAlign: "center",
          }}
        >
          <Breadcrumb.Item>
            <Button>
              <DoubleLeftOutlined style={{
                marginRight: "5px",
                fontSize: "12px",
              }} />
              BACK
            </Button>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/catalogue/jerseys" >Jerseys</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to="/catalogue/accessories" >Accssories</Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>SWEAT SHIRT</Breadcrumb.Item>
        </Breadcrumb>
      </Col>
    </Row>
  );
}
