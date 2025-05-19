
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, BarChart2, Home, Database, ChevronDown, TableCellsSplit } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <BarChart2 className="h-6 w-6 text-research-primary" />
              <span className="text-lg font-semibold text-gray-900">EduSatisPred</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-research-primary transition-colors flex items-center">
              <Home className="mr-1 h-4 w-4" />
              <span>Trang chủ</span>
            </Link>
            <Link to="/dashboard" className="text-gray-700 hover:text-research-primary transition-colors flex items-center">
              <BarChart2 className="mr-1 h-4 w-4" />
              <span>Dashboard</span>
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-research-primary transition-colors flex items-center">
                <Database className="mr-1 h-4 w-4" />
                <span>Dữ liệu</span>
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transform scale-0 group-hover:scale-100 origin-top transition-transform duration-150 ease-in-out z-10">
                <Link to="/data-overview" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Tổng quan dữ liệu</Link>
                <Link to="/data-quality" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Chất lượng dữ liệu</Link>
              </div>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-4 py-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-research-primary transition-colors flex items-center px-2 py-1 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <Home className="mr-2 h-5 w-5" />
                <span>Trang chủ</span>
              </Link>
              <Link 
                to="/dashboard" 
                className="text-gray-700 hover:text-research-primary transition-colors flex items-center px-2 py-1 rounded-md hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <BarChart2 className="mr-2 h-5 w-5" />
                <span>Dashboard</span>
              </Link>
              
            
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
