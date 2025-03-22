"use client";
import { Search, Moon, Sun } from "lucide-react";
import Notification from "../../public/bell.png";
import Image from "next/image";
import LogoDark from "../../public/zerologo.png"; // Light mode logo
import LogoWhite from "../../public/zerologo-white.png"; // Dark mode logo

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  handleConnect: () => void;
  isConnected: boolean;
  className?: string; // Add className to the props
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode, handleConnect, isConnected, className }) => {
  const gradientBorder = "bg-gradient-to-b from-[#A26DFF] to-[#A26DFF] p-[0.7px] rounded-full";

  return (
    <header
      className={`${className} ${isDarkMode ? "bg-[#09050E]" : "bg-white"} border-b-2 ${
        isDarkMode ? "border-[#1F1333]" : "border-gray-300"
      } flex h-24 w-full transition-colors duration-500 fixed top-0 left-0 right-0 z-50`} // Fixed positioning for Navbar
    >
      {/* Logo Container */}
      <div
        className={`w-80 h-24 flex items-center justify-start pl-6 border-r-2 ${
          isDarkMode ? "border-[#1F1333]" : "border-gray-300"
        } transition-colors duration-500 ${isDarkMode ? "bg-[#09050E]" : "bg-white"}`} // Add background color
      >
        <div
          className={`transform ${isDarkMode ? "scale-100" : "scale-150"}`} // Scale light mode logo to 120%
        >
          <Image
            src={isDarkMode ? LogoDark : LogoWhite} // Switch logos based on theme
            alt="ZeroxBridge Logo"
            width={isDarkMode ? 140 : 160} // Increase width for light mode
            height={isDarkMode ? 50 : 60} // Increase height for light mode
            className="object-contain transition-opacity duration-500"
          />
        </div>
      </div>

      {/* Rest of the Navbar */}
      <div
        className={`flex-1 flex justify-between items-center px-8 h-24 border-r ${
          isDarkMode ? "border-gray-800" : "border-gray-300"
        } transition-colors duration-500`}
      >
        <div className="flex items-center space-x-6">
          <div className="relative">
            <div className={gradientBorder}>
              <div
                className={`${
                  isDarkMode ? "bg-[#09050E]" : "bg-white"
                } rounded-full transition-colors duration-500`}
              >
                <input
                  type="text"
                  placeholder="Search"
                  className={`${
                    isDarkMode ? "bg-black/30 text-white" : "bg-gray-100 text-black"
                  } pl-6 pr-12 py-3 rounded-full w-[400px] focus:outline-none transition-colors duration-500`}
                />
              </div>
            </div>
            <Search
              className={`absolute right-4 top-3.5 h-5 w-5 ${
                isDarkMode ? "text-gray-400" : "text-gray-500"
              } transition-colors duration-500`}
            />
          </div>

          {/* Notification with gradient border */}
          <div className={gradientBorder}>
            <div
              className={`${
                isDarkMode ? "bg-[#09050E]" : "bg-white"
              } rounded-full transition-colors duration-500`}
            >
              <Image
                src={Notification}
                alt="bell"
                height={45}
                width={45}
                className="p-2.5 transition-opacity duration-500"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <div className={gradientBorder}>
            <div
              className={`flex items-center justify-between ${
                isDarkMode ? "bg-[#21192F]" : "bg-[#F3F4F6]"
              } rounded-full p-1 w-28 transition-colors duration-500`}
            >
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-all duration-500 ${
                  isDarkMode ? "bg-[#4E347B] text-white" : "bg-transparent text-gray-400"
                }`}
              >
                <Moon size={18} />
              </button>
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-all duration-500 ${
                  !isDarkMode ? "bg-[#4E347B] text-white" : "bg-transparent text-gray-400"
                }`}
              >
                <Sun size={18} />
              </button>
            </div>
          </div>

          <div className={gradientBorder}>
            <button
              onClick={handleConnect}
              className={`${
                isDarkMode ? "bg-[#09050E]" : "bg-white"
              } py-3 px-8 rounded-full text-sm ${
                isDarkMode ? "text-white" : "text-black"
              } transition-colors duration-500`}
            >
              {isConnected ? "Connected" : "Connect Wallet"}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;