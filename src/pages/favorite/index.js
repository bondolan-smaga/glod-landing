import { Row, Col } from "antd";

import { seo_meta } from "../../constants/seo";
import { MainLayout } from "../../components";
import FavoriteLIst from "../../components/favorite-list";
import "./index.css";

export default function FavoritePage() {
  return (
    <MainLayout meta={seo_meta.favorite.title}>
      <Row>
        <Col>
        <div>halo</div>
          <FavoriteLIst />
        </Col>
      </Row>
    </MainLayout>
  );
}
