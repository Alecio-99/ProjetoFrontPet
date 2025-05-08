import React, { useState } from 'react';
import { FaCalendarAlt, FaShower, FaUserMd, FaBoxes, FaChartBar, FaTimes } from 'react-icons/fa';

const Plans = () => {
  const [selectedModules, setSelectedModules] = useState({
    agendamento: false,
    banhoTosa: false,
    veterinario: false,
    estoque: false,
    relatorios: false
  });
  const [showModal, setShowModal] = useState(false);
  const [freeTrial, setFreeTrial] = useState({
    essential: false,
    professional: false,
    custom: false
  });

  const calculateCustomPrice = () => {
    let total = 0;
    if (selectedModules.agendamento) total += 10;
    if (selectedModules.banhoTosa) total += 15;
    if (selectedModules.veterinario) total += 19;
    if (selectedModules.estoque) total += 12;
    if (selectedModules.relatorios) total += 15;
    return total;
  };

  const handleModuleChange = (module) => {
    setSelectedModules(prev => ({
      ...prev,
      [module]: !prev[module]
    }));
  };

  const handleFreeTrialChange = (plan) => {
    setFreeTrial(prev => ({
      ...prev,
      [plan]: !prev[plan]
    }));
  };

  const handleSubscribe = (planName) => {
    if (planName === 'Plano Customizado') {
      setShowModal(true);
    } else {
      const trial = freeTrial[planName.toLowerCase().replace(' ', '')];
      alert(`Você selecionou o plano: ${planName}${trial ? ' com 7 dias grátis' : ''}`);
    }
  };

  const handleCustomSubscribe = () => {
    const total = calculateCustomPrice();
    const trial = freeTrial.custom;
    alert(`Plano assinado com valor de R$${total}${trial ? ' com 7 dias grátis' : ''}`);
    setShowModal(false);
  };

  const isAnyModuleSelected = () => {
    return Object.values(selectedModules).some(value => value);
  };

  const PlanCard = ({ title, price, features, buttonText, onSubscribe }) => {
    const planKey = title.toLowerCase().replace(' ', '');
    return (
      <div className="card h-100 shadow d-flex flex-column">
        <div className="card-body d-flex flex-column">
          <div>
            <h3 className="card-title text-center mb-4">{title}</h3>
            <h4 className="text-center mb-4">
              <span className="display-6">R${price}</span>
              <small className="text-muted">/mês</small>
            </h4>
            <ul className="list-unstyled">
              {features.map((feature, index) => (
                <li key={index} className="mb-3">
                  <i className="me-2">{feature.icon}</i>
                  {feature.text}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto">
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id={`trial-${planKey}`}
                checked={freeTrial[planKey]}
                onChange={() => handleFreeTrialChange(planKey)}
              />
              <label className="form-check-label" htmlFor={`trial-${planKey}`}>
                Experimente 7 dias grátis
              </label>
            </div>
            <button
              className="btn btn-primary w-100"
              onClick={() => onSubscribe(title)}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    );
  };

  const CustomPlanCard = () => (
    <div className="card h-100 shadow d-flex flex-column">
      <div className="card-body d-flex flex-column">
        <div>
          <h3 className="card-title text-center mb-4">Personalize seu Plano</h3>
          <p className="text-center text-muted mb-4">
            Monte seu plano com os serviços que deseja e pague apenas pelo que usar.
          </p>
          <h4 className="text-center mb-4">
            <span className="display-6">R${calculateCustomPrice()}</span>
            <small className="text-muted">/mês</small>
          </h4>
        </div>
        <div className="mt-auto">
          <button
            className="btn btn-primary w-100"
            onClick={() => handleSubscribe('Plano Customizado')}
          >
            Personalizar Plano
          </button>
        </div>
      </div>
    </div>
  );

  const CustomPlanModal = () => (
    <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Personalize seu Plano</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowModal(false)}
              aria-label="Fechar"
            />
          </div>
          <div className="modal-body">
            <div className="mb-4">
              <div className="form-check mb-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="agendamento"
                  checked={selectedModules.agendamento}
                  onChange={() => handleModuleChange('agendamento')}
                />
                <label className="form-check-label" htmlFor="agendamento">
                  <FaCalendarAlt className="me-2" />
                  Agendamento (R$10)
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="banhoTosa"
                  checked={selectedModules.banhoTosa}
                  onChange={() => handleModuleChange('banhoTosa')}
                />
                <label className="form-check-label" htmlFor="banhoTosa">
                  <FaShower className="me-2" />
                  Banho e Tosa (R$15)
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="veterinario"
                  checked={selectedModules.veterinario}
                  onChange={() => handleModuleChange('veterinario')}
                />
                <label className="form-check-label" htmlFor="veterinario">
                  <FaUserMd className="me-2" />
                  Veterinário (R$19)
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="estoque"
                  checked={selectedModules.estoque}
                  onChange={() => handleModuleChange('estoque')}
                />
                <label className="form-check-label" htmlFor="estoque">
                  <FaBoxes className="me-2" />
                  Estoque (R$12)
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="relatorios"
                  checked={selectedModules.relatorios}
                  onChange={() => handleModuleChange('relatorios')}
                />
                <label className="form-check-label" htmlFor="relatorios">
                  <FaChartBar className="me-2" />
                  Relatórios (R$15)
                </label>
              </div>
            </div>
            {isAnyModuleSelected() && (
              <div className="form-check mb-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="trial-custom"
                  checked={freeTrial.custom}
                  onChange={() => handleFreeTrialChange('custom')}
                />
                <label className="form-check-label" htmlFor="trial-custom">
                  Experimente 7 dias grátis
                </label>
              </div>
            )}
            <div className="text-center">
              <h4>Total: R${calculateCustomPrice()}/mês</h4>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setShowModal(false)}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleCustomSubscribe}
              disabled={!isAnyModuleSelected()}
            >
              Assinar Plano Personalizado
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Escolha seu Plano</h2>
      <div className="row g-4">
        <div className="col-md-4">
          <PlanCard
            title="Plano Essencial"
            price="49"
            features={[
              { icon: <FaCalendarAlt />, text: 'Agendamento' },
              { icon: <FaShower />, text: 'Banho e Tosa' }
            ]}
            buttonText="Assinar Plano"
            onSubscribe={handleSubscribe}
          />
        </div>
        <div className="col-md-4">
          <PlanCard
            title="Plano Profissional"
            price="79"
            features={[
              { icon: <FaCalendarAlt />, text: 'Agendamento' },
              { icon: <FaShower />, text: 'Banho e Tosa' },
              { icon: <FaUserMd />, text: 'Veterinário' },
              { icon: <FaBoxes />, text: 'Estoque' },
              { icon: <FaChartBar />, text: 'Relatórios' }
            ]}
            buttonText="Assinar Plano"
            onSubscribe={handleSubscribe}
          />
        </div>
        <div className="col-md-4">
          <CustomPlanCard />
        </div>
      </div>
      {showModal && <CustomPlanModal />}
    </div>
  );
};

export default Plans; 