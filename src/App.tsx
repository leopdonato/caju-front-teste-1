import Router from "~/router";
import { Header } from "./components/Header";
import { RegistrationsProvider } from './providers/RegistrationProvider';
import ConfirmationProvider from './providers/ConfirmationProvider';
import ToastProvider from './providers/ToastProvider';

function App() {
  return (
    <>
      <ConfirmationProvider>
        <ToastProvider>
          <RegistrationsProvider>
            <Header>
              <h1>Caju Front Teste</h1>
            </Header>
            <Router />
          </RegistrationsProvider>
        </ToastProvider>
      </ConfirmationProvider>
    </>
  );
}

export default App;
