import { createContext } from 'react';
import { ConfirmationType } from '~/types';

const ConfirmationContext = createContext<((options: ConfirmationType) => void) | null>(null);

export default ConfirmationContext;