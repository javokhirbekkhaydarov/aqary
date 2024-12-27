export function formatPrice(value: string | number | null): string {
  if (value === null || value === "") return "";
  const numericValue = typeof value === "number" ? value : parseInt(value, 10);
  return numericValue.toLocaleString("en-US");
}
