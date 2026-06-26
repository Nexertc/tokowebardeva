import { ShoppingCart } from "react-feather";
import { Menu } from "react-feather";
import nxc2 from "../img/nxc2.png";
import { useState } from "react";
import { use } from "react";

export default function Navbar({ showPopup, totalQty, openside }) {
  const [state, setState] = useState({
    active: false,
    ove: false,
  });

  function klik() {
    setState((prev) => ({
      active: !prev.active,
      ove: !prev.ove,
    }));
  }

  return (
    <nav className="navbar">
      <div id="cartBtn" onClick={showPopup}>
        <ShoppingCart />
        {totalQty > 0 && <div id="cartCount">{totalQty}</div>}
      </div>

      <section className="secha">
        <a className="hyperlink1" href="#">
          About
        </a>
        <a className="hyperlink1" href="#">
          Blog
        </a>
      </section>

      <aside className={state.active ? "aside1 aside1Active" : "aside1"}>
        <a className="hyperlink1" href="#">
          About
        </a>
        <a className="hyperlink1" href="#">
          Blog
        </a>
      </aside>

      {state.ove && <div className="overlayA" onClick={klik}></div>}

      <button className="menu2" onClick={klik}>
        <Menu className="iconmenu" />
      </button>

      <h1>
        Tokoweb<span>Ardeva</span>.
      </h1>

      <img src={nxc2} alt="" className="imgnav1" />
    </nav>
  );
}
