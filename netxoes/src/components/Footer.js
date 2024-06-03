import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="pager-inner-content content">
        <div className="download-options">
          <p>Baixe a nossa aplicação</p>
          <p>Baixe a nossa aplicação para Android e iOS</p>
          <div>
            <img src="/images/app-store.png" alt="App Store download" />
            <img src="/images/play-store.png" alt="Play Store download" />
          </div>
        </div>

        <div className="logo-footer">
          <h1 className="logo">
            NET<span>XOES</span>
          </h1>
          <p>
            Seu companheiro em qualquer esporte
          </p>
        </div>

        <div className="links">
          <h3>Links úteis</h3>
          <ul>
            <li>
              <Link to="/">Cupons</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Políticas</Link>
            </li>
            <li>
              <Link to="/">Torne-se afiliado</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="page-inner-content">
        <hr />

        <p className="copyright">
          Copyright 2024 - Victor Sousa - Todos Direitos Reservados
        </p>
      </div>
    </footer>
  );
}
