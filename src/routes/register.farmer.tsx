import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, ArrowRight, ArrowLeft, QrCode, Download } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/register/farmer")({
  head: () => ({
    meta: [
      { title: "Farmer Registration — Bunza Moringa" },
      { name: "description", content: "Register as a farmer to get a digital ID, QR card, and access to marketplace, financing and market intelligence." },
    ],
  }),
  component: FarmerReg,
});

type Data = Record<string, string>;

const steps = ["Personal", "Location", "Farm", "Finance", "Review"];

function FarmerReg() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Data>({});
  const [done, setDone] = useState(false);
  const set = (k: string, v: string) => setData((d) => ({ ...d, [k]: v }));

  if (done) return <SuccessCard data={data} />;

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));
  const submit = () => {
    toast.success("Registration submitted successfully");
    setDone(true);
  };

  return (
    <SiteLayout>
      <section className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-6">
          <Link to="/register" className="text-sm text-muted-foreground hover:text-foreground">← Back to roles</Link>
          <Badge variant="secondary" className="mt-3 rounded-full">Farmer registration</Badge>
          <h1 className="mt-3 text-3xl font-display font-bold">Join as a farmer</h1>
          <p className="mt-2 text-muted-foreground">Complete the steps below to get your digital ID and QR card.</p>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-xs text-muted-foreground mb-2">
            {steps.map((s, i) => (
              <div key={s} className={i === step ? "text-primary font-semibold" : ""}>{i + 1}. {s}</div>
            ))}
          </div>
          <Progress value={((step + 1) / steps.length) * 100} className="h-1.5" />
        </div>

        <Card>
          <CardContent className="p-6 sm:p-8">
            {step === 0 && (
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Full name" k="fullName" data={data} set={set} required />
                <Field label="Phone" k="phone" data={data} set={set} required />
                <Field label="Email" k="email" data={data} set={set} type="email" />
                <SelectField label="Gender" k="gender" data={data} set={set} options={["Male", "Female", "Other"]} />
                <Field label="Date of birth" k="dob" data={data} set={set} type="date" />
                <Field label="National ID (NIN)" k="nin" data={data} set={set} required />
              </div>
            )}
            {step === 1 && (
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Address" k="address" data={data} set={set} required className="sm:col-span-2" />
                <SelectField label="State" k="state" data={data} set={set} options={["Katsina","Kano","Kaduna","Jigawa","Bauchi","Kebbi","Zamfara","Sokoto","Benue"]} />
                <Field label="LGA" k="lga" data={data} set={set} />
                <Field label="Ward" k="ward" data={data} set={set} />
                <Field label="Village" k="village" data={data} set={set} />
                <Field label="GPS coordinates" k="gps" data={data} set={set} placeholder="12.3456, 7.5432" />
              </div>
            )}
            {step === 2 && (
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Farm size (hectares)" k="size" data={data} set={set} type="number" />
                <SelectField label="Farm type" k="type" data={data} set={set} options={["Crop","Livestock","Mixed","Aquaculture"]} />
                <Field label="Primary crop" k="crop1" data={data} set={set} />
                <Field label="Secondary crop" k="crop2" data={data} set={set} />
                <Field label="Livestock (if any)" k="livestock" data={data} set={set} />
                <Field label="Years of experience" k="years" data={data} set={set} type="number" />
              </div>
            )}
            {step === 3 && (
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Bank name" k="bankName" data={data} set={set} />
                <Field label="Account number" k="account" data={data} set={set} />
                <Field label="BVN (optional)" k="bvn" data={data} set={set} />
                <Field label="Cooperative / Association" k="coop" data={data} set={set} />
                <Field label="Next of kin" k="kin" data={data} set={set} />
                <Field label="Next of kin phone" k="kinPhone" data={data} set={set} />
              </div>
            )}
            {step === 4 && (
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">Review your information before submitting.</div>
                <div className="grid gap-2 sm:grid-cols-2 text-sm">
                  {Object.entries(data).map(([k, v]) => (
                    <div key={k} className="rounded-lg border p-3 bg-secondary/40">
                      <div className="text-xs uppercase tracking-wider text-muted-foreground">{k}</div>
                      <div className="font-medium">{v || "—"}</div>
                    </div>
                  ))}
                  {Object.keys(data).length === 0 && (
                    <div className="text-muted-foreground text-sm">No data entered yet.</div>
                  )}
                </div>
              </div>
            )}

            <div className="mt-8 flex justify-between">
              <Button variant="outline" onClick={back} disabled={step === 0}>
                <ArrowLeft className="h-4 w-4 mr-1" /> Back
              </Button>
              {step < steps.length - 1 ? (
                <Button onClick={next} className="gradient-primary text-primary-foreground">
                  Continue <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              ) : (
                <Button onClick={submit} className="gradient-primary text-primary-foreground">
                  Submit registration <CheckCircle2 className="h-4 w-4 ml-1" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </section>
    </SiteLayout>
  );
}

function Field({ label, k, data, set, type = "text", required, className, placeholder }: any) {
  return (
    <div className={className}>
      <Label className="mb-1.5 block">{label}{required && <span className="text-destructive"> *</span>}</Label>
      <Input type={type} placeholder={placeholder} value={data[k] || ""} onChange={(e) => set(k, e.target.value)} required={required} />
    </div>
  );
}
function SelectField({ label, k, data, set, options }: any) {
  return (
    <div>
      <Label className="mb-1.5 block">{label}</Label>
      <Select value={data[k] || ""} onValueChange={(v) => set(k, v)}>
        <SelectTrigger><SelectValue placeholder="Select..." /></SelectTrigger>
        <SelectContent>
          {options.map((o: string) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
        </SelectContent>
      </Select>
    </div>
  );
}

function SuccessCard({ data }: { data: Data }) {
  const id = "BM-FR-" + Math.random().toString(36).slice(2, 8).toUpperCase();
  return (
    <SiteLayout>
      <section className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16">
        <Card className="glass overflow-hidden">
          <CardContent className="p-8 text-center">
            <div className="h-16 w-16 rounded-full gradient-primary text-primary-foreground grid place-items-center mx-auto shadow-elegant">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h1 className="mt-5 text-3xl font-display font-bold">You're registered!</h1>
            <p className="mt-2 text-muted-foreground">Your digital farmer ID has been issued.</p>

            <div className="mt-8 rounded-2xl border p-6 bg-gradient-to-br from-primary/10 to-gold/10 text-left">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Farmer ID</div>
                  <div className="font-display text-2xl font-bold">{id}</div>
                  <div className="mt-1 text-sm">{data.fullName || "New Farmer"}</div>
                  <div className="text-xs text-muted-foreground">{data.state} · {data.lga}</div>
                </div>
                <div className="h-24 w-24 rounded-lg bg-background border grid place-items-center">
                  <QrCode className="h-16 w-16 text-primary" />
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button variant="outline"><Download className="h-4 w-4 mr-1.5" /> Download ID (PDF)</Button>
              <Button className="gradient-primary text-primary-foreground" asChild>
                <Link to="/dashboard">Go to dashboard</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </SiteLayout>
  );
}
