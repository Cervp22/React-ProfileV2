import "../styles/navbar.css";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const currentPage = useLocation().pathname;
  return (
    <nav>
      <section class="section_title">
        <h1>Paul Cervantes</h1>
      </section>
      <ul>
        <li className="list1">
          <Link
            to="/"
            className={
              currentPage === "/About" ? "nav-link active" : "nav-link"
            }
          >
            About me
          </Link>
        </li>
        <li className="list1">
          <Link
            to="/Portfolio"
            className={
              currentPage === "/Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </Link>
        </li>
        <li className="list1">
          <Link
            to="/contact"
            className={
              currentPage === "/contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </Link>
        </li>
        <li className="list1">
          <Link
            to="/Resume"
            className={
              currentPage === "/Resume" ? "nav-link active" : "nav-link"
            }
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}
