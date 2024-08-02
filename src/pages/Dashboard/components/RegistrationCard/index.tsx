import StatusButton from '../../../../components/Buttons/StatusButton';
import * as S from "./styles";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTrash,
} from "react-icons/hi";

type Props = {
  data: any;
};

const RegistrationCard = (props: Props) => {
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
        <span>{props.data.admissionDate}</span>
      </S.IconAndText>
      <S.Actions>
        <StatusButton status={props.data.status}></StatusButton>
        <HiOutlineTrash />
      </S.Actions>
    </S.Card>
  );
};

export default RegistrationCard;
