import React from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../services/auth';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h1>Bem-vindo ao PetShop</h1>
          <p className="lead">Cuidando do seu pet com amor e carinho</p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Banho e Tosa</h3>
              <p className="card-text">
                Serviços completos de higiene e beleza para seu pet, realizados por profissionais qualificados.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Consultas Veterinárias</h3>
              <p className="card-text">
                Atendimento veterinário especializado para garantir a saúde e bem-estar do seu animal.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">Pet Shop</h3>
              <p className="card-text">
                Produtos de qualidade para seu pet: rações, acessórios, brinquedos e muito mais.
              </p>
            </div>
          </div>
        </div>
      </div>

      {!isAuthenticated() && (
        <div className="row">
          <div className="col-12 text-center">
            <h2>Comece a usar nossos serviços</h2>
            <div className="mt-4">
              <Link to="/login" className="btn btn-primary mx-2">
                Login
              </Link>
              <Link to="/register" className="btn btn-outline-primary mx-2">
                Cadastre-se
              </Link>
            </div>
          </div>
        </div>
      )}

      {isAuthenticated() && (
        <div className="row">
          <div className="col-12 text-center">
            <Link to="/scheduling" className="btn btn-primary btn-lg">
              Agendar Serviço
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home; 