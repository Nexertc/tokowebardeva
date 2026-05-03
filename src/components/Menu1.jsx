import "../App.css";
import "./menu1.css";
import cookies from "../img/cookis.png";

export default function Menu1({
  menuList,
  cocok,
  toggleItem,
  ubahJumlah,
  formatRupiah,
}) {

    

  return (
    
    <div className="menu">

      
    {menuList.map((item) =>
  cocok(item.nama) ? (
    <article
      key={item.id}
      className={`item ${item.state.selected ? "selected" : ""}`}
      onClick={() => toggleItem(item.set, item.state)}
    >
      <figure className="figure1">
        <img src={item.img} alt={item.nama} />
      </figure>

      <header>
        <h3 className="itemh3">{item.nama}</h3>
      </header>

      <p>{formatRupiah(item.harga)}</p>

      <footer
        className="jumlah"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={() => ubahJumlah(item.set, item.state, -1)}>
          −
        </button>

        <input value={item.state.qty} readOnly />

        <button onClick={() => ubahJumlah(item.set, item.state, 1)}>
          ＋
        </button>
      </footer>
    </article>
  ) : null
)}
 <img src={cookies} alt="cookies" className="imgmenu1" />
    </div>
  );
}