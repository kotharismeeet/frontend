export const MenuNavbar = ({names}: any) => {
  return <div className="navbar">
        <h2>Menu</h2>
        {names.map((name: any)=> {
        <button className="nav-button">{name}</button>
        })}
    </div>
};