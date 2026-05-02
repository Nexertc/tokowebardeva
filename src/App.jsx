import { useState } from "react";
import "./App.css";
import cookis from "./img/produkc4.jpg";
import cookies2 from "./img/cookis.png";
import Header from "./components/Header";
import Menu1 from "./components/Menu1";
import Footer from "./components/Footer";

export default function App() {
  // ================= STATE =================
  const [choco, setChoco] = useState({ qty: 1, selected: false });
  const [vanilla, setVanilla] = useState({ qty: 1, selected: false });
  const [redvelvet, setRedvelvet] = useState({ qty: 1, selected: false });
  const [matcha, setMatcha] = useState({ qty: 1, selected: false });

  const [oreo, setOreo] = useState({ qty: 1, selected: false });
  const [strawberry, setStrawberry] = useState({ qty: 1, selected: false });
  const [cheese, setCheese] = useState({ qty: 1, selected: false });
  const [caramel, setCaramel] = useState({ qty: 1, selected: false });

  const [search, setSearch] = useState("");
  const menuList = [
    {
      id: "choco",
      nama: "🟢Chocolate Cookies",
      harga: 12000,
      img: cookis,
      state: choco,
      set: setChoco,
    },
    {
      id: "vanilla",
      nama: "🟢Vanilla Cookies",
      harga: 18000,
      img: cookis,
      state: vanilla,
      set: setVanilla,
    },
    {
      id: "redvelvet",
      nama: "🟡Red Velvet Cookies",
      harga: 20000,
      img: cookis,
      state: redvelvet,
      set: setRedvelvet,
    },
    {
      id: "matcha",
      nama: "🟡Matcha Cookies",
      harga: 15000,
      img: cookis,
      state: matcha,
      set: setMatcha,
    },

    {
      id: "oreo",
      nama: "🟢Oreo Cookies",
      harga: 12000,
      img: cookis,
      state: oreo,
      set: setOreo,
    },
    {
      id: "strawberry",
      nama: "🟠Strawberry Cookies",
      harga: 18000,
      img: cookis,
      state: strawberry,
      set: setStrawberry,
    },
    {
      id: "cheese",
      nama: "🟠Cheese Cookies",
      harga: 20000,
      img: cookis,
      state: cheese,
      set: setCheese,
    },
    {
      id: "caramel",
      nama: "🟡Caramel Cookies",
      harga: 15000,
      img: cookis,
      state: caramel,
      set: setCaramel,
    },
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
    (choco.selected ? choco.qty : 0) +
    (vanilla.selected ? vanilla.qty : 0) +
    (redvelvet.selected ? redvelvet.qty : 0) +
    (matcha.selected ? matcha.qty : 0) +
    (oreo.selected ? oreo.qty : 0) +
    (strawberry.selected ? strawberry.qty : 0) +
    (cheese.selected ? cheese.qty : 0) +
    (caramel.selected ? caramel.qty : 0);

  const totalHarga =
    (choco.selected ? choco.qty * 12000 : 0) +
    (vanilla.selected ? vanilla.qty * 18000 : 0) +
    (redvelvet.selected ? redvelvet.qty * 20000 : 0) +
    (matcha.selected ? matcha.qty * 15000 : 0) +
    (oreo.selected ? oreo.qty * 12000 : 0) +
    (strawberry.selected ? strawberry.qty * 18000 : 0) +
    (cheese.selected ? cheese.qty * 20000 : 0) +
    (caramel.selected ? caramel.qty * 15000 : 0);

  // ================= WA =================
  function kirimWA() {
    let text = "🍪 Pesanan:\n";

    if (choco.selected)
      text += `- Chocolate Cookies x${choco.qty} = ${formatRupiah(12000 * choco.qty)}\n`;

    if (vanilla.selected)
      text += `- Vanilla Cookies x${vanilla.qty} = ${formatRupiah(18000 * vanilla.qty)}\n`;

    if (redvelvet.selected)
      text += `- Red Velvet Cookies x${redvelvet.qty} = ${formatRupiah(20000 * redvelvet.qty)}\n`;

    if (matcha.selected)
      text += `- Matcha Cookies x${matcha.qty} = ${formatRupiah(15000 * matcha.qty)}\n`;

    if (oreo.selected)
      text += `- Oreo Cookies x${oreo.qty} = ${formatRupiah(12000 * oreo.qty)}\n`;

    if (strawberry.selected)
      text += `- Strawberry Cookies x${strawberry.qty} = ${formatRupiah(18000 * strawberry.qty)}\n`;

    if (cheese.selected)
      text += `- Cheese Cookies x${cheese.qty} = ${formatRupiah(20000 * cheese.qty)}\n`;

    if (caramel.selected)
      text += `- Caramel Cookies x${caramel.qty} = ${formatRupiah(15000 * caramel.qty)}\n`;

    text += "\nTotal: " + formatRupiah(totalHarga);

    window.open(
      "https://wa.me/6285726516913?text=" + encodeURIComponent(text),
      "_blank",
    );
  }

  const [popup, setPopup] = useState(false);

  function showPopup() {
    setPopup(true);
    setOve(true);
    document.body.style.overflow = "hidden";
  }

  function hidePopup() {
    setPopup(false);
    setOve(!ove);
    document.body.style.overflow = "auto";
  }

  const [ove, setOve] = useState(false);

  return (
    <div className="konten">
      <Header totalQty={totalQty} showPopup={showPopup} />

     
      <div className="headmenu">
         <h4 className="h4pesan" id="menu">
        <img src={cookies2} alt="cookis" width="10%" /> Pesan sekarang
      </h4>

     <h4 className="h4pesan2">🟢 sangat Enak</h4> 
     <h4 className="h4pesan2">🟡 Cukup Enak</h4>  
     <h4 className="h4pesan2">🟠 Enak</h4>

      </div>

      <Menu1
        menuList={menuList}
        cocok={cocok}
        toggleItem={toggleItem}
        ubahJumlah={ubahJumlah}
        formatRupiah={formatRupiah}
      />

      {ove && <div className="ove"></div>}

      {popup && (
        <dialog className="popup" open>
          <article className="popupContent">
            <header>
              <h2>Pesanan Anda</h2>
            </header>

            <section>
              <pre>
                {`🍪 Pesanan:\n` +
                  (choco.selected
                    ? `- Chocolate Cookies x${choco.qty}\n`
                    : "") +
                  (vanilla.selected
                    ? `- Vanilla Cookies x${vanilla.qty}\n`
                    : "") +
                  (redvelvet.selected
                    ? `- Red Velvet Cookies x${redvelvet.qty}\n`
                    : "") +
                  (matcha.selected ? `- Matcha Cookies x${matcha.qty}\n` : "") +
                  (oreo.selected ? `- Oreo Cookies x${oreo.qty}\n` : "") +
                  (strawberry.selected
                    ? `- Strawberry Cookies x${strawberry.qty}\n`
                    : "") +
                  (cheese.selected ? `- Cheese Cookies x${cheese.qty}\n` : "") +
                  (caramel.selected
                    ? `- Caramel Cookies x${caramel.qty}\n`
                    : "") +
                  `\nTotal: ${formatRupiah(totalHarga)}`}
              </pre>
            </section>

            <button className="btnpopup" onClick={kirimWA}>
              Kirim WA
            </button>
            <button className="btnpopup" onClick={hidePopup}>
              Tutup
            </button>
          </article>
        </dialog>
      )}

           <hr className="hr1" />

 <article className="artc2">
        <img className="cookies2" src={cookies2} alt="cookies2" />
        <section>
          <h2 className="artcH22">Pengertian</h2>
          <p className="artcP2">
            {" "}
            Biskuit cookies adalah jenis kue kering renyah hasil panggangan yang
            terbuat dari adonan lunak, umumnya berukuran kecil, manis, dan
            tinggi lemak. Berdasarkan, cookies sering dikategorikan sebagai
            jenis biskuit, namun memiliki tekstur yang lebih lunak saat mentah
            dan lebih renyah/rapuh saat matang.{" "}
          </p>
        </section>
        <img className="cookies3" src={cookies2} alt="cookies3" />
      </article>

      <Footer />
    </div>
  );
}
