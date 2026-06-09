interface LogoProps {
  className?: string;
  /** white — для тёмного фона (hero, footer) */
  variant?: "default" | "white";
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", variant = "default", size = "md" }: LogoProps) {
  const isWhite = variant === "white";

  const dropFill  = isWhite ? "rgba(255,255,255,0.92)" : "#0B4F8A";
  const waveStroke = isWhite ? "#0B4F8A" : "#ffffff";
  const textFill  = isWhite ? "#ffffff" : "#0B4F8A";
  const plusFill  = isWhite ? "rgba(255,255,255,0.6)" : "#2E90D1";

  const S = {
    sm: { h: 32, iw: 24, gap: 8, fs: 15.5, viewW: 132 },
    md: { h: 40, iw: 30, gap: 10, fs: 19.5, viewW: 166 },
    lg: { h: 52, iw: 38, gap: 12, fs: 25,   viewW: 214 },
  }[size];

  // ---- droplet geometry (fits within iw × h) ----
  const cx  = S.iw / 2;
  const top = S.h * 0.06;
  const r   = S.h * 0.295; // radius of bottom circle
  const bcy = S.h - r;     // bottom circle centre Y

  // droplet path: point at top → left curve → bottom semicircle → right curve → close
  const drop = [
    `M ${cx},${top}`,
    `C ${cx},${top} ${cx - r},${bcy - r * 0.82} ${cx - r},${bcy}`,
    `A ${r},${r} 0 0,0 ${cx + r},${bcy}`,
    `C ${cx + r},${bcy - r * 0.82} ${cx},${top} Z`,
  ].join(" ");

  // wave inside droplet (at bottom ⅓ area)
  const wy  = bcy + r * 0.05;
  const wdx = r * 0.38;
  const wave = `M ${cx - wdx * 2},${wy} Q ${cx - wdx},${wy - r * 0.22} ${cx},${wy} Q ${cx + wdx},${wy + r * 0.22} ${cx + wdx * 2},${wy}`;

  const textX = S.iw + S.gap;
  const textY = S.h * 0.695;

  return (
    <svg
      className={className}
      viewBox={`0 0 ${S.viewW} ${S.h}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Артезианс-плюс"
      role="img"
    >
      {/* Droplet */}
      <path d={drop} fill={dropFill} />

      {/* Wave inside droplet */}
      <path
        d={wave}
        stroke={waveStroke}
        strokeWidth={S.h * 0.048}
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />

      {/* "Артезианс" + styled "+" */}
      <text
        x={textX}
        y={textY}
        fontFamily="system-ui,-apple-system,sans-serif"
        fontWeight="700"
        fontSize={S.fs}
        fill={textFill}
      >
        Артезианс
      </text>

      {/* Plus: small circle + cross */}
      {(() => {
        // Estimate text width: ~8.7px per char at 15.5px, scales proportionally
        const charW = S.fs * 0.565;
        const textEnd = textX + 9 * charW; // "Артезианс" = 9 chars
        const pr  = S.h * 0.155; // badge radius
        const pcx = textEnd + pr + S.h * 0.04;
        const pcy = S.h * 0.44;
        const arm = pr * 0.55;
        const t   = pr * 0.28;
        const bgFill = isWhite ? "rgba(255,255,255,0.2)" : "#2E90D1";
        const crossFill = isWhite ? "#ffffff" : "#ffffff";
        return (
          <g transform={`translate(${pcx},${pcy})`}>
            <circle r={pr} fill={bgFill} />
            {/* cross */}
            <rect x={-t/2} y={-arm} width={t} height={arm*2} rx={t/2} fill={crossFill} />
            <rect x={-arm} y={-t/2} width={arm*2} height={t} rx={t/2} fill={crossFill} />
          </g>
        );
      })()}
    </svg>
  );
}
