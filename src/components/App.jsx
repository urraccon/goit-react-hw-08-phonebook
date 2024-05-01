import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactsPage from './pages/contacts/ContactsPage';
import RegisterPage from './pages/register/RegisterPage';
import LoginPage from './pages/login/LoginPage';
import SharedLayout from './pages/shared-layout/SharedLayout';
import { AppStyling } from './App.styles';
import '@fontsource/roboto';
import '@fontsource-variable/edu-nsw-act-foundation';
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Edu NSW ACT Foundation Variable',
  },
});

const App = () => {
  return (
    <AppStyling>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<LoginPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AppStyling>
  );
};

export default App;
