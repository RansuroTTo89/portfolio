const UZS_RATE = 12500;

const MAX_PRICE_SUM = 10000000;

export const DISPLAY_STOCK = 67;

export function toSum(usdPrice) {
  const raw = usdPrice * UZS_RATE;
  const capped = Math.min(raw, MAX_PRICE_SUM);
  return Math.round(capped / 1000) * 1000;
}

export function getDiscountedSum(priceSum, discountPercentage) {
  const discounted = priceSum - (priceSum * discountPercentage) / 100;
  return Math.round(discounted / 1000) * 1000;
}

export function formatSum(amount) {
  return amount.toLocaleString("ru-RU") + " сум";
}
