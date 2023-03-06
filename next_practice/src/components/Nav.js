import React from "react";
import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Layout = () => {
  return (
    <nav className={navStyles.nav}>
      {/* navStyles의 nav라는 클래스 */}
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
