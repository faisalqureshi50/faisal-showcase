import isBrowser from "./isBrowser";

export function getItem(key = "") {
  if (!isBrowser()) return null;
  try {
    return JSON.parse(localStorage.getItem(key) || "");
  } catch (e) {
    return localStorage.getItem(key);
  }
}

export function setItem(key: string, value: unknown) {
  if (!key || !isBrowser()) {
    return null;
  }
  localStorage.setItem(key, JSON.stringify(value));
}

export function removeItem(key: string) {
  if (!isBrowser()) return null;
  localStorage.removeItem(key);
}
