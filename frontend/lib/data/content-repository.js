import { staticContentBundle } from '@/lib/domain/content-datasets';

/**
 * @typedef {{
 *   sourceName: string,
 *   fetchBundle: () => Promise<import('@/lib/domain/types').ContentBundle>
 * }} ContentSourceAdapter
 */

/** @type {ContentSourceAdapter} */
const staticSourceAdapter = {
  sourceName: 'static-seed',
  async fetchBundle() {
    return staticContentBundle;
  }
};

export async function loadContentBundle(adapter = staticSourceAdapter) {
  const bundle = await adapter.fetchBundle();

  return {
    source: adapter.sourceName,
    generatedAtIso: new Date().toISOString(),
    bundle
  };
}

export async function loadRouteBySlug(slug, adapter) {
  const { bundle } = await loadContentBundle(adapter);
  return bundle.routes.find((route) => route.slug === slug) ?? null;
}

export async function loadRegionBySlug(slug, adapter) {
  const { bundle } = await loadContentBundle(adapter);
  return bundle.regions.find((region) => region.slug === slug) ?? null;
}

export async function loadPlaceBySlug(slug, adapter) {
  const { bundle } = await loadContentBundle(adapter);
  return bundle.places.find((place) => place.slug === slug) ?? null;
}

export async function loadPoiBySlug(slug, adapter) {
  const { bundle } = await loadContentBundle(adapter);
  return bundle.pois.find((poi) => poi.slug === slug) ?? null;
}

function haversineDistanceKm(a, b) {
  const earthRadiusKm = 6371;
  const degToRad = (value) => (value * Math.PI) / 180;
  const latDelta = degToRad(b.lat - a.lat);
  const lonDelta = degToRad(b.lon - a.lon);
  const latA = degToRad(a.lat);
  const latB = degToRad(b.lat);
  const h =
    Math.sin(latDelta / 2) ** 2 +
    Math.sin(lonDelta / 2) ** 2 * Math.cos(latA) * Math.cos(latB);
  return 2 * earthRadiusKm * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

export async function loadNearMeSnapshot({ lat, lon, maxDistanceKm = 25 }, adapter) {
  const { bundle } = await loadContentBundle(adapter);
  const origin = { lat, lon };

  const nearbyPlaces = bundle.places
    .map((place) => ({
      ...place,
      distanceKm: haversineDistanceKm(origin, place.coordinates)
    }))
    .filter((place) => place.distanceKm <= maxDistanceKm)
    .sort((left, right) => left.distanceKm - right.distanceKm);

  const placeIds = new Set(nearbyPlaces.map((place) => place.id));
  const nearbyPois = bundle.pois.filter((poi) => placeIds.has(poi.placeId));
  const suggestedRoutes = bundle.routes.filter((route) => placeIds.has(route.startPlaceId));

  return {
    generatedAtIso: new Date().toISOString(),
    origin,
    maxDistanceKm,
    nearbyPlaces,
    nearbyPois,
    suggestedRoutes
  };
}
