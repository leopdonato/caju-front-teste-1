import { useContext, useReducer } from 'react';
import RegistrationContext from '~/contexts/RegistrationContext';
import { StartState } from '~/store/actionTypes';
import { stateManagement } from '~/store/StateManagement';

type Props = {
    children: React.ReactNode;
};

const initialState: StartState = {
    status: "default",
    employees: [],
};

export function RegistrationsProvider({ children }: Props) {
    const [state, dispatch] = useReducer(stateManagement, initialState);

    return (
        <RegistrationContext.Provider value={{ state, dispatch }}>
            {children}
        </RegistrationContext.Provider>
    );
}

export function useRegistrations() {
    return useContext(RegistrationContext);
}