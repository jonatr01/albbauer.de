export function createSeoSchemaAdapter({ siteUrl }) {
  return {
    name: 'seo-schema',
    buildRouteSchema(routeContract) {
      return {
        '@context': 'https://schema.org',
        '@type': 'TouristTrip',
        name: routeContract.name,
        description: `${routeContract.distanceKm} km, Schwierigkeit ${routeContract.difficulty}`,
        touristType: 'Wandern',
        itinerary: {
          '@type': 'Place',
          name: routeContract.startPlace?.name ?? 'Schwaebische Alb'
        },
        url: `${siteUrl}/routen/${routeContract.slug}`
      };
    }
  };
}
