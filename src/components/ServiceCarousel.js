import React from 'react';

const ServiceCarousel = () => {
  return (
    <div 
      id="serviceCarousel" 
      className="carousel slide rounded-4" 
      data-bs-ride="carousel" 
      style={{ 
        height: '400px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}
    >
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#serviceCarousel" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#serviceCarousel" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#serviceCarousel" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#serviceCarousel" data-bs-slide-to="3"></button>
      </div>
      
      <div className="carousel-inner h-100 rounded-4">
        <div className="carousel-item active h-100">
          <img 
            src="/images/foto1.jpeg" 
            className="d-block w-100 h-100" 
            alt="Banho e Tosa"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h3 className="display-4 fw-bold">Banho e Tosa</h3>
            <p className="lead">Serviços completos de higiene e beleza</p>
          </div>
        </div>
        <div className="carousel-item h-100">
          <img 
            src="/images/foto2.jpeg" 
            className="d-block w-100 h-100" 
            alt="Consulta Veterinária"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h3 className="display-4 fw-bold">Consulta Veterinária</h3>
            <p className="lead">Atendimento especializado</p>
          </div>
        </div>
        <div className="carousel-item h-100">
          <img 
            src="/images/foto3.jpeg" 
            className="d-block w-100 h-100" 
            alt="Pet Shop"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h3 className="display-4 fw-bold">Pet Shop</h3>
            <p className="lead">Produtos de qualidade para seu pet</p>
          </div>
        </div>
        <div className="carousel-item h-100">
          <img 
            src="/images/foto4.jpeg" 
            className="d-block w-100 h-100" 
            alt="Hotel para Pets"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="carousel-caption d-none d-md-block">
            <h3 className="display-4 fw-bold">Hotel para Pets</h3>
            <p className="lead">Hospedagem com conforto e segurança</p>
          </div>
        </div>
      </div>
      
      <button className="carousel-control-prev" type="button" data-bs-target="#serviceCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#serviceCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
        <span className="visually-hidden">Próximo</span>
      </button>
    </div>
  );
};

export default ServiceCarousel; 