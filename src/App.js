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
import React from "react";
import HamburgerMenu from "./components/HamburgerMenu";
import HorizontalMenu from "./components/HorizontalMenu";
import GridTileView from "./components/GridTileView";

function App() {
  return (
    <div className="App">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl">Student Dashboard</h1>
      </header>

      <HorizontalMenu />

      <div className="p-4 flex justify-between">
        <HamburgerMenu />
      </div>

      <GridTileView />
    </div>
  );
}

export default App;
