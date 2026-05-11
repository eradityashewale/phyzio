const credentials = [
  { label: "Degree", value: "BPTh – RJSCOPT, MUHS" },
  { label: "Post-Graduation", value: "MPTh (Orthopaedics & Sports) – Global University, Jaipur" },
  { label: "Experience", value: "2+ Years Clinical Practice" },
  { label: "Patients Treated", value: "2,500+" },
];

const clinicalExperience = [
  {
    place: "SJS Hospital, Kopargaon",
    detail: "Specialized in ICU Care (Medicine, Cardio-respiratory & Surgical) and General OPD",
  },
  {
    place: "SJS Cancer Center, Kopargaon",
    detail: "Oncology rehabilitation and supportive physiotherapy",
  },
  {
    place: "Asha Kendra Neuro Rehabilitation Center, Puntamba",
    detail: "Neurological rehabilitation for stroke, spinal cord, and brain injury patients",
  },
  {
    place: "Ayodhya Hospital, Shirdi",
    detail: "Orthopaedic and general physiotherapy OPD",
  },
  {
    place: "Kothari Hospital, Kopargaon",
    detail: "Corporate clinical care and outpatient rehabilitation",
  },
  {
    place: "Jape Hospital, Kopargaon",
    detail: "Corporate clinical care and outpatient rehabilitation",
  },
];

const values = [
  {
    icon: "🎯",
    title: "Goal-Oriented Treatment",
    desc: "Every plan is built around your specific recovery milestones and daily life goals.",
  },
  {
    icon: "🤝",
    title: "Collaborative Approach",
    desc: "We work closely with your doctors and specialists for seamless integrated care.",
  },
  {
    icon: "📈",
    title: "Measurable Progress",
    desc: "Regular assessments ensure you're always moving forward in your recovery.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HEADER */}
      <section className="bg-gradient-to-br from-sky-50 to-teal-50 py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">About Dr. Tanvi More</h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Founder &amp; Lead Physiotherapist at Phoenix | The Physiotherapy Clinic — dedicated to
          restoring movement, reducing pain, and empowering patients to live their best lives.
        </p>
      </section>

      {/* PROFILE */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* Avatar placeholder */}
          <div className="w-64 h-64 rounded-full bg-gradient-to-br from-sky-200 to-teal-200 flex items-center justify-center text-7xl shadow-xl flex-shrink-0">
            👩‍⚕️
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Dr. Tanvi More (PT)
            </h2>
            <p className="text-primary font-medium mb-4">Founder &amp; Lead Physiotherapist</p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With over <strong>2 years of dedicated clinical experience</strong> and a track
              record of <strong>2,500+ successfully treated patients</strong>, Dr. Tanvi More
              brings a specialized approach to rehabilitation. She completed her Bachelor&apos;s
              in Physiotherapy (BPTh) from RJSCOPT, MUHS, and her Master&apos;s degree
              specializing in Orthopaedics &amp; Sports Physiotherapy from Global University,
              Jaipur.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Her approach combines evidence-based techniques with state-of-the-art technology —
              including Laser Therapy, Shockwave Therapy, and advanced manual techniques —
              ensuring every patient receives the right treatment at the right time.
            </p>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="bg-sky-50 py-14 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Qualifications &amp; Credentials
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((c) => (
              <div
                key={c.label}
                className="bg-white rounded-2xl p-6 shadow-sm text-center"
              >
                <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
                  {c.label}
                </p>
                <p className="text-gray-800 font-medium">{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLINICAL EXPERIENCE */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
            Clinical Experience
          </h2>
          <p className="text-gray-500 text-center mb-8">
            A diverse background across prestigious institutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {clinicalExperience.map((exp) => (
              <div
                key={exp.place}
                className="flex items-start gap-4 bg-white border border-sky-100 rounded-2xl p-5 hover:shadow-md transition-shadow"
              >
                <span className="text-2xl mt-0.5">🏥</span>
                <div>
                  <h3 className="font-semibold text-gray-800">{exp.place}</h3>
                  <p className="text-sm text-gray-500 mt-0.5">{exp.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-sky-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="border border-sky-100 bg-white rounded-2xl p-8 hover:shadow-md transition-shadow text-center"
              >
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
