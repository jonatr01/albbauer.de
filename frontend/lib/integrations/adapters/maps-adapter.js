export function createMapsAdapter(client = null) {
  return {
    name: 'maps',
    async getRoutePreview(routeContract) {
      if (!client) {
        return {
          source: 'fallback',
          polyline: null,
          markers: routeContract.pois.map((poi) => ({
            id: poi.id,
            name: poi.name,
            coordinates: poi.coordinates
          }))
        };
      }

      const response = await client.fetchRouteGeometry(routeContract.id);
      return {
        source: 'provider',
        polyline: response.polyline,
        markers: response.markers
      };
    }
  };
}
