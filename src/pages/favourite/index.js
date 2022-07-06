import {Layout} from "antd"
import FavouriteLIst from "../../components/favourite-product-card"
import Navbar from "../../components/main-navbar"
import ProductCard from "../../components/product-card"

const {Header,Content,Footer} = Layout

export default function FavouritePage() {
    
    return (
        <>
        <Layout>
            <Header>
                <Navbar/>
            </Header>
            <Content>
                <FavouriteLIst/>    
                <ProductCard/>
            </Content>
            <Footer>

            </Footer>
        </Layout>
        </>
    )
}