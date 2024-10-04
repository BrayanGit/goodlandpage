import React from "react";
import { socialMedia } from "../../constants";
import "./css/contacto.css";

function Contacto() {
  return (
    <section
      id="contacto"
      className="py-5 contacto"
      style={{ backgroundColor: "#414345", color: "#fff" }}
    >
      <div className="container text-center">
        <h2 className="mb-4">Contacto</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <i className="fa-solid fa-envelope" style={{ color: "#74C0FC"}}></i> Email:{" "}
            <a href="mailto:GoodLand@email.com" style={{ color: "#74C0FC" }}>
              GoodLand@Gmail.com
            </a>
          </li>
          <li>
            <i className="fa-solid fa-mobile" style={{ color: "#25D366" }}></i> Phone:{" "}
            <a href="tel:+12345678" style={{ color: "#25D366" }}>
              +569 12345678
            </a>
          </li>
        </ul>

        <div className="social-icons mt-4">
          {socialMedia.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-3"
            >
              <img
                src={social.icon}
                alt={`${social.id} icon`}
                style={{ width: "40px", height: "40px" }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Contacto;
