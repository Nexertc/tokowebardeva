import "./section3.css";
import { MapPin } from "react-feather";

export default function Section3() {
  return (
    <div className="section3">
      <div className="lokasi">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.6043619868374!2d106.72245307356403!3d-6.57151409342184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69db4bf852c0b7%3A0x5d0e5d2e46f1779f!2sSMK%20Geo%20Informatika!5e0!3m2!1sid!2sid!4v1780155522657!5m2!1sid!2sid"
          title="smk geo informatika"
        ></iframe>


        <article>
          <h5>
            <MapPin className="MapPin" />
            Lokasi Sekolah saya
            <MapPin className="MapPin" />
          </h5>
          <section>
            <p>
              Negara Indonesia, provinsi Jawa Barat, kabupaten Bogor, kecamatan
              Ciampea.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
