import { Link } from "react-router-dom";
import { FaMobileAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gray-900 p-5 shadow-lg border-b border-gray-700">
      <div className="container mx-auto flex justify-between items-center text-cyan-400">
        <Link to="/" className="text-2xl font-bold flex items-center space-x-2">
          <FaMobileAlt className="text-cyan-400" />
          <span>Phone Futuro</span>
        </Link>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link to="/" className="hover:text-white transition duration-300">Home</Link>
            </li>
            <li>
              <Link to="/add-phone" className="hover:text-white transition duration-300">Add Phone</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
