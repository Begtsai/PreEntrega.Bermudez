import "./index.css"
import { Header } from "./componentes/header/Header";
import { ItemListContainer } from "./componentes/ItemListContainer";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {

  const [numerito, setNumerito] = useState(1);

  return (
    <BrowserRouter>
      <Header numerito={numerito} setNumerito={setNumerito} />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
      </Routes>      
    </BrowserRouter>
  )
}

export default App