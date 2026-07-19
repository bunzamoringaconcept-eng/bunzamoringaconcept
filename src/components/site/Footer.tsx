import { Link } from "@tanstack/react-router";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t bg-secondary/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl gradient-primary grid place-items-center text-primary-foreground">
              <Leaf className="h-5 w-5" />
            </div>
            <div className="font-display font-bold">Bunza Moringa</div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            AI-powered agricultural ecosystem connecting farmers, cooperatives, traders, exporters and financiers across Africa.
          </p>
        </div>

        <div>
          <div className="font-semibold mb-3 text-sm">Platform</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/marketplace" className="hover:text-foreground">Marketplace</Link></li>
            <li><Link to="/prices" className="hover:text-foreground">Commodity Prices</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/register" className="hover:text-foreground">Registration</Link></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-3 text-sm">Company</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            <li><a href="#" className="hover:text-foreground">Privacy</a></li>
            <li><a href="#" className="hover:text-foreground">Terms</a></li>
          </ul>
        </div>

        <div>
          <div className="font-semibold mb-3 text-sm">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@bunzamoringa.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +234 800 000 0000</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Abuja, Nigeria</li>
          </ul>
        </div>
      </div>
      <div className="border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} Bunza Moringa Concept Nig Ltd. All rights reserved.</div>
          <div>Powered by AI · Built for African agriculture</div>
        </div>
      </div>
    </footer>
  );
}
