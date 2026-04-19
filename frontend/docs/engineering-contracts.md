# Engineering Contracts (TRE-18 / TRE-19)

## Content Domain Contracts

Kern-Entitaeten liegen in `lib/domain/types.js` (JSDoc-Typen):

- `Region`
- `Place`
- `Route`
- `Poi`
- `Event`
- `ContentBundle`

Seed-Daten liegen in `lib/domain/content-datasets.js`.
Rendering-Contracts fuer Listing/Detail-Views werden in `lib/domain/contracts.js` erzeugt.

## Data Layer

`lib/data/content-repository.js` definiert den technischen Datenzugriff:

- `ContentSourceAdapter` (Interface)
- `loadContentBundle(adapter?)`
- `loadRouteBySlug(slug, adapter?)`
- `loadRegionBySlug(slug, adapter?)`
- `loadPlaceBySlug(slug, adapter?)`
- `loadPoiBySlug(slug, adapter?)`
- `loadNearMeSnapshot({ lat, lon, maxDistanceKm }, adapter?)`

Default ist ein statischer Adapter (`static-seed`), spaeter austauschbar gegen externe Quellen.

## Integrations Adapter Contracts

Adapter-Facade: `lib/integrations/index.js`.

### SEO Schema Adapter

Datei: `lib/integrations/adapters/seo-schema-adapter.js`

Input:
- `routeContract`

Output:
- Schema.org `TouristTrip` JSON-LD Objekt

Fallback:
- Kein externer Request erforderlich; rein deterministische Ableitung aus Contract-Daten.

### Maps Adapter

Datei: `lib/integrations/adapters/maps-adapter.js`

Input:
- `routeContract`

Output:
- `{ source, polyline, markers }`

Fallback:
- Ohne Provider-Client: `source = "fallback"`, `polyline = null`, Marker aus POIs.

### Weather Adapter

Datei: `lib/integrations/adapters/weather-adapter.js`

Input:
- `place`

Output:
- `{ placeId, summary, temperatureC, precipitationProbability, source }`

Fallback:
- Ohne Client oder bei Provider-Fehlern wird ein neutrales Forecast-Objekt zurueckgegeben.
- Bei Fehlern zusaetzlich `errorCode = "weather_provider_failed"`.

## Caching / Performance Richtlinien

Datei: `lib/integrations/cache-policy.js`

- SEO Schema TTL: 24h
- Maps TTL: 12h
- Weather TTL: 30m

Regel:
- `shouldUseStaleData(updatedAtIso, ttlSec)` erzwingt Revalidation, wenn Daten fehlen oder TTL abgelaufen ist.

## Template Routing (MVP+)

Server-rendered Templates:

- `/regionen/[regionSlug]`
- `/orte/[placeSlug]`
- `/pois/[poiSlug]`
- `/routen/[routeSlug]`

Route-Handler fuer interaktive Features:

- `/api/near-me` (lat/lon Query; liefert Near-Me Snapshot)
- `/api/route-planner` (optional `originPlaceSlug`; liefert Route-Optionen)
