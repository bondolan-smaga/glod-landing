
import { Layout} from "antd";
import Breadcrumbs from "../../components/breadcrumbs";
import MainFooter from "../../components/main-footer";
import Navbar from "../../components/main-navbar";
import Newslettersignup from "../../components/newsletter-signup";
import ProductFilter from "../../components/product-filter";
const { Header, Footer, Content } = Layout

export default function CataloguePage() {
    return (
        <Layout>
            <Header style={{ backgroundColor: 'white' }}>
                <Navbar />
            </Header>
            <Content style={{ margin: '45px 45px' }}>
                <Breadcrumbs />
                <ProductFilter />
            </Content>
            <Footer>
                <Newslettersignup />
                <MainFooter />
            </Footer>
        </Layout>
    )
}