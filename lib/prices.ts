// TODO: уточнить у заказчика цену «под ключ» и заменить null на число
export const TURNKEY_PRICE: number | null = null;

export const prices = {
  drilling: {
    fixed: {
      minDepth: 15,
      maxDepth: 40,
      price: 130_000,
      label: "Бурение 15–40 м",
      description: "Фиксированная цена независимо от глубины в диапазоне",
    },
    perMeter: {
      threshold: 40,
      pricePerMeter: 3_250,
      label: "Бурение глубже 40 м",
      description: "Стоимость за каждый метр",
    },
  },
  turnkey: {
    price: TURNKEY_PRICE,
    label: "Скважина под ключ",
    description: "Бурение + полное обустройство (металл 133 мм + пластик 117 мм)",
  },
  septic: {
    price: null as number | null,
    label: "Септики",
    description: "Лучшая цена в области — уточняйте по запросу",
  },
  legalEntity: {
    surchargeMin: 13,
    surchargeMax: 15,
    surchargeAvg: 14,
    label: "Для юридических лиц",
    description: "+13–15% к стоимости",
  },
} as const;

export function calcDrillingPrice(depthM: number, isLegal = false): number {
  const base =
    depthM <= prices.drilling.fixed.maxDepth
      ? prices.drilling.fixed.price
      : depthM * prices.drilling.perMeter.pricePerMeter;
  return isLegal ? Math.round(base * 1.14) : base;
}
