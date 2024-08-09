import { Action, ActionType, StartState } from './actionTypes';

export function stateManagement(state: StartState, action: Action) {
  switch (action.type) {
    case ActionType.SET_STATUS: {
      return { ...state, status: action.status };
    }
    case ActionType.SET_REGISTRATIONS: {
      return { ...state, employees: action.registrations };
    }
    case ActionType.ADD_REGISTRATION: {
      return { ...state, employees: [...state.employees] };
    }
    case ActionType.UPDATE_REGISTRATION: {
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
    case ActionType.DELETE_REGISTRATION: {
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