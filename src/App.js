import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import HomeView from "./views/HomeView";
import Sub1 from "./views/Sub1";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />    
        <Route path="/sub1" element={<Sub1 />} />   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
