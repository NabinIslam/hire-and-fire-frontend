export function CapitalizeAndRemoveHyphens(str) {
  const replacedString = str.replace(/-/g, " ");

  const capitalizedString = replacedString
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return capitalizedString;
}
