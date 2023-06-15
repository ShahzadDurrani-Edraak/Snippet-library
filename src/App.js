import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Components/Home'
import AddSnippet from "./Components/Add-snippet";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/add" element={<AddSnippet />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
