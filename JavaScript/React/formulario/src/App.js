import { Fragment } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@mui/material';
import '@fontsource/roboto/300.css';

function App() {
  return (
    <Container component="article" maxWidth="sm"> 
      <Typography variant='h3' component="h1" align="center">Formulário de cadastro</Typography>
      <FormularioCadastro />
    </Container>
  );
}

export default App;