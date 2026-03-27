import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // 👈 mobile menu

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrolled(window.scrollY > 50);
    });
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-50 px-4 sm:px-6 md:px-10 py-4 flex justify-between items-center transition duration-300 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src="/assets/logo.jpeg"
          alt="logo"
          className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
        />
        <h1 className="text-white text-sm sm:text-lg tracking-widest font-light">
          UDAIKOT FARM
        </h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 text-white text-sm tracking-wide">
        <a href="#home" className="hover:text-[#c9a46c]">Home</a>
        <a href="#about" className="hover:text-[#c9a46c]">About</a>
        <a href="#gallery" className="hover:text-[#c9a46c]">Gallery</a>
        <a href="#contact" className="hover:text-[#c9a46c]">Contact</a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-white text-2xl cursor-pointer">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/90 text-white flex flex-col items-center py-6 space-y-4 md:hidden">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </div>
  );
}