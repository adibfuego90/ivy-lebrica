import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="h-20 border-b border-darksalmon flex items-center uppercase">
      <nav className="wrapper flex justify-between items-center">
        <Link href="/">Ivy Febrica.</Link>

        <div className="flex gap-5">
          <Link href="/">Home</Link>
          <Link href="/packages">Packages</Link>
        </div>

        <div>
          <Button href="/user/login" placeholder="Sign in" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
