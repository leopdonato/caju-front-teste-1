import { Dispatch } from "react";
import ActionEnum from '~/enums/ActionEnum';
import * as registrationService from "~/services/registrations"
import { Action, Employee } from "~/types";
import { toast } from 'react-toastify';

export const getEmployees = (dispatch: Dispatch<Action>, cpf = "") => {
  dispatch({ type: ActionEnum.SET_STATUS, status: "loading" });
  setTimeout(() => {
    return registrationService
      .getEmployeesRegistrations(cpf)
      .then((response) => {
        dispatch({
          type: ActionEnum.SET_REGISTRATIONS,
          registrations: response,
        })
        if (response.length > 0) {
          if (cpf) toast.info("Registros filtrados com sucesso!")
          else toast.info("Registros listados com sucesso!")
        } else {
          if (cpf) toast.warn("Não há registros vinculados à este CPF.")
          else toast.warn("Não há registros cadastrados.")
        }
      }
      )
      .catch((e) => toast.error(`${e}`))
      .finally(() => dispatch({ type: ActionEnum.SET_STATUS, status: "default" }));
  }, 1000)
};

export const createEmployee = (dispatch: Dispatch<Action>, data: Employee) => {
  return registrationService.createEmployeeRegistration(data).then((res) => {
    dispatch({
      type: ActionEnum.ADD_REGISTRATION,
      registration: res,
    });
    toast.success("Registro criado com sucesso!")
  }).catch((e) => toast.error(`${e}`));
};

export const updateEmployee = (
  dispatch: Dispatch<Action>,
  data: Employee,
  status: string
) => {
  dispatch({ type: ActionEnum.SET_STATUS, status: "loading" });
  const payload = { ...data, status: status };
  setTimeout(() => {
    return registrationService.updateEmployeeRegistration(payload).then((res) => {
      dispatch({
        type: ActionEnum.UPDATE_REGISTRATION,
        registration: res,
      });
      dispatch({ type: ActionEnum.SET_STATUS, status: "success" });
      toast.success("Registro atualizado com sucesso!");
    }).catch((e) => toast.error(`${e}`));
  }, 1000)
};

export const deleteEmployee = (dispatch: Dispatch<Action>, id: string) => {
  dispatch({ type: ActionEnum.SET_STATUS, status: "loading" });
  setTimeout(() => {
    return registrationService.deleteEmployeeRegistration(id).then(() => {
      dispatch({ type: ActionEnum.DELETE_REGISTRATION, id: id });
      dispatch({ type: ActionEnum.SET_STATUS, status: "success" });
      toast.success("Registro excluído com sucesso!");
    }).catch((e) => toast.error(`${e}`));
  }, 1000)
}