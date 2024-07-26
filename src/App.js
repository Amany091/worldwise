import "./App.css";
import Navbaar from "./components/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import Notfound from "./components/pages/notfound";
import Login from "./components/pages/login";
import Register from "./components/pages/register";
import { Users, User } from "./components/context/users";
import { useState } from "react";
import Product from "./components/pages/product";
import Princing from "./components/pages/pricing";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});

  return (
    <div className="App">
      <Users.Provider value={{ users, setUsers }}>
        <User.Provider value={{ user, setUser }}>
          <Router>
            <ToastContainer/>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="*" element={<Notfound />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/product" element={<Product />} />
              <Route path="/pricing" element={<Princing />} />
            </Routes>
          </Router>
        </User.Provider>
      </Users.Provider>
    </div>
  );
}

export default App;
