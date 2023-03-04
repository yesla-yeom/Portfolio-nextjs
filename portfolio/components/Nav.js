import React from "react";
import Link from "next/link";

const Layout = () => {
  return (
    <nav>
      <div>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/photo">Photo</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Layout;
