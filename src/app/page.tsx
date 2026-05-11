import Link from "next/link";

const highlights = [
  { icon: "🏆", title: "2,500+ Patients Treated", desc: "Proven results across complex orthopedic and neurological cases." },
  { icon: "⚡", title: "Modern Modalities", desc: "Access to the latest recovery tech like Shockwave and Laser therapy." },
  { icon: "❤️", title: "Holistic Approach", desc: "We don't just treat the pain — we treat the whole person." },
  { icon: "📍", title: "Malegaon, Maharashtra", desc: "Conveniently located clinic serving the local community." },
];

const services = [
  { title: "Sports Injury Rehab", icon: "⚽" },
  { title: "Back & Neck Pain", icon: "🦴" },
  { title: "Neurological Rehab", icon: "🧠" },
  { title: "Post-Surgery Recovery", icon: "🏥" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-sky-50 to-teal-50 py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <span className="inline-block bg-sky-100 text-sky-700 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
              Phoenix | The Physiotherapy Clinic
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
              Movement is Life. <br />
              <span className="text-primary">Restore Yours.</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              Advanced physiotherapy care tailored to your recovery. Led by{" "}
              <strong>Dr. Tanvi More (PT)</strong>, we combine technology with
              hands-on expertise to help you return to your peak performance.
            </p>
            <div className="flex gap-4 flex-wrap">
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
          {/* Placeholder image area */}
          <div className="flex-1 bg-gradient-to-br from-sky-200 to-teal-200 rounded-3xl h-72 md:h-96 flex items-center justify-center text-6xl shadow-lg">
            🧑‍⚕️
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="bg-sky-50 rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-3">{h.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-1">{h.title}</h3>
              <p className="text-sm text-gray-500">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">What We Treat</h2>
          <p className="text-gray-500 mt-2">Comprehensive care for a wide range of conditions</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <p className="font-medium text-gray-700 text-sm">{s.title}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/services"
            className="text-primary font-semibold hover:underline"
          >
            View all services →
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE PHOENIX */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Phoenix?</h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            We bring together clinical expertise and state-of-the-art technology for results that last.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-sky-100 rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">😊</div>
            <h3 className="font-semibold text-gray-800 mb-2">2,500+ Smiles Restored</h3>
            <p className="text-sm text-gray-500">Proven results across complex orthopedic and neurological cases.</p>
          </div>
          <div className="border border-sky-100 rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">🔬</div>
            <h3 className="font-semibold text-gray-800 mb-2">Modern Modalities</h3>
            <p className="text-sm text-gray-500">Access to the latest recovery technology like Shockwave and Laser therapy.</p>
          </div>
          <div className="border border-sky-100 rounded-2xl p-8 text-center hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4">🌿</div>
            <h3 className="font-semibold text-gray-800 mb-2">Holistic Approach</h3>
            <p className="text-sm text-gray-500">We don&apos;t just treat the pain; we treat the person.</p>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
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
