
import "./header.css";
import cookis from "../img/cookis.png";
import yt from "../img/ig.png";
import ig from "../img/yt.png";
import tk from "../img/tiktokrm.png";

export default function Header({ totalQty, showPopup }) {
  return (
    <header className="head1">
      <nav className="navbar">
        
        <div id="cartBtn" onClick={showPopup}>
          🍪
          {totalQty > 0 && <div id="cartCount">{totalQty}</div>}
        </div>
       
        <section className="secha">
          
        <a className="hyperlink1" href="#">About</a>
        <a className="hyperlink1" href="#">Blog</a>
        </section>

        <div className="menu2">☰</div>
      </nav>

      <article className="sec1">
        <section className="sec3">
          <h1 className="judul">Website C🍪kies Resi Nopalia</h1>
          <p className="p1v">Website E-Comerce Cookis</p>
          <figure className="SecFig">
           
              <img className="SecImg"  src={ig} alt="ig" />
               <img className="SecImg"  src={tk} alt="tk" />
               <img className="SecImg" src={yt} alt="yt" />
            
          </figure>
        </section>

        <section className="sec2">
          <button className="btnb">Beli Produk</button>
          <button className="btnex">Exit</button>
        </section>
      </article>
    </header>
  );
}