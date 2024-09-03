export function formatDate(dateString) {
  const date = new Date(dateString);

  const options = { day: "numeric", month: "long", year: "numeric" };
  const day = date.getDate();

  // Get the appropriate suffix for the day
  const suffix = (day) => {
    if (day > 3 && day < 21) return "th"; // 4th to 20th
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  // Format the date
  return `${day}${suffix(day)} ${date.toLocaleDateString("en-US", options).split(" ")[0]} ${date.getFullYear()}`;
}
