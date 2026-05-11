const VERTEBRAE_Y = [68, 88, 108, 128, 148, 168, 188, 208];

const JOINTS = [
  { cx: 55,  cy: 84,  r: 9,  delay: "0.3s" },
  { cx: 145, cy: 84,  r: 9,  delay: "0.5s" },
  { cx: 38,  cy: 148, r: 7,  delay: "0.7s" },
  { cx: 162, cy: 148, r: 7,  delay: "0.9s" },
  { cx: 80,  cy: 250, r: 10, delay: "0.2s" },
  { cx: 120, cy: 250, r: 10, delay: "0.4s" },
  { cx: 76,  cy: 308, r: 8,  delay: "0.6s" },
  { cx: 124, cy: 308, r: 8,  delay: "0.8s" },
];

const PARTICLES = [
  { left: "10%", delay: "0s",   size: 8,  drift: "12px"  },
  { left: "20%", delay: "1.2s", size: 5,  drift: "-8px"  },
  { left: "75%", delay: "0.4s", size: 10, drift: "10px"  },
  { left: "84%", delay: "1.8s", size: 6,  drift: "-14px" },
  { left: "40%", delay: "2.3s", size: 4,  drift: "6px"   },
  { left: "62%", delay: "0.9s", size: 7,  drift: "-10px" },
];

export default function PhysioScene3D() {
  return (
    <div
      className="relative w-full h-full flex items-center justify-center rounded-3xl overflow-hidden
                 bg-gradient-to-br from-olive-50 via-white to-amber-50 shadow-xl"
      style={{ perspective: "1200px" }}
    >
      {/* Ambient glows */}
      <div className="absolute w-64 h-64 rounded-full bg-olive-200/30 blur-3xl -translate-x-10" />
      <div className="absolute w-48 h-48 rounded-full bg-amber-200/25 blur-2xl translate-x-16 translate-y-10" />

      {/* 3D rotating anatomical figure */}
      <div
        className="relative z-10"
        style={{
          animation: "bodyFloat 9s ease-in-out infinite",
          transformStyle: "preserve-3d",
        }}
      >
        <svg viewBox="0 0 200 375" className="w-auto max-h-[340px] drop-shadow-lg">
          <defs>
            <filter id="physio-glow" x="-40%" y="-40%" width="180%" height="180%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* HEAD */}
          <circle cx="100" cy="24" r="23"
            fill="none" stroke="#8B8235" strokeWidth="2.5"
            filter="url(#physio-glow)" />

          {/* NECK */}
          <path d="M 94,47 L 94,68 L 106,68 L 106,47"
            fill="none" stroke="#8B8235" strokeWidth="1.8"
            strokeLinecap="round" opacity="0.75" />

          {/* SHOULDER LINE */}
          <path d="M 55,84 Q 100,73 145,84"
            fill="none" stroke="#8B8235" strokeWidth="2.5"
            strokeLinecap="round" filter="url(#physio-glow)" opacity="0.95" />

          {/* ARMS */}
          <path d="M 55,84 L 38,148 L 33,197"
            fill="none" stroke="#8B8235" strokeWidth="2" strokeLinecap="round" opacity="0.72" />
          <path d="M 145,84 L 162,148 L 167,197"
            fill="none" stroke="#8B8235" strokeWidth="2" strokeLinecap="round" opacity="0.72" />

          {/* TORSO SIDES */}
          <path d="M 55,84 Q 44,132 48,170 Q 52,198 68,218"
            fill="none" stroke="#8B8235" strokeWidth="1.5" opacity="0.4" />
          <path d="M 145,84 Q 156,132 152,170 Q 148,198 132,218"
            fill="none" stroke="#8B8235" strokeWidth="1.5" opacity="0.4" />

          {/* RIBCAGE outline */}
          <ellipse cx="100" cy="130" rx="42" ry="54"
            fill="none" stroke="#8B8235" strokeWidth="1.2" opacity="0.2" />
          {/* Rib lines */}
          {[105, 116, 127, 138, 149].map((y, i) => (
            <path key={i} d={`M 60,${y} Q 100,${y - 6} 140,${y}`}
              fill="none" stroke="#8B8235" strokeWidth="0.9" opacity="0.18" />
          ))}

          {/* PELVIS */}
          <path d="M 68,218 Q 100,208 132,218 Q 150,240 128,254 L 100,258 L 72,254 Q 50,240 68,218 Z"
            fill="none" stroke="#8B8235" strokeWidth="2" opacity="0.8" />

          {/* LEGS */}
          <path d="M 82,258 L 76,308 L 74,362"
            fill="none" stroke="#8B8235" strokeWidth="2" strokeLinecap="round" opacity="0.78" />
          <path d="M 118,258 L 124,308 L 126,362"
            fill="none" stroke="#8B8235" strokeWidth="2" strokeLinecap="round" opacity="0.78" />

          {/* ANKLES */}
          <ellipse cx="74" cy="363" rx="8" ry="4.5"
            fill="none" stroke="#8B8235" strokeWidth="1.5" opacity="0.6" />
          <ellipse cx="126" cy="363" rx="8" ry="4.5"
            fill="none" stroke="#8B8235" strokeWidth="1.5" opacity="0.6" />

          {/* SPINE VERTEBRAE (animated glow cascade) */}
          {VERTEBRAE_Y.map((y, i) => (
            <rect key={i} x="93" y={y} width="14" height="10" rx="2.5"
              fill="#8B8235"
              filter="url(#physio-glow)"
              style={{
                animation: `spinePulse ${2.4 + (i % 4) * 0.35}s ease-in-out infinite`,
                animationDelay: `${i * 0.18}s`,
              }}
            />
          ))}

          {/* JOINT INDICATORS (outer ring + inner circle) */}
          {JOINTS.map((j, i) => (
            <g key={i}>
              <circle cx={j.cx} cy={j.cy} r={j.r + 5}
                fill="none" stroke="#c4b44a" strokeWidth="1.5"
                style={{
                  animation: "pulseRing 2.5s ease-in-out infinite",
                  animationDelay: j.delay,
                  transformOrigin: `${j.cx}px ${j.cy}px`,
                }}
              />
              <circle cx={j.cx} cy={j.cy} r={j.r}
                fill="none" stroke="#8B8235" strokeWidth="2.5"
                filter="url(#physio-glow)"
                style={{
                  animation: "jointGlow 2.5s ease-in-out infinite",
                  animationDelay: j.delay,
                }}
              />
              <circle cx={j.cx} cy={j.cy} r={2.5} fill="#b5aa3e" opacity="0.95" />
            </g>
          ))}
        </svg>
      </div>

      {/* FLOATING HEALING PARTICLES */}
      {PARTICLES.map((p, i) => (
        <div key={i}
          className="absolute rounded-full bg-amber-400/50"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: p.left,
            bottom: "6%",
            animation: `particleFloat ${3.5 + i * 0.65}s ease-in-out infinite`,
            animationDelay: p.delay,
            "--drift": p.drift,
          } as React.CSSProperties}
        />
      ))}

      {/* SCAN LINE */}
      <div className="absolute inset-0 pointer-events-none rounded-3xl overflow-hidden">
        <div className="absolute w-full h-px bg-amber-400/35 blur-sm"
          style={{ animation: "scanLine 5s linear infinite" }} />
      </div>

      {/* HUD LABEL */}
      <div className="absolute top-3 right-4 text-xs text-olive-500 font-mono opacity-50 select-none">
        <span className="animate-pulse">●&thinsp;</span>PHYSIO
      </div>
    </div>
  );
}
