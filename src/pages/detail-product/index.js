import { Col, Row, Image, Carousel, Dropdown, Menu, message, Button, Space } from "antd";
import { Breadcrumbs, MainLayout } from "../../components";
import { DownOutlined, UserOutlined } from '@ant-design/icons'

const contentStyle = {
    height: '450px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#eaeaea',
};

const handleMenuClick = (e) => {
    message.info('Click on menu item.');
    console.log('click', e);
};

const menu = (
    <Menu
        onClick={handleMenuClick}
        items={[
            {
                label: '1st menu item',
                key: '1',
                icon: <UserOutlined />,
            },
            {
                label: '2nd menu item',
                key: '2',
                icon: <UserOutlined />,
            },
            {
                label: '3rd menu item',
                key: '3',
                icon: <UserOutlined />,
            },
        ]}
    />)

const produckDetail = (
    `Quality: Grey: 95% cotton, 5% viscose - other colors: 100% cotton Item No. 212571-7165`
    )

export default function DetailProductPage() {
    return (
        <MainLayout>
            <Row>
                <Breadcrumbs>
                </Breadcrumbs>
            </Row>
            <Row gutter={[24, 8]}>
                <Col span={8}>
                    <Carousel autoplay>
                        <div>
                            <h3 style={contentStyle}>
                                <Image style={{
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
                                <Image style={{
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
                                <Image style={{
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
                                <Image style={{
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
                <Col span={8}>
                    <Row>
                        <Col style={{
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
                        }}>
                            Unisex
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{
                            float: "left",
                            fontSize: "12px",
                            letterSpacing: ".5px",
                            fontFamily: "Gibson-SemiBold, sans-serif",
                            fontWeight: "bold",
                            textTransform: "uppercase",
                            color: "rgba(0,0,0,.45)"
                        }}>
                            HMLLEGACY SWEATSHIRT
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{
                            color: "#000",
                            fontSize: "20px",
                            letterSpacing: "0.5px",
                            lineHeight: "25px",
                            fontWeight: "bold",
                            marginBottom: "10px",
                            textTransform: "uppercase",
                            fontFamily: "Gibson-SemiBold, sans-serif",
                        }}>
                            SWEETSHIRT
                        </Col>
                    </Row>
                    <Row>
                        <Col span={2} style={{
                            backgroundColor: "#d03a3a",
                            color: "#fff",
                            fontSize: "12px",
                            letterSpacing: ".5px",
                            padding: "5px 5px 0px 5px",
                            fontFamily: "Gibson-SemiBold, sans-serif",
                            fontWeight: "bold",
                            textAlign: "center",
                            marginRight: "10px",
                        }}>
                            -50%
                        </Col>
                        <Col style={{
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
                        <Col style={{
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
                        <Col>
                            <Dropdown overlay={produckDetail} trigger={['click']}>
                                <a onClick={e => e.preventDefault()}>
                                    <Space>
                                        Product Detail
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </Col>
                    </Row>
                </Col>
                <Col span={8}>
                    <Dropdown overlay={menu}>
                        <Button>
                            <Space>
                                Button
                                <DownOutlined />
                            </Space>
                        </Button>
                    </Dropdown>
                </Col>
            </Row >
        </MainLayout >
    )
}