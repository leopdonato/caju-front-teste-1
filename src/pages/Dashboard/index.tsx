import Collumns from "./components/Columns";
import * as S from "./styles";
import { SearchBar } from "./components/Searchbar";
import { useEffect, useState } from 'react';
import { cpfIsValid } from "cpf-is-valid";
import { useRegistrations } from '~/providers/RegistrationProvider';
import { getEmployees } from '~/store/actionCreators';


const DashboardPage = () => {
  const [query, setQuery] = useState<string>("");
  const { state, dispatch } = useRegistrations();

  useEffect(() => {
    getEmployees(dispatch, query);
  }, [dispatch, query]);

  const filterByCpf = (cpf: string) => {
    if (!cpfIsValid(cpf) && cpf.length > 0) {
      return;
    }

    if(cpfIsValid(cpf) || cpf.length == 0) {
      setQuery(cpf.replace(/[.-]/g, ""));
    }

  };

  return (
    <S.Container>
      <SearchBar filterByCpf={filterByCpf} />
      <Collumns registrations={state.employees} />
    </S.Container>
  );
};
export default DashboardPage;
