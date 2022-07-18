import { useState } from "react";
import {Card, Row,Button} from "antd";
import { HeartOutlined } from '@ant-design/icons';

export default function ProductCard() {
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
          hoverable
          cover={
            <Row>
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
                <Button onClick={increase} style={{display:"inline-block", position:"absolute",left:'80%',top:'2.5%',background:'transparent',border:'none'}}>
                  <HeartOutlined style={{fontSize:'20px'}}/>
                </Button>
                <img
                  alt="img not found"
                  src="https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-hummel-master-catalog/default/dweb8efc1e/images/model/216641-2001_A.png?sw=350&sh=465&q=70"
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
                HMLOSCAR TAPERED PANTS
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
                39,95 €
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
                19,97 €
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
                3 Colors
              </p>
            </div>
          </div>
        </Card>
      </Row>
  );
}
