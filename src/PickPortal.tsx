import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const PickPortal = () => {
  const navigate = useNavigate();

  const portals = [
    { title: "Farmer Portal", desc: "Register farm, get QR ID, sell produce", path: "/farmer" },
    { title: "Cooperative Portal", desc: "Onboard members, bulk trading, financing", path: "/cooperative" },
    { title: "Admin Portal", desc: "Manage platform and approvals", path: "/admin" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-primary mb-2">🌿 Bunza Moringa</h1>
      <p className="text-muted-foreground mb-8">Select which portal you want to access</p>
      
      <div className="grid gap-6 w-full max-w-2xl">
        {portals.map((portal) => (
          <Card key={portal.title} className="hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle>{portal.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{portal.desc}</p>
              <Button className="w-full" onClick={() => navigate(portal.path)}>
                Continue
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PickPortal;
