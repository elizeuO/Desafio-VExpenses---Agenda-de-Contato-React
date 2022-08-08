import Search from "../search/search";
import SidebarToggleButton from "../sidebarToggleButton/sidebarToggleButton";
import "./header.scss";

const logo = "/favicon.png";

function Header({setSidebarActive}) {
  return (
    <header className="c-header">
      <div className="c-container">
        <div className="l-flex l-flex--center l-flex--wrap l-flex--negative">
          <article className="l__col-4">
            <div className="l-flex l-flex--center">
              <SidebarToggleButton setSidebarActive={setSidebarActive}/>

              <a href="/" className="c-header__logo">
                <img
                  src={logo}
                  className="c-header__image"
                  alt="Agenda VExpenses"
                />
              </a>

              <h1>Agenda VExpenses</h1>
            </div>
          </article>

          <article className="l__col-8">
            <Search />
          </article>
        </div>
      </div>
    </header>
  );
}

export default Header;
