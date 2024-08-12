import { Dispatch } from 'react';
import ActionEnum from '~/enums/ActionEnum';
import { AppStatusEnum } from '~/enums/AppStatusEnum';

export type Employee = {
  id: string;
  status: string;
  employeeName: string;
  email: string;
  cpf: string;
  admissionDate: string;
};

export type Action =
  | { type: ActionEnum.SET_REGISTRATIONS; registrations: Employee[] }
  | { type: ActionEnum.ADD_REGISTRATION; registration: Employee }
  | { type: ActionEnum.UPDATE_REGISTRATION; registration: Employee }
  | { type: ActionEnum.DELETE_REGISTRATION; id: string }
  | { type: ActionEnum.SET_STATUS; status: AppStatusEnum };

export type StartState = {
  status: AppStatusEnum;
  employees: Employee[];
};

export type RegistrationContextType = {
  state: StartState;
  dispatch: Dispatch<Action>;
};


export type ConfirmationType = {
  title: string,
  message: string,
  onConfirm: () => void,
  onCancel: () => void
}
