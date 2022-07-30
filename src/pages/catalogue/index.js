import { Row, Col } from "antd";
import { MainLayout, Newslettersignup, Breadcrumbs, ProductFilter, ProductCard } from "../../components";
import { seo_meta } from "../../constants/seo";

import BRSFC01 from "../../assets/GLOD WEB/BRSFC 01.jpg"
import BRSFC02 from "../../assets/GLOD WEB/BRSFC 02.jpg"
import BRSFC03 from "../../assets/GLOD WEB/BRSFC 03.jpg"
import BRSFC04 from "../../assets/GLOD WEB/BRSFC 04.jpg"
import BRSFC05 from "../../assets/GLOD WEB/BRSFC 05.jpg"
import SHINDYO1 from "../../assets/GLOD WEB/SHINDY 00101.jpg"
import SHINDYO2 from "../../assets/GLOD WEB/SHINDY 00102.jpg"
import SHINDYO3 from "../../assets/GLOD WEB/SHINDY 00103.jpg"
import SHINDYO4 from "../../assets/GLOD WEB/SHINDY 00201.jpg"
import SHINDYO5 from "../../assets/GLOD WEB/SHINDY 00202.jpg"
import SHINDYO6 from "../../assets/GLOD WEB/SHINDY 00203.jpg"

const catalogueProducts = [
    {
        id: 1,
        tags: ['BRSFC', 'jersey'],
        image: BRSFC01,
        product: 'BRSFC 01',
        price: 50000,
        colors: ['red', 'black']
    },
    {
        id: 2,
        tags: ['BRSFC', 'jersey'],
        image: BRSFC02,
        product: 'BRSFC 02',
        price: 50000,
        colors: ['red', 'black']
    },
    {
        id: 3,
        tags: ['BRSFC', 'jersey'],
        image: BRSFC03,
        product: 'BRSFC 03',
        price: 50000,
        colors: ['red', 'black']
    },
    {
        id: 4,
        tags: ['BRSFC', 'jersey'],
        image: BRSFC04,
        product: 'BRSFC 04',
        price: 50000,
        colors: ['red', 'black']
    },
    {
        id: 5,
        tags: ['BRSFC', 'jersey'],
        image: BRSFC05,
        product: 'BRSFC 05',
        price: 50000,
        colors: ['red', 'black']
    },
    {
        id: 6,
        tags: ['SHINDY', 'jersey'],
        image: SHINDYO1,
        product: 'SHINDY 01',
        price: 50000,
        colors: ['red', 'black']
    },
    {
        id: 7,
        tags: ['SHINDY', 'jersey'],
        image: SHINDYO2,
        product: 'SHINDY 02',
        price: 50000,
        colors: ['red', 'black']
    },
    {
        id: 8,
        tags: ['SHINDY', 'jersey'],
        image: SHINDYO3,
        product: 'SHINDY 03',
        price: 50000,
        colors: ['red', 'black']
    },
    {
        id: 9,
        tags: ['SHINDY', 'jersey'],
        image: SHINDYO4,
        product: 'SHINDY 04',
        price: 50000,
        colors: ['red', 'black']
    },
    {
        id: 10,
        tags: ['SHINDY', 'jersey'],
        image: SHINDYO5,
        product: 'SHINDY 05',
        price: 50000,
        colors: ['red', 'black']
    },
    {
        id: 11,
        tags: ['SHINDY', 'jersey'],
        image: SHINDYO6,
        product: 'SHINDY 06',
        price: 50000,
        colors: ['red', 'black']
    },

]

export default function CataloguePage(props) {
    const tagFilter = ['jersey']
    let filteredProducts = []

    // dipanggill di fitur search/*
    for (let i = 0; i < catalogueProducts.length; i++) {
        for (let j = 0; j < catalogueProducts[i].tags.length; j++) {
            for (let k = 0; k < tagFilter.length; k++) {
                if (catalogueProducts[i].tags[j] === tagFilter[k]) {
                    console.log(catalogueProducts[i].tags[j])
                    filteredProducts.push(catalogueProducts[i])
                    console.log(filteredProducts)
                    console.log('iso')
                }
            }
        }
    }


    return (
        <MainLayout meta={seo_meta.catalogue.title}>
            <Row style={{ margin: '15px 30px' }}>
                <Breadcrumbs />
            </Row>
            <Row style={{ margin: '15px 30px' }}>
                <ProductFilter />
            </Row>
            <Row>
                <Col span={24} style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        filteredProducts.map((filteredProduct => {
                            const { id, image, tags, product, price, colors } = filteredProduct
                            return (
                                <Col xs={{ span: 12 }} md={{ span: 8 }} lg={{ span: 6 }} xl={{ span: 6 }}>
                                    <ProductCard
                                        id={id}
                                        image={image}
                                        tags={tags}
                                        product={product}
                                        price={price}
                                        colors={colors}
                                    />
                                </Col>
                            )
                        }))
                    }
                </Col>
                <Row span={24} justify='center'>
                </Row>
                <Col span={24}>
                    <Newslettersignup />
                </Col>
            </Row>
        </MainLayout>
    )
}