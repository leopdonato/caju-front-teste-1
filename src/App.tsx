import Router from "~/router";
import { Header } from "./components/Header";
import { RegistrationsProvider } from './providers/RegistrationProvider';
import ConfirmationProvider from './providers/ConfirmationProvider';

function App() {
  return (
    <>
      <ConfirmationProvider>
        <RegistrationsProvider>
          <Header>
            <h1>Caju Front Teste</h1>
          </Header>
          <Router />
        </RegistrationsProvider>
      </ConfirmationProvider>
    </>
  );
}

export default App;
