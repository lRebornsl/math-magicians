import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar container flex">
    <h1>Math Magicians</h1>
    <ul className="flex">
      <li className="navItem"><Link to="/">Home</Link></li>
      <hr className="line" />
      <li className="navItem"><Link to="/calculator">Calculator</Link></li>
      <hr className="line" />
      <li className="navItem"><Link to="/quote">Quote</Link></li>
    </ul>
  </nav>
);

export default Navbar;
