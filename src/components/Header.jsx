
import {useState} from "react";
import "./header.css";
import cookis from "../img/cookis.png";
import yt from "../img/ig.png";
import ig from "../img/yt.png";
import tk from "../img/tiktokrm.png";

export default function Header({ totalQty, showPopup }) {

  function klik(){
    window.location.href="#menu";
  }

  function exit1(){
    window.location.href='https://www.google.com/';
  }

  const [open, setOpen] = useState(false);
  
  function openside(){
  setOpen(true);
  document.body.style.overflow="hidden";
  }

  function closeside(){
    setOpen(false);
    document.body.style.overflow="auto";
  }

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

       <button
        className="menu2"
        onClick={openside}
      >
        ☰
      </button>
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
          <button className="btnb" onClick={klik}>Beli Produk</button>
          <button className="btnex" onClick={exit1}>Exit</button>
        </section>
      </article>

      {/* Overlay */}
      {open && (
        <div
          className="overlay"
      
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${open ? "active" : ""}`}>
        <div className="sidebar-top">
          <h2>Menu</h2>

          <button
            className="close-btn"
            onClick={closeside}
          >
            ✕
          </button>
        </div>

        <nav>
          <a href="#">Home</a>
          <a href="#">Produk</a>
          <a href="#">Tentang</a>
          <a href="#">Kontak</a>
        </nav>
      </aside>

    </header>
  );
}