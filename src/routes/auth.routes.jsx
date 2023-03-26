import { Routes, Route } from 'react-router-dom';
import { AppLayout } from '../layout/AppLayout';
import { Home } from '../pages/Home';
import { Fichas } from '../pages/Fichas';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout/>}>
        <Route path="/" element={<Home/>}/>
      </Route>
    </Routes>
  );
}