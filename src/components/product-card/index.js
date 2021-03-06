import { useState } from "react";
import { Card, Row, Button } from "antd";
import Icon from '@ant-design/icons'





export default function ProductCard(props) {
  const HeartSvg = () => (
    <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
      <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
    </svg>
  );
  const HeartIcon = (props) => <Icon component={HeartSvg} {...props} />

  const [count, setCount] = useState(0)
  const increase = () => {
    setCount(count + 1)
  }

  return (
    <Row
      id="pond"
      style={{
        display: "flex",
        justifyContent: "center",
        marginBottom: "40px",
      }}
    >
            <Card
            style={{margin:'10px 10px', borderRadius:'5%'}}
              hoverable
              cover={
                <Row gutter={[0,16]}>
                  <div>
                    <p  
                      style={{
                        backgroundColor: "#d03a3a",
                        color: "#fff",
                        marginRight: "5px",
                        fontSize: "10px",
                        letterSpacing: ".5px",
                        padding: "4px 15px 3px",
                        fontFamily: "Gibson-SemiBold, sans-serif",
                        position: "absolute",
                        marginTop: "20px",
                        fontWeight: "bold"
                      }}
                    >
                      -50%
                    </p>
                  </div>
                  <div>
                    <Button onClick={increase} style={{ display: "inline-block", position: "absolute", left: '80%', top: '1.5%', background: 'transparent', border: 'none' }}>
                      <HeartIcon style={{ fontSize: '28px',color:'hotpink' }} />
                    </Button>
                    <img
                      alt="img not found"
                      src={props.image}
                      style={{width:'100%', height :'100%'}}
                    />
                  </div>
                </Row>
              }
            >
              <div id="product title">
                <div id="product name">
                  <p
                    id="title"
                    style={{
                      color: "#000",
                      lineHeight: "20px",
                      fontSize: "14px",
                      marginBottom: "10px",
                      fontFamily: "Gibson-Medium,sans-serif",
                      fontWeight: "700",
                    }}
                  >
                    {props.product}
                  </p>
                </div>
                <div
                  id="pricetag"
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  <p
                    style={{
                      color: "#000",
                      letterSpacing: "0",
                      fontSize: "12px",
                      fontFamily: "Gibson-Regular,sans-serif",
                      marginRight: "10px",
                      textDecoration: "line-through",
                    }}
                  >
                   Rp {props.price}
                  </p>
                  <p
                    id="discount price"
                    style={{
                      color: "#c00",
                      fontFamily: "Gibson-SemiBold, sans-serif",
                      letterSpacing: "0",
                      fontSize: "12px",
                      fontWeight: "700",
                    }}
                  >
                   Rp {props.price - (50/100 * props.price)}
                  </p>
                </div>
                <div id="product color">
                  <p
                    style={{
                      fontSize: "14px",
                      letterSpacing: ".5px",
                      fontFamily: "Gibson-Regular, sans-serif",
                      fontWeight: "700",
                    }}
                  >
                    Warna Tersedia: {props.colors} Warna
                  </p>
                </div>
              </div>
            </Card>
    </Row>
  );
}
