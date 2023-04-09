import { Outlet } from "react-router-dom"
import CardInfo from "./CardInfo"
import Header from "./Header"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faTruckFast, faLock } from '@fortawesome/free-solid-svg-icons'
import Separator from "./Separator"
import { PRODUCTOS_OFERTA, PRODUCTOS_SEMANA } from "../constants";
import ProductCard from "./ProductCard";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />

      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Layout