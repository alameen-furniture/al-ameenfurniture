import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const AdminSetup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSetup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      if (!data.user) throw new Error("Signup failed");

      // Assign admin role via edge function
      const { error: roleError } = await supabase.functions.invoke("assign-admin", {
        body: { user_id: data.user.id },
      });

      if (roleError) {
        console.error("Role assignment error:", roleError);
      }

      toast({ title: "Admin account created! You can now login." });
      navigate("/admin");
    } catch (err: any) {
      toast({ title: err.message || "Setup failed", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <h1 className="font-serif text-3xl font-bold text-foreground text-center mb-2">Admin Setup</h1>
        <p className="text-muted-foreground text-center mb-8">Create your admin account (one-time setup)</p>
        <form onSubmit={handleSetup} className="space-y-5 border border-border rounded-xl bg-card p-8">
          <div>
            <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="bg-secondary border-border" />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1.5 block">Password</label>
            <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} className="bg-secondary border-border" />
          </div>
          <Button type="submit" disabled={loading} className="w-full py-5 rounded-full gold-glow">
            {loading ? "Creating..." : "Create Admin Account"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AdminSetup;
