import Link from "next/link";

const technologyModalities = [
  { icon: "🔴", title: "Laser Therapy", desc: "Low-level laser stimulation to reduce inflammation, relieve pain, and accelerate tissue healing." },
  { icon: "💥", title: "Shockwave Therapy", desc: "High-energy acoustic waves that break down calcifications and stimulate deep tissue repair." },
  { icon: "🔊", title: "Ultrasound Therapy", desc: "Deep thermal and mechanical effects for soft tissue healing and pain relief." },
  { icon: "🫁", title: "Pneumatic Compression", desc: "Sequential compression for lymphedema management, swelling reduction, and circulation improvement." },
  { icon: "⚡", title: "TENS, IFT & Russian Currents", desc: "Electrotherapy modalities for pain management, muscle stimulation, and neuromuscular re-education." },
  { icon: "🧲", title: "Electro-needling", desc: "Combining electrical stimulation with dry needling for enhanced trigger point release and pain relief." },
];

const manualModalities = [
  { icon: "🤲", title: "Mulligan Manual Techniques", desc: "Mobilisation with movement for joints and spine — restoring pain-free motion quickly and effectively." },
  { icon: "🧠", title: "Bobath & NDT Techniques", desc: "Neurodevelopmental therapy for neurological patients including stroke, cerebral palsy, and spinal cord injury." },
  { icon: "🩹", title: "Kinesiotaping & IASTM", desc: "Kinesiotaping for muscle support and IASTM (Instrument Assisted Soft Tissue Mobilisation) for scar and fascial release." },
  { icon: "🫙", title: "Cupping Therapy", desc: "Myofascial decompression technique to release muscle tension and improve blood flow in tight tissues." },
  { icon: "💉", title: "Dry Needling", desc: "Trigger point dry needling to release chronic muscle knots and reduce referred pain patterns." },
  { icon: "🏃", title: "Sport-Specific Rehabilitation", desc: "Return-to-sport programs tailored to the demands of your sport, from amateur to competitive level." },
];

const conditions = [
  { icon: "⚽", title: "Sports Injury Rehabilitation", tags: ["Ankle Sprain", "ACL Rehab", "Shoulder Impingement"] },
  { icon: "🦴", title: "Back & Neck Pain", tags: ["Lower Back Pain", "Sciatica", "Neck Stiffness"] },
  { icon: "🏥", title: "Post-Surgical Rehabilitation", tags: ["Knee Replacement", "Hip Surgery", "Rotator Cuff"] },
  { icon: "🧠", title: "Neurological Rehabilitation", tags: ["Stroke Rehab", "Parkinson's", "Balance Training"] },
  { icon: "🤰", title: "Women's Health Physiotherapy", tags: ["Prenatal Care", "Pelvic Floor", "Postpartum"] },
  { icon: "👴", title: "Geriatric Physiotherapy", tags: ["Fall Prevention", "Osteoporosis", "Mobility"] },
];

export default function ServicesPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-gradient-to-br from-sky-50 to-teal-50 py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Our Services</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          We utilise evidence-based techniques and state-of-the-art technology to
          accelerate your healing and restore peak performance.
        </p>
      </section>

      {/* ADVANCED TECHNOLOGY */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto mb-10 text-center">
          <span className="inline-block bg-sky-100 text-sky-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Advanced Technology
          </span>
          <h2 className="text-3xl font-bold text-gray-900">Technology-Assisted Treatments</h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            State-of-the-art equipment for faster, deeper, and more precise healing.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologyModalities.map((s) => (
            <div
              key={s.title}
              className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow bg-white"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MANUAL & SPECIALIZED THERAPY */}
      <section className="py-16 px-4 bg-sky-50">
        <div className="max-w-6xl mx-auto mb-10 text-center">
          <span className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Manual &amp; Specialized Therapy
          </span>
          <h2 className="text-3xl font-bold text-gray-900">Hands-On Expert Techniques</h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            Specialized manual therapy approaches backed by international clinical frameworks.
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {manualModalities.map((s) => (
            <div
              key={s.title}
              className="border border-teal-100 rounded-2xl p-6 hover:shadow-lg transition-shadow bg-white"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONDITIONS WE TREAT */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Conditions We Treat</h2>
          <p className="text-gray-500 mt-2">Comprehensive care for a wide range of conditions and recovery goals</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((s) => (
            <div
              key={s.title}
              className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition-shadow bg-white"
            >
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-bold text-gray-800 text-lg mb-3">{s.title}</h3>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="bg-sky-50 text-sky-700 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 px-4 text-white text-center">
        <h2 className="text-3xl font-bold mb-3">Not Sure Which Service You Need?</h2>
        <p className="text-sky-100 mb-6 max-w-md mx-auto">
          Book a consultation and Dr. Tanvi More will assess your condition and
          recommend the best treatment plan.
        </p>
        <Link
          href="/contact"
          className="bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-sky-50 transition-colors"
        >
          Book a Consultation
        </Link>
      </section>
    </>
  );
}
