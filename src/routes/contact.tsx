import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Bunza Moringa" },
      { name: "description", content: "Get in touch with Bunza Moringa Concept Nig Ltd for partnerships, sales and support." },
      { property: "og:title", content: "Contact us" },
      { property: "og:description", content: "Reach our team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sending, setSending] = useState(false);
  return (
    <SiteLayout>
      <section className="gradient-hero">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <Badge variant="secondary" className="rounded-full">Contact</Badge>
          <h1 className="mt-4 text-4xl sm:text-5xl font-display font-bold text-balance">Let's build together</h1>
          <p className="mt-3 text-muted-foreground">Partnerships, sales, media, and support.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-3 gap-8">
        <div className="space-y-4">
          {[
            { i: Mail, t: "Email", v: "info@bunzamoringa.com" },
            { i: Phone, t: "Phone", v: "+234 800 000 0000" },
            { i: MapPin, t: "Office", v: "Abuja, Nigeria" },
          ].map((c) => (
            <Card key={c.t}>
              <CardContent className="p-5 flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg gradient-primary text-primary-foreground grid place-items-center">
                  <c.i className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.t}</div>
                  <div className="font-medium">{c.v}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="lg:col-span-2">
          <CardContent className="p-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSending(true);
                setTimeout(() => {
                  setSending(false);
                  toast.success("Message sent — we'll be in touch shortly.");
                  (e.target as HTMLFormElement).reset();
                }, 800);
              }}
              className="grid gap-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label htmlFor="n">Full name</Label><Input id="n" required /></div>
                <div><Label htmlFor="e">Email</Label><Input id="e" type="email" required /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><Label htmlFor="p">Phone</Label><Input id="p" /></div>
                <div><Label htmlFor="s">Subject</Label><Input id="s" required /></div>
              </div>
              <div><Label htmlFor="m">Message</Label><Textarea id="m" rows={5} required /></div>
              <Button type="submit" disabled={sending} className="gradient-primary text-primary-foreground w-fit">
                <Send className="h-4 w-4 mr-1.5" /> {sending ? "Sending..." : "Send message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>
    </SiteLayout>
  );
}
