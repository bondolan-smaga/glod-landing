import { Col, Row } from "antd";

import {
  Banner,
  CarouselProductCard,
  MainLayout,
  Newslettersignup,
} from "../../components";
import { seo_meta } from "../../constants/seo";

export default function HomePage() {
  return (
    <MainLayout meta={seo_meta.home}>
      {/* MAIN CONTENTS */}
      <Row>
        <Col span={24}>
          <Banner
            style={{ margin: "0 0" }}
            background={
              "/assets/banner 05 reunion.png"
            }
          />
        </Col>
        {/* BEST OF SALE */}
        <Col span={24}>
          <Row>
            <Col span={24}>
              <CarouselProductCard tag={"BEST OF SALE"} show={4} scroll={4} />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Banner
            style={{ margin: "30px 0" }}
            background={
              "/assets/banner 02 madya.png"
            }
          />
        </Col>
        {/* NEW SEASON OF FAVOURITES */}
        <Col span={24}>
          <Row span={24}>
            <Col span={24} style={{ margin: "10px 0" }}>
              <CarouselProductCard
                tag={"NEW SEASON FAVOURITES"}
                show={4}
                scroll={4}
              />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Banner
            style={{ margin: "30px 0" }}
            background={
              "/assets/banner 04 hoodie.png"
            }
          />
        </Col>
      </Row>
      {/* recommendation */}
      <CarouselProductCard
        tag={"GET INSPIRED BY THIS STYLE"}
        show={4}
        scroll={4}
      />
      <Row>
        <Col xs={{ span: 24 }} xl={{ span: 24 }}>
          <Newslettersignup />
        </Col>
      </Row>
    </MainLayout>
  );
}
