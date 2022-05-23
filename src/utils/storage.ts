type storageValue = string | number | symbol | object;

export const setStorage = (key: string, value: storageValue, isLocal = true): void => {
  if (!value) throw 'None Value'
  if (typeof value === 'object') value = JSON.stringify(value);
  (isLocal ? localStorage : sessionStorage).setItem(key, String(value))
}

export const getStorage = (key: string, isLocal = true): void => {
  let savedValue = (isLocal ? localStorage : sessionStorage).getItem(key)
  if (!savedValue) throw 'None Value'

  return typeof JSON.parse(savedValue) !== 'object' ? savedValue : JSON.parse(savedValue)
}

export const removeStorage = (key: string | null, isLocal = true): void => {
  const storage = isLocal ? localStorage : sessionStorage
  !key ? storage.clear() : storage.removeItem(key)
}