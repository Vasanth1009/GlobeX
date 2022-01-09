import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import './styles/App.scss';
import Home from './pages/Home';
import AppLayout from './components/Layout/AppLayout';
import Dashboard from './pages/Dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getUser } from './stores/userStore';

function App() {
  const dispatch = useDispatch();
  const [userId, setUserId] = useState(window.localStorage.getItem('userId'));
  const user = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser(userId));
  }, [userId, dispatch]);

  function ProtectedRoute({ children }) {
    return user ? children : <Navigate to="/"></Navigate>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
