const isDivides = (long, short) => {
  const current = short;
  const len = long.length / current.length;
  for (let i = 1; i < len; i++) {
    short += current;
  }
  return short === long;
};

var gcdOfStrings = function (str1, str2) {
  const s = str1 + str2;
  const t = str2 + str1;
  if (s != t) return "";
  const long = str1.length >= str2.length ? str1 : str2;
  const short = str1.length < str2.length ? str1 : str2;

  if (isDivides(long, short)) return short;

  let currentStr = "";
  let n = Math.floor(short.length / 2);
  for (let i = n; i > 0; i--) {
    currentStr = short.substring(0, i);
    if (isDivides(short, currentStr) && isDivides(long, currentStr))
      return currentStr;
  }
  return "";
};

console.log(
  gcdOfStrings(
    "TAUXXTAUXXTAUXXTAUXXTAUXX",
    "TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX"
  )
);
