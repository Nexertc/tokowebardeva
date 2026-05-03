// src/components/Keranjang.jsx


import "./keranjang.css";

export default function Keranjang({
  cartItems,
  totalHarga,
  formatRupiah,
  kirimWA,
  setShowCart,
}) {
  return (
    <section className="keranjangPage">
      <article className="keranjangBox">
        
        <header className="keranjangHeader">
          <div className="titleCart">
            <h2>🛒 Keranjang Belanja</h2>
            <p>{cartItems.length} item dipilih</p>
          </div>

          <button
            className="closeCart"
            onClick={() => setShowCart(false)}
          >
            ✕
          </button>
        </header>

        {cartItems.length === 0 ? (
          <section className="cartKosong">
            <h3>Keranjang masih kosong</h3>
            <p>Silakan pilih cookies favorit kamu 🍪</p>
          </section>
        ) : (
          <>
            <section className="listCart">
              {cartItems.map((item) => (
                <article className="cartItem" key={item.id}>
                  
                  <figure className="cartImage">
                    <img src={item.img} alt={item.nama} />
                  </figure>

                  <section className="cartDetail">
                    <h3>{item.nama}</h3>

                    <div className="qtyBox">
                      <span>Jumlah</span>
                      <strong>{item.qty}</strong>
                    </div>

                    <h4>
                      {formatRupiah(item.qty * item.harga)}
                    </h4>
                  </section>
                </article>
              ))}
            </section>

            <footer className="cartFooter">
              <section className="totalBox">
                <p>Total Pembayaran</p>

                <h3>
                  {formatRupiah(totalHarga)}
                </h3>
              </section>

              <button
                className="waButton"
                onClick={kirimWA}
              >
                Kirim Pesanan WhatsApp
              </button>
            </footer>
          </>
        )}
      </article>
    </section>
  );
}