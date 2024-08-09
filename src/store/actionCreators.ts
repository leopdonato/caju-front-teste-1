import { Dispatch } from "react";
import * as registrationService from "~/services/registrations"
import { Employee } from "~/types";
import { ActionType, Action } from "./actionTypes";

export const getEmployees = (dispatch: Dispatch<Action>, cpf = "") => {
  dispatch({ type: ActionType.SET_STATUS, status: "loading" });
  setTimeout(() => {
    return registrationService
    .getEmployeesRegistrations(cpf)
    .then((response) =>
      dispatch({
        type: ActionType.SET_REGISTRATIONS,
        registrations: response,
      })
    )
    .finally(() => dispatch({ type: ActionType.SET_STATUS, status: "default" }));
  }, 1000)
};

export const createEmployee = (dispatch: Dispatch<Action>, data: Employee) => {
  return registrationService.createEmployeeRegistration(data).then((res) => {
    dispatch({
      type: ActionType.ADD_REGISTRATION,
      registration: res,
    });
  });
};

export const updateEmployee = (
  dispatch: Dispatch<Action>,
  data: Employee,
  status: string
) => {
  dispatch({ type: ActionType.SET_STATUS, status: "loading" });
  const payload = { ...data, status: status };
  setTimeout(() => {
    return registrationService.updateEmployeeRegistration(payload).then((res) => {
      dispatch({
        type: ActionType.UPDATE_REGISTRATION,
        registration: res,
      });
      dispatch({ type: ActionType.SET_STATUS, status: "success" });
    });
  }, 1000)
};

export const deleteEmployee = (dispatch: Dispatch<Action>, id: string) => {
  dispatch({ type: ActionType.SET_STATUS, status: "loading" });
  setTimeout(() => {
    return registrationService.deleteEmployeeRegistration(id).then(() => {
      dispatch({ type: ActionType.DELETE_REGISTRATION, id: id });
      dispatch({ type: ActionType.SET_STATUS, status: "success" });
    });
  }, 1000)
}