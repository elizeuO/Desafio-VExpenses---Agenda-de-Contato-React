import Search from "../search/search";
import SidebarToggleButton from "../sidebarToggleButton/sidebarToggleButton";
import "./header.scss";
import { Link } from "react-router-dom";

const logo = "/favicon.png";

function Header({ setSidebarActive, user }) {
  return (
    <header className="c-header">
      <div className="c-container">
        <div className="l-flex l-flex--center l-flex--wrap l-flex--negative">
          <article className="l__col-4">
            <div className="l-flex l-flex--center">
              {
                user &&(
                  <SidebarToggleButton setSidebarActive={setSidebarActive} />
                )
              }
              

              <Link to="/" className="c-header__logo">
                <img
                  src={logo}
                  className="c-header__image"
                  alt="Agenda VExpenses"
                ></img>
              </Link>

              <h1>Agenda VExpenses</h1>
            </div>
          </article>

          {
                user &&(
                  <Search />
                )
              }
        </div>
      </div>
    </header>
  );
}

export default Header;
