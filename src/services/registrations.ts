import api from './api';
import { Employee } from "~/types";

interface getEmployeesRegistrationsParams {
  cpf?: string;
}

export const getEmployeesRegistrations = async (cpf: string = ""): Promise<Employee[]> => {
  const params: getEmployeesRegistrationsParams = {};
  if (cpf) params.cpf = cpf;
  try {
    const response = await api.get("/registrations", { params });
    return response.data;
  } catch (error) {
    let errorMessage: string = '';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    throw new Error(`Falha ao listar os registros\n ${errorMessage}`)
  }
};

export const createEmployeeRegistration = async (payload: Employee): Promise<Employee> => {
  try {
    const response = await api.post("/registrations", payload);
    return response.data;
  } catch (error) {
    let errorMessage: string = '';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    throw new Error(`Falha ao criar o registro\n ${errorMessage}`)
  }
};

export const updateEmployeeRegistration = async (payload: Employee): Promise<Employee> => {
  try {
    const response = await api.put(`/registrations/${payload.id}`, payload);
    return response.data;
  } catch (error) {
    let errorMessage: string = '';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    throw new Error(`Falha ao atualizar o registro\n ${errorMessage}`)
  }
};

export const deleteEmployeeRegistration = async (id: string): Promise<void> => {
  try {
    await api.delete(`/registrations/${id}`);
  } catch (error) {
    let errorMessage: string = '';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    throw new Error(`Falha ao excluir o registro\n ${errorMessage}`)
  }
};