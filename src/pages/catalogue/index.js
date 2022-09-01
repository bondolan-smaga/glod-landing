import { Row, Col } from "antd";
import {
  Breadcrumbs,
  MainLayout,
  Newslettersignup,
  ProductCard,
  ProductFilter,
} from "../../components";

export default function CataloguePage() {
  return (
    <MainLayout meta={{ title: "Catalogue || GLOD" }}>
      <Row style={{ margin: "15px 30px" }}>
        <Breadcrumbs />
      </Row>
      <Row style={{ margin: "15px 30px" }}>
        <ProductFilter />
      </Row>
      <Row
        span={24}
        gutter={[0, 0]}
        style={{ backgroundColor: "transparent", margin: "15px 15px" }}
      >
        <Col span={8}>
          <ProductCard />
        </Col>
        <Col span={8}>
          <ProductCard />
        </Col>
        <Col span={8}>
          <ProductCard />
        </Col>
      </Row>
      <Row
        span={24}
        gutter={[0, 0]}
        style={{ backgroundColor: "transparent", margin: "15px 15px" }}
      >
        <Col span={8}>
          <ProductCard />
        </Col>
        <Col span={8}>
          <ProductCard />
        </Col>
        <Col span={8}>
          <ProductCard />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Newslettersignup />
        </Col>
      </Row>
    </MainLayout>
  );
}
