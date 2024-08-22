import ScrollToTop from "react-scroll-to-top";

import "../App.css";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <ScrollToTop smooth />
    </>
  );
}

export default Home;
