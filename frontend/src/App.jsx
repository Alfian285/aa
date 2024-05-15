import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './helper/PrivateRoute';
import PublicRoute from './helper/PublicRoute';
import Login from './pages/Login';
import Home from './pages/Home';
import ResetPassword from './pages/ResetPassword';
import CreatePoll from './pages/CreatePoll';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact="/" element={<PublicRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route exact="/" element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/create-poll" element={<CreatePoll />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
