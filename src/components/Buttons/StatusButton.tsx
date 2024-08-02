import StatusEnum from '../../enums/StatusEnum';
import { ButtonSmall } from '../../components/Buttons/index';
import { BaseSyntheticEvent } from 'react';

type Props = {
    status: string;
    onStatusButtonClick: (selectedStatus: string) => void;
};

const StatusButton = (props: Props) => {

    const onButtonClick = (selectedStatus: BaseSyntheticEvent) => {
        props.onStatusButtonClick(selectedStatus.target.value);
    };

    const getStatusButton = () => {
        switch (props.status) {
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