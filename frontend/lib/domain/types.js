/**
 * @typedef {{
 *   id: string,
 *   slug: string,
 *   name: string,
 *   overview: string,
 *   heroImage: string,
 *   tags: string[]
 * }} Region
 */

/**
 * @typedef {{
 *   id: string,
 *   regionId: string,
 *   slug: string,
 *   name: string,
 *   summary: string,
 *   coordinates: { lat: number, lon: number },
 *   population?: number
 * }} Place
 */

/**
 * @typedef {{
 *   id: string,
 *   regionId: string,
 *   slug: string,
 *   name: string,
 *   distanceKm: number,
 *   durationMinutes: number,
 *   difficulty: 'leicht' | 'mittel' | 'anspruchsvoll',
 *   startPlaceId: string,
 *   poiIds: string[]
 * }} Route
 */

/**
 * @typedef {{
 *   id: string,
 *   regionId: string,
 *   placeId: string,
 *   slug: string,
 *   name: string,
 *   type: 'natur' | 'kultur' | 'gastronomie' | 'familie',
 *   summary: string,
 *   coordinates: { lat: number, lon: number }
 * }} Poi
 */

/**
 * @typedef {{
 *   id: string,
 *   regionId: string,
 *   placeId: string,
 *   slug: string,
 *   title: string,
 *   startsAtIso: string,
 *   endsAtIso?: string,
 *   venue: string,
 *   category: 'markt' | 'festival' | 'sport' | 'familie',
 *   teaser: string
 * }} Event
 */

/**
 * @typedef {{
 *   regions: Region[],
 *   places: Place[],
 *   routes: Route[],
 *   pois: Poi[],
 *   events: Event[]
 * }} ContentBundle
 */

export {};
