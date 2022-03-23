import './Navbar.scss';

export const Navbar = ({label}: any) => {
  return (
    <div className='navbar'>
      <h2>{label}</h2>
    </div>
  )
}
