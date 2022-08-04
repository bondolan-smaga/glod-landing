import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, Menu, Row, Space,Typography } from "antd";
import {FilterOutlined } from "@ant-design/icons";
import "./index.scss"

const {Title} = Typography

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

const filterButton = (
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
        label: 
          <Title level={5}>SIZE</Title>
        ,
        key: "0",
        children: [size]
      },
      {
        label:
        <Title level={5}>COLOUR</Title>
        ,
        key: "1",
        children:[colour]
      },
      {
        label: 
        <Title level={5}>FITTING</Title>
        ,
        key: "3",
        children:[fitting]
      },
      {
        label: (
          <Title level={5}>PRICE</Title>
          ),
        key: "3",
        children:[price]
      },
      {
        label: 
        <Title level={5}>FEATURES</Title>
        ,
        key: "3",
        children:[features]
      },
    ]}
  />
)

export default function ProductFilter() {
  return (
    <Row>
      <Row span={24} className="filter-btn-row">
        <Dropdown overlay={size} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space
              style={{
                color: "black",
                fontSize: "14px",
                fontFamily: "Gibson-SemiBold, sans-serif",
                lineHeight: "14px",
                textTransform: "none",
                fontWeight: "300",
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
      <Dropdown className="filter-btn" overlay={filterButton} trigger={["click"]}>
        <Button>
          <FilterOutlined/>
        </Button>
      </Dropdown>
    </Row>
  );
}
