// src/components/layout/Navbar.tsx
import { Link, NavLink } from "react-router-dom";
import { Home, FolderGit2, Wrench, UserRound, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const base = "inline-flex items-center gap-2 px-3 py-2 rounded-xl transition text-foreground";
const item = ({ isActive }: { isActive: boolean }) =>
  `${base} ${isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const MobileLinks = () => (
    <nav className="mt-2 flex flex-col gap-1">
      <NavLink to="/" className={item} onClick={() => setOpen(false)}><Home className="h-4 w-4" /> Home</NavLink>
      <NavLink to="/projects" className={item} onClick={() => setOpen(false)}><FolderGit2 className="h-4 w-4" /> Projects</NavLink>
      <NavLink to="/skills" className={item} onClick={() => setOpen(false)}><Wrench className="h-4 w-4" /> Skills</NavLink>
      <NavLink to="/about" className={item} onClick={() => setOpen(false)}><UserRound className="h-4 w-4" /> About</NavLink>
      <NavLink to="/contact" className={item} onClick={() => setOpen(false)}><Mail className="h-4 w-4" /> Contact</NavLink>
    </nav>
  );

  return (
    <header className="sticky top-0 z-30 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link to="/" className="font-bold text-lg">FEY<span className="text-primary">.dev</span></Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={item}><Home className="h-4 w-4" />Home</NavLink>
          <NavLink to="/projects" className={item}><FolderGit2 className="h-4 w-4" />Projects</NavLink>
          <NavLink to="/skills" className={item}><Wrench className="h-4 w-4" />Skills</NavLink>
          <NavLink to="/about" className={item}><UserRound className="h-4 w-4" />About</NavLink>
          <NavLink to="/contact" className={item}><Mail className="h-4 w-4" />Contact</NavLink>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-72 p-0">
              {/* X butonu — sağ üstte */}
              <SheetClose asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </SheetClose>

              <SheetHeader className="p-4">
                <SheetTitle className="text-left">
                  FEY<span className="text-primary">.dev</span>
                </SheetTitle>
              </SheetHeader>
              <Separator />
              <div className="p-3">
                <MobileLinks />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
