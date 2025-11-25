import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { User, LogOut, Menu } from 'lucide-react';

export default function Header() {
  const { isAuthenticated, logout, user } = useContext(AuthContext);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-rose-200 shadow-soft">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-rose-700 bg-clip-text text-transparent hover:from-rose-700 hover:via-pink-700 hover:to-rose-800 transition-all duration-300">
            My Portfolio
          </Link>
          <div className="flex-1 flex justify-evenly items-center text-sm md:text-base">
            <Link to="/" className="group relative overflow-hidden rounded-md px-3 py-1 text-neutral-700 hover:text-rose-700 transition-all duration-300 font-medium transform hover:-translate-y-0.5">
              <span className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-rose-100 to-transparent transition-all duration-300 ease-out group-hover:h-full"></span>
              <span className="relative z-10">Home</span>
            </Link>
            <Link to="/projects" className="group relative overflow-hidden rounded-md px-3 py-1 text-neutral-700 hover:text-rose-700 transition-all duration-300 font-medium transform hover:-translate-y-0.5">
              <span className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-rose-100 to-transparent transition-all duration-300 ease-out group-hover:h-full"></span>
              <span className="relative z-10">Projects</span>
            </Link>
            <Link to="/blog" className="group relative overflow-hidden rounded-md px-3 py-1 text-neutral-700 hover:text-rose-700 transition-all duration-300 font-medium transform hover:-translate-y-0.5">
              <span className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-rose-100 to-transparent transition-all duration-300 ease-out group-hover:h-full"></span>
              <span className="relative z-10">Blog</span>
            </Link>
            <Link to="/contact" className="hidden sm:block group relative overflow-hidden rounded-md px-3 py-1 text-neutral-700 hover:text-rose-700 transition-all duration-300 font-medium transform hover:-translate-y-0.5">
              <span className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-rose-100 to-transparent transition-all duration-300 ease-out group-hover:h-full"></span>
              <span className="relative z-10">Contact</span>
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/admin" className="group relative overflow-hidden rounded-md px-3 py-1 text-neutral-700 hover:text-rose-700 transition-all duration-300 font-medium transform hover:-translate-y-0.5">
                  <span className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-rose-100 to-transparent transition-all duration-300 ease-out group-hover:h-full"></span>
                  <span className="relative z-10">Admin</span>
                </Link>
                <span className="text-xs md:text-sm text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full hidden md:inline-flex items-center gap-2 font-medium">
                  <User size={16} />
                  {user?.username}
                </span>
                <button
                  onClick={logout}
                  className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg flex items-center gap-2"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link 
                  to="/login" 
                  className="group relative overflow-hidden rounded-md px-3 py-1 text-neutral-700 hover:text-rose-700 transition-all duration-300 font-medium transform hover:-translate-y-0.5"
                >
                  <span className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-t from-rose-100 to-transparent transition-all duration-300 ease-out group-hover:h-full"></span>
                  <span className="relative z-10">Login</span>
                </Link>
                <Link 
                  to="/register" 
                  className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 hover:from-rose-600 hover:via-pink-600 hover:to-rose-700 text-white px-4 py-2 rounded-lg transition-all duration-200 font-medium shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
