import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import { Link, NavLink, useNavigate } from "react-router";
import { CiSearch } from "react-icons/ci";

function Header() {
  const [searchInput, setSearchInput] = useState("");
  const navigat = useNavigate();
  const navigation = [
    {
      label: "Tv show",
      href: "tv",
    },
    {
      label: "Movies",
      href: "movies",
    },
  ];

  useEffect(() => {
    navigat(`/search?q=${searchInput}`);
  }, [searchInput]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <header className="fixed top-0 h-16 w-full  bg-neutral-600/75">
      <div className="container mx-auto px-2 ml-3  flex items-center   h-full ">
        <Link to={"/"} className="flex items-center gap-5 ml-5">
          <img className="ml-5" src={logo} alt="logo" width={120} />
        </Link>
        <nav className="hidden lg:flex items-center gap-2 ml-5">
          {navigation.map((nav, index) => {
            return (
              <NavLink
                key={nav.label}
                to={nav.href}
                className={({ isActive }) =>
                  `px-2 hover:text-neutral-100 ${
                    isActive ? "text-gray-50" : ""
                  }`
                }
              >
                {nav.label}
              </NavLink>
            );
          })}
        </nav>
        <div className="ml-auto mr-5 flex items-center gap-5 ">
          <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search here..."
              className="bg-transparent px-4 py-1 outline-none border-none hidden lg:block"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
          </form>
          <button className=" text-2xl text-white">
            <CiSearch />
          </button>

          <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
            <img src={user} alt="user" className="w-full h-full" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
