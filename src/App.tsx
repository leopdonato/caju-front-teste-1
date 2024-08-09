import Router from "~/router";
import { Header } from "./components/Header";
import { RegistrationsProvider } from './providers/RegistrationProvider';

function App() {
  return (
    <>
      <RegistrationsProvider>
        <Header>
          <h1>Caju Front Teste</h1>
        </Header>
        <Router />
      </RegistrationsProvider>
    </>
  );
}

export default App;
