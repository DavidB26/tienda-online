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
        text: '🛒 ',
        className: ''
    },
]

const Navbar = () => {
  const context = useContext(ShoppingCartContext);
  return (
    <nav className="fixed top-0 z-10 flex items-center justify-between w-full px-8 py-5 text-sm font-light bg-white shadow-md">
      <ul className="flex items-center gap-3">
        {navLeft.map((item, index) => (
          <li key={item.text} className={item.className}>
            <NavLink to={item.to}
              className={({ isActive }) => isActive && index !== 0 ? "underline underline-offset-4" : undefined}
            >
              {item.text}
            </NavLink>
          </li>
        ))}
      </ul>

      <ul className="flex items-center gap-3">
        {navRight.map((item, index) => (
          <li key={item.text} className={item.className}>
            {item.to !== "/cart" ? (
              <NavLink to={item.to}
                className={({ isActive }) => isActive && index !== 0 ? "underline underline-offset-4" : undefined}
              >
                {item.text}
              </NavLink>
            ) : (
              <NavLink to="/cart" className="relative flex items-center">
              🛒
              {context.count > 0 && (
                <span className="flex items-center justify-center w-5 h-5 ml-2 text-xs text-white bg-red-500 rounded-full">
                  {context.count}
                </span>
              )}
            </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
  }

export default Navbar