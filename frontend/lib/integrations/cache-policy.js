export const IntegrationCachePolicy = {
  seoSchemaTtlSec: 24 * 60 * 60,
  mapsLookupTtlSec: 12 * 60 * 60,
  weatherTtlSec: 30 * 60
};

export function shouldUseStaleData(updatedAtIso, ttlSec) {
  if (!updatedAtIso) {
    return true;
  }

  const ageMs = Date.now() - new Date(updatedAtIso).getTime();
  return ageMs > ttlSec * 1000;
}
