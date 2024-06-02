import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="inner-content">
        <div className="left-side">
          <h2>A Netxoes é seu parceiro no esporte!</h2>
          <p>Acreditamos que o esporte é uma poderosa ferramenta de transformação, e estamos comprometidos em ser seu parceiro nessa jornada</p>
          <Link to="/products" className="see-more-btn">
            <span>Ver agora</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
        <div className="right-side">
          <img src="/images/topo.png" alt="Products" />
        </div>
      </div>
    </header>
  );
}

