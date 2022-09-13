import { Row, Col } from "antd";
import { useSearchParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  MainLayout,
  Newslettersignup,
  ProductFilter,
  ProductCard,
} from "../../components";
import { seo_meta } from "../../constants/seo";
import { catalogueProducts } from "../../constants/products";

export default function CataloguePage() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    filterProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  function filterProducts() {
    let query = searchParams.get("q");
    if (!query) {
      query = "";
    }

    let filtered = catalogueProducts.filter((v) =>
      v.name.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredProducts([...filtered]);
  }

  return (
    <MainLayout meta={seo_meta.catalogue}>
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
            const { id, image, tags, name, price, colors } = filteredProduct;
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
                  product={name}
                  price={price}
                  colors={colors}
                />
              </Col>
            );
          })}
        </Col>
        <Col span={24}>
          <Newslettersignup />
        </Col>
      </Row>
    </MainLayout>
  );
}
