import { HiRefresh } from "react-icons/hi";
import { useHistory } from "react-router-dom";
import Button from "~/components/Buttons";
import { IconButton } from "~/components/Buttons/IconButton";
import TextField from "~/components/TextField";
import routes from "~/router/routes";
import * as S from "./styles";
import { ChangeEvent, useState } from 'react';
import { setMask } from 'react-input-mask-br';

type Props = {
  onRefreshClick: () => void;
  filterByCpf: (cpf: string) => void;
};

export const SearchBar = (props: Props) => {
  const history = useHistory();
  const [cpf, setCpf] = useState<string>("");

  const goToNewAdmissionPage = () => {
    history.push(routes.newUser);
  };

  const onRefresh = () => {
    props.onRefreshClick();
  };
  
  return (
    <S.Container>
      <TextField  
      placeholder="Digite um CPF válido"
      value={cpf}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        const formattedCpf = setMask({ type: "cpf", value: e.target.value });
        setCpf(formattedCpf);
        props.filterByCpf(formattedCpf);
      }}
      />
      <S.Actions>
        <IconButton aria-label="refetch" onClick={onRefresh}>
          <HiRefresh />
        </IconButton>
        <Button onClick={() => goToNewAdmissionPage()}>Nova Admissão</Button>
      </S.Actions>
    </S.Container>
  );
};
