import ActionEnum from '~/enums/ActionEnum';
import { Action, StartState } from '~/types';

export function stateManagement(state: StartState, action: Action) {
  switch (action.type) {
    case ActionEnum.SET_STATUS: {
      return { ...state, status: action.status };
    }
    case ActionEnum.SET_REGISTRATIONS: {
      return { ...state, employees: action.registrations };
    }
    case ActionEnum.ADD_REGISTRATION: {
      return { ...state, employees: [...state.employees] };
    }
    case ActionEnum.UPDATE_REGISTRATION: {
      return {
        ...state,
        employees: state.employees.map((element) => {
          if (element.id === action.registration?.id) {
            return action.registration;
          } else {
            return element;
          }
        }),
      };
    }
    case ActionEnum.DELETE_REGISTRATION: {
      return {
        ...state,
        employees: state.employees.filter((el) => el.id != action.id),
      };
    }
    default: {
      return state;
    }
  }
}