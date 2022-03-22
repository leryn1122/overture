const EMPTY: string = '';

/**
 *
 * @param key Given key.
 * @param value Given value.
 * @param time Time out.
 */
export function setCookie(key: string, value: string, time: number): void {
  let currentTime = new Date();
  currentTime.setTime(currentTime.getTime() + time * 24 * 3600 * 1000);
  document.cookie = `${key}=${encodeURIComponent(value)};
		expires=${time ? currentTime.toUTCString() : EMPTY}}`;
}

/**
 * Return cookie with specified key.
 * @param key Given key.
 */
export function getCookie(key: string): string {
  let data = document.cookie;
  let startIndex = data.indexOf(key + '=');
  if (startIndex > -1) {
    startIndex = startIndex + key.length + 1;
    let endIndex = data.indexOf(';', startIndex);
    endIndex = endIndex < 0 ? data.length : endIndex;
    return decodeURIComponent(data.substring(startIndex, endIndex));
  } else {
    return EMPTY;
  }
}

/**
 * Delete cookie with specified key.
 * @param key Given key.
 */
export function deleteCookie(key: string): void {
  setCookie(key, EMPTY, -1);
}
