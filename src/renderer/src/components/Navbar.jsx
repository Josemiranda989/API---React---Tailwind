import logo from "../assets/react.svg";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-2 bg-red-400">
      <img src={logo} alt="logo" />
      <ul className="text-s flex gap-3">
        <li>
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/register">Register</a>
        </li>
        <li>
          <a href="">Links</a>
        </li>
      </ul>
    </nav>
  );
}
