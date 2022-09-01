import { Col, Row, Image, Carousel, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

import { Breadcrumbs, MainLayout } from "../../components";
import { seo_meta } from "../../constants/seo";

const contentStyle = {
  height: "450px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#eaeaea",
};

// const handleMenuClick = (e) => {
//     message.info('Click on menu item.');
//     console.log('click', e);
// };

// const size = (
//     <Menu
//         onClick={handleMenuClick}
//         items={[
//             {
//                 label: 'S',
//                 key: '1',
//                 icon: <UserOutlined />,
//             },
//             {
//                 label: 'M',
//                 key: '2',
//                 icon: <UserOutlined />,
//             },
//             {
//                 label: 'L',
//                 key: '3',
//                 icon: <UserOutlined />,
//             },
//         ]}
//     />)

const produckDetail = `Unisex. Quality: 100% acrylic. Item No. 212571-7165`;

// const sizeAndFit = (
//     `Fitting: Regular`
// )

// const deliveryAndReturns = (
//     `Free shipping on orders above 120 EUR. Easy returns.`
// )

export default function DetailProductPage() {
  return (
    <MainLayout meta={seo_meta.detailProduct.title}>
      <Row>
        <Breadcrumbs></Breadcrumbs>
      </Row>
      <Row gutter={[24, 8]}>
        <Col span={8}>
          <Carousel autoplay>
            <div>
              <h3 style={contentStyle}>
                <Image
                  style={{
                    backgroundColor: "#eaeaea",
                    marginTop: "6px",
                  }}
                  width={400}
                  src="https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-hummel-master-catalog/default/dw225cce97/images/packshot/212571-6219.png?sw=514&sh=685&sm=fit&q=80"
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <Image
                  style={{
                    backgroundColor: "#eaeaea",
                    marginTop: "6px",
                  }}
                  width={400}
                  src="https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-hummel-master-catalog/default/dwfb37abc8/images/packshot/212571-6219_1.png?sw=514&sh=685&sm=fit&q=80"
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <Image
                  style={{
                    backgroundColor: "#eaeaea",
                    marginTop: "6px",
                  }}
                  width={400}
                  src="https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-hummel-master-catalog/default/dwe181df31/images/packshot/212571-6219_2.png?sw=514&sh=685&sm=fit&q=80"
                />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <Image
                  style={{
                    backgroundColor: "#eaeaea",
                    marginTop: "6px",
                  }}
                  width={400}
                  src="https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-hummel-master-catalog/default/dw7cc129fd/images/packshot/212571-6219_3.png?sw=514&sh=685&sm=fit&q=80"
                />
              </h3>
            </div>
          </Carousel>
        </Col>
        <Col span={11}>
          <Row>
            <Col
              style={{
                float: "left",
                marginRight: "10px",
                marginBottom: "10px",
                fontSize: "10px",
                letterSpacing: ".5px",
                padding: "3px 5px",
                color: "#fff",
                lineHeight: "10px",
                fontFamily: "Gibson-Medium,sans-serif",
                backgroundColor: "black",
                fontWeight: "bold",
              }}
            >
              Unisex
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                float: "left",
                fontSize: "12px",
                letterSpacing: ".5px",
                fontFamily: "Gibson-SemiBold, sans-serif",
                fontWeight: "bold",
                textTransform: "uppercase",
                color: "rgba(0,0,0,.45)",
              }}
            >
              HMLLEGACY SWEATSHIRT
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                color: "#000",
                fontSize: "20px",
                letterSpacing: "0.5px",
                lineHeight: "25px",
                fontWeight: "bold",
                marginBottom: "10px",
                textTransform: "uppercase",
                fontFamily: "Gibson-SemiBold, sans-serif",
              }}
            >
              SWEETSHIRT
            </Col>
          </Row>
          <Row>
            <Col
              span={2}
              style={{
                backgroundColor: "#d03a3a",
                color: "#fff",
                fontSize: "12px",
                letterSpacing: ".5px",
                padding: "5px 5px 0px 5px",
                fontFamily: "Gibson-SemiBold, sans-serif",
                fontWeight: "bold",
                textAlign: "center",
                marginRight: "10px",
              }}
            >
              -50%
            </Col>
            <Col
              style={{
                color: "#000",
                letterSpacing: "0",
                fontSize: "20px",
                fontFamily: "Gibson-Regular,sans-serif",
                marginRight: "10px",
                textDecoration: "line-through",
              }}
            >
              39,95 €
            </Col>
            <Col
              style={{
                color: "#c00",
                fontFamily: "Gibson-SemiBold, sans-serif",
                letterSpacing: "0",
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              19,97 €
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                marginTop: "10px",
              }}
            >
              A classic style with the hummel® chevron update, this sweater has
              been created using a cotton sweat fabric with a brushed backside
              for increased comfort, softness and warmth. The hmlLEGACY
              SWEATSHIRT is cuffed at the waistband and sleeves to trap the body
              heat in and the cold air out. This style is unisex and fitted on
              men. For women, we recommend choosing one size smaller than you
              normally would.
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                marginTop: "10px",
              }}
            >
              <Dropdown
                overlay={produckDetail}
                trigger={["click"]}
                overlayStyle={{
                  width: "350px",
                }}
              >
                <a href="/" onClick={(e) => e.preventDefault()}>
                  <Space>
                    Product Detail
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
            </Col>
          </Row>
        </Col>
        <Col span={5}>
          <Row>
            <Col>Color:</Col>
          </Row>
          <Row gutter={[8, 8]}>
            <Col span={4}>
              <Image
                style={{
                  backgroundColor: "#eaeaea",
                  marginTop: "6px",
                  marginRight: "10px",
                }}
                width={40}
                src="https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-hummel-master-catalog/default/dw029cc50d/images/packshot/212571-1116.png?sw=40&sh=40&q=70"
              />
            </Col>
            <Col span={4}>
              <Image
                style={{
                  backgroundColor: "#eaeaea",
                  marginTop: "6px",
                  marginRight: "10px",
                }}
                width={40}
                src="https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-hummel-master-catalog/default/dw2b25c34a/images/packshot/212571-2001.png?sw=40&sh=40&q=70"
              />
            </Col>
            <Col span={4}>
              <Image
                style={{
                  backgroundColor: "#eaeaea",
                  marginTop: "6px",
                  marginRight: "10px",
                }}
                width={40}
                src="https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-hummel-master-catalog/default/dwcff952a7/images/packshot/212571-2006.png?sw=40&sh=40&q=70"
              />
            </Col>
            <Col span={4}>
              <Image
                style={{
                  backgroundColor: "#eaeaea",
                  marginTop: "6px",
                  marginRight: "10px",
                }}
                width={40}
                src="https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-hummel-master-catalog/default/dw7d71ae15/images/packshot/212571-3306.png?sw=40&sh=40&q=70"
              />
            </Col>
            <Col span={4}>
              <Image
                style={{
                  backgroundColor: "#eaeaea",
                  marginTop: "6px",
                  marginRight: "10px",
                }}
                width={40}
                src="https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-hummel-master-catalog/default/dw6db60430/images/packshot/212571-6012.png?sw=40&sh=40&q=70"
              />
            </Col>
            <Col span={4}>
              <Image
                style={{
                  backgroundColor: "#eaeaea",
                  marginTop: "6px",
                  marginRight: "10px",
                }}
                width={40}
                src="https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-hummel-master-catalog/default/dw225cce97/images/packshot/212571-6219.png?sw=40&sh=40&q=70"
              />
            </Col>
            <Col span={4}>
              <Image
                style={{
                  backgroundColor: "#eaeaea",
                  marginTop: "6px",
                  marginRight: "10px",
                }}
                width={40}
                src="https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-hummel-master-catalog/default/dw2bdb0e76/images/packshot/212571-7165.png?sw=40&sh=40&q=70"
              />
            </Col>
            <Col span={4}>
              <Image
                style={{
                  backgroundColor: "#eaeaea",
                  marginTop: "6px",
                  marginRight: "10px",
                }}
                width={40}
                src="https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-hummel-master-catalog/default/dw0b4e751a/images/packshot/212571-7429.png?sw=40&sh=40&q=70"
              />
            </Col>
          </Row>
          <Row
            gutter={[0, 0]}
            style={{
              marginTop: "10px",
            }}
          >
            <Col
              span={4}
              style={{
                width: "40px",
                height: "40px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderRadius: "3px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "5px",
              }}
            >
              S
            </Col>
            <Col
              span={4}
              style={{
                width: "40px",
                height: "40px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderRadius: "3px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "5px",
              }}
            >
              M
            </Col>
            <Col
              span={4}
              style={{
                width: "40px",
                height: "40px",
                borderStyle: "solid",
                borderWidth: "1px",
                borderRadius: "3px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "5px",
              }}
            >
              L
            </Col>
          </Row>
        </Col>
      </Row>
    </MainLayout>
  );
}
