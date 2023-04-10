import { Routes, Route, HashRouter } from 'react-router-dom';
import { AppLayout } from '../layout/AppLayout';
import { Home } from '../pages/Home';
import { Ficha } from '../pages/Ficha';
import { Main } from '../pages/Main';
import { Inexistente } from '../pages/Inexistente';

export function UserRoutes() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout/>}>
        <Route path="/" element={<Main/>}/>
        <Route path="/ficha/:id" element={<Ficha/>}/>
      </Route>
      <Route path='*' element={<Inexistente/>} />
    </Routes>
  );
}