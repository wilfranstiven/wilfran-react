import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';

function App(){
  return (
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path="/register" element={<RegisterPage/>}/>
      <Route path="/forgot" element={<ForgotPasswordPage/>}/>
      <Route path="/dashboard" element={<DashboardPage/>}/> 
     </Routes>
     </BrowserRouter>
  );
}
export default App;


// import LoginPage from'./pages/LoginPage/LoginPage';
// function App(){
//   return (
//     <LoginPage/>
//   );
// }

// export default App;
  
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
