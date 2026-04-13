import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/30">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center gap-4">
          <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </a>
          <h1 className="font-serif text-2xl font-bold text-foreground">Terms & Conditions</h1>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <p className="text-muted-foreground text-sm">Last updated: April 2026</p>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-semibold text-foreground">1. Services</h2>
          <p className="text-muted-foreground leading-relaxed">
            Al Ameen Furniture provides custom furniture manufacturing, design consultation, delivery, and installation services in Kolkata and surrounding areas. All furniture is handcrafted to order based on your specifications.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-semibold text-foreground">2. Orders & Pricing</h2>
          <p className="text-muted-foreground leading-relaxed">
            Prices quoted are estimates based on design, materials, and dimensions. Final pricing is confirmed after detailed consultation. A 50% advance payment is required to begin production. Balance payment is due before delivery.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-semibold text-foreground">3. Production & Delivery</h2>
          <p className="text-muted-foreground leading-relaxed">
            Standard production takes 2–4 weeks for individual pieces and 4–8 weeks for complete interiors. Delivery within Kolkata is free. We provide professional installation at no extra charge. Delivery timelines are estimates and may vary based on complexity and material availability.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-semibold text-foreground">4. Quality & Warranty</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use premium materials and provide a quality guarantee on all craftsmanship. Any manufacturing defects reported within 30 days of delivery will be repaired or replaced at no cost. Normal wear and tear is not covered.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-semibold text-foreground">5. Cancellations & Refunds</h2>
          <p className="text-muted-foreground leading-relaxed">
            Orders may be cancelled within 48 hours of confirmation for a full refund. After production begins, cancellation charges of up to 30% may apply depending on progress. Custom-made items cannot be returned unless defective.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-semibold text-foreground">6. Website Usage</h2>
          <p className="text-muted-foreground leading-relaxed">
            The content, images, and design of this website are the property of Al Ameen Furniture. Unauthorized reproduction or distribution is prohibited. Portfolio images represent our work and actual results may vary based on materials and specifications chosen.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-semibold text-foreground">7. Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            For questions about these terms, contact us at:<br />
            Phone: +91 89107 24040<br />
            Email: akbarkhan891071@gmail.com<br />
            Address: 36, 4/3 Behari Mondal Road, Haltu, Kolkata 700078
          </p>
        </section>
      </main>
    </div>
  );
};

export default Terms;
