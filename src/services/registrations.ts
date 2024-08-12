import api from './api';
import { Employee } from "~/types";

interface getEmployeesRegistrationsParams {
  cpf?: string;
}

export const getEmployeesRegistrations = async (cpf: string = ""): Promise<Employee[]> => {
  const params: getEmployeesRegistrationsParams = {};
  if (cpf) params.cpf = cpf;
  const response = await api.get("/registrations", { params });
  return response.data;
};

export const createEmployeeRegistration = async (payload: Employee): Promise<Employee> => {
  const response = await api.post("/registrations", payload);
  return response.data;
};

export const updateEmployeeRegistration = async (payload: Employee): Promise<Employee> => {
  const response = await api.put(`/registrations/${payload.id}`, payload);
  return response.data;
};

export const deleteEmployeeRegistration = async (id: string): Promise<void> => {
  await api.delete(`/registrations/${id}`);
};