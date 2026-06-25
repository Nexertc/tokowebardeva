import { ShoppingCart } from "react-feather";
import { Menu } from "react-feather";
import nxc2 from "../img/nxc2.png";

export default function Navbar({
    showPopup,
    totalQty,
    openside
}){
    return(
         <nav className="navbar">
                
                <div id="cartBtn" onClick={showPopup}>
                 <ShoppingCart />
                  {totalQty > 0 && <div id="cartCount">{totalQty}</div>}
                </div>
               
                <section className="secha">
                  
                <a className="hyperlink1" href="#">About</a>
                <a className="hyperlink1" href="#">Blog</a>
                </section>
        
               <button
                className="menu2"
              >
               <Menu className="iconmenu"/>
              </button>

            <h1>Tokoweb<span>Ardeva</span>.</h1>

            <img src={nxc2} alt="" className="imgnav1" />

              </nav>
    );
}