import { Carousel, Row, Col, Typography, Button } from 'antd';
import { React, useRef } from 'react';
import ProductCard from '../product-card';
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons"
import "./index.css"
const { Title } = Typography



export default function CarouselProductCard(props) {
    const slider = useRef()

    return (
        <Row id='carousel-row' style={{ marginTop: '60px' }}>
            <Col span={24}>
                <Row>
                    <Title id='carousel-tag'
                        style={{
                            textTransform: "uppercase",
                            display: "inline-block",
                            marginRight: "auto",
                        }}
                        level={3}
                    >
                        {props.tag}
                    </Title>
                    <div style={{ marginLeft: 'auto' }}>
                        <Button id='prev-btn' onClick={e => { slider.current.prev(e) }} icon={<DoubleLeftOutlined />}></Button>
                        <Button id='next-btn' onClick={e => { slider.current.next(e) }} style={{ color: 'white', backgroundColor: 'black' }} icon={<DoubleRightOutlined />}></Button>
                    </div>
                </Row>
            </Col>
            <Col span={24}>
                <Carousel
                    ref={ref => {
                        slider.current = ref
                    }}
                    slidesToShow={4}
                    slidesToScroll={4}
                >
                    {
                        Array.apply(null, Array(12)).map((product, i) => (
                            <ProductCard key={i} />
                        ))
                    }
                </Carousel>
            </Col>
        </Row>
    )

}