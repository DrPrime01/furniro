export const toCurrency = (
  number: number,
  country: string = "en-NG"
): string => {
  const formatter = new Intl.NumberFormat(country, {
    style: "currency",
    currency: country === "en-NG" ? "NGN" : "GBP",
  });

  return formatter.format(number).split(".00")[0];
};
