import { Container } from '@mui/material';
import './App.css';
import FormularioCadastro from './components/Formulario/FormularioCadastro';
import TableSistema from './components/TableSistema/TableSistema';

function App() {
  return (
    <div className="App">
      <Container maxWidth='md'>
        <FormularioCadastro />
        <TableSistema />
      </Container>
    </div>
  );
}

export default App;
