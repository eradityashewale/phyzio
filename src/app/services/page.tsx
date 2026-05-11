import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

const technologyModalities = [
  { icon: "🔴", title: "Laser Therapy",             desc: "Low-level laser stimulation to reduce inflammation, relieve pain, and accelerate tissue healing." },
  { icon: "💥", title: "Shockwave Therapy",          desc: "High-energy acoustic waves that break down calcifications and stimulate deep tissue repair." },
  { icon: "🔊", title: "Ultrasound Therapy",         desc: "Deep thermal and mechanical effects for soft tissue healing and pain relief." },
  { icon: "🫁", title: "Pneumatic Compression",      desc: "Sequential compression for lymphedema management, swelling reduction, and circulation improvement." },
  { icon: "⚡", title: "TENS, IFT & Russian Currents", desc: "Electrotherapy modalities for pain management, muscle stimulation, and neuromuscular re-education." },
  { icon: "🧲", title: "Electro-needling",           desc: "Combining electrical stimulation with dry needling for enhanced trigger point release and pain relief." },
  { icon: "🤖", title: "Robotic-Assisted Therapy",  desc: "Advanced robotic systems for precise, repetitive movement training — accelerating neurological and musculoskeletal rehabilitation outcomes." },
];

const manualModalities = [
  { icon: "🤲", title: "Mulligan Manual Techniques", desc: "Mobilisation with movement for joints and spine — restoring pain-free motion quickly and effectively." },
  { icon: "🧠", title: "Bobath & NDT Techniques",   desc: "Neurodevelopmental therapy for neurological patients including stroke, cerebral palsy, and spinal cord injury." },
  { icon: "🩹", title: "Kinesiotaping & IASTM",     desc: "Kinesiotaping for muscle support and IASTM for scar and fascial release." },
  { icon: "🫙", title: "Cupping Therapy",            desc: "Myofascial decompression technique to release muscle tension and improve blood flow in tight tissues." },
  { icon: "💉", title: "Dry Needling",               desc: "Trigger point dry needling to release chronic muscle knots and reduce referred pain patterns." },
  { icon: "🏃", title: "Sport-Specific Rehabilitation", desc: "Return-to-sport programs tailored to the demands of your sport, from amateur to competitive level." },
];

const conditions = [
  { icon: "⚽", title: "Sports Injury Rehabilitation",  tags: ["ACL Tear", "Meniscus Tear", "Runner's Knee", "Tennis/Golfer's Elbow", "Rotator Cuff Tear", "Shin Splints", "Stress Fractures", "Concussion", "Achilles Tendonitis", "Plantar Fasciitis", "Shoulder Dislocation", "Turf Toe", "Bursitis"] },
  { icon: "🦴", title: "Back & Neck Pain",               tags: ["Herniated Disc", "Sciatica", "Spondylosis (Cervical/Lumbar)", "Spondylolisthesis", "Spinal Stenosis", "Ankylosing Spondylitis", "Scoliosis", "Kyphosis", "Lordosis", "Facet Joint Syndrome", "Sacroiliac (SI) Joint Dysfunction", "Degenerative Disc Disease", "Whiplash Injury", "Mechanical Low Back Pain", "Cervicogenic Headaches", "Post-Surgical Rehab (Laminectomy/Fusion)", "Spinal Compression Fractures"] },
  { icon: "🏥", title: "Post-Surgical Rehabilitation",   tags: ["Total Knee Replacement", "Total Hip Replacement", "Anterior Cruciate Ligament (ACL) Reconstruction", "Rotator Cuff Repair", "Lumbar Discectomy", "Spinal Fusion", "Meniscectomy", "Achilles Tendon Repair", "Post-Mastectomy Lymphedema", "Cardiac Bypass (CABG) Recovery", "Abdominal Wall Reconstruction", "Fracture Internal Fixation (ORIF)", "Carpal Tunnel Release", "Amputation (Prosthetic Training)", "Tendon Transfer Recovery"] },
  { icon: "🧠", title: "Neurological Rehabilitation",    tags: ["Bell's Palsy", "Guillain-Barré Syndrome (GBS)", "Benign Paroxysmal Positional Vertigo (BPPV)", "Stroke (Cerebrovascular Accident)", "Parkinson's Disease", "Multiple Sclerosis", "Spinal Cord Injury", "Traumatic Brain Injury (TBI)", "Cerebral Palsy", "Peripheral Nerve Injuries (e.g., Carpal Tunnel, Radial Nerve Palsy)", "Motor Neuron Disease (ALS)", "Ataxia", "Transverse Myelitis", "Diabetic Neuropathy", "Post-Polio Syndrome"] },
  { icon: "🤰", title: "Women's Health Physiotherapy",   tags: ["Urge Incontinence", "Pelvic Organ Prolapse", "Diastasis Recti Abdominis", "Pelvic Girdle Pain", "Pubic Symphysis Dysfunction", "Dyspareunia", "Vaginismus", "Vulvodynia", "Coccydynia", "Endometriosis-related Pelvic Pain", "Dysmenorrhea", "Chronic Pelvic Pain Syndrome", "Lymphedema (Post-Mastectomy)", "Post-Natal Core Weakness"] },
  { icon: "👴", title: "Geriatric Physiotherapy",        tags: ["Sarcopenia", "Benign Paroxysmal Positional Vertigo (BPPV)", "Deconditioning", "Post-Operative Hip Fractures", "Osteoarthritis-Related Joint Stiffness", "Balance Impairment and Fall Risk", "Osteoporosis-Related Postural Kyphosis", "Spinal Stenosis", "Urinary Incontinence", "Frozen Shoulder (Adhesive Capsulitis)", "Pressure Sores", "Gait Disorders", "Chronic Obstructive Pulmonary Disease (COPD) Mobility", "Cervical Spondylosis", "Contractures"] },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="We utilise evidence-based techniques and state-of-the-art technology to accelerate your healing and restore peak performance."
      />

      {/* ADVANCED TECHNOLOGY */}
      <section className="py-16 px-4 bg-white">
        <Reveal className="max-w-6xl mx-auto mb-10 text-center">
          <span className="inline-block bg-sky-100 text-sky-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Advanced Technology
          </span>
          <h2 className="text-3xl font-bold text-gray-900">Technology-Assisted Treatments</h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            State-of-the-art equipment for faster, deeper, and more precise healing.
          </p>
        </Reveal>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologyModalities.map((s, i) => (
            <Reveal key={s.title} delay={i * 65}
              className="card-3d border border-gray-100 rounded-2xl p-6 bg-white">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* MANUAL & SPECIALIZED THERAPY */}
      <section className="py-16 px-4 bg-sky-50">
        <Reveal className="max-w-6xl mx-auto mb-10 text-center">
          <span className="inline-block bg-teal-100 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">
            Manual &amp; Specialized Therapy
          </span>
          <h2 className="text-3xl font-bold text-gray-900">Hands-On Expert Techniques</h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            Specialised manual therapy approaches backed by international clinical frameworks.
          </p>
        </Reveal>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {manualModalities.map((s, i) => (
            <Reveal key={s.title} delay={i * 65}
              className="card-3d border border-teal-100 rounded-2xl p-6 bg-white">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-bold text-gray-800 text-lg mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CONDITIONS WE TREAT */}
      <section className="py-16 px-4 bg-white">
        <Reveal className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Conditions We Treat</h2>
          <p className="text-gray-500 mt-2">Comprehensive care for a wide range of conditions and recovery goals</p>
        </Reveal>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {conditions.map((s, i) => (
            <Reveal key={s.title} delay={i * 65}
              className="card-3d border border-gray-100 rounded-2xl p-6 bg-white">
              <div className="text-4xl mb-4">{s.icon}</div>
              <h3 className="font-bold text-gray-800 text-lg mb-3">{s.title}</h3>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="bg-sky-50 text-sky-700 text-xs font-medium px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-14 px-4 text-white text-center">
        <h2 className="text-3xl font-bold mb-3">Not Sure Which Service You Need?</h2>
        <p className="text-sky-100 mb-6 max-w-md mx-auto">
          Book a consultation and Dr. Tanvi More will assess your condition and recommend the best treatment plan.
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
