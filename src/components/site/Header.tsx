import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Leaf, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/marketplace", label: "Marketplace" },
  { to: "/prices", label: "Prices" },
  { to: "/register", label: "Register" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl gradient-primary grid place-items-center text-primary-foreground shadow-elegant">
            <Leaf className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-sm tracking-tight">BUNZA MORINGA</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Concept Nig Ltd</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                pathname === n.to
                  ? "text-primary bg-accent"
                  : "text-foreground/70 hover:text-foreground hover:bg-accent/60",
              )}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <Link to="/dashboard">Sign in</Link>
          </Button>
          <Button asChild size="sm" className="gradient-primary text-primary-foreground shadow-elegant">
            <Link to="/register">Get started</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 rounded-md hover:bg-accent"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-background/95 backdrop-blur">
          <div className="px-4 py-3 space-y-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-sm",
                  pathname === n.to ? "bg-accent text-primary font-medium" : "hover:bg-accent",
                )}
              >
                {n.label}
              </Link>
            ))}
            <div className="pt-2 flex gap-2">
              <Button asChild variant="outline" size="sm" className="flex-1">
                <Link to="/dashboard" onClick={() => setOpen(false)}>Sign in</Link>
              </Button>
              <Button asChild size="sm" className="flex-1 gradient-primary text-primary-foreground">
                <Link to="/register" onClick={() => setOpen(false)}>Get started</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
