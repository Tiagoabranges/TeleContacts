
import { Route, Routes } from 'react-router-dom';
import CadastroContatos from './pages/registro';
import PesquisaContatos from './pages/pesquisa';


function App() {
  return (
    <Routes>
      <Route path="/" element={ <CadastroContatos /> } />
      <Route path="/pesquisa" element={ <PesquisaContatos /> } />
    </Routes>
  )
}

export default App;