import Collumns from "./components/Columns";
import * as S from "./styles";
import { SearchBar } from "./components/Searchbar";
import * as React from 'react';
import { useEffect } from 'react';
import api from '../../services/api'


const DashboardPage = () => {
  const [list, setList] = React.useState([]);

  async function init() {
    try {
      const response = await api.get('/registrations');
      setList(response.data);
      console.log(list)
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <S.Container>
      <SearchBar />
      <Collumns registrations={list} />
    </S.Container>
  );
};
export default DashboardPage;
