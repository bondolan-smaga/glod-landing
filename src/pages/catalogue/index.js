
import {Layout,Image,Row,Col,Typography,Button,List,} from "antd";
import Breadcrumbs from "../../components/breadcrumbs";
import CarouselProductCard from "../../components/carousel-product-card";
import MainFooter from "../../components/main-footer";
import Navbar from "../../components/main-navbar";
const {Header,Footer,Content} = Layout

export default function CataloguePage() {
    return(
        <Layout>
            <Header style={{backgroundColor:'white'}}>
                <Navbar/>
            </Header>
            <Content style={{margin:'45px 45px'}}>
            <Breadcrumbs/>
            </Content>
            <Footer>
                <MainFooter/>
            </Footer>
        </Layout>
    )
}