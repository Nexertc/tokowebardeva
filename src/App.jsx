import { useState } from "react";
import "./App.css";
import foto1 from "./img/5.jpeg";
import foto2 from "./img/5.jpeg";
import foto3 from "./img/5.jpeg";
import foto4 from "./img/5.jpeg";
import Header from "./components/Header";
import Menu1 from "./components/Menu1";

export default function App() {

  

  // ================= STATE =================
  const [kopi, setKopi] = useState({ qty: 1, selected: false });
  const [cap, setCap] = useState({ qty: 1, selected: false });
  const [latte, setLatte] = useState({ qty: 1, selected: false });
  const [eskopi, setEskopi] = useState({ qty: 1, selected: false });

  const [search, setSearch] = useState("");

  const menuList = [
  { id: "kopi", nama: "Kopi Hitam", harga: 12000, img: foto1, state: kopi, set: setKopi },
  { id: "cap", nama: "Cappuccino", harga: 18000, img: foto2, state: cap, set: setCap },
  { id: "latte", nama: "Latte", harga: 20000, img: foto3, state: latte, set: setLatte },
  { id: "eskopi", nama: "Es Kopi Susu", harga: 15000, img: foto4, state: eskopi, set: setEskopi },
];

  // ================= FUNCTION =================
  function ubahJumlah(setter, data, delta) {
    let newQty = data.qty + delta;
    if (newQty < 1) newQty = 1;
    setter({ ...data, qty: newQty });
  }

  function toggleItem(setter, data) {
    setter({ ...data, selected: !data.selected });
  }

  function formatRupiah(angka) {
    return "Rp" + angka.toLocaleString("id-ID");
  }

  function cocok(nama) {
    return nama.toLowerCase().includes(search.toLowerCase());
  }

  // ================= TOTAL =================
  const totalQty =
    (kopi.selected ? kopi.qty : 0) +
    (cap.selected ? cap.qty : 0) +
    (latte.selected ? latte.qty : 0) +
    (eskopi.selected ? eskopi.qty : 0);

  const totalHarga =
    (kopi.selected ? kopi.qty * 12000 : 0) +
    (cap.selected ? cap.qty * 18000 : 0) +
    (latte.selected ? latte.qty * 20000 : 0) +
    (eskopi.selected ? eskopi.qty * 15000 : 0);

  // ================= WA =================
  function kirimWA() {
    let text = "☕ Pesanan:\n";

    if (kopi.selected)
      text += `- Kopi Hitam x${kopi.qty} = ${formatRupiah(12000 * kopi.qty)}\n`;

    if (cap.selected)
      text += `- Cappuccino x${cap.qty} = ${formatRupiah(18000 * cap.qty)}\n`;

    if (latte.selected)
      text += `- Latte x${latte.qty} = ${formatRupiah(20000 * latte.qty)}\n`;

    if (eskopi.selected)
      text += `- Es Kopi Susu x${eskopi.qty} = ${formatRupiah(15000 * eskopi.qty)}\n`;

    text += "\nTotal: " + formatRupiah(totalHarga);

    window.open(
      "https://wa.me/6285726516913?text=" + encodeURIComponent(text),
      "_blank",
    );
  }

  const [popup, setPopup] = useState(false);

  function showPopup() {
    setPopup(true);
  }

  function hidePopup() {
    setPopup(false);
  }

  return (
    <div className="konten">
      <Header totalQty={totalQty} showPopup={showPopup} />
      <br />
      {/* SEARCH */}
      <input
        type="text"
        placeholder="Cari menu..."
        onChange={(e) => setSearch(e.target.value)}
      />

     <Menu1
  menuList={menuList}
  cocok={cocok}
  toggleItem={toggleItem}
  ubahJumlah={ubahJumlah}
  formatRupiah={formatRupiah}
/>

      {popup && (
        <div className="popup">
          <div className="popupContent">
            <h2>Pesanan Anda</h2>

            <pre>
              {`☕ Pesanan:\n` +
                (kopi.selected ? `- Kopi Hitam x${kopi.qty}\n` : "") +
                (cap.selected ? `- Cappuccino x${cap.qty}\n` : "") +
                (latte.selected ? `- Latte x${latte.qty}\n` : "") +
                (eskopi.selected ? `- Es Kopi Susu x${eskopi.qty}\n` : "") +
                `\nTotal: ${formatRupiah(totalHarga)}`}
            </pre>

            <button onClick={kirimWA}>Kirim WA</button>
            <button onClick={hidePopup}>Tutup</button>
          </div>
        </div>
      )}
    </div>
  );
}
