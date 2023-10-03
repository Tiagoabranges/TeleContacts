
import { Route, Routes } from 'react-router-dom';
import CadastroContatos from './pages/cadastro';
import PesquisaContatos from './pages/pesquisa';
import './styles.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={ <CadastroContatos /> } />
      <Route path="/pesquisa" element={ <PesquisaContatos /> } />
    </Routes>
  )
}

export default App;