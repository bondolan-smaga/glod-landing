import { Row, Col } from "antd";
import { MainLayout, Newslettersignup, ProductCard, TrendingFooter } from "../../components";
import Breadcrumbs from "../../components/breadcrumbs";
import ProductFilter from "../../components/product-filter";
// const { Header, Footer, Content } = Layout

export default function CataloguePage() {
    return (
        // <Layout>
        //     <Header style={{ backgroundColor: 'white' }}>
        //         <Navbar />
        //     </Header>
        //     <Content style={{ margin: '45px 45px' }}>
        //         <Breadcrumbs />
        //         <ProductFilter />
        //     </Content>
        //     <Footer>
        //         <Newslettersignup />
        //         <MainFooter />
        //     </Footer>
        // </Layout>
        <MainLayout meta={{ title: 'Catalogue || GLOD' }}>
            <Row style={{ margin: '15px 30px' }}>
                <Breadcrumbs />
            </Row>
            <Row style={{ margin: '15px 30px' }}>
                <ProductFilter />
            </Row>
            <Row span={24} gutter={[0,0]} style={{ backgroundColor: 'transparent', margin: '15px 15px'}}>
                <Col span={8}>
                    <ProductCard />
                </Col>
                <Col span={8}>
                    <ProductCard />
                </Col>
                <Col span={8}>
                    <ProductCard />
                </Col>
            </Row>
            <Row span={24} gutter={[0,0]} style={{ backgroundColor: 'transparent', margin: '15px 15px'}}>
                <Col span={8}>
                    <ProductCard />
                </Col>
                <Col span={8}>
                    <ProductCard />
                </Col>
                <Col span={8}>
                    <ProductCard />
                </Col>
            </Row>

            <Row span={24} justify='center'>
                <Col>
                    <TrendingFooter/>
                    <Newslettersignup/>                
                </Col>
            </Row>
        </MainLayout>
    )
}