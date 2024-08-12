import { createContext, useContext } from 'react';
import ConfirmationDialog from '~/components/ConfirmationDialog/ConfirmationDialog';
import 'react-confirm-alert/src/react-confirm-alert.css';

type Props = {
    children: React.ReactNode;
};

type Confirmation = {
    title: string,
    message: string,
    onConfirm: () => void,
    onCancel: () => void
}

const ConfirmationContext = createContext<((options:Confirmation) => void) | null>(null);

export const useConfirmation = () => {
  const context = useContext(ConfirmationContext);
  if (!context) {
    throw new Error('useConfirmation must be used within a ConfirmationProvider');
  }
  return context;
};

const ConfirmationProvider = ({ children }: Props) => {
    
  const showConfirm  = (options: Confirmation) => {
    ConfirmationDialog(options);
  };

  return (
    <ConfirmationContext.Provider value={showConfirm}>
      {children}
    </ConfirmationContext.Provider>
  );
};

export default ConfirmationProvider;
