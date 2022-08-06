import Search from "../search/search";
import "./header.scss";

const logo = "/favicon.png";

function Header() {
  return (
    <header className="c-header">
      <div className="c-container">
        <div className="l-flex l-flex--center l-flex--wrap l-flex--negative">
          <article className="l__col-4">
            <div className="l-flex l-flex--center">

              <div className="c-header__show-sidebar">
              <div className="c-header__show-sidebar__dash">
                </div>
              </div>

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
