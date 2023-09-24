import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { Menu } from "./pages/Menu"
import { Reserva } from "./pages/Reserva"
import { MenuDetail } from "./pages/MenuDetail"
import { Footer } from "./components/Footer"



function App() {


  return (

    <>
      <NavBar />
      <Routes>
        <Route path="/restorantApp/" element={<Home />} />
        <Route path="/restorantApp/menu" element={<Menu />} />
        <Route path="/restorantApp/reserva" element={<Reserva />} />
        <Route path="/restorantApp/menus/:sku" element={<MenuDetail />} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
