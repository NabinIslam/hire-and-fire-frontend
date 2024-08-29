export function capitalizeAndRemoveHyphens(str) {
  // Replace hyphens with spaces
  const replacedString = str.replace(/-/g, " ");

  // Capitalize the first letter of each word
  const capitalizedString = replacedString
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return capitalizedString;
}
