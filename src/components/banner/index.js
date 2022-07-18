import { Button, Col, Row } from "antd";
import "./index.css"




export default function Banner(props) {
  return (
    <Row {...props}>
      <Col
        id="pond"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div id="banner-img"
          style={{
            backgroundImage: props.background,
            width: "100%",
            height: "600px",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: "flex",
            alignItems: "flex-end",
            objectFit: "contain",
            boxSizing: "border-box",
          }}
        >
          <div
            id="button-heading-container"
            style={{
              width: "378px",
              height: "112px",
            }}
          >
            <div
              id="button-container"
              style={{
                padding: "30px",
                display: "flex",
                width: "378px",
                height: "50px",
              }}
            >
              <Button
                ghost
                id="button-men"
                style={{
                  padding:'12px 8px',
                  display: "inline-block",
                  margin: "0px 10px 0px 0px",
                  color: "#000000",
                  fontFamily: "Gipson-Regular, sans-serif",
                  fontSize: "12px",
                  background: "#ffffff",
                  minWidth: "164px",
                  height: "50px",
                  lineHeight: "25px",
                  borderRadius: "2px",
                  letterSpacing: ".5px",
                  position: "relative",
                  textTransform: "uppercase",
                  boxShadow: "none",
                }}
              >
                MEN
              </Button>
              <Button
                ghost
                id="button-woman"
                style={{
                  paddingTop: "12px",
                  paddingRight: "8px",
                  paddingBottom: "12px",
                  paddingLeft: "8px",
                  display: "inline-block",
                  margin: "0px 10px 0px 0px",
                  color: "#000000",
                  fontFamily: "Gipson-Regular, sans-serif",
                  fontSize: "12px",
                  background: "#ffffff",
                  minWidth: "164px",
                  height: "50px",
                  lineHeight: "25px",
                  borderRadius: "2px",
                  letterSpacing: ".5px",
                  position: "relative",
                  textTransform: "uppercase",
                  boxShadow: "none",
                }}
              >
                WOMEN
              </Button>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}
