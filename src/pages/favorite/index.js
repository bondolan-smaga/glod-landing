import { Row, Col } from "antd";
import { MainLayout } from "../../components";
import FavoriteLIst from "../../components/favorite-list";
import "./index.css"

export default function FavoritePage() {
  return (
    <MainLayout meta={{ title: 'Favorite || GLOD' }}>
      <Row>
        <Col>
          <FavoriteLIst />
        </Col>
      </Row>
    </MainLayout>
  );
}