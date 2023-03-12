Number.prototype.monetize = function() {
  if (!this)
    return "0,00";
  const formattedNumber = this.toLocaleString("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  return formattedNumber;
};
function monetize() {
  return this.monetize();
}

export { monetize as m };
//# sourceMappingURL=monetize-999b067f.js.map
