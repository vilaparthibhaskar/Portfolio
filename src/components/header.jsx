import { useState } from "react";
import PropTypes from "prop-types";

export function Header({ setPage }) {
  const [isOpen, setIsOpen] = useState(false);

  function onClick(page) {
    setPage(page);
    setIsOpen(false);
  }

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary pt-4"
      style={{
        position: "fixed",
        height: "60px",
        width: "100vw",
        backgroundColor: "#0d1b2a",
        padding: "0px",
      }}
    >
      <div
        className="container-fluid d-flex justify-content-between align-items-center"
        style={{ backgroundColor: "#0d1b2a", padding: "10px" }}
      >
        <a className="navbar-brand" style={{ color: "white" }} href="#">
          PortFolio
        </a>

        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
          style={{ border: "none", backgroundColor: "transparent" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className="navbar-toggler-icon"
            style={{ filter: "invert(1)" }}
          ></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {["Home", "About", "Education", "skills", "projects"].map((item) => (
              <li className="nav-item px-2" key={item}>
                <button
                  className="nav-link"
                  onClick={() => onClick(item)}
                  style={{ color: "white" }}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Header;

