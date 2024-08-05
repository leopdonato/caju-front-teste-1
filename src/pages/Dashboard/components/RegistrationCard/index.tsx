import StatusButton from '../../../../components/Buttons/StatusButton';
import * as S from "./styles";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";
import { Employee } from '~/types';
import { deleteEmployeeRegistration, updateEmployeeRegistration } from '~/services/registrations';

type Props = {
  data: Employee;
  onUpdateStatusCard: () => void;
};

const RegistrationCard = (props: Props) => {

  const updateStatusCard = async (newStatus: string) => {
    const registration = props.data;
    try {
      registration.status = newStatus
      await updateEmployeeRegistration(registration);
      props.onUpdateStatusCard();
    } catch (error) {
      console.error(error);
    }
  }

  const deleteCard = async (id: string) => {
    try {
      await deleteEmployeeRegistration(id);
      props.onUpdateStatusCard();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <S.Card>
      <S.IconAndText>
        <HiOutlineUser />
        <h3>{props.data.employeeName}</h3>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineMail />
        <p>{props.data.email}</p>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineCalendar />
        <span>{props.data.admissionDate}</ span>
      </S.IconAndText>
      <S.Actions>
        <StatusButton status={props.data.status} onStatusButtonClick={updateStatusCard}></StatusButton>
        <HiOutlineTrash onClick={() => deleteCard(props.data.id)} />
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
