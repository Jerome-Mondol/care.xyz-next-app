"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const Header = () => {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  return (
    <header className="text-black fixed top-0 z-50 w-full bg-white border-b">
      <nav className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Logo"
            className="h-7"
          />
          <span className="text-xl font-semibold">Care.xyz</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Menu */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-white md:flex items-center gap-6 p-4 md:p-0`}
        >
          <li>
            <Link href="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>

          {/* Dropdown */}
          <li className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 hover:text-blue-600"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              Services ▼
            </button>

            {dropdownOpen && (
              <ul className="absolute top-8 left-0 bg-white border rounded shadow w-40">
                <li>
                  <Link
                    href="/services/baby"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Baby Care
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/elderly"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Elderly Care
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/sick"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Sick Care
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            
          </li>

          {/* Conditional items for authenticated vs unauthenticated users */}
          {session ? (
            <>
              <li>
                <Link href="/my-bookings" className="hover:text-blue-600">
                  My Bookings
                </Link>
              </li>

              <li className="flex items-center gap-3">
                <div className="hidden md:flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
                    {session.user?.name ? session.user.name.charAt(0) : session.user?.email?.charAt(0)}
                  </div>
                  <div className="text-sm">{session.user?.name || session.user?.email}</div>
                </div>
                <button
                  onClick={handleSignOut}
                  className="bg-red-50 text-red-600 px-3 py-1 rounded"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link
                  href="/login"
                  className="hidden md:inline-block px-4 py-2 text-blue-600 border border-blue-200 rounded"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  href="/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Get started
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
