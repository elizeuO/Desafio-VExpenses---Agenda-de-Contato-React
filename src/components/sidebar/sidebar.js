import './sidebar.scss';

function Sidebar({sidebarActive}){
    const classValues = sidebarActive ? 'c-sidebar active' : 'c-sidebar';
    
    return(
    <aside className={classValues}>
    <button>Criar contato</button>
    </aside>
    );
    
}

export default Sidebar;