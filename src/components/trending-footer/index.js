import { Row, Col, Typography, List } from "antd"
const { Title } = Typography;
const trendingList = ["New in", "Sustainability", "Sportswear", "Sneakers"];

export default function TrendingFooter() {
    return (
        <>
            <Row
                style={{
                    margin: "100px 235px",
                }}
            >
                <Col span={24}>
                    <Title
                        style={{
                            textTransform: "uppercase",
                        }}
                        level={3}
                    >
                        What's trending at the moment
                    </Title>
                </Col>
                <Col span={24}>
                    <Row>
                        <Col span={8}>
                            <List
                                header={
                                    <Title style={{ marginBottom: 0 }} level={5}>
                                        Popular men's
                                    </Title>
                                }
                                split={false}
                                dataSource={trendingList}
                                renderItem={(item) => <List.Item>{item}</List.Item>}
                            />
                        </Col>
                        <Col span={8}>
                            <List
                                header={
                                    <Title style={{ marginBottom: 0 }} level={5}>
                                        Popular men's
                                    </Title>
                                }
                                split={false}
                                dataSource={trendingList}
                                renderItem={(item) => <List.Item>{item}</List.Item>}
                            />
                        </Col>
                        <Col span={8}>
                            <List
                                header={
                                    <Title style={{ marginBottom: 0 }} level={5}>
                                        Popular men's
                                    </Title>
                                }
                                split={false}
                                dataSource={trendingList}
                                renderItem={(item) => <List.Item>{item}</List.Item>}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    )
}