import api from './api';
import { Employee } from "~/types";

interface getEmployeesRegistrationsParams {
  cpf?: string;
}

export const getEmployeesRegistrations = async (cpf = ""): Promise<Employee[]> => {
  const params: getEmployeesRegistrationsParams = {};
  if (cpf) params.cpf = cpf;
  const response = await api.get("/registrations", { params });
  return response.data;
};

export const createEmployeeRegistration = async (data: Employee): Promise<Employee> => {
  const response = await api.post("/registrations", data);
  return response.data;
};

export const updateEmployeeRegistration = async (data: Employee): Promise<Employee> => {
  const response = await api.put(`/registrations/${data.id}`, data);
  return response.data;
};

export const deleteEmployeeRegistration = async (id: string): Promise<void> => {
  await api.delete(`/registrations/${id}`);
};