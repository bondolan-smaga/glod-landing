// import { Button } from "antd";
import Navbar from "../../components/main-navbar";

export default function HomePage(props) {
  const { setRenderedPage } = props

  return (
    <>
      <Navbar />
      <h1>home page</h1>
      <button onClick={() => setRenderedPage('about')}>
        Go to about page
      </button>
    </>
  );
}
