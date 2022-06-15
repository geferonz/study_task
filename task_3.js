function computerAccounting(num) {
  const lastNum = num % 10;
  const numToArray = Array.from(String(num), Number);
  const penultimateNumber = parseInt(numToArray[numToArray.length - 2]);

  if (
    lastNum === 0 ||
    lastNum > 4 ||
    numToArray.length > 1 && penultimateNumber === 1
  ) {
    return num + " компьютеров";
  };

  if (lastNum === 1) {
    return num + " компьютер";
  };

  return num + " компьютера";
}
