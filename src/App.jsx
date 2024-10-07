import Navbar from "./components/Navbar/Navbar";
import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./container";
// import Header from "./container/Header/Header";
// import AboutUs from "./container/AboutUs/AboutUs";
// import SpecialMenu from "./container/Menu/SpecialMenu";
// import Chef from "./container/Chef/Chef";
// import Intro from "./container/Intro/Intro";
// import Laurels from "./container/Laurels/Laurels";
// import Gallery from "./container/Gallery/Gallery";
// import FindUs from "./container/Findus/FindUs";
// import Footer from "./container/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </>
  );
}

export default App;
