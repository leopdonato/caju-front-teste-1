import Collumns from "./components/Columns";
import * as S from "./styles";
import { SearchBar } from "./components/Searchbar";
import { useEffect, useState } from 'react';
import { getEmployeesRegistrations } from '~/services/registrations';
import { Employee } from '~/types';
import { cpfIsValid } from "cpf-is-valid";


const DashboardPage = () => {
  const [list, setList] = useState<Employee[]>([]);

  async function getRegistrationsList(cpf?: string) {
    try {
      const response = await getEmployeesRegistrations(cpf);
      setList(response);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }

  useEffect(() => {
    getRegistrationsList();
  }, []);

  const filterByCpf = (cpf: string) => {
    if (!cpfIsValid(cpf) && cpf.length > 0) {
      return;
    }

    getRegistrationsList(cpf.replace(/[.-]/g, ""));
  };

  return (
    <S.Container>
      <SearchBar onRefreshClick={getRegistrationsList} filterByCpf={filterByCpf} />
      <Collumns registrations={list} getRegistrationsOnUpdateStatus={getRegistrationsList} />
    </S.Container>
  );
};
export default DashboardPage;
