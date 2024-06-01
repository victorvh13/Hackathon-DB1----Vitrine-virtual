import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
          <div className="App">
      <div className="nav">
        <h1 className="logo">
          NET<span>XOES</span>
        </h1>
        <nav>
          <ul>
            <li><
              Link to="/">Home</Link>
            </li>
            <li><
              Link to="products">Produtos</Link>
            </li>
            <li><
              Link to="about">Sobre</Link>
            </li>
            <li><
              Link to="contact">Contatos</Link>
            </li>
            <li><
            Link to="contact">Contatos</Link>
            </li>
          </ul>
        </nav>
        
      </div>
    </div>
    </Router>
  );
}

export default App;

