import { Row, Col } from "antd";
import {
  MainLayout,
  Newslettersignup,
  ProductFilter,
  ProductCard,
} from "../../components";
import { seo_meta } from "../../constants/seo";
import { catalogueProducts } from "../../constants/products"

export default function CataloguePage(props) {
  const tagFilter = ["jersey"];
  let filteredProducts = [];
  // dipanggill di fitur search/*
  for (let i = 0; i < catalogueProducts.length; i++) {
    for (let j = 0; j < catalogueProducts[i].tags.length; j++) {
      for (let k = 0; k < tagFilter.length; k++) {
        if (catalogueProducts[i].tags[j] === tagFilter[k]) {
          filteredProducts.push(catalogueProducts[i]);
        }
      }
    }
  }
  return (
    <MainLayout meta={seo_meta.catalogue}>
      {/* <Row style={{ margin: '15px 5px' }}>
            <Breadcrumbs />
        </Row> */}
      <Row style={{ margin: "15px 5px" }}>
        <ProductFilter />
      </Row>
      <Row>
        <Col
          span={24}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {filteredProducts.map((filteredProduct) => {
            const { id, image, tags, product, price, colors } =
              filteredProduct;
            return (
              <Col
              key={id}
              xs={{ span: 12 }}
              md={{ span: 8 }}
              lg={{ span: 6 }}
              xl={{ span: 6 }}
              >
                <ProductCard
                  id={id}
                  image={image}
                  tags={tags}
                  product={product}
                  price={price}
                  colors={colors}
                />
              </Col>
            );
          })}
        </Col>
        {/* <Row span={24} justify="center"></Row> */}
        <Col span={24}>
          <Newslettersignup />
        </Col>
      </Row>
    </MainLayout>
  );
}
