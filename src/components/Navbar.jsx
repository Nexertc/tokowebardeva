import { ShoppingCart } from "react-feather";
import { Menu } from "react-feather";

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
              </nav>
    );
}