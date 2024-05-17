import { ItemListContainer } from "./componentes/ItemListContainer";
import { NavBar } from "./componentes/NavBar";
import { Nombre } from "./componentes/Nombre";
import "./index.css"

function App() {
  return (
    <>
      <Nombre />
      <NavBar />
      <ItemListContainer />
    </>
  )
}

export default App