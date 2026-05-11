const ITEMS = [
  "Sports Rehabilitation",
  "Back & Neck Pain",
  "Neurological Rehab",
  "Post-Surgery Recovery",
  "Shockwave Therapy",
  "Laser Therapy",
  "Joint Mobilization",
  "Manual Therapy",
];

const doubled = [...ITEMS, ...ITEMS];

export default function MarqueeBand() {
  return (
    <div className="bg-gray-900 py-4 overflow-hidden select-none">
      <div className="marquee-track flex items-center gap-10">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 whitespace-nowrap text-xs font-bold text-white uppercase tracking-[0.18em]"
          >
            {item}
            <span className="text-primary text-base leading-none">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
