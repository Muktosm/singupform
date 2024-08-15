import "./App.css";
import { Route, Routes } from "react-router-dom";
import Form from "./Components/Form";
import Form1 from "./Components/Form1";
import Formtwo from "./Components/Formtwo";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      {/* <div className="flex flex-col h-screen justify-center items-center bg-gradient-to-b from-lime-200 to-lime-600"> */}

      <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="/Form" element={<Form />} />
        <Route path="/Form1" element={<Form1/>} />
        <Route path="/Formtwo" element={<Formtwo/>} />

      </Routes>
    </>
  );
}

export default App;
