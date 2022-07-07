import { Carousel, Row, Col } from 'antd';
import React from 'react';
import ProductCard from '../product-card';
const contentStyle = {
    height: '400px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

export default function CarouselProductCard() {
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    }
    
    return (
        <>
            <Carousel afterChange={onChange}>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>

        </>
    )

}