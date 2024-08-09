import { Dispatch } from 'react';
import { Action, StartState } from '~/store/actionTypes';

export type Employee = {
  id: string;
  status: string;
  employeeName: string;
  email: string;
  cpf: string;
  admissionDate: string;
};

export type RegistrationContextType = {
  state: StartState;
  dispatch: Dispatch<Action>;
};
