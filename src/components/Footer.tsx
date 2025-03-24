import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4  flex flex-col items-center justify-center space-y-4 border-t border-gray-700">
      <h2 className="text-2xl font-semibold tracking-wide text-cyan-400">FutureTech</h2>
      <p className="text-sm text-gray-400">Innovating the Future, One Step at a Time</p>
      <div className="flex space-x-6">
        <a href="#" className="text-cyan-400 hover:text-white transition duration-300 text-xl"><FaTwitter /></a>
        <a href="#" className="text-cyan-400 hover:text-white transition duration-300 text-xl"><FaGithub /></a>
        <a href="#" className="text-cyan-400 hover:text-white transition duration-300 text-xl"><FaLinkedin /></a>
      </div>
      <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} FutureTech. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
