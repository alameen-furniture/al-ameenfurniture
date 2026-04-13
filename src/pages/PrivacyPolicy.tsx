import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
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
          <h1 className="font-serif text-2xl font-bold text-foreground">Privacy Policy</h1>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <p className="text-muted-foreground text-sm">Last updated: April 2026</p>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-semibold text-foreground">1. Information We Collect</h2>
          <p className="text-muted-foreground leading-relaxed">
            When you submit an enquiry through our website, we collect your name, phone number, email address (optional), furniture requirements, and any reference images you upload. We also collect basic usage data through Google Analytics (page views, device type, location).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-semibold text-foreground">2. How We Use Your Information</h2>
          <p className="text-muted-foreground leading-relaxed">
            Your personal information is used solely to respond to your furniture enquiries, provide quotes, and communicate about your orders. We do not sell, rent, or share your personal data with third parties for marketing purposes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-semibold text-foreground">3. Data Storage & Security</h2>
          <p className="text-muted-foreground leading-relaxed">
            Your enquiry data is stored securely in our cloud database with encryption at rest and in transit. Reference images are stored in secure cloud storage. We implement industry-standard security measures including Row Level Security policies to protect your data.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-semibold text-foreground">4. Cookies & Analytics</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use Google Analytics to understand how visitors interact with our website. This helps us improve our services. Google Analytics uses cookies to collect anonymized usage data. You can opt out by disabling cookies in your browser settings.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-semibold text-foreground">5. Third-Party Services</h2>
          <p className="text-muted-foreground leading-relaxed">
            We use WhatsApp for customer communication, Google Maps for location display, and EmailJS for email notifications. These services have their own privacy policies governing data they process.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-semibold text-foreground">6. Your Rights</h2>
          <p className="text-muted-foreground leading-relaxed">
            You may request access to, correction, or deletion of your personal data at any time by contacting us at akbarkhan891071@gmail.com or calling +91 89107 24040.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-serif text-xl font-semibold text-foreground">7. Contact</h2>
          <p className="text-muted-foreground leading-relaxed">
            Al Ameen Furniture<br />
            36, 4/3 Behari Mondal Road, Shanti Pally, Ramlal Bazar, Haltu<br />
            Kolkata, West Bengal 700078<br />
            Phone: +91 89107 24040<br />
            Email: akbarkhan891071@gmail.com
          </p>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
