"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  MessageSquare,
  Globe,
  TrendingUp,
  Database,
  Zap,
  Users,
  Shield,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  Menu,
  X,
} from "lucide-react";

// ─── Reveal Section (Intersection Observer animation) ──────────────────────
function RevealSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = delay ? `${delay}ms` : "";
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

// ─── Navigation ───────────────────────────────────────────────────────────────
function Nav() {
  // State untuk mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Image
          src="/logo-wdh.png"
          alt="WIDIH Logo"
          width={120}
          height={40}
          className="h-8 w-auto"
        />
        {/* Nav links untuk desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          <a href="#layanan" className="hover:text-dark transition-colors">
            Layanan
          </a>
          <a href="#manfaat" className="hover:text-dark transition-colors">
            Manfaat
          </a>
          <a href="#testimoni" className="hover:text-dark transition-colors">
            Testimoni
          </a>
        </div>
        {/* Tombol desktop */}
        <a href="#kontak" className="hidden md:block btn-primary text-sm py-2 px-4">
          Hubungi Kami
        </a>
        {/* Hamburger button untuk mobile */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-dark hover:text-coral transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-100">
          <div className="flex flex-col gap-1 px-6 py-4">
            <a
              href="#layanan"
              className="py-3 text-sm font-medium text-muted hover:text-dark transition-colors border-b border-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Layanan
            </a>
            <a
              href="#manfaat"
              className="py-3 text-sm font-medium text-muted hover:text-dark transition-colors border-b border-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Manfaat
            </a>
            <a
              href="#testimoni"
              className="py-3 text-sm font-medium text-muted hover:text-dark transition-colors border-b border-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimoni
            </a>
            <a
              href="#kontak"
              className="mt-2 btn-primary text-sm py-3 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="animate-fade-up" style={{ animationDelay: "0ms" }}>
            <Image
              src="/logo-wdh.png"
              alt="WIDIH Logo"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </div>

          <div
            className="animate-fade-up opacity-0"
            style={{ animationDelay: "100ms", animationFillMode: "forwards" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-dark leading-[1.1] max-w-4xl">
              Transformasi Digital{" "}
              <span className="text-coral">untuk UMKM</span> Indonesia
            </h1>
          </div>

          <p
            className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: "200ms", animationFillMode: "forwards" }}
          >
            Solusi lengkap untuk naiklevel bisnis Anda. Dari WhatsApp
            Automation hingga System Database, kami bantu UMKM Indonesia
            bertransformasi ke era digital.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "300ms", animationFillMode: "forwards" }}
          >
            <a href="#kontak" className="btn-primary text-base px-8 py-4">
              Mulai Konsultasi Gratis
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#layanan" className="btn-secondary text-base px-8 py-4">
              Lihat Layanan
            </a>
          </div>

          <div
            className="pt-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "500ms", animationFillMode: "forwards" }}
          >
            <div className="flex items-center gap-2 text-sm text-muted">
              <CheckCircle2 className="w-4 h-4 text-coral" />
              <span>Gratis konsultasi pertama</span>
              <span className="text-gray-300">•</span>
              <CheckCircle2 className="w-4 h-4 text-coral" />
              <span>Tanpa komitmen</span>
              <span className="text-gray-300">•</span>
              <CheckCircle2 className="w-4 h-4 text-coral" />
              <span>Hasil dalam 7 hari</span>
            </div>
          </div>
        </div>

        {/* Decorative gradient blob */}
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, #FF6B6B 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          aria-hidden="true"
        />
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
const services = [
  {
    icon: MessageSquare,
    color: "coral",
    title: "WhatsApp Business Automation",
    description:
      "Otomatisasi pesan, auto-reply, dan broadcast ke ribuan pelanggan. Tingkatkan respons rate dan close deal lebih cepat.",
    tags: ["Auto Reply", "Chat Bot", "Broadcast"],
  },
  {
    icon: Globe,
    color: "steel",
    title: "Website & Company Profile",
    description:
      "Website profesional yang membangun kredibilitas bisnis. Fast-loading, SEO-optimized, dan mobile-first design.",
    tags: ["Custom Design", "SEO", "Mobile Responsive"],
  },
  {
    icon: TrendingUp,
    color: "coral",
    title: "Digital Marketing",
    description:
      "Strategi marketing digital yang terukur. Dari social media management hingga paid ads yang ROI-driven.",
    tags: ["Social Media", "Google Ads", "Content Strategy"],
  },
  {
    icon: Database,
    color: "steel",
    title: "System & Database",
    description:
      "Sistem manajemen inventori, penjualan, dan customer database. Efisiensi operasional bisnis tanpa ribet.",
    tags: ["Inventory", "POS System", "CRM"],
  },
];

function Services() {
  return (
    <section id="layanan" className="py-20 md:py-28 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <div className="text-center mb-16">
            <span className="text-coral font-semibold text-sm uppercase tracking-widest mb-3 block">
              Layanan Kami
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-dark mb-4">
              Solusi Digital Terintegrasi
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Semua yang Anda butuhkan untuk bertransformasi digital dalam satu
              tempat. Hemat waktu, hemat biaya.
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <RevealSection key={service.title} delay={i * 100}>
                <div className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl hover:shadow-gray-200/50 hover:-translate-y-1 cursor-default">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                      service.color === "coral"
                        ? "bg-coral/10 text-coral"
                        : "bg-steel/10 text-steel"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-gray-100 text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Benefits ─────────────────────────────────────────────────────────────────
const benefits = [
  {
    icon: Zap,
    title: "Proses Cepat",
    description: "Dari konsultasi hingga launch dalam 7 hari kerja. Tanpa proses yang berbelit.",
  },
  {
    icon: Users,
    title: "Tim Berpengalaman",
    description: "Didukung praktisi digital dengan pengalaman di berbagai industri UMKM.",
  },
  {
    icon: Shield,
    title: "Garansi Kepuasan",
    description: "Revisi unlimited sampai Anda puas. Kepercayaan adalah prioritas utama kami.",
  },
  {
    icon: Headphones,
    title: "Support nonstop",
    description: "Tim support siap bantu via WhatsApp dan email setiap hari kerja.",
  },
];

function Benefits() {
  return (
    <section id="manfaat" className="py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealSection>
            <div>
              <span className="text-coral font-semibold text-sm uppercase tracking-widest mb-3 block">
                Mengapa WIDIH
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-dark mb-6 leading-tight">
                Kenapa UMKM Indonesia{" "}
                <span className="text-coral">Pilih Kami?</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-10">
                Kami tidak hanya membuat website atau sistem. Kami membantu
                bisnis Anda bekerja lebih cerdas dengan solusi digital yang
                benar-benar tepat guna.
              </p>
              <a href="#kontak" className="btn-primary">
                Konsultasi Sekarang
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </RevealSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <RevealSection key={b.title} delay={i * 100}>
                  <div className="bg-surface rounded-2xl p-6 hover:bg-gray-50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-coral/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-coral" />
                    </div>
                    <h3 className="font-bold text-dark mb-2">{b.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </RevealSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Social Proof ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: "Budi Santoso",
    role: "Owner, Toko Elektronik Jaya",
    quote:
      "Berkat WIDIH, penjualan online kami naik 300% dalam 3 bulan. WhatsApp automation mereka luar biasa!",
    rating: 5,
  },
  {
    name: "Siti Rahayu",
    role: "Founder, Craft Indonesia",
    quote:
      "Website baru dari WIDIH membuat brand kami terlihat lebih profesional. Banyak pelanggan baru yang datang dari Google.",
    rating: 5,
  },
  {
    name: "Ahmad Wijaya",
    role: "Director, PT Maju Logistik",
    quote:
      "Sistem inventory dari WIDIH sangat membantu kami mengelola gudang. Proses stock opname yang biasanya 2 hari jadi 2 jam.",
    rating: 5,
  },
];

function SocialProof() {
  return (
    <section id="testimoni" className="py-20 md:py-28 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <RevealSection>
          <div className="text-center mb-16">
            <span className="text-coral font-semibold text-sm uppercase tracking-widest mb-3 block">
              Testimoni
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-dark mb-4">
              Dipercaya Ribuan UMKM
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Hasil nyata dari klien kami yang sudah bertransformasi digital
              bersama WIDIH.
            </p>
          </div>
        </RevealSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <RevealSection key={t.name} delay={i * 100}>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <svg
                      key={j}
                      className="w-4 h-4 text-coral fill-coral"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-dark leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-dark text-sm">{t.name}</p>
                  <p className="text-muted text-xs">{t.role}</p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats ───────────────────────────────────────────────────────────────────
const stats = [
  { value: "500+", label: "Klien Aktif" },
  { value: "7 Hari", label: "Waktu Launch" },
  { value: "98%", label: "Tingkat Kepuasan" },
  { value: "24/7", label: "Dukungan" },
];

function Stats() {
  return (
    <section className="py-16 px-6 border-y border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <RevealSection key={s.label} delay={i * 80}>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-extrabold text-coral mb-1">
                  {s.value}
                </p>
                <p className="text-muted text-sm font-medium">{s.label}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA ─────────────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section id="kontak" className="py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <RevealSection>
          <div className="bg-dark rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            {/* Decorative */}
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, #FF6B6B 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, #4A90A4 0%, transparent 70%)",
                filter: "blur(60px)",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                Siap Naik Level?
              </h2>
              <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
                Mulai perjalanan transformasi digital bisnis Anda hari ini.
                Konsultasi gratis, tanpa komitmen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/6281234567890?text=Halo%20WIDIH,%20saya%20tertarik%20dengan%20layanan%20digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-coral text-white font-bold rounded-xl hover:bg-coral-dark transition-colors text-base"
                >
                  <MessageSquare className="w-5 h-5" />
                  Chat WhatsApp Sekarang
                </a>
                <a
                  href="mailto:hello@widih.id"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/10 text-base"
                >
                  <Mail className="w-5 h-5" />
                  Email Kami
                </a>
              </div>
              <p className="text-gray-400 text-sm mt-6">
                Respons cepat dalam 1×24 jam kerja
              </p>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-dark text-gray-400 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Image
              src="/logo-wdh.png"
              alt="WIDIH Logo"
              width={130}
              height={44}
              className="h-9 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              Wibowo Digital Hub — Partner transformasi digital terpercaya
              untuk UMKM Indonesia sejak 2020.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-coral/20 hover:text-coral transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-coral/20 hover:text-coral transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-coral/20 hover:text-coral transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Layanan
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#layanan" className="hover:text-coral transition-colors">
                  WhatsApp Automation
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-coral transition-colors">
                  Website & Company Profile
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-coral transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-coral transition-colors">
                  System & Database
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">
              Kontak
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-coral" />
                <a href="mailto:hello@widih.id" className="hover:text-coral transition-colors">
                  hello@widih.id
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-coral" />
                <a href="tel:+6281234567890" className="hover:text-coral transition-colors">
                  +62 812 3456 7890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-coral mt-0.5" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>&copy; 2026 WIDIH — Wibowo Digital Hub. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-coral transition-colors">
              Privasi
            </a>
            <a href="#" className="hover:text-coral transition-colors">
              Syarat
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Services />
      <Benefits />
      <Stats />
      <SocialProof />
      <CTASection />
      <Footer />
    </main>
  );
}
