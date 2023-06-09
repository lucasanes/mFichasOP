import { Routes, Route, HashRouter } from 'react-router-dom';
import { AppLayout } from '../layout/AppLayout';
import { Home } from '../pages/Home';
import { Ficha } from '../pages/Ficha';
import { Main } from '../pages/Main';
import { Inexistente } from '../pages/Inexistente';
import { CriarFicha } from '../pages/CriarFicha';
import { Sessao } from '../pages/Sessao';

export function UserRoutes() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout/>}>
        <Route path="/" element={<Main/>}/>
        <Route path="/ficha/:id" element={<Ficha/>}/>
        <Route path="/sessao/:id" element={<Sessao/>}/>
        <Route path="/criar-ficha" element={<CriarFicha/>}/>
      </Route>
      <Route path='*' element={<Inexistente/>} />
    </Routes>
  );
}