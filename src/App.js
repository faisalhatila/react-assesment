// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.js
// import React from "react";
// import HamburgerMenu from "./components/HamburgerMenu";
// import HorizontalMenu from "./components/HorizontalMenu";
// import GridTileView from "./components/GridTileView";

// function App() {
//   return (
//     <div className="App">
//       <header className="bg-blue-500 text-white p-4">
//         <h1 className="text-2xl">Student Dashboard</h1>
//       </header>

//       <HorizontalMenu />
//       <p>BASE URL : {process.env.REACT_APP_BASE_URL}</p>
//       <div className="p-4 flex justify-between">
//         <HamburgerMenu />
//       </div>

//       <GridTileView />
//     </div>
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/public/Login';
import Signup from './pages/public/Signup';
import Dashboard from './pages/private/Dashboard';
import Profile from './pages/private/Profile';
import ProtectedLayout from './components/ProtectedLayout';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />

        <Route path="/" element={<PrivateRoute><ProtectedLayout /></PrivateRoute>}>
          <Route path="" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
