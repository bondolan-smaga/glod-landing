import { Link } from "react-router-dom";
import { Row, Col, Typography } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import "./index.css"
import logoFooter1 from "../../assets/GLOD WEB/LOGO GLOD MONOCR B.jpg"
import logoFooter2 from "../../assets/GLOD WEB/LOGO GLOD LATN B.jpg"


const { Title } = Typography;

export default function MainFooter() {
  return (
    <Row style={{ backgroundColor: "black", color: 'white' }}>
      <Col id="logofooter" xs={{ span: 12 }} xl={{ span: 8 }} style={{textAlign:'center'}}>
        <img src={logoFooter1} alt="" style={{width:'50px', height:'50px'}}/>
        <img src={logoFooter2} alt="" style={{width:'50px', height:'50px'}}/>
      </Col>
      <Col xs={{ span: 12 }} xl={{ span: 8 }} style={{textAlign:'center'}}>
        <Title id="copyright" level={5} style={{ color: "white",padding:'10px 0px',fontSize:'15px' }}>
          GLOD Sportwear ©2022 Created by GLOD
        </Title>
      </Col>
      <Col id="social" xs={{ span: 24 }} xl={{ span: 8 }} style={{textAlign:'center'}} >
        <Row  style={{ fontSize: "30px", color: "white" }} justify="center">
          <Title level={5} style={{ color: "white",padding:'10px 0px' }}>Social</Title>
            <Link to="/">
              <FacebookOutlined style={{ margin: ' 0px 20px', color: "white",fontSize:'25px' }} />
            </Link>
            <Link to="/">
              <TwitterOutlined style={{ margin: ' 0px 0px', color: "white",fontSize:'25px' }} />
            </Link>
            <Link to="/">
              <InstagramOutlined style={{ margin: ' 0px 10px', color: "white",fontSize:'25px' }} />
            </Link>
            <Link to="/">
              <YoutubeOutlined style={{ margin: ' 0px 10px', color: "white",fontSize:'25px' }} />
            </Link>
        </Row>
        {/* tanda tangan */}
      </Col>
    </Row>
  )
}
