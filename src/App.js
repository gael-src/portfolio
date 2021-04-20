import "./App.css";

import Header from "./components/header/header";
import Main from "./components/main/main";
import Work from "./components/work/work";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Work />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
