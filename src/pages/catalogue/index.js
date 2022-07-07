import {Layout,Image,Row,Col,Typography,Button,List,} from "antd";
import MainFooter from "../../components/main-footer";
const {Header,Footer,Content} = Layout
import Navbar from "../../components/main-navbar";

export default function CataloguePage() {
    return(
        <Layout>
            <Header>
                <Navbar/>
            </Header>
            <Content>

            </Content>
            <Footer>
                <MainFooter/>
            </Footer>
        </Layout>
    )
}