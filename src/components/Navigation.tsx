import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Programs", to: "/programs" },
    { name: "Stories", to: "/stories" },
    { name: "Get Involved", to: "/get-involved" },
    { name: "AI Mentor", to: "/mentor" },
  ];

  const linkBase =
    "px-3 py-2 rounded-md text-sm font-medium smooth transition-colors";
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `${linkBase} ${isActive ? "text-primary" : "text-foreground hover:text-primary"}`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <NavLink to="/" className="text-2xl font-bold text-primary">
              ONE HOOD
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink key={item.name} to={item.to} className={linkClasses} end>
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="peace" size="sm">
              Staff Portal
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    `block ${linkBase} ${
                      isActive ? "text-primary" : "text-foreground hover:text-primary"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                  end
                >
                  {item.name}
                </NavLink>
              ))}
              <div className="pt-2">
                <Button variant="peace" size="sm" className="w-full">
                  Staff Portal
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
