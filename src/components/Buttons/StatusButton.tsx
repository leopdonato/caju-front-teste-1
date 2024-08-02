import StatusEnum from '../../enums/StatusEnum';
import { ButtonSmall } from '~/components/Buttons';

type Props = {
    status: string;
};

const StatusButton = (props: Props) => {
    const getStatusButton = () => {
        switch (props.status) {
            case StatusEnum.REVIEW:
                return (
                    <>
                        <ButtonSmall bgcolor="rgb(255, 145, 154)" >Reprovar</ButtonSmall>
                        <ButtonSmall bgcolor="rgb(155, 229, 155)">Aprovar</ButtonSmall>
                    </>
                )
            default:
                return <ButtonSmall bgcolor="#ff8858">Revisar novamente</ButtonSmall>;
        }
    };

    return (
        <div>
            {getStatusButton()}
        </div>
    );
};

export default StatusButton;