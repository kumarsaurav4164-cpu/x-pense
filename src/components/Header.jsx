import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          MyWebsite
        </h1>

        {/* Navigation */}
        <ul className="flex gap-6 text-gray-700">
          <li><Link to="/" className="hover:text-blue-600">Home234545</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">About3454</Link></li>
          <li><Link to="/service" className="hover:text-blue-600">Servicesetr</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
        </ul>

        {/* Button */}
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
          Login
        </button>

      </nav>
    </header>
  )
}

export default Header