import Collumns from "./components/Columns";
import * as S from "./styles";
import { SearchBar } from "./components/Searchbar";
import { useEffect, useState } from 'react';
import api from '../../services/api'


const DashboardPage = () => {
  const [list, setList] = useState([]);

  async function init() {
    try {
      const response = await api.get('/registrations');
      setList(response.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <S.Container>
      <SearchBar onRefreshClick={init} />
      <Collumns registrations={list} />
    </S.Container>
  );
};
export default DashboardPage;
