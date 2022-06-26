import { useState } from "react";
import { Layout, Menu, Image } from "antd";

const { Header, Footer, Content } = Layout;

const items = [
  {
    label: "Home",
    key: "home",
  },
  {
    label: "People",
    key: "people",
  },
  {
    label: "Planet",
    key: "planet",
  },
  {
    label: "Purpose",
    key: "purpose",
  },
  {
    label: "Materials",
    key: "materials",
  },
];

export default function AboutPage() {
  const [current, setCurrent] = useState("mail");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Layout>
      <Header style={{
        backgroundColor: "white"
      }}>
        <h2>MAIN NAVBAR</h2>
      </Header>
      <Header style={{
        backgroundColor: "#ebebeb"
      }}>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
          style={{
            justifyContent: "center",
            backgroundColor: "#ebebeb",
            textTransform: "uppercase",
          }}
        />
      </Header>
      <Content>
        <Image src="https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Library-Sites-hummel-shared/default/dw50f4ac1a/Company Karma/1480c650_Karma_Videoposter.jpg" />
      </Content>
    </Layout>
  );
}
