"use client";

import { useState } from "react";
import { Gift, X } from "lucide-react";
import { prices, calcDrillingPrice } from "@/lib/prices";

const MAX_DEPTH = 400;

function fmt(n: number) {
  return n.toLocaleString("ru-RU") + " ₽";
}

export function Calculator() {
  const [depth, setDepth] = useState(40);
  const [isLegal, setIsLegal] = useState(false);
  const [showGift, setShowGift] = useState(false);

  const result = calcDrillingPrice(depth, isLegal);
  const isFixed = depth <= prices.drilling.fixed.maxDepth;
  const gifts = depth >= 200 ? 2 : depth >= 100 ? 1 : 0;

  return (
    <>
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
            max={MAX_DEPTH}
            value={depth}
            onChange={(e) => setDepth(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0b4f8a]"
          />
          <div className="flex justify-between text-xs text-[#5a6a7e] mt-1">
            <span>{prices.drilling.fixed.minDepth} м</span>
            <span className="text-[#0b4f8a] font-medium">до 40 м — фикс. 130 000 ₽</span>
            <span>{MAX_DEPTH} м</span>
          </div>
          <input
            type="number"
            min={prices.drilling.fixed.minDepth}
            max={MAX_DEPTH}
            value={depth}
            onChange={(e) => {
              const v = Math.min(MAX_DEPTH, Math.max(prices.drilling.fixed.minDepth, Number(e.target.value)));
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
          {depth === 40 && (
            <p className="text-xs text-[#5a6a7e] mt-2">
              При глубине 41 м: 41 × 3 250 = {fmt(41 * 3250)}
            </p>
          )}
        </div>

        {/* Gift banner */}
        {gifts > 0 && (
          <div className="flex items-center gap-4 p-4 bg-amber-50 border border-amber-200 rounded-xl mb-4">
            <div className="flex gap-2 shrink-0">
              {Array.from({ length: gifts }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setShowGift(true)}
                  className="w-12 h-12 bg-amber-400 hover:bg-amber-500 active:scale-90 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-all"
                  aria-label="Узнать о подарке"
                >
                  <Gift className="w-6 h-6 text-white" />
                </button>
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-amber-800">
                {gifts === 2 ? "Два подарка от компании!" : "Подарок от компании!"}
              </p>
              <button
                onClick={() => setShowGift(true)}
                className="text-xs text-amber-600 hover:text-amber-800 underline underline-offset-2 transition-colors"
              >
                Нажмите, чтобы узнать
              </button>
            </div>
          </div>
        )}

        <p className="text-xs text-[#5a6a7e]">
          * Точная стоимость определяется после выезда специалиста. Цена может
          отличаться в зависимости от геологии и условий бурения.
        </p>
      </div>

      {/* Gift modal */}
      {showGift && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setShowGift(false)}
        >
          <div
            className="bg-white rounded-2xl p-7 sm:p-8 max-w-sm w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowGift(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Закрыть"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex justify-center gap-3 mb-5">
              {Array.from({ length: gifts }).map((_, i) => (
                <div
                  key={i}
                  className="w-16 h-16 bg-amber-400 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  <Gift className="w-8 h-8 text-white" />
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold text-[#0b4f8a] text-center mb-2">
              {gifts === 2 ? "Два подарка ждут вас!" : "Подарок ждёт вас!"}
            </h3>
            <p className="text-[#5a6a7e] text-sm text-center leading-relaxed mb-6">
              При бурении {gifts === 2 ? "от 200 м" : "от 100 м"} мы готовим
              {gifts === 2 ? " два приятных сюрприза" : " приятный сюрприз"} для вас.
              Оставьте заявку — менеджер расскажет о подарке при звонке.
            </p>
            <a
              href="#zayavka"
              onClick={() => setShowGift(false)}
              className="block w-full bg-[#0b4f8a] text-white text-center font-bold py-3.5 rounded-xl hover:bg-[#083a66] transition-colors active:scale-[0.98]"
            >
              Оставить заявку →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
