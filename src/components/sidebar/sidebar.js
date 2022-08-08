import "./sidebar.scss";

function Sidebar({ sidebarActive }) {
  const classValues = sidebarActive ? "c-sidebar active" : "c-sidebar";

  return (
    <aside className={classValues}>
      <a href="/novo" className="c-button">
        Criar contato
      </a>
    </aside>
  );
}

export default Sidebar;
