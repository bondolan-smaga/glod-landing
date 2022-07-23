import { Carousel, Row, Col, Typography, Button } from 'antd';
import { React, useRef } from 'react';
import {ProductCard} from '../../components/index';
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons"
import "./index.css"

import BRSFC01 from "../../assets/GLOD WEB/BRSFC 01.jpg"
import BRSFC02 from "../../assets/GLOD WEB/BRSFC 02.jpg"
import BRSFC03 from "../../assets/GLOD WEB/BRSFC 03.jpg"
import BRSFC04 from "../../assets/GLOD WEB/BRSFC 04.jpg"
import BRSFC05 from "../../assets/GLOD WEB/BRSFC 05.jpg"

const { Title } = Typography
const carouselProducts = [
    {
      id: 1,
      image: BRSFC01,
      product: 'BRSFC 01',
      price: 50000,
      colors: '3'
    },
  
    {
      id: 2,
      product: 'BRSFC 02',
      image: BRSFC02,
      price: 50000,
      colors: '3'
    },
  
    {
      id: 3,
      image: BRSFC03,
      product: 'BRSFC 03',
      price: 50000,
      colors: '3'
    },
    {
      id: 4,
      image: BRSFC04,
      product: 'BRSFC 04',
      price: 50000,
      colors: '3'
    },
    {
      id: 5,
      image: BRSFC05,
      product: 'BRSFC 05',
      price: 50000,
      colors: '3'
    }
  ]



export default function CarouselProductCard(props) {
    const slider = useRef()

    return (
        <Row id='carousel-row' style={{marginTop:'60px'}}>
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
                    slidesToShow={props.show}
                    slidesToScroll={props.scroll}
                >
                    {
                        carouselProducts.map((e) => {
                            const {id, image,product, price,colors} = e
                            return (
                                <ProductCard id={id} image={image} product={product} price={price} colors={colors}/>
                            )
                    })}
                </Carousel>
            </Col>
        </Row>
    )

}