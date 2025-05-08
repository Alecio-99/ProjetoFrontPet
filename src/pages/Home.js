import React from 'react';
import { Link } from 'react-router-dom';
import ServiceCarousel from '../components/ServiceCarousel';
import Footer from '../components/Footer';
import { useAuth } from '../contexts/AuthContext';

const Home = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Cabeçalho Fixo */}
      <div className="bg-white shadow-sm position-fixed top-0 start-0 w-100" style={{ zIndex: 1000 }}>
        <div className="container py-4">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <h1 className="display-4 fw-bold text-primary mb-2">Pet Shop</h1>
              <p className="lead text-muted">Cuidando do seu pet com amor e dedicação</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal com Scroll */}
      <div className="flex-grow-1" style={{ marginTop: '200px' }}>
        <div className="container">
          {/* Carrossel */}
          <div className="row mb-5">
            <div className="col-12">
              <ServiceCarousel />
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="row mb-5">
            <div className="col-12 text-center">
              {isAuthenticated ? (
                <Link to="/agendamento" className="btn btn-primary btn-lg px-5">
                  Agendar Serviço
                </Link>
              ) : (
                <div className="d-flex justify-content-center gap-3">
                  <Link to="/login" className="btn btn-primary btn-lg px-5">
                    Login
                  </Link>
                  <Link to="/cadastro" className="btn btn-outline-primary btn-lg px-5">
                    Cadastro
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé */}
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Home; 