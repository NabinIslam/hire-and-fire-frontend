export function getLocalStorageValue(key) {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key);
  }
  return null;
}
