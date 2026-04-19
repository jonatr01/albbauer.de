/** @type {import('./types').ContentBundle} */
export const staticContentBundle = {
  regions: [
    {
      id: 'region-biosphaere',
      slug: 'biosphaerengebiet-schwaebische-alb',
      name: 'Biosphaerengebiet Schwaebische Alb',
      overview:
        'UNESCO-Biosphaerengebiet mit Wacholderheiden, Karstlandschaften und dichten Wander- und Radnetzen.',
      heroImage: '/images/regions/biosphaere.jpg',
      tags: ['Natur', 'Wandern', 'Familie']
    }
  ],
  places: [
    {
      id: 'place-bad-urach',
      regionId: 'region-biosphaere',
      slug: 'bad-urach',
      name: 'Bad Urach',
      summary: 'Kurstadt mit Wasserfall, Burgruine und historischem Marktplatz.',
      coordinates: { lat: 48.4914, lon: 9.3998 },
      population: 12900
    },
    {
      id: 'place-muensingen',
      regionId: 'region-biosphaere',
      slug: 'muensingen',
      name: 'Muensingen',
      summary: 'Ehemalige Garnisonsstadt als Tor in das Herz der Mittleren Alb.',
      coordinates: { lat: 48.4128, lon: 9.4962 },
      population: 15100
    }
  ],
  routes: [
    {
      id: 'route-uracher-wasserfall',
      regionId: 'region-biosphaere',
      slug: 'uracher-wasserfall-rundweg',
      name: 'Uracher Wasserfall Rundweg',
      distanceKm: 8.4,
      durationMinutes: 165,
      difficulty: 'mittel',
      startPlaceId: 'place-bad-urach',
      poiIds: ['poi-uracher-wasserfall', 'poi-ruine-hohenurach']
    },
    {
      id: 'route-albtrauf-panorama',
      regionId: 'region-biosphaere',
      slug: 'albtrauf-panorama-weg',
      name: 'Albtrauf Panorama Weg',
      distanceKm: 12.1,
      durationMinutes: 230,
      difficulty: 'anspruchsvoll',
      startPlaceId: 'place-muensingen',
      poiIds: ['poi-biosphaerenzentrum', 'poi-ruine-hohenurach']
    }
  ],
  pois: [
    {
      id: 'poi-uracher-wasserfall',
      regionId: 'region-biosphaere',
      placeId: 'place-bad-urach',
      slug: 'uracher-wasserfall',
      name: 'Uracher Wasserfall',
      type: 'natur',
      summary: 'Tuffsteinfall mit starkem saisonalen Wasseraufkommen.',
      coordinates: { lat: 48.4869, lon: 9.382 }
    },
    {
      id: 'poi-ruine-hohenurach',
      regionId: 'region-biosphaere',
      placeId: 'place-bad-urach',
      slug: 'ruine-hohenurach',
      name: 'Burgruine Hohenurach',
      type: 'kultur',
      summary: 'Aussichtspunkt ueber das Ermstal mit mittelalterlicher Burgruine.',
      coordinates: { lat: 48.4935, lon: 9.3777 }
    },
    {
      id: 'poi-biosphaerenzentrum',
      regionId: 'region-biosphaere',
      placeId: 'place-muensingen',
      slug: 'biosphaerenzentrum-schwaebische-alb',
      name: 'Biosphaerenzentrum Schwaebische Alb',
      type: 'familie',
      summary: 'Interaktive Ausstellung mit Fokus auf Naturschutz und regionale Wertschoepfung.',
      coordinates: { lat: 48.4069, lon: 9.4928 }
    }
  ],
  events: [
    {
      id: 'event-urach-markt',
      regionId: 'region-biosphaere',
      placeId: 'place-bad-urach',
      slug: 'regionalmarkt-bad-urach',
      title: 'Regionalmarkt Bad Urach',
      startsAtIso: '2026-05-17T09:00:00+02:00',
      endsAtIso: '2026-05-17T16:00:00+02:00',
      venue: 'Marktplatz Bad Urach',
      category: 'markt',
      teaser: 'Direktvermarkter und Manufakturen aus der Region.'
    }
  ]
};
