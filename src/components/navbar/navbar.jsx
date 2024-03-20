import "./navbar.css"
import Cart from "./cart"

const Navbar = () => {
  return (
   <nav className="navbar">

    <img src="/img/afo.png " alt="" className="afo" />

    <ul className="list">
        <li>home</li>
        <li>products</li>
        <li>contact</li>
    </ul>
       <Cart/>
   </nav>
   
  )
}

export default Navbar
