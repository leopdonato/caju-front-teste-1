import { useContext } from 'react';
import ConfirmationDialog from '~/components/ConfirmationDialog/ConfirmationDialog';
import 'react-confirm-alert/src/react-confirm-alert.css';
import ConfirmationContext from '~/contexts/ConfirmationContext';
import { ConfirmationType } from '~/types';

type Props = {
    children: React.ReactNode;
};

export const useConfirmation = () => {
  const context = useContext(ConfirmationContext);
  if (!context) {
    throw new Error('useConfirmation must be used within a ConfirmationProvider');
  }
  return context;
};

const ConfirmationProvider = ({ children }: Props) => {
    
  const showConfirm  = (options: ConfirmationType) => {
    ConfirmationDialog(options);
  };

  return (
    <ConfirmationContext.Provider value={showConfirm}>
      {children}
    </ConfirmationContext.Provider>
  );
};

export default ConfirmationProvider;
