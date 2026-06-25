import { useState } from "react";
import "../App.css";
import Menu1 from "./Menu1";
import Footer from "./Footer";
import Keranjang from "./Keranjang";
import Navbar from "./Navbar";
import Header from "./Header";
import { ShoppingBag, Search } from "react-feather";
import Section3 from "./section3";
import { useNavigate } from "react-router-dom";
import nxc2 from "../img/nxc2.png";
import { products } from "../data/products";

export default function HomePage() {
  const navigate = useNavigate();
  const [productStates, setProductStates] = useState(() =>
    Object.fromEntries(
      products.map((item) => [item.id, { qty: 1, selected: false }]),
    ),
  );
  const [popup, setPopup] = useState(false);
  const [ove, setOve] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [nama, setNama] = useState("");
  const [meja, setMeja] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [orderSummary, setOrderSummary] = useState({ nama: "", meja: "" });

  function updateProduct(id, data) {
    setProductStates((prev) => ({ ...prev, [id]: data }));
  }

  function ubahJumlah(setter, data, delta) {
    const newQty = Math.max(1, data.qty + delta);
    setter({ ...data, qty: newQty });
  }

  function toggleItem(setter, data) {
    setter({ ...data, selected: !data.selected });
  }

  function formatRupiah(angka) {
    return `Rp${angka.toLocaleString("id-ID")}`;
  }

  function showPopup() {
    setPopup(true);
    setOve(true);
    document.body.style.overflow = "hidden";
  }

  function hidePopup() {
    setPopup(false);
    setOve(false);
    document.body.style.overflow = "auto";
  }

  function closeOrderSummary() {
    window.location.reload();
  }

  const menuList = products.map((item) => ({
    ...item,
    state: productStates[item.id],
    set: (data) => updateProduct(item.id, data),
  }));

  const totalQty = menuList.reduce(
    (total, item) => total + (item.state.selected ? item.state.qty : 0),
    0,
  );

  const totalHarga = menuList.reduce(
    (total, item) =>
      total + (item.state.selected ? item.state.qty * item.harga : 0),
    0,
  );

  const cartItems = menuList
    .filter((item) => item.state.selected)
    .map((item) => ({
      id: item.id,
      nama: item.nama,
      harga: item.harga,
      qty: item.state.qty,
      img: item.img,
    }));

  const filteredMenuList = menuList.filter((item) => {
    if (!searchTerm || searchTerm.trim() === "") return true;
    return item.nama.toLowerCase().includes(searchTerm.trim().toLowerCase());
  });

  async function kirimKeSheets() {
    if (!nama.trim() || !meja.trim()) {
      setStatusMessage("Isi nama dan nomor meja terlebih dahulu.");
      return;
    }

    if (cartItems.length === 0) {
      setStatusMessage("Keranjang masih kosong.");
      return;
    }

    setIsSubmitting(true);
    setStatusMessage("");

    hidePopup();
    setOrderSummary({ nama: nama.trim(), meja: meja.trim() });
    setShowOrderSummary(true);
    document.body.style.overflow = "hidden";

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbydmqAbZHq649buZ_KxrkIruM46KXx0lVYf1CdaLBsmHVDMMa7z_EFlNZghmsr4yU_AoQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify({
            nama: nama.trim(),
            meja: meja.trim(),
            pesanan: cartItems
              .map((item) => `${item.nama} x${item.qty}`)
              .join(", "),
            total: totalHarga,
          }),
        },
      );

      setStatusMessage("Pesanan berhasil dikirim ke Google Sheets.");
    } catch (error) {
      console.error(error);
      setStatusMessage("Gagal mengirim pesanan.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="konten">
      <Navbar showPopup={showPopup} totalQty={totalQty} />

      {ove && <div className="ove"></div>}
      {showOrderSummary && (
        <div className="orderSummaryOverlay" onClick={closeOrderSummary}>
          <div
            className="orderSummaryPopup"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="closeCart" onClick={closeOrderSummary}>
              ✕
            </button>
            <h3>Pesanan Terkonfirmasi</h3>
            <p>
              <strong>Nama:</strong> {orderSummary.nama}
            </p>
            <p>
              <strong>Meja:</strong> {orderSummary.meja}
            </p>
          </div>
        </div>
      )}
      {popup && (
        <Keranjang
          cartItems={cartItems}
          totalHarga={totalHarga}
          formatRupiah={formatRupiah}
          kirimKeSheets={kirimKeSheets}
          setShowCart={hidePopup}
          nama={nama}
          setNama={setNama}
          meja={meja}
          setMeja={setMeja}
          isSubmitting={isSubmitting}
          statusMessage={statusMessage}
        />
      )}

      <div className="headmenu">
        <div className="imgd1">
          {" "}
          <img src={nxc2} alt="nxc2" />{" "}
          <h1>
            Tokoweb<span>Ardeva</span>.
          </h1>
        </div>
        <h3 className="shoppingbag2">
          <ShoppingBag className="shoppingbag" />
        </h3>
        <label className="input1">
          <Search />
          <input
            type="text"
            placeholder="cari barang"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>

      {searchTerm.trim().length >= 1 && filteredMenuList.length === 0 && (
        <p style={{ textAlign: "center", margin: "8px 0" }}>Barang tidak ada</p>
      )}

      <Menu1
        menuList={filteredMenuList}
        toggleItem={toggleItem}
        ubahJumlah={ubahJumlah}
        formatRupiah={formatRupiah}
      />

      <hr className="hr1" />
    </div>
  );
}
