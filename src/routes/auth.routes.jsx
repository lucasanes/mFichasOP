import { Routes, Route, HashRouter } from 'react-router-dom';
import { AppLayout } from '../layout/AppLayout';
import { Home } from '../pages/Home';
import { Ficha } from '../pages/Ficha';
import { Inexistente } from '../pages/Inexistente';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/ficha/:id" element={<Ficha/>}/>
      </Route>
      <Route path='*' element={<Inexistente/>} />
    </Routes>
  );
}