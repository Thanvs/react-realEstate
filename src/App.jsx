import Companies from "./components/Companies/Companies";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residences from "./components/residences/Residences";
import Value from "./components/value/Value";
import Contact from "./components/contact/Contact";
import Start from "./components/start/Start";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="app" style={{ position: "relative", overflowX: "clip" }}>
      <Header />
      <Hero />
      <Companies />
      <Residences />
      <Value />
      <Contact />
      <Start />
      <Footer />
    </div>
  );
}

export default App;
