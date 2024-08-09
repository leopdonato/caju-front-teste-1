import { createContext } from 'react';
import { RegistrationContextType } from '~/types';

const RegistrationContext = createContext<RegistrationContextType>({
    state: {
        status: 'default',
        employees: []
    },
    dispatch: () => {}
});

export default RegistrationContext;