import { staticContentBundle } from './content-datasets';

export function createRegionListingContract(region) {
  return {
    id: region.id,
    slug: region.slug,
    name: region.name,
    overview: region.overview,
    tags: region.tags
  };
}

export function createPlaceListingContract(place, bundle = staticContentBundle) {
  const region = bundle.regions.find((entry) => entry.id === place.regionId) ?? null;

  return {
    id: place.id,
    slug: place.slug,
    name: place.name,
    summary: place.summary,
    regionSlug: region?.slug ?? null,
    regionName: region?.name ?? null
  };
}

export function createRouteDetailContract(route, bundle = staticContentBundle) {
  const startPlace = bundle.places.find((place) => place.id === route.startPlaceId) ?? null;
  const pois = bundle.pois.filter((poi) => route.poiIds.includes(poi.id));

  return {
    id: route.id,
    slug: route.slug,
    name: route.name,
    distanceKm: route.distanceKm,
    durationMinutes: route.durationMinutes,
    difficulty: route.difficulty,
    startPlace,
    pois
  };
}

export function createPoiDetailContract(poi, bundle = staticContentBundle) {
  const place = bundle.places.find((entry) => entry.id === poi.placeId) ?? null;
  const region = bundle.regions.find((entry) => entry.id === poi.regionId) ?? null;
  const relatedRoutes = bundle.routes
    .filter((route) => route.poiIds.includes(poi.id))
    .map((route) => ({
      id: route.id,
      slug: route.slug,
      name: route.name,
      distanceKm: route.distanceKm,
      difficulty: route.difficulty
    }));

  return {
    id: poi.id,
    slug: poi.slug,
    name: poi.name,
    type: poi.type,
    summary: poi.summary,
    place,
    region,
    relatedRoutes
  };
}

export function createRoutePlannerContract(bundle = staticContentBundle) {
  return {
    generatedAtIso: new Date().toISOString(),
    places: bundle.places.map((place) => ({
      id: place.id,
      slug: place.slug,
      name: place.name,
      coordinates: place.coordinates
    })),
    routeOptions: bundle.routes.map((route) => ({
      id: route.id,
      slug: route.slug,
      name: route.name,
      startPlaceId: route.startPlaceId,
      distanceKm: route.distanceKm,
      durationMinutes: route.durationMinutes,
      difficulty: route.difficulty
    }))
  };
}

export function buildRenderingContracts(bundle = staticContentBundle) {
  return {
    regionListing: bundle.regions.map(createRegionListingContract),
    placeListing: bundle.places.map((place) => createPlaceListingContract(place, bundle)),
    routeDetails: bundle.routes.map((route) => createRouteDetailContract(route, bundle)),
    poiDetails: bundle.pois.map((poi) => createPoiDetailContract(poi, bundle)),
    eventListing: bundle.events.map((event) => ({
      id: event.id,
      slug: event.slug,
      title: event.title,
      startsAtIso: event.startsAtIso,
      venue: event.venue,
      category: event.category,
      placeId: event.placeId
    }))
  };
}
