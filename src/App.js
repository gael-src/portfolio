import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Work from "./components/work/work";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="portfolio/about">
            <About />
          </Route>
          <Route exact path="portfolio/contact">
            <Contact />
          </Route>
          <Route exact path="portfolio/">
            <Main />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
