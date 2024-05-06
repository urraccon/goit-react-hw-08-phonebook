import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import SharedLayout from './pages/shared-layout/SharedLayout';
import { AppStyling } from './App.styles';
import '@fontsource/roboto';
import '@fontsource-variable/edu-nsw-act-foundation';
import { ThemeProvider, createTheme } from '@mui/material';
import { lazy } from 'react';

const SignupPage = lazy(() => import('./pages/signup/SignupPage'));
const ContactsPage = lazy(() => import('./pages/contacts/ContactsPage'));

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
              <Route path="/signup" element={<SignupPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AppStyling>
  );
};

export default App;
