import "../App.css";

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
          <div
            key={item.id}
            className={`item ${item.state.selected ? "selected" : ""}`}
            onClick={() => toggleItem(item.set, item.state)}
          >
            <img src={item.img} alt="" />
            <p>{item.nama}</p>
            <small>{formatRupiah(item.harga)}</small>

            <div className="jumlah" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => ubahJumlah(item.set, item.state, -1)}>−</button>
              <input value={item.state.qty} readOnly />
              <button onClick={() => ubahJumlah(item.set, item.state, 1)}>＋</button>
            </div>
          </div>
        ) : null
      )}
    </div>
  );
}