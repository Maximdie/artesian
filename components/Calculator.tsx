"use client";

import { useState } from "react";
import { prices, calcDrillingPrice } from "@/lib/prices";

function fmt(n: number) {
  return n.toLocaleString("ru-RU") + " ₽";
}

export function Calculator() {
  const [depth, setDepth] = useState(40);
  const [isLegal, setIsLegal] = useState(false);

  const result = calcDrillingPrice(depth, isLegal);
  const isFixed = depth <= prices.drilling.fixed.maxDepth;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 max-w-xl w-full">
      <h3 className="text-xl font-bold text-[#0b4f8a] mb-6">Калькулятор стоимости</h3>

      {/* Depth slider */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label htmlFor="depth" className="text-sm font-medium text-[#1a2332]">
            Глубина скважины
          </label>
          <span className="text-sm font-bold text-[#0b4f8a]">{depth} м</span>
        </div>
        <input
          id="depth"
          type="range"
          min={prices.drilling.fixed.minDepth}
          max={100}
          value={depth}
          onChange={(e) => setDepth(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0b4f8a]"
        />
        <div className="flex justify-between text-xs text-[#5a6a7e] mt-1">
          <span>{prices.drilling.fixed.minDepth} м</span>
          <span className="text-[#0b4f8a] font-medium">до 40 м — фикс. 130 000 ₽</span>
          <span>100 м</span>
        </div>
        <input
          type="number"
          min={prices.drilling.fixed.minDepth}
          max={100}
          value={depth}
          onChange={(e) => {
            const v = Math.min(100, Math.max(prices.drilling.fixed.minDepth, Number(e.target.value)));
            setDepth(v);
          }}
          className="mt-3 w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-[#1a2332] focus:outline-none focus:ring-2 focus:ring-[#0b4f8a]/30"
        />
      </div>

      {/* Legal entity checkbox */}
      <label className="flex items-center gap-3 mb-6 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={isLegal}
          onChange={(e) => setIsLegal(e.target.checked)}
          className="w-4 h-4 accent-[#0b4f8a] rounded"
        />
        <span className="text-sm text-[#1a2332]">
          Юридическое лицо (+{prices.legalEntity.surchargeAvg}%)
        </span>
      </label>

      {/* Result */}
      <div className="bg-[#f0f7ff] rounded-xl p-5 mb-4">
        <p className="text-sm text-[#5a6a7e] mb-1">
          {isFixed
            ? `Фиксированная цена (15–${prices.drilling.fixed.maxDepth} м)`
            : `${depth} м × ${prices.drilling.perMeter.pricePerMeter.toLocaleString("ru-RU")} ₽/м`}
          {isLegal && ` + ${prices.legalEntity.surchargeAvg}% (юрлицо)`}
        </p>
        <p className="text-3xl font-bold text-[#0b4f8a]">{fmt(result)}</p>
        {/* Show transition hint when user is near the 40m boundary */}
        {depth === 40 && (
          <p className="text-xs text-[#5a6a7e] mt-2">
            При глубине 41 м: 41 × 3 250 = {fmt(41 * 3250)}
          </p>
        )}
      </div>

      <p className="text-xs text-[#5a6a7e]">
        * Точная стоимость определяется после выезда специалиста. Цена может отличаться в
        зависимости от геологии и условий бурения.
      </p>
    </div>
  );
}
