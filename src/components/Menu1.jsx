import "../App.css";
import "./menu1.css";
import cookies from "../img/cookis.png";
import { Plus, Minus } from "react-feather";

export default function Menu1({
  menuList,
  toggleItem,
  ubahJumlah,
  formatRupiah,
}) {

    

  return (
    
    <div className="menu">

      
    {menuList.map((item) => (
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
        <p>{item.penjelasan}</p>
      <footer
        className="jumlah"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={() => ubahJumlah(item.set, item.state, -1)}>
         <Minus className="btnjumlah" />
        </button>

        <input value={item.state.qty} readOnly />

        <button onClick={() => ubahJumlah(item.set, item.state, 1)}>
         <Plus className="btnjumlah" />
        </button>
      </footer>
    </article>
  ))}
 {/* <img src={cookies} alt="cookies" className="imgmenu1" /> */}
    </div>
  );
}