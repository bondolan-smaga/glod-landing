import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Row, Space } from "antd";

export default function ProductFilter() {
  const size = (
    <Menu
      style={{
        color: "black",
        fontSize: "14px",
        fontFamily: "Gibson-SemiBold, sans-serif",
        lineHeight: "14px",
        textTransform: "none",
        fontWeight: "400",
      }}
      items={[
        {
          label: <a href="link">XS</a>,
          key: "0",
        },
        {
          label: <a href="link">S</a>,
          key: "1",
        },
        {
          label: <a href="link">M</a>,
          key: "3",
        },
      ]}
    />
  );
  const colour = (
    <Menu
      style={{
        color: "black",
        fontSize: "14px",
        fontFamily: "Gibson-SemiBold, sans-serif",
        lineHeight: "14px",
        textTransform: "none",
        fontWeight: "400",
      }}
      items={[
        {
          label: <a href="link">Beige</a>,
          key: "0",
        },
        {
          label: <a href="link">Black</a>,
          key: "1",
        },
        {
          label: <a href="link">Blue</a>,
          key: "3",
        },
      ]}
    />
  );
  const fitting = (
    <Menu
      style={{
        color: "black",
        fontSize: "14px",
        fontFamily: "Gibson-SemiBold, sans-serif",
        lineHeight: "14px",
        textTransform: "none",
        fontWeight: "400",
      }}
      items={[
        {
          label: <a href="link">Loose</a>,
          key: "0",
        },
        {
          label: <a href="link">Regular</a>,
          key: "1",
        },
        {
          label: <a href="link">Slim</a>,
          key: "3",
        },
      ]}
    />
  );
  const price = (
    <Menu
      style={{
        color: "black",
        fontSize: "14px",
        fontFamily: "Gibson-SemiBold, sans-serif",
        lineHeight: "14px",
        textTransform: "none",
        fontWeight: "400",
      }}
      items={[
        {
          label: <a href="link">10.0000</a>,
          key: "0",
        },
        {
          label: <a href="link">20.000</a>,
          key: "1",
        },
        {
          label: <a href="link">30.000</a>,
          key: "3",
        },
      ]}
    />
  );
  const features = (
    <Menu
      style={{
        color: "black",
        fontSize: "14px",
        fontFamily: "Gibson-SemiBold, sans-serif",
        lineHeight: "14px",
        textTransform: "none",
        fontWeight: "400",
      }}
      items={[
        {
          label: <a href="link">Antibacterial</a>,
          key: "0",
        },
        {
          label: <a href="link">BCI</a>,
          key: "1",
        },
        {
          label: <a href="link">BeeCool</a>,
          key: "3",
        },
      ]}
    />
  );
  return (
    <div>
      <Row span={24}>
        <Dropdown overlay={size} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space
              style={{
                color: "black",
                fontSize: "14px",
                fontFamily: "Gibson-SemiBold, sans-serif",
                lineHeight: "14px",
                textTransform: "none",
                fontWeight: "400",
                marginRight: "30px",
              }}
            >
              Size
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <Dropdown overlay={colour} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space
              style={{
                color: "black",
                fontSize: "14px",
                fontFamily: "Gibson-SemiBold, sans-serif",
                lineHeight: "14px",
                textTransform: "none",
                fontWeight: "400",
                marginRight: "30px",
              }}
            >
              Colour
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <Dropdown overlay={fitting} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space
              style={{
                color: "black",
                fontSize: "14px",
                fontFamily: "Gibson-SemiBold, sans-serif",
                lineHeight: "14px",
                textTransform: "none",
                fontWeight: "400",
                marginRight: "30px",
              }}
            >
              Fitting
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <Dropdown overlay={price} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space
              style={{
                color: "black",
                fontSize: "14px",
                fontFamily: "Gibson-SemiBold, sans-serif",
                lineHeight: "14px",
                textTransform: "none",
                fontWeight: "400",
                marginRight: "30px",
              }}
            >
              Price
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        <Dropdown overlay={features} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space
              style={{
                color: "black",
                fontSize: "14px",
                fontFamily: "Gibson-SemiBold, sans-serif",
                lineHeight: "14px",
                textTransform: "none",
                fontWeight: "400",
                marginRight: "30px",
              }}
            >
              Features
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </Row>
    </div>
  );
}
