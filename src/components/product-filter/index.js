import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Col, Dropdown, Menu, Row, Space } from "antd";
// import { FilterOutlined } from "@ant-design/icons";
import "./index.scss";
// import SubMenu from "antd/lib/menu/SubMenu";
// import MenuItem from "antd/lib/menu/MenuItem";

const size = (
  <Menu
    style={{
      color: "black",
      fontFamily: "Gibson-SemiBold, sans-serif",
      lineHeight: "14px",
      fontWeight: "400",
    }}
    items={[
      {
        label: <Link to="/catalogue">XS</Link>,
        key: "0",
      },
      {
        label: <Link to="/catalogue">S</Link>,
        key: "1",
      },
      {
        label: <Link to="/catalogue">M</Link>,
        key: "3",
      },
    ]}
  />
);
const colour = (
  <Menu
    style={{
      color: "black",
      fontFamily: "Gibson-SemiBold, sans-serif",
      lineHeight: "14px",
      fontWeight: "400",
    }}
    items={[
      {
        label: <Link to="/catalogue">Beige</Link>,
        key: "0",
      },
      {
        label: <Link to="/catalogue">Black</Link>,
        key: "1",
      },
      {
        label: <Link to="/catalogue">Blue</Link>,
        key: "3",
      },
    ]}
  />
);
const fitting = (
  <Menu
    style={{
      color: "black",
      fontFamily: "Gibson-SemiBold, sans-serif",
      lineHeight: "14px",
      fontWeight: "400",
    }}
    items={[
      {
        label: <Link to="/catalogue">Loose</Link>,
        key: "0",
      },
      {
        label: <Link to="/catalogue">Regular</Link>,
        key: "1",
      },
      {
        label: <Link to="/catalogue">Slim</Link>,
        key: "3",
      },
    ]}
  />
);
const price = (
  <Menu
    style={{
      color: "black",
      fontFamily: "Gibson-SemiBold, sans-serif",
      lineHeight: "14px",
      fontWeight: "400",
    }}
    items={[
      {
        label: <Link to="/catalogue">10.0000</Link>,
        key: "0",
      },
      {
        label: <Link to="/catalogue">20.000</Link>,
        key: "1",
      },
      {
        label: <Link to="/catalogue">30.000</Link>,
        key: "3",
      },
    ]}
  />
);
const features = (
  <Menu
    style={{
      color: "black",
      fontFamily: "Gibson-SemiBold, sans-serif",
      lineHeight: "14px",
      fontWeight: "400",
    }}
    items={[
      {
        label: <Link to="/catalogue">Antibacterial</Link>,
        key: "0",
      },
      {
        label: <Link to="/catalogue">BCI</Link>,
        key: "1",
      },
      {
        label: <Link to="/catalogue">BeeCool</Link>,
        key: "3",
      },
    ]}
  />
);

// const filterButton = (
//   <Menu>
//     <SubMenu title="SIZE">
//       <MenuItem id="filter-list">XS</MenuItem>
//       <MenuItem id="filter-list">S</MenuItem>
//       <MenuItem id="filter-list">M</MenuItem>
//     </SubMenu>
//     <SubMenu title="COLOUR">
//       <MenuItem id="filter-list">RED</MenuItem>
//       <MenuItem id="filter-list">BLACK</MenuItem>
//       <MenuItem id="filter-list">BLUE</MenuItem>
//     </SubMenu>
//     <SubMenu title="FITTING">
//       <MenuItem id="filter-list">LOOSE</MenuItem>
//       <MenuItem id="filter-list">REGULAR</MenuItem>
//       <MenuItem id="filter-list">SLIM</MenuItem>
//     </SubMenu>
//     <SubMenu title="FEATURES">
//       <MenuItem id="filter-list">ANTI BACTERIAL</MenuItem>
//       <MenuItem id="filter-list">BCI</MenuItem>
//       <MenuItem id="filter-list">BEECOOL</MenuItem>
//     </SubMenu>
//     <SubMenu title="PRICE">
//       <MenuItem id="filter-list">Rp 15.000</MenuItem>
//       <MenuItem id="filter-list">Rp 30.000</MenuItem>
//       <MenuItem id="filter-list">Rp 50.000</MenuItem>
//     </SubMenu>
//   </Menu>
// );

export default function ProductFilter() {
  return (
    // <Row>
    <Row span={24} gap="small" className="filter-btn-row">
      <Col
        style={{
          paddingLeft: "8px",
        }}
      >
        <Dropdown overlay={size} trigger={["click"]}>
          <a href="/" onClick={(e) => e.preventDefault()}>
            <Space
              style={{
                color: "black",
                fontFamily: "Gibson-SemiBold, sans-serif",
                lineHeight: "14px",
                fontWeight: "400",
              }}
            >
              Size
              <DownOutlined style={{ marginRight: "20px" }} />
            </Space>
          </a>
        </Dropdown>
        <Dropdown overlay={colour} trigger={["click"]}>
          <a href="/" onClick={(e) => e.preventDefault()}>
            <Space
              style={{
                color: "black",
                fontFamily: "Gibson-SemiBold, sans-serif",
                lineHeight: "14px",
                fontWeight: "400",
              }}
            >
              Colour
              <DownOutlined style={{ marginRight: "20px" }} />
            </Space>
          </a>
        </Dropdown>
        <Dropdown overlay={fitting} trigger={["click"]}>
          <a href="/" onClick={(e) => e.preventDefault()}>
            <Space
              style={{
                color: "black",
                fontFamily: "Gibson-SemiBold, sans-serif",
                lineHeight: "14px",
                fontWeight: "400",
              }}
            >
              Fitting
              <DownOutlined style={{ marginRight: "20px" }} />
            </Space>
          </a>
        </Dropdown>
        <Dropdown overlay={price} trigger={["click"]}>
          <a href="/" onClick={(e) => e.preventDefault()}>
            <Space
              style={{
                color: "black",
                fontFamily: "Gibson-SemiBold, sans-serif",
                lineHeight: "14px",
                fontWeight: "400",
              }}
            >
              Price
              <DownOutlined style={{ marginRight: "20px" }} />
            </Space>
          </a>
        </Dropdown>
        <Dropdown overlay={features} trigger={["click"]}>
          <a href="/" onClick={(e) => e.preventDefault()}>
            <Space
              style={{
                color: "black",
                fontFamily: "Gibson-SemiBold, sans-serif",
                lineHeight: "14px",
                fontWeight: "400",
              }}
            >
              Features
              <DownOutlined style={{ marginRight: "20px" }} />
            </Space>
          </a>
        </Dropdown>
      </Col>
      {/* </Row>
<Col span={4}>
        <Dropdown
          className="filter-btn"
          overlay={filterButton}
          trigger={["click"]}
          placement={"bottomRight"}
        >
          <Button>
            <FilterOutlined />
          </Button>
        </Dropdown>
      </Col> */}
    </Row>
  );
}
