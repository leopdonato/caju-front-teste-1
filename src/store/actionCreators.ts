import { Dispatch } from "react";
import ActionEnum from '~/enums/ActionEnum';
import * as registrationService from "~/services/registrations"
import { Action, Employee } from "~/types";

export const getEmployees = (dispatch: Dispatch<Action>, cpf = "") => {
  dispatch({ type: ActionEnum.SET_STATUS, status: "loading" });
  setTimeout(() => {
    return registrationService
    .getEmployeesRegistrations(cpf)
    .then((response) =>
      dispatch({
        type: ActionEnum.SET_REGISTRATIONS,
        registrations: response,
      })
    )
    .finally(() => dispatch({ type: ActionEnum.SET_STATUS, status: "default" }));
  }, 1000)
};

export const createEmployee = (dispatch: Dispatch<Action>, data: Employee) => {
  return registrationService.createEmployeeRegistration(data).then((res) => {
    dispatch({
      type: ActionEnum.ADD_REGISTRATION,
      registration: res,
    });
  });
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
    });
  }, 1000)
};

export const deleteEmployee = (dispatch: Dispatch<Action>, id: string) => {
  dispatch({ type: ActionEnum.SET_STATUS, status: "loading" });
  setTimeout(() => {
    return registrationService.deleteEmployeeRegistration(id).then(() => {
      dispatch({ type: ActionEnum.DELETE_REGISTRATION, id: id });
      dispatch({ type: ActionEnum.SET_STATUS, status: "success" });
    });
  }, 1000)
}