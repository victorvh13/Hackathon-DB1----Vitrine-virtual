import { faBagShopping, faBars, faSearch, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Header />
          <div className="page=inner-content">
            <div className="section-title">
              <h3>Produtos Selecionados</h3>
              <div className="underline"></div>
            </div>

            <div className="main-content">  
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;


