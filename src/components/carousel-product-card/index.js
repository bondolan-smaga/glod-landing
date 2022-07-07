import { Carousel, Row, Col, Typography, Button, Slider } from 'antd';
import { React, useRef } from 'react';
import ProductCard from '../product-card';
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons"
const { Title } = Typography

const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export default function CarouselProductCard() {
    // const onChange = (currentSlide) => {
    //     console.log(currentSlide);
    // }
    const slider = useRef()


    return (
        <>
            <Col span={18} style={{ marginTop: '100px', marginLeft: '100px' }}>
                <Row style={{ display: 'flex', justifyContent: 'center' }}>
                    <Title
                        style={{
                            textTransform: "uppercase",
                            display: "inline-block",
                            marginRight: "auto",
                        }}
                        level={3}
                    >
                        YOU MAY ALSO LIKE
                    </Title>
                    <div style={{marginLeft:'auto'}}>
                        <Button onClick={e => { slider.current.prev(e) }} icon={<DoubleLeftOutlined />}></Button>
                        <Button onClick={e => { slider.current.next(e) }} style={{ color: 'white', backgroundColor: 'black' }} icon={<DoubleRightOutlined />}></Button>
                    </div>
                </Row>
            </Col>
            <Carousel style={{margin:'0px 55px'}}
                ref={ref => {
                    console.log(ref, 'iki iso');
                    slider.current = ref
                }}
                slidesToShow={4}
                slidesToScroll = {4}
            >
                {
                    Array.apply(null,Array(12)).map((product, i) => (
                        <ProductCard key={i} /> 
                    ))
                }
            </Carousel>

        </>
    )

}