
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home/>} />
        
        <Route path="/login" element={<Login/>}/>
  
        <Route path="/register"  element={<SignUp/>}/>
  
 
   </Routes>
    </div>
    </Router>
  );
}

export default App;
