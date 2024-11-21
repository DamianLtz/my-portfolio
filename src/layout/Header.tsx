"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { handleScrollTo } from "@/utils/functions";

export const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = useCallback(() => {
    if (window.scrollY > 56) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, [changeBackground]);

  return (
    <header
      className={`${
        navbar ? "bg-[#080808]" : "bg-transparent"
      } sticky top-0 transition-colors duration-[350ms] z-50`}>
      <nav className="container px-6">
        <div className="flex items-center justify-between p-2 lg:px-4">
          <Link
            className="text-[32px] font-bold text-white hover:text-[#003cff] transition-all"
            href="/">
            DL
          </Link>
          <ul className="flex items-center">
            <li className="pr-2 lg:pr-3">
              <button
                className="btn-nav-link text-white"
                onClick={() => handleScrollTo("proyectos")}>
                Proyectos
              </button>
            </li>
            <li className="pl-3 pr-2">
              <button
                className="btn-nav-link text-white"
                onClick={() => handleScrollTo("footer")}>
                Contacto
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
