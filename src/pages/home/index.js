import { Col, Row } from "antd";

import Banner from "../../components/banner";
import {
  CarouselProductCard,
  MainLayout,
  Newslettersignup,
  TrendingFooter,
} from "../../components";
import { seo_meta } from "../../constants/seo";

export default function HomePage() {
  return (
    <MainLayout meta={seo_meta.home.title}>
      {/* MAIN CONTENTS */}
      <Row>
        <Col span={24}>
          <Banner
            style={{ margin: "0 0" }}
            background={
              "url(https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Library-Sites-hummel-shared/default/dw68b5796f/homepage/1480x650_SPORT_FOOTBALL_1.0.jpg)"
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
              "url(https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Library-Sites-hummel-shared/default/dw68b5796f/homepage/1480x650_SPORT_FOOTBALL_1.0.jpg)"
            }
          />
        </Col>
        <Col span={24}>
          <Row gutter={[8, 0]}>
            <Col xs={{ span: 24 }} xl={{ span: 12 }}>
              <Banner
                style={{ margin: "20px 0" }}
                background={
                  "url(https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Library-Sites-hummel-shared/default/dw68b5796f/homepage/1480x650_SPORT_FOOTBALL_1.0.jpg)"
                }
              />
            </Col>
            <Col xs={{ span: 24 }} xl={{ span: 12 }}>
              <Banner
                style={{ margin: "20px 0" }}
                background={
                  "url(https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Library-Sites-hummel-shared/default/dw68b5796f/homepage/1480x650_SPORT_FOOTBALL_1.0.jpg)"
                }
              />
            </Col>
          </Row>
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
              "url(https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Library-Sites-hummel-shared/default/dw68b5796f/homepage/1480x650_SPORT_FOOTBALL_1.0.jpg)"
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
      {/* trending */}
      <TrendingFooter />
      <Row>
        <Col xs={{ span: 24 }} xl={{ span: 24 }}>
          <Newslettersignup />
        </Col>
      </Row>
    </MainLayout>
  );
}
