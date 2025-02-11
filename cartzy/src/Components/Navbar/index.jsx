import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const navLeft = [
    {
        to: '/',
        text: 'Shopi',
        className: 'font-semibold text-lg'
    },
    {
        to: '/',
        text: 'All',
        className: ''
    },
    {
        to: '/clothes',
        text: 'clothes',
        className: ''
    },
    {
        to: '/electronics',
        text: 'electronics',
        className: ''
    },
    {
        to: '/furnitures',
        text: 'furnitures',
        className: ''
    },
    {
        to: '/toys',
        text: 'toys',
        className: ''
    },
    {
        to: '/others',
        text: 'others',
        className: ''
    },
]

const navRight = [
    {
        to: '/email',
        text: 'contact@davidbeslanga.com',
        className: 'text-black'
    },
    {
        to: '/my-orders',
        text: 'My orders',
        className: ''
    },
    {
        to: '/my-account',
        text: 'My Account',
        className: ''
    },
    {
        to: '/sign-in',
        text: 'Sign in',
        className: ''
    },
    {
        to: '/cart',
        text: '🛒',
        className: ''
    },
]

const Navbar = () => {

  const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-4'
  
    return (
      <nav className="fixed top-0 z-10 flex items-center justify-between w-full px-8 py-5 text-sm font-light">
        <ul className="flex items-center gap-3">
          {navLeft.map((item, index) => (
            <li key={item.text} className={item.className}>
              <NavLink to={item.to}
                className={({ isActive }) => isActive && index !== 0
                  ? activeStyle : undefined}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="flex items-center gap-3">
          {navRight.map((item, index) => (
            <li key={item.text} className={item.className}>
              {item.to !== ''
                ? <NavLink to={item.to}
                    className={({ isActive }) => isActive && index !== 0
                      ? activeStyle : undefined}
                  >
                    {item.text}
                  </NavLink> 
                : <li>
                    {item.text}
                  </li>
              }
            </li>
          ))}
        </ul>
      </nav>
    )
  }

export default Navbar