import "antd/dist/antd.css"
import "./App.css";

import HomePage from "./pages/home";
import { useState } from "react"
// pages
import { HomePage, AboutPage } from "./pages"

function App() {
  const [renderedPage, setRenderedPage] = useState("home")

  return (
    <>
      {
        renderedPage === "home" ? <HomePage setRenderedPage={setRenderedPage} /> : <AboutPage />
      }
    </>
  );
}

export default App;
