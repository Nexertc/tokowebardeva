import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <h2>🍪 Sweet Cookies</h2>
          <p>
            Fresh homemade cookies dengan rasa manis dan kualitas terbaik.
          </p>
        </div>

        <div className="footer-menu">
          <h3>Menu</h3>
          <ul>
            <li>Chocolate Cookies</li>
            <li>Vanilla Cookies</li>
            <li>Matcha Cookies</li>
            <li>Red Velvet Cookies</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Kontak</h3>
          <p>📍 Indonesia</p>
          <p>📞 0812-3456-7890</p>
          <p>✉️ resinopalia@gmail.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Sweet Cookies. All Rights Reserved.</p>
      </div>
    </footer>
  );
}