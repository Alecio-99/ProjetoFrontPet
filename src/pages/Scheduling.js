import React, { useState } from 'react';
import { getToken } from '../services/auth';

const services = [
  { id: 1, name: 'Banho', duration: '1h', price: 'R$ 50,00' },
  { id: 2, name: 'Tosa', duration: '2h', price: 'R$ 70,00' },
  { id: 3, name: 'Banho e Tosa', duration: '3h', price: 'R$ 100,00' },
  { id: 4, name: 'Consulta Veterinária', duration: '1h', price: 'R$ 150,00' }
];

const Scheduling = () => {
  const [selectedService, setSelectedService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess(false);

    try {
      const response = await fetch('http://localhost:8080/api/scheduling', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify({
          serviceId: selectedService,
          date,
          time
        })
      });

      if (!response.ok) {
        throw new Error('Erro ao realizar agendamento');
      }

      setSuccess(true);
      setSelectedService('');
      setDate('');
      setTime('');
    } catch (err) {
      setError('Não foi possível realizar o agendamento. Tente novamente.');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Agendar Serviço</h2>
              
              {success && (
                <div className="alert alert-success">
                  Agendamento realizado com sucesso!
                </div>
              )}
              
              {error && (
                <div className="alert alert-danger">{error}</div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label">Serviço:</label>
                  <select
                    className="form-select"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    required
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map(service => (
                      <option key={service.id} value={service.id}>
                        {service.name} - {service.duration} - {service.price}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label className="form-label">Data:</label>
                  <input
                    type="date"
                    className="form-control"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label">Horário:</label>
                  <select
                    className="form-select"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                  >
                    <option value="">Selecione um horário</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Confirmar Agendamento
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheduling; 