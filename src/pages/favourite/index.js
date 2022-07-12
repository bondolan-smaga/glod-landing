import { Row, Col } from "antd";
import { MainLayout } from "../../components";
import FavouriteLIst from "../../components/favourite-list";
import "./index.css"

export default function FavouritePage() {
  return (
    <MainLayout meta={{ title: 'Favourite || GLOD' }}>
      <Row span={24}>
        <Col>
          <FavouriteLIst />
        </Col>
      </Row>
    </MainLayout>
  );
}