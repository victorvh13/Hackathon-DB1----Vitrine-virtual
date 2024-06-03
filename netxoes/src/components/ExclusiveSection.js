import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

export default function ExclusiveSection() {
  return (
    <div className="exclusive-section">
      <div className="page-inner-content">
        <div className="content">
          <div className="left-side">
            <h2>Air Jordan 1 Retro</h2>
            <p>
              O Air Jordan 1 é um dos calçados mais icônicos e influentes da história da moda e do calçado esportivo. 
              Lançado pela primeira vez em 1985 pela Nike, em colaboração com o jogador de basquete Michael Jordan, este modelo revolucionário foi o primeiro de uma linha que se tornaria lendária.
            </p>
            <Link to="/products" className="see-more-btn">
              <span>Ver Agora</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </Link>
          </div>
          <div className="right-side">
            <img src="/images/Air Jordan 1 Retro.png" alt="Air Jordan 1" />
          </div>
        </div>
      </div>
    </div>
  );
}