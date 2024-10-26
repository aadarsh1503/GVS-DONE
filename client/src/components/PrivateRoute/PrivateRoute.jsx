import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext';

const PrivateRoute = ({ element }) => {
  const { token } = useAuth();

  return token ? element : <Navigate to="/admin" replace />;
};

export default PrivateRoute;
