import Image from "next/image"
import React from "react"

function Header() {
  return (
    <header className="flex justify-between items-center px-3 py-5">
      {/* add box shadow */}
      <a href="/">
        <Image
          className="w-24"
          src=""
          alt=""
        />
      </a>
      <nav className="flex gap-8 text-lg">
        <a href="/">About us</a>
        <a href="">Career</a>
        <a href="">Products</a>
        <a href="">Contact</a>
        <a href="">Gallery</a>
      </nav>
    </header>
  )
}

export default Header
