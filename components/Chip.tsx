type Props = {
  className?: string;
  rotate?: number;
};

/** Flat 2D poster illustration of a single Coin Khakhra disc. Original art. */
export default function Chip({ className = "", rotate = 0 }: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden
    >
      <circle cx="50" cy="50" r="47" fill="#E9C88A" stroke="#111111" strokeWidth="3" />
      <circle cx="50" cy="50" r="34" fill="none" stroke="#111111" strokeWidth="1.5" strokeOpacity="0.35" strokeDasharray="2 6" />
      {[
        [34, 30, 5],
        [66, 34, 4],
        [30, 62, 4.5],
        [70, 68, 5.5],
        [50, 20, 3.5],
        [50, 80, 4],
        [20, 46, 3],
        [80, 50, 3.5],
      ].map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill="#111111" fillOpacity="0.16" />
      ))}
      <circle cx="50" cy="50" r="3" fill="#111111" />
    </svg>
  );
}
