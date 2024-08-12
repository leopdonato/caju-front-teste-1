import StatusEnum from '../../enums/StatusEnum';
import { ButtonSmall } from '../../components/Buttons/index';
import { BaseSyntheticEvent } from 'react';
import { useRegistrations } from '~/providers/RegistrationProvider';
import { Employee } from '~/types';
import { updateEmployee } from '~/store/actionCreators';
import { useConfirmation } from '~/providers/ConfirmationProvider';

type Props = {
    registration: Employee;
    // onStatusButtonClick: (selectedStatus: string) => void;
};

const StatusButton = (props: Props) => {
    const confirm = useConfirmation();
    const { dispatch } = useRegistrations();

    const onButtonClick = (selectedStatus: BaseSyntheticEvent) => {
        confirm({
            title: 'Você tem certeza?',
            message: `Deseja prosseguir com a ação?`,
            onConfirm: () => {
                updateEmployee(dispatch, props.registration, selectedStatus.target.value)
            },
            onCancel: () => {
            }
        });
    };

    const getStatusButton = () => {
        switch (props.registration.status) {
            case StatusEnum.REVIEW:
                return (
                    <>
                        <ButtonSmall bgcolor="rgb(255, 145, 154)" onClick={onButtonClick} value={(StatusEnum.REPROVED)}>Reprovar</ButtonSmall>
                        <ButtonSmall bgcolor="rgb(155, 229, 155)" onClick={onButtonClick} value={(StatusEnum.APPROVED)}>Aprovar</ButtonSmall>
                    </>
                )
            default:
                return <ButtonSmall bgcolor="#ff8858" onClick={onButtonClick} value={(StatusEnum.REVIEW)}>Revisar novamente</ButtonSmall>;
        }
    };

    return (
        <div>
            {getStatusButton()}
        </div>
    );
};

export default StatusButton;