import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <h3 className="text-white font-bold text-lg mb-1">Phoenix</h3>
          <p className="text-primary text-sm font-medium mb-3">The Physiotherapy Clinic</p>
          <p className="text-sm text-gray-400 mb-4">
            Led by Dr. Tanvi More (PT) — combining advanced technology with hands-on
            expertise to restore movement and improve quality of life.
          </p>
          <div className="text-sm text-gray-400 space-y-1">
            <p>📍 Malegaon, Maharashtra</p>
            <p>🕐 Mon – Sat: 10:00 AM – 8:00 PM</p>
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {["/", "/about", "/services", "/contact"].map((href) => (
              <li key={href}>
                <Link href={href} className="hover:text-primary transition-colors capitalize">
                  {href === "/" ? "Home" : href.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Stay Updated</h4>
          <p className="text-sm text-gray-400 mb-4">
            Follow us for health tips and clinical insights.
          </p>
          <ul className="text-sm space-y-2">
            <li>
              <a
                href="https://www.instagram.com/phyzio.warrior"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <span>📸</span> @phyzio.warrior
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <span>📘</span> Phoenix Clinic
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-10 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Phoenix | The Physiotherapy Clinic. All rights reserved.</p>
        <p>Dr. Tanvi More (PT) — BPTh, MPTh (Orthopaedics &amp; Sports)</p>
      </div>
    </footer>
  );
}
