import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';

interface PrivateRouteProps {
  redirectTo: string;
  children: any;
}

const PrivateRoute = ({ children, redirectTo }: PrivateRouteProps) => {
  return true ? children : <Navigate to={redirectTo} />;
};

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />


        {/*ROTAS PRIVADAS */}

        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;