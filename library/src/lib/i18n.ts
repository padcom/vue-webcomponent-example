export function getAgentLocale(defaultLocale = 'en') {
  return globalThis.navigator?.language.split('-')[0] || defaultLocale
}
