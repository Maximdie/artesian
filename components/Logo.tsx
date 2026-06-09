interface LogoProps {
  className?: string;
  /** white — для тёмного фона (hero, footer) */
  variant?: "default" | "white";
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", variant = "default", size = "md" }: LogoProps) {
  const textColor = variant === "white" ? "#ffffff" : "#0B4F8A";
  const subColor = variant === "white" ? "rgba(255,255,255,0.75)" : "#2E90D1";
  const iconBg = variant === "white" ? "rgba(255,255,255,0.2)" : "#0B4F8A";
  const iconFill = "#ffffff";

  const sizes = {
    sm: { icon: 32, titleSize: 14, subSize: 11, gap: 8, totalH: 32, textW: 100 },
    md: { icon: 40, titleSize: 17, subSize: 13, gap: 10, totalH: 40, textW: 125 },
    lg: { icon: 52, titleSize: 22, subSize: 16, gap: 12, totalH: 52, textW: 160 },
  };
  const s = sizes[size];
  const viewW = s.icon + s.gap + s.textW;

  return (
    <svg
      className={className}
      viewBox={`0 0 ${viewW} ${s.totalH}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Артезианс-плюс"
      role="img"
    >
      {/* Icon background circle */}
      <circle cx={s.icon / 2} cy={s.totalH / 2} r={s.icon / 2} fill={iconBg} />

      {/* Droplet inside circle */}
      {(() => {
        const cx = s.icon / 2;
        const cy = s.totalH / 2;
        const dw = s.icon * 0.42;
        const dh = s.icon * 0.56;
        const dx = cx;
        const dy = cy - dh * 0.18;
        const top = dy - dh / 2;
        const bot = dy + dh / 2;
        const left = dx - dw / 2;
        const right = dx + dw / 2;
        return (
          <path
            d={`M ${dx},${top} C ${dx},${top} ${left},${top + dh * 0.38} ${left},${bot - dw / 2} A ${dw / 2},${dw / 2} 0 0,0 ${right},${bot - dw / 2} C ${right},${top + dh * 0.38} ${dx},${top} ${dx},${top} Z`}
            fill={iconFill}
            opacity="0.9"
          />
        );
      })()}

      {/* Wave inside droplet */}
      {(() => {
        const cx = s.icon / 2;
        const cy = s.totalH / 2 + s.icon * 0.05;
        const hw = s.icon * 0.16;
        const vy = s.icon * 0.07;
        return (
          <path
            d={`M ${cx - hw * 2},${cy} Q ${cx - hw},${cy - vy} ${cx},${cy} Q ${cx + hw},${cy - vy} ${cx + hw * 2},${cy}`}
            stroke={iconBg === "#0B4F8A" ? "#0B4F8A" : "rgba(11,79,138,0.6)"}
            strokeWidth={s.icon * 0.05}
            fill="none"
            strokeLinecap="round"
          />
        );
      })()}

      {/* Company name */}
      <text
        x={s.icon + s.gap}
        y={s.totalH * 0.47}
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="700"
        fontSize={s.titleSize}
        fill={textColor}
        dominantBaseline="auto"
      >
        Артезианс
      </text>
      <text
        x={s.icon + s.gap}
        y={s.totalH * 0.92}
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="500"
        fontSize={s.subSize}
        fill={subColor}
        dominantBaseline="auto"
      >
        — плюс
      </text>
    </svg>
  );
}
