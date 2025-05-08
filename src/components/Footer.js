import React from 'react';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Sobre Nós</h5>
            <p>
              O PetShop é um estabelecimento especializado em cuidados com animais de estimação,
              oferecendo serviços de qualidade e produtos de primeira linha para seu pet.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Contato</h5>
            <p>
              <i className="bi bi-telephone"></i> (11) 1234-5678<br />
              <i className="bi bi-envelope"></i> contato@petshop.com<br />
              <i className="bi bi-geo-alt"></i> Rua dos Pets, 123 - São Paulo
            </p>
          </div>
          <div className="col-md-4">
            <h5>Suporte</h5>
            <p>
              Precisa de ajuda? Entre em contato com nosso suporte:<br />
              <i className="bi bi-whatsapp"></i> (11) 98765-4321<br />
              <i className="bi bi-envelope"></i> suporte@petshop.com
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 text-center">
            <p className="mb-0">&copy; 2024 PetShop. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 