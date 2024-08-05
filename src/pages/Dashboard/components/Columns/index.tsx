
import * as S from "./styles";
import RegistrationCard from "../RegistrationCard";
import StatusEnum from '../../../../enums/StatusEnum';
import { Employee } from '~/types';

const allColumns = [
  { status: StatusEnum.REVIEW, title: "Pronto para revisar" },
  { status: StatusEnum.APPROVED, title: "Aprovado" },
  { status: StatusEnum.REPROVED, title: "Reprovado" },
];

type Props = {
  registrations?: Employee[];
  getRegistrationsOnUpdateStatus: () => void;
};

const Collumns = (props: Props) => {
  const onUpdateStatusCard = () => {
    props.getRegistrationsOnUpdateStatus();
  };

  return (
    <S.Container>
      {allColumns.map((collum) => {
        return (
          <S.Column status={collum.status} key={collum.title}>
            <>
              <S.TitleColumn status={collum.status}>
                {collum.title}
              </S.TitleColumn>
              <S.CollumContent>
                {props?.registrations?.map((registration) => {
                  if (registration.status === collum.status)
                    return (
                      <RegistrationCard
                        data={registration}
                        key={registration.id}
                        onUpdateStatusCard={onUpdateStatusCard}
                      />
                    );
                })}
              </S.CollumContent>
            </>
          </S.Column>
        );
      })}
    </S.Container>
  );
};
export default Collumns;
