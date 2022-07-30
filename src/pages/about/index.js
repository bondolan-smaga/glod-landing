import { Image, Row, Col, Typography} from "antd";
import {
  MainLayout,
  CarouselProductCard,
} from "../../components";
import { seo_meta } from "../../constants/seo";
import "./index.css"

const { Title } = Typography;



export default function AboutPage() {
  

  return (
    <MainLayout meta={seo_meta.about.title}>
      {/* main content */}
      {/* about us */}
      <Row style={{ maxWidth: "1000px", margin: "auto auto" }} justify="center">
        <Col span={24}>
          <Title className="gld-align-center" id="ttl-about" level={2}>
            About Us
          </Title>
          <Title className="gld-align-center" id="glod-desc" level={5}>
            Glod Sportwear adalah penyedia pakaian olah raga yang berada di Kota
            Solo - Jawa Tengah
          </Title>
          <Title className="gld-align-center" id="glod-desc" level={5}>
            Tim desain Glod sangat memperhatikan pola patrun baju yang nyaman
            enak dipakai dan konsep desain artwork Jersey printing yang sangat
            detail dan keren.
          </Title>
        </Col>
        {/* images */}
        <Row gutter={[12, 12]} id="image-grid">
          <Col span={8}>
            <Image src="https://lh3.googleusercontent.com/p/AF1QipM4np4MHlmVOYqp7nxYbr1EnbDabXks1fx48IX4=w768-h768-n-o-v1" />
          </Col>
          <Col span={8}>
            <Image src="https://lh3.googleusercontent.com/p/AF1QipMd_41KkMJPNTM_0t7jxHItVoEZSaN2n3UTATp-=w768-h768-n-o-v1" />
          </Col>
          <Col span={8}>
            <Image src="https://lh3.googleusercontent.com/p/AF1QipNE7xWOoJP_5R1PEBIv2xJ6vsDd574Ccwmw7ah8=w960-h960-n-o-v1" />
          </Col>
          <Col span={8}>
            <Image src="https://lh3.googleusercontent.com/p/AF1QipP1dH9ygUID5p78R-ZoHGqql8YTEspW6U09lsSh=w768-h768-n-o-v1" />
          </Col>
          <Col span={8}>
            <Image src="https://lh3.googleusercontent.com/p/AF1QipNc8NjP7msJvLJE0C3MAMPy1WmUm2HaNTZ3rMYx=w960-h960-n-o-v1" />
          </Col>
          <Col span={8}>
            <Image src="https://lh3.googleusercontent.com/p/AF1QipNU6ZA9a31CAcgUaDb8yI6a_ehaTfGjoh-EDRK7=w960-h960-n-o-v1" />
          </Col>
          <Col span={8}>
            <Image src="https://lh3.googleusercontent.com/p/AF1QipPYV7af5f2H1UtS5s14WBAA7WBvdZzyJONIPp7b=w960-h960-n-o-v1" />
          </Col>
          <Col span={8}>
            <Image src="https://lh3.googleusercontent.com/p/AF1QipNNG94U9MUOSS9MYXH5T5knxjdfj4yaa0R7_Hah=w960-h960-n-o-v1" />
          </Col>
          <Col span={8}>
            <Image src="https://lh3.googleusercontent.com/p/AF1QipMpcAuQdpg0HYYOJePbCLp7VBQjQwvTZbUf0-B2=w960-h960-n-o-v1" />
          </Col>
        </Row>
        <Col span={24}>
          <Title className="gld-align-center" id="hstry-ttl" level={2}>
            History
          </Title>
          <Row gutter={[28, 0]}>
            <Col xs={24} sm={12}>
              <Title className="gld-align-justify" id="hstry-desc" level={5}>
                Dari tahun 2016 Glod sudah banyak memproduksi Jersey Custom dari
                berbagai jenis Jersey / pakaian olah raga, mulai dari jersey
                futsal, jersey sepakbola, jersey volley, jersey basket, jersey
                sepeda MTB bahkan jersey Roadbike.
              </Title>
            </Col>
            <Col xs={24} sm={12}>
              <Title className="gld-align-justify" id="hstry-desc" level={5}>
                Glod sudah banyak di percaya menjalin kerja sama dengan Club
                futsal / Sepakbola dan Komunitas sepeda yang sudah terkenal
              </Title>
            </Col>
          </Row>
        </Col>
      </Row>
      {/* recommendation */}
      <Row>
        <Col span={24}>
          <CarouselProductCard tag={"GET INSPIRED BY THIS STYLE"} show={4} scroll={4}/>
        </Col>

      </Row>
    </MainLayout>
  );
}
