import { Row, Col } from "antd";
import { MainLayout, Newslettersignup, TrendingFooter, Breadcrumbs, ProductFilter } from "../../components";

// import BRSFC01 from "../../assets/GLOD WEB/BRSFC 01.jpg"
// import BRSFC02 from "../../assets/GLOD WEB/BRSFC 02.jpg"
// import BRSFC03 from "../../assets/GLOD WEB/BRSFC 03.jpg"
// import BRSFC04 from "../../assets/GLOD WEB/BRSFC 04.jpg"
// import BRSFC05 from "../../assets/GLOD WEB/BRSFC 05.jpg"


// const catalogueProducts = [
//     {
//         id: 1,
//         tags: ['BRSFC', 'jersey'],
//         image: BRSFC01,
//         product: 'BRSFC 01',
//         price: 50000,
//         colors: ['red', 'black']
//     },
//     {
//         id: 2,
//         tags: ['BRSFC', 'jersey'],
//         image: BRSFC02,
//         product: 'BRSFC 01',
//         price: 50000,
//         colors: ['red', 'black']
//     },
//     {
//         id: 3,
//         tags: ['BRSFC', 'jersey'],
//         image: BRSFC03,
//         product: 'BRSFC 01',
//         price: 50000,
//         colors: ['red', 'black']
//     },
//     {
//         id: 4,
//         tags: ['BRSFC', 'jersey'],
//         image: BRSFC04,
//         product: 'BRSFC 01',
//         price: 50000,
//         colors: ['red', 'black']
//     },
//     {
//         id: 5,
//         tags: ['BRSFC', 'jersey'],
//         image: BRSFC05,
//         product: 'BRSFC 01',
//         price: 50000,
//         colors: ['red', 'black']
//     }


// ]

export default function CataloguePage(props) {
    // const tagFilter = ['jersey']
    // let filteredProducts = []

    // dipanggill di fitur search/*
    // function displayProductWithTag() { 
    //     for (let i = 0; i < catalogueProducts.length; i++) {
    //         for (let j = 0; j < catalogueProducts[i].tags.length; j++) {
    //             for (let k = 0; k < tagFilter.length; k++) {
    //                 if (catalogueProducts[i].tags[j] == tagFilter[k]) {
    //                     console.log(catalogueProducts[i].tags[j])
    //                     filteredProducts.push(catalogueProducts[i])
    //                     console.log(filteredProducts)
    //                     console.log('iso')
    //                 }
    //             }
    //         }
    //     }

    // }

    return (
        <MainLayout meta={{ title: 'Catalogue || GLOD' }}>
            <Row style={{ margin: '15px 30px' }}>
                <Breadcrumbs />
            </Row>
            <Row style={{ margin: '15px 30px' }}>
                <ProductFilter />
            </Row>
            <Row span={24} gutter={[8, 0]} style={{ backgroundColor: 'transparent', margin: '15px 15px' }}>
                <Col span={6}>
                    {/* {
                        filteredProducts.map((filteredProduct => {
                            const { id, image, tags, product, price, colors } = filteredProduct
                            return (
                                <ProductCard
                                    id={id}
                                    image={image}
                                    tags={tags}
                                    product={product}
                                    price={price}
                                    colors={colors}
                                />
                            )
                        }))
                    } */}
                </Col>
            </Row>
            <Row span={24} justify='center'>
                <Col>
                    <TrendingFooter />
                    <Newslettersignup />
                </Col>
            </Row>
        </MainLayout>
    )
}