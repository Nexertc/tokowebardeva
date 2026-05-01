import "../App.css";

export default function Header({ totalQty, showPopup }) {
  return (
    <header className="head1">
      <nav className="navbar">
        ☕ Coffe Shop Ardeva
        
        <div id="cartBtn" onClick={showPopup}>
          ☕ 
          {totalQty > 0 && <div id="cartCount">{totalQty}</div>}
        </div>

        <div className="menu2">☰</div>
      </nav>

      <article className="sec1">
        <section className="sec3">
          <h1 className="judul">Website C🍪kies Ardeva Alghifari</h1>
          <p className="p1v">Dibuat oleh Ardeva Alghifari</p>
        </section>

        <section className="sec2">
          <button className="btnb">Beli Produk</button>
          <img
            className="imgn"
            src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png"
            alt="foto"
          />
        </section>
      </article>
    </header>
  );
}