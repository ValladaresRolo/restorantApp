import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { Menu } from "./pages/Menu"
import { Reserva } from "./pages/Reserva"
import { MenuDetail } from "./pages/MenuDetail"



function App() {


  return (

    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reserva" element={<Reserva />} />
        <Route path="/menus/:sku" element={<MenuDetail />} />
      </Routes>

    </>
  )
}

export default App
