import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Study from "./Pages/Study/Study";
import Community from "./Pages/Community/Community";
import Store from "./Pages/Store/Store";
import LoginSignup from "./Pages/LoginSignup/LoginSignup";
import { ToastContainer } from "react-toastify";
import ReactSwitch from "react-switch";
import { createContext, useState } from "react";

export const Themecontext = createContext(null);


function App() {
  const [theme, setTheme ] = useState(null);

  const toggleTheme = () =>{
    setTheme((curr)=>(curr === "light" ? "dark" : "light"));
  };
  return (
    <Themecontext.Provider value={{theme, toggleTheme}}>
    <div className="App" id={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/study" element={<Study />} />
          <Route path="/community" element={<Community />} />
          <Route path="/store" element={<Store />} />
          <Route path="/loginsignup" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer
position="bottom-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
<ReactSwitch onChange={toggleTheme} checked ={theme === "dark"} />
    </div>
    </Themecontext.Provider>
  );
}

export default App;
