import { Breadcrumb, Row } from "antd";

export default function Breadcrumbs() {
  return (
    <div>
      <Row span={"24px"}>
        <Breadcrumb
          style={{
            lineHeight: "16px",
            letterSpacing: ".5px",
            fontFamily: "Gibson-SemiBold,sans-serif",
            textTransform: "uppercase",
            marginBottom: "20px",
            color: "black",
            fontSize: "12px",
            fontWeight: "bold",
            verticalAlign: "middle",
            textAlign: "center",
          }}
        >
          <Breadcrumb.Item>
            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzBweCcgaGVpZ2h0PSczMHB4JyB2aWV3Qm94PScwIDAgMzAgMzAnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc+CiAgICA8ZyBzdHJva2U9J25vbmUnIHN0cm9rZS13aWR0aD0nMScgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz4KICAgICAgICA8cGF0aCBkPSdNMjAsMTEgTDE2LDE1IEwyMCwxOSBNMTUsMTEgTDExLDE1IEwxNSwxOScgc3Ryb2tlPScjMDAwMDAwJyBzdHJva2Utd2lkdGg9JzEuNSc+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4=" />
            BACK
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">MEN</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">MEN'S CLOTHING</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>SWEAT SHIRT</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
    </div>
  );
}
