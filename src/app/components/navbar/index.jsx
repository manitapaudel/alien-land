import Link from "next/link";

import Hamburger from "@/app/icons/hamburger";
import "./_navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="alien-home">
        👽
      </Link>
      <section className="routes">
        <Link href="/">Home</Link>
        <Link href="/">Products</Link>
        <Link href="/">Services</Link>
      </section>
      {/* <Hamburger className="hamburger" /> */}
    </nav>
  );
};

export default Navbar;
