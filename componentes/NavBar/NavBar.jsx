import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'



const NavBar = () => {
  return (
    <header>
      <Link to="/">
      <img src="./img/logo.jpg" alt="logo" />
      </Link>
      <Link to="/">
        <h1>Bienvenidos a Don Mate</h1>
      </Link>
      <nav>
        <ul>
          <NavLink to="/categoria/1">
            <li>Mates</li>
          </NavLink>
          <NavLink to="/categoria/2">
            <li>Termos</li>
          </NavLink>
          <NavLink to="/categoria/3">
            <li>Botellas</li>
          </NavLink>
          <NavLink to="/categoria/4">
            <li>Vasos</li>
          </NavLink>
        </ul>
      </nav>
      <CartWidget />
    </header>
  )
}

export default NavBar