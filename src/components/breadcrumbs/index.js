import { Link } from "react-router-dom"
import { Breadcrumb, Row, Col} from "antd";
import {
  DoubleLeftOutlined
} from '@ant-design/icons';
import "./index.scss"

export default function Breadcrumbs(props) {
  return (
    <Row>
      <Col span={24}>
        <Breadcrumb
        className="bradcrumbs-tag"
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
            <DoubleLeftOutlined style={{
              marginRight: "5px",
              fontSize: "12px",
            }} />
            BACK
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
