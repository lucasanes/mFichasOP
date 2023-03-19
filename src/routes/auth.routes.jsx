import { Routes, Route } from 'react-router-dom';
import { AppLayout } from '../layout/AppLayout';
import { Home } from '../pages/Home';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout/>}>
        <Route path="/" element={<Home/>}/>
      </Route>
    </Routes>
  );
}