import React, { useState, useEffect } from 'react';
import { getToken } from '../services/auth';

const AdminPanel = () => {
  const [clients, setClients] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [activeTab, setActiveTab] = useState('clients');
  const [error, setError] = useState('');

  const fetchClients = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/clients', {
        headers: {
          'Authorization': `Bearer ${getToken()}`
        }
      });

      if (!response.ok) {
        throw new Error('Erro ao carregar clientes');
      }

      const data = await response.json();
      setClients(data);
    } catch (err) {
      setError('Erro ao carregar lista de clientes');
    }
  };

  const fetchAppointments = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/appointments', {
        headers: {
          'Authorization': `Bearer ${getToken()}`
        }
      });

      if (!response.ok) {
        throw new Error('Erro ao carregar agendamentos');
      }

      const data = await response.json();
      setAppointments(data);
    } catch (err) {
      setError('Erro ao carregar lista de agendamentos');
    }
  };

  const updateAppointmentStatus = async (appointmentId, status) => {
    try {
      const response = await fetch(`http://localhost:8080/api/appointments/${appointmentId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${getToken()}`
        },
        body: JSON.stringify({ status })
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar status');
      }

      fetchAppointments();
    } catch (err) {
      setError('Erro ao atualizar status do agendamento');
    }
  };

  useEffect(() => {
    fetchClients();
    fetchAppointments();
  }, []);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Painel Administrativo</h2>

      {error && (
        <div className="alert alert-danger">{error}</div>
      )}

      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'clients' ? 'active' : ''}`}
            onClick={() => setActiveTab('clients')}
          >
            Clientes
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'appointments' ? 'active' : ''}`}
            onClick={() => setActiveTab('appointments')}
          >
            Agendamentos
          </button>
        </li>
      </ul>

      {activeTab === 'clients' && (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === 'appointments' && (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Cliente</th>
                <th>Serviço</th>
                <th>Data</th>
                <th>Horário</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map(appointment => (
                <tr key={appointment.id}>
                  <td>{appointment.clientName}</td>
                  <td>{appointment.serviceName}</td>
                  <td>{new Date(appointment.date).toLocaleDateString()}</td>
                  <td>{appointment.time}</td>
                  <td>{appointment.status}</td>
                  <td>
                    <div className="btn-group">
                      <button
                        className="btn btn-sm btn-success"
                        onClick={() => updateAppointmentStatus(appointment.id, 'CONFIRMADO')}
                      >
                        Confirmar
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => updateAppointmentStatus(appointment.id, 'CANCELADO')}
                      >
                        Cancelar
                      </button>
                      <button
                        className="btn btn-sm btn-info"
                        onClick={() => updateAppointmentStatus(appointment.id, 'CONCLUÍDO')}
                      >
                        Concluir
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminPanel; 