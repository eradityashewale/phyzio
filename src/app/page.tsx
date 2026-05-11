import Link from "next/link";
import PhysioScene3D from "@/components/PhysioScene3D";
import MarqueeBand from "@/components/MarqueeBand";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";

const highlights = [
  { icon: "🏆", count: 2500, countSuffix: "+", label: "Patients Treated",    desc: "Proven results across complex orthopedic and neurological cases." },
  { icon: "⚡", count: 12,   countSuffix: "+", label: "Modern Modalities",   desc: "Access to the latest recovery tech like Shockwave and Laser therapy." },
  { icon: "❤️", count: 98,   countSuffix: "%", label: "Patient Satisfaction", desc: "We don't just treat the pain — we treat the whole person." },
  { icon: "📍", count: 8,    countSuffix: "+", label: "Years of Service",     desc: "Conveniently serving Malegaon and surrounding communities." },
];

const services = [
  { title: "Sports Injury Rehab",   icon: "⚽" },
  { title: "Back & Neck Pain",      icon: "🦴" },
  { title: "Neurological Rehab",    icon: "🧠" },
  { title: "Post-Surgery Recovery", icon: "🏥" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-sky-50 to-teal-50 py-20 px-4 overflow-hidden">

        {/* Morphing background blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -top-20 -left-20 w-[420px] h-[420px] bg-sky-200/35 blur-3xl"
            style={{ animation: "morphBlob1 10s ease-in-out infinite" }}
          />
          <div
            className="absolute -bottom-16 -right-16 w-[380px] h-[380px] bg-teal-200/30 blur-3xl"
            style={{ animation: "morphBlob2 12s ease-in-out infinite" }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Text column — staggered entrance */}
          <div className="flex-1">
            <span className="hero-s1 inline-block bg-sky-100 text-sky-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              Phoenix | The Physiotherapy Clinic
            </span>
            <h1 className="hero-s2 text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Your Recovery <br />
              <span className="text-primary">Starts Here.</span>
            </h1>
            <p className="hero-s3 text-gray-600 text-lg mb-8 max-w-lg">
              Personalised physiotherapy care led by{" "}
              <strong>Dr. Tanvi More (PT)</strong>. From injury to peak
              performance — we&apos;re with you every step of the way.
            </p>
            <div className="hero-s4 flex gap-4 flex-wrap">
              <Link
                href="/contact"
                className="bg-primary text-white font-semibold px-8 py-3 rounded-full hover:bg-primary-dark transition-colors"
              >
                Book a Consultation
              </Link>
              <Link
                href="/services"
                className="border border-primary text-primary font-semibold px-8 py-3 rounded-full hover:bg-sky-50 transition-colors"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* 3D physio scene */}
          <div className="hero-scene flex-1 h-72 md:h-[440px]">
            <PhysioScene3D />
          </div>

        </div>
      </section>

      {/* ── MARQUEE TICKER ────────────────────────────────────── */}
      <MarqueeBand />

      {/* ── HIGHLIGHTS (animated counters + scroll reveal) ────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h, i) => (
            <Reveal key={h.label} delay={i * 100} className="card-3d bg-sky-50 rounded-2xl p-6 text-center">
              <div className="text-4xl mb-3">{h.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-1">
                <AnimatedCounter to={h.count} suffix={h.countSuffix} />
              </h3>
              <p className="font-semibold text-gray-800 mb-1">{h.label}</p>
              <p className="text-sm text-gray-500">{h.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── SERVICES PREVIEW ──────────────────────────────────── */}
      <section className="py-16 px-4 bg-gray-50">
        <Reveal className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">What We Treat</h2>
          <p className="text-gray-500 mt-2">Comprehensive care for a wide range of conditions</p>
        </Reveal>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90} className="card-3d bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="text-4xl mb-3">{s.icon}</div>
              <p className="font-medium text-gray-700 text-sm">{s.title}</p>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/services" className="text-primary font-semibold hover:underline">
            View all services →
          </Link>
        </div>
      </section>

      {/* ── WHY CHOOSE PHOENIX ────────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <Reveal className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Phoenix?</h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            We bring together clinical expertise and state-of-the-art technology for results that last.
          </p>
        </Reveal>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "😊", title: "2,500+ Smiles Restored",  body: "Proven results across complex orthopedic and neurological cases." },
            { icon: "🔬", title: "Modern Modalities",        body: "Access to the latest recovery technology like Shockwave and Laser therapy." },
            { icon: "🌿", title: "Holistic Approach",        body: "We don’t just treat the pain; we treat the person." },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 120} className="card-3d border border-sky-100 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">{c.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-2">{c.title}</h3>
              <p className="text-sm text-gray-500">{c.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────── */}
      <section className="bg-primary py-14 px-4 text-white text-center">
        <h2 className="text-3xl font-bold mb-3">Ready to Feel Better?</h2>
        <p className="mb-6 text-sky-100 max-w-md mx-auto">
          Schedule your first consultation with Dr. Tanvi More and take the
          first step toward a pain-free life.
        </p>
        <Link
          href="/contact"
          className="bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-sky-50 transition-colors"
        >
          Book Now
        </Link>
      </section>
    </>
  );
}
