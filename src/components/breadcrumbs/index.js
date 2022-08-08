import { Breadcrumb, Row } from "antd";
import {
  DoubleLeftOutlined
} from '@ant-design/icons';

export default function Breadcrumbs() {
  return (
    <div>
      <Row span={"24px"}>
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
            <DoubleLeftOutlined style={{
              marginRight: "5px",
              fontSize: "12px",
            }} />
            BACK
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">MEN</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">MEN'S CLOTHING</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>SWEAT SHIRT</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
    </div>
  );
}
