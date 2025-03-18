"use client";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  //You can use usePathname() to determine if a link is active.

  return (
    <div>
      <div>Navbar</div>
      <div>ypu are inside ${pathname}</div>
    </div>
  );
};

export default Navbar;
