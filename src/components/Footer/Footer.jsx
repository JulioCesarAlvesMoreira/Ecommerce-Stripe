import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Homem</span>
          <span>Mulher</span>
          <span>Sapatos</span>
          <span>Acessorios</span>
          <span>Verão</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Paginas</span>
          <span>Loja</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>Sobre</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Vero et ut dolorum excepturi 
            aspernatur, porro quod magnam provident dolores 
            fugiat iusto voluptates
            incidunt officiis laudantium. Corrupti porro iure 
            cumque nihil.
          </span>
        </div>
        <div className="item">
        <h1>Contato</h1>
          <span>
            Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Vero et ut dolorum excepturi 
            aspernatur, porro quod magnam provident dolores 
            fugiat iusto voluptates
            incidunt officiis laudantium. Corrupti porro iure 
            cumque nihil.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>JulioStore</span>
          <span className='copyright'>Direitos reservados</span>
        </div>
        <div className="right">
          <img src='/img/payment.png' alt=''></img>
        </div>
      </div>
    </div>
  )
}

export default Footer