import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, ShoppingCart, MapPin, Star, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import marketScene from "@/assets/market-scene.jpg";
import imgMoringa from "@/assets/comm-moringa.jpg";
import imgMaize from "@/assets/comm-maize.jpg";
import imgSesame from "@/assets/comm-sesame.jpg";
import imgSorghum from "@/assets/comm-sorghum.jpg";
import imgSoybean from "@/assets/comm-soybean.jpg";
import imgRice from "@/assets/comm-rice.jpg";
import imgGroundnut from "@/assets/comm-groundnut.jpg";
import imgCashew from "@/assets/comm-cashew.jpg";
import imgMillet from "@/assets/comm-millet.jpg";

export const Route = createFileRoute("/marketplace")({
  head: () => ({
    meta: [
      { title: "Marketplace — Bunza Moringa" },
      { name: "description", content: "Buy and sell verified agricultural commodities. Live prices, escrow, auctions and delivery tracking." },
      { property: "og:title", content: "Agricultural Marketplace" },
      { property: "og:description", content: "Live commodity marketplace connecting farmers, cooperatives, traders and exporters." },
    ],
  }),
  component: Marketplace,
});

const listings = [
  { id: 1, name: "Premium Moringa Leaves (Dried)", price: 3200, unit: "kg", qty: 12000, seller: "Katsina Coop", state: "Katsina", rating: 4.9, verified: true, cat: "Herbs", img: imgMoringa },
  { id: 2, name: "White Maize (Grade A)", price: 480, unit: "kg", qty: 250000, seller: "Kaduna Farmers Ltd", state: "Kaduna", rating: 4.7, verified: true, cat: "Grains", img: imgMaize },
  { id: 3, name: "Sesame Seeds (Export Grade)", price: 1980, unit: "kg", qty: 80000, seller: "Jigawa Exports", state: "Jigawa", rating: 4.8, verified: true, cat: "Oil seeds", img: imgSesame },
  { id: 4, name: "Sorghum (Red)", price: 520, unit: "kg", qty: 130000, seller: "Bauchi Co-op", state: "Bauchi", rating: 4.6, verified: true, cat: "Grains", img: imgSorghum },
  { id: 5, name: "Soybeans", price: 890, unit: "kg", qty: 60000, seller: "Benue Grains", state: "Benue", rating: 4.5, verified: true, cat: "Legumes", img: imgSoybean },
  { id: 6, name: "Paddy Rice", price: 1150, unit: "kg", qty: 210000, seller: "Kebbi Rice Union", state: "Kebbi", rating: 4.7, verified: true, cat: "Grains", img: imgRice },
  { id: 7, name: "Groundnut (Raw)", price: 1250, unit: "kg", qty: 40000, seller: "Kano Traders", state: "Kano", rating: 4.4, verified: false, cat: "Legumes", img: imgGroundnut },
  { id: 8, name: "Cashew Nuts (Raw)", price: 2100, unit: "kg", qty: 25000, seller: "Kogi Exports", state: "Kogi", rating: 4.8, verified: true, cat: "Nuts", img: imgCashew },
  { id: 9, name: "Millet", price: 460, unit: "kg", qty: 95000, seller: "Zamfara Coop", state: "Zamfara", rating: 4.5, verified: true, cat: "Grains", img: imgMillet },
];

function Marketplace() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const cats = ["all", ...Array.from(new Set(listings.map((l) => l.cat)))];
  const filtered = useMemo(
    () => listings.filter((l) =>
      (cat === "all" || l.cat === cat) &&
      (l.name.toLowerCase().includes(q.toLowerCase()) || l.seller.toLowerCase().includes(q.toLowerCase())),
    ),
    [q, cat],
  );

  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={marketScene}
            alt="West African market with traders and grain baskets"
            width={1600}
            height={912}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/50" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <Badge variant="secondary" className="rounded-full backdrop-blur">Marketplace</Badge>
          <h1 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-balance max-w-2xl">
            Verified African commodities. <span className="bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">Fair prices.</span>
          </h1>
          <p className="mt-3 text-foreground/80 max-w-2xl">
            Trade with escrow protection, live prices, and delivery tracking across Nigeria and beyond.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 items-center">
            <div className="relative flex-1 min-w-[240px] max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search commodities or sellers..."
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="pl-9 bg-background/80 backdrop-blur"
              />
            </div>
            <Select value={cat} onValueChange={setCat}>
              <SelectTrigger className="w-[180px] bg-background/80 backdrop-blur"><SelectValue /></SelectTrigger>
              <SelectContent>
                {cats.map((c) => <SelectItem key={c} value={c}>{c === "all" ? "All categories" : c}</SelectItem>)}
              </SelectContent>
            </Select>
            <Button className="gradient-primary text-primary-foreground shadow-elegant">List commodity</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((l) => (
            <Card key={l.id} className="overflow-hidden group hover:shadow-elegant transition-all hover:-translate-y-0.5">
              <div className="h-48 relative overflow-hidden">
                <img
                  src={l.img}
                  alt={l.name}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 flex gap-2">
                  {l.verified && (
                    <Badge className="bg-primary/90 text-primary-foreground gap-1 backdrop-blur"><ShieldCheck className="h-3 w-3" /> Verified</Badge>
                  )}
                  <Badge variant="outline" className="bg-background/80 backdrop-blur">{l.cat}</Badge>
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-1 text-xs bg-background/90 rounded-full px-2 py-1 border backdrop-blur">
                  <Star className="h-3 w-3 fill-gold text-gold" /> {l.rating}
                </div>
              </div>
              <CardContent className="p-5">
                <div className="font-semibold">{l.name}</div>
                <div className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> {l.seller} · {l.state}
                </div>
                <div className="mt-3 flex items-end justify-between">
                  <div>
                    <div className="text-xs text-muted-foreground">Price / {l.unit}</div>
                    <div className="text-xl font-display font-bold">₦ {l.price.toLocaleString()}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground">Available</div>
                    <div className="text-sm font-medium">{l.qty.toLocaleString()} {l.unit}</div>
                  </div>
                </div>
                <Button className="mt-4 w-full gradient-primary text-primary-foreground" onClick={() => toast.success(`Added ${l.name} to cart (demo)`)}>
                  <ShoppingCart className="h-4 w-4 mr-1.5" /> Add to cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">No listings match your search.</div>
        )}
      </section>
    </SiteLayout>
  );
}
