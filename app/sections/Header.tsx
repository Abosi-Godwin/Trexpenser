"use client";

import Script from "next/script";
import NavBar from "../components/NavBar";

const Header = () => {
  return (
    <div>
      <Script
        src="https://cdn.jsdelivr.net/npm/eruda"
        strategy="afterInteractive"
        onLoad={() => {
          // Eruda is now loaded and available
          // @ts-ignore
          eruda.init();
        }}
      />

      <NavBar />
    </div>
  );
};

export default Header;
