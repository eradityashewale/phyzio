"use client";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";

const info = [
  { icon: "📍", label: "Address",   value: "HGC5+V2C, Camp, Malegaon, Maharashtra 423105" },
  { icon: "📞", label: "Phone",     value: "9975849327" },
  { icon: "📸", label: "Instagram", value: "@phyzio.warrior" },
  { icon: "🕐", label: "Hours",     value: "Mon – Sat: 10:00 AM – 8:00 PM" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHeader
        title="Contact Phoenix"
        subtitle="Book an appointment at Phoenix | The Physiotherapy Clinic or reach out with any questions. We're here to help you on your path to recovery."
        withMarquee={false}
      />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Info */}
          <Reveal delay={0}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <div className="space-y-5">
              {info.map((item, i) => (
                <Reveal key={item.label} delay={i * 80}
                  className="card-3d flex items-start gap-4 bg-olive-50 rounded-2xl p-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider">{item.label}</p>
                    <p className="text-gray-700">{item.value}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 rounded-2xl overflow-hidden border border-olive-200 h-52">
              <iframe
                src="https://maps.google.com/maps?q=HGC5%2BV2C,+Camp,+Malegaon,+Maharashtra+423105&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* Booking Form */}
          <Reveal delay={150}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Book an Appointment</h2>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Appointment Request Sent!</h3>
                <p className="text-green-700">
                  Thank you, {form.name}. We&apos;ll confirm your appointment within 24 hours via phone or email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">Full Name *</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder="Riya Sharma"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">Phone *</label>
                    <input type="tel" name="phone" required value={form.phone} onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Service Required *</label>
                  <select name="service" required value={form.service} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary bg-white">
                    <option value="">Select a service...</option>
                    <option>Sports Injury Rehabilitation</option>
                    <option>Back &amp; Neck Pain</option>
                    <option>Post-Surgical Rehabilitation</option>
                    <option>Neurological Rehabilitation</option>
                    <option>Women&apos;s Health Physiotherapy</option>
                    <option>Geriatric Physiotherapy</option>
                    <option>Laser Therapy</option>
                    <option>Shockwave Therapy</option>
                    <option>Dry Needling &amp; Cupping</option>
                    <option>Mulligan Manual Techniques</option>
                    <option>Kinesiotaping &amp; IASTM</option>
                    <option>Sport-Specific Rehabilitation</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-1">Message / Symptoms</label>
                  <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                    placeholder="Briefly describe your condition or any questions..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
                </div>
                <button type="submit"
                  className="w-full bg-primary text-white font-semibold py-3 rounded-xl hover:bg-primary-dark transition-colors">
                  Submit Appointment Request
                </button>
              </form>
            )}
          </Reveal>

        </div>
      </section>
    </>
  );
}
