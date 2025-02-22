import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  const searchMovie = async (e) => {
    e?.preventDefault();

    if (!searchTerm.trim() || isSearching) {
      return;
    }

    try {
      setIsSearching(true);

      const response = await axios.get("http://localhost:8000/getMovie", {
        params: {
          movieTitle: searchTerm.trim(),
        },
      });

      if (response.data && response.data.Title && response.data.imdbID) {
        navigate(`/movie/${response.data.imdbID}`, {
          state: response.data,
        });
      } else {
        alert("Movie not found!");
      }
    } catch (error) {
      console.error("Search error:", error);
      alert("Failed to search for movie. Please try again.");
    } finally {
      setIsSearching(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchMovie(e);
    }
  };

  return (
    <div className="flex items-center justify-between p-2">
      <div className="flex items-center text-3xl gap-1 font-semibold cursor-pointer">
        <p>PopPix</p>
      </div>

      <div className="flex gap-8 items-center">
        <button className="cursor-pointer tracking-tight font-medium">
          HOME
        </button>

        <div className="relative group">
          <button className="cursor-pointer tracking-tight font-medium">
            GENRES
          </button>
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden group-hover:block hover:block pt-2">
            <div className="w-72 bg-white p-4 border rounded-lg shadow-lg">
              <div className="grid grid-cols-3 gap-4">
                <ul>
                  <li className="hover:bg-gray-200 p-1">Action</li>
                  <li className="hover:bg-gray-200 p-1">Adventure</li>
                  <li className="hover:bg-gray-200 p-1">Comedy</li>
                  <li className="hover:bg-gray-200 p-1">Drama</li>
                </ul>
                <ul>
                  <li className="hover:bg-gray-200 p-1">Horror</li>
                  <li className="hover:bg-gray-200 p-1">Sci-Fi</li>
                  <li className="hover:bg-gray-200 p-1">Fantasy</li>
                  <li className="hover:bg-gray-200 p-1">Romance</li>
                </ul>
                <ul>
                  <li className="hover:bg-gray-200 p-1">Thriller</li>
                  <li className="hover:bg-gray-200 p-1">Mystery</li>
                  <li className="hover:bg-gray-200 p-1">Documentary</li>
                  <li className="hover:bg-gray-200 p-1">Animation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <button className="cursor-pointer tracking-tight font-medium">
          MOVIES
        </button>

        <button className="cursor-pointer tracking-tight font-medium">
          TV SHOWS
        </button>
      </div>

      <form
        onSubmit={searchMovie}
        className="border border-gray-600 rounded-md pl-1 flex items-center"
      >
        <input
          type="text"
          placeholder="Search"
          className="text-sm focus:outline-none p-1 font-medium"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isSearching}
        />
        <button
          type="submit"
          className="p-1 hover:bg-gray-100 rounded-r-md"
          disabled={isSearching}
        >
          <SearchIcon className={isSearching ? "animate-spin" : ""} />
        </button>
      </form>

      <div className="flex items-center gap-2">
        <Link to="/cart" className="flex items-center cursor-pointer">
          <ShoppingCartIcon />
        </Link>
        <Link to="/settings" className="flex items-center cursor-pointer">
          <SettingsIcon />
        </Link>
      </div>
    </div>
  );
};

export default Header;
