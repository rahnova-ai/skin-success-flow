import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Check,
  Clock3,
  MapPin,
  MessageCircle,
  Sparkles,
  Stethoscope,
} from "lucide-react";

import logoAsset from "@/assets/dr-saima-logo.png.asset.json";
import facialLinesAsset from "@/assets/facial-lines-result.png.asset.json";
import eyeAreaAsset from "@/assets/eye-area-result.png.asset.json";
import foreheadAsset from "@/assets/forehead-lines-result.png.asset.json";

const whatsappUrl =
  "https://wa.me/923244529159?text=Hello%20Dr%20Saima%2C%20I%27d%20like%20to%20book%20my%20free%20October%20skin%20consultation.";
const mapsUrl = "https://maps.app.goo.gl/UsWDt33VNLYughTP9";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr Saima Shahid | Dermatology Consultation in Islamabad" },
      {
        name: "description",
        content:
          "Book a personalised skin consultation with Dr Saima Shahid, MBBS, MD Dermatology, in Bahria Phase 7, Islamabad.",
      },
      { property: "og:title", content: "Dr Saima Shahid | Dermatology Consultation" },
      {
        property: "og:description",
        content: "Start with a personalised skin assessment and treatment plan. Book directly on WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const results = [
  {
    image: facialLinesAsset.url,
    alt: "Real patient's facial lines before and after treatment",
    title: "Facial lines",
  },
  {
    image: eyeAreaAsset.url,
    alt: "Real patient's eye area lines before and after treatment",
    title: "Eye area lines",
  },
  {
    image: foreheadAsset.url,
    alt: "Real patient's forehead lines before and after treatment",
    title: "Forehead lines",
  },
];

function WhatsAppButton({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className={light ? "cta-button cta-button-light" : "cta-button"}
      aria-label={`${label} on WhatsApp`}
    >
      <MessageCircle aria-hidden="true" />
      <span>{label}</span>
      <ArrowRight aria-hidden="true" />
    </a>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="site-header">
        <a href="#top" className="brand-mark" aria-label="Dr Saima Shahid home">
          <img src={logoAsset.url} alt="Dr Saima Shahid monogram" />
          <span>
            <strong>Dr Saima Shahid</strong>
            <small>Consultant Dermatologist</small>
          </span>
        </a>
        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="header-cta">
          <MessageCircle aria-hidden="true" />
          <span>Book consultation</span>
        </a>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-inner">
          <div className="hero-copy">
            <div className="eyebrow">
              <Sparkles aria-hidden="true" />
              Personalised dermatology care
            </div>
            <h1>Dr Saima Shahid</h1>
            <p className="hero-title">Healthy skin starts with the right plan.</p>
            <p className="hero-lede">
              Expert dermatology care tailored to your skin, your concerns, and your goals.
            </p>
            <div className="credentials" aria-label="Doctor credentials">
              <span><BadgeCheck aria-hidden="true" /> MBBS, MD Dermatology</span>
              <span><Clock3 aria-hidden="true" /> 20+ years of experience</span>
              <span><Stethoscope aria-hidden="true" /> 5,000+ patients treated</span>
            </div>
            <div className="offer-strip">
              <CalendarCheck aria-hidden="true" />
              <span><s>Rs 2,500</s> <strong>Free consultation this October</strong></span>
            </div>
            <WhatsAppButton label="Book your free consultation" />
            <p className="microcopy">Chat directly with the clinic on WhatsApp.</p>
          </div>
          <div className="hero-doctor" aria-label="Dr Saima Shahid">
            <div className="hero-doctor-glow" aria-hidden="true"></div>
            <img src="/dr-saima-portrait.webp" alt="Dr Saima Shahid seated in her clinic" />
            <div className="hero-doctor-card">
              <strong>Dr Saima Shahid</strong>
              <span>Consultant Dermatologist · MD Dermatology</span>
            </div>
          </div>
        </div>
      </section>

      <section className="results-section">
        <div className="section-shell">
          <div className="results-heading">
            <div className="section-heading align-left">
              <span className="section-kicker">Real patients. Real care.</span>
              <h2>Results guided by clinical assessment.</h2>
            </div>
            <p>Every treatment begins with a consultation. Results vary by patient, skin condition, and treatment plan.</p>
          </div>
          <div className="results-grid">
            {results.map((result) => (
              <figure key={result.title} className="result-card">
                <img src={result.image} alt={result.alt} loading="lazy" />
                <figcaption>
                  <span>{result.title}</span>
                  <span><BadgeCheck aria-hidden="true" /> Consent confirmed</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="doctor-section section-shell">
        <div className="doctor-statement">
          <img src={logoAsset.url} alt="" aria-hidden="true" />
          <div>
            <span className="section-kicker">Your consultation</span>
            <h2>“Every skin is different. The right plan starts by listening.”</h2>
            <p>Dr Saima Shahid · MBBS, MD Dermatology</p>
          </div>
        </div>
        <div className="consultation-list">
          <h3>What to expect</h3>
          <ul>
            <li><Check aria-hidden="true" /><span>A focused discussion about your skin concerns</span></li>
            <li><Check aria-hidden="true" /><span>A professional assessment of your skin</span></li>
            <li><Check aria-hidden="true" /><span>A personalised care and treatment plan</span></li>
            <li><Check aria-hidden="true" /><span>Clear guidance on realistic next steps</span></li>
          </ul>
        </div>
      </section>

      <section className="location-section">
        <div className="section-shell location-inner">
          <div>
            <span className="section-kicker light-kicker">Visit the clinic</span>
            <h2>Bahria Phase 7, Islamabad</h2>
            <p>Open the exact clinic location in Google Maps before your appointment.</p>
          </div>
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="map-button">
            <MapPin aria-hidden="true" /> Open in Google Maps <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="section-shell final-cta-inner">
          <span className="section-kicker">October consultation offer</span>
          <h2>Ready to understand what your skin needs?</h2>
          <p>Book your consultation directly with the clinic. No forms and no waiting for a callback.</p>
          <div className="final-price"><s>Rs 2,500</s><strong>Free this October</strong></div>
          <WhatsAppButton label="Message the clinic on WhatsApp" light />
          <small>Appointments are subject to availability.</small>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="brand-mark footer-brand">
            <img src={logoAsset.url} alt="Dr Saima Shahid monogram" />
            <span><strong>Dr Saima Shahid</strong><small>Consultant Dermatologist</small></span>
          </div>
          <p>Medical outcomes vary. Consultation is required before any treatment is recommended.</p>
        </div>
      </footer>

      <a href={whatsappUrl} target="_blank" rel="noreferrer" className="floating-whatsapp" aria-label="Book on WhatsApp">
        <MessageCircle aria-hidden="true" />
        <span>Book on WhatsApp</span>
      </a>
    </main>
  );
}
