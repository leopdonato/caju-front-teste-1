import { confirmAlert } from 'react-confirm-alert';

type Props = {
    title: string,
    message: string,
    onConfirm: () => void,
    onCancel: () => void
}

const ConfirmationDialog = (props: Props) => {
    confirmAlert({
      title: props.title,
      message: props.message,
      buttons: [
        {
          label: 'Sim',
          onClick: props.onConfirm,
        },
        {
          label: 'Não',
          onClick: props.onCancel,
        },
      ],
    });
  };
  
  export default ConfirmationDialog;