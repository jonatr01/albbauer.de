# MVP+ Architekturplan fuer TRE-87

## Zielbild

Technisches Grundgeruest fuer albbauer.de, das heute statisch aus Seed-Daten rendert und spaeter mit externen Quellen/Services erweitert werden kann, ohne Routing- oder Datenmodellbruch.

## Architekturvorschlag

- Framework: Next.js App Router (Server Components + Route Handlers).
- Routing:
- `/regionen/[regionSlug]`
- `/orte/[placeSlug]`
- `/pois/[poiSlug]`
- `/routen/[routeSlug]`
- Datenmodell:
- `Region`, `Place`, `Route`, `Poi`, `Event` in `lib/domain/types.js`.
- Rendering Contracts in `lib/domain/contracts.js`.
- Data Layer:
- `loadContentBundle`, slug-basierte Loader und Near-Me Snapshot in `lib/data/content-repository.js`.
- Integrationen:
- Adapter-Facade fuer SEO/Maps/Wetter in `lib/integrations/*`.
- Interaktive Feature-Vorbereitung:
- `/api/near-me` als Geosearch-Contract.
- `/api/route-planner` als Filter-/Options-Contract.

## Implementierter Status

- Dynamische Seiten fuer Regionen, Orte, POIs und Routen sind live.
- Content-Seed erweitert (mehrere Orte/Routen/POIs fuer Template-Validierung).
- Near-Me und Route-Planner API-Endpunkte mit Fehlerbehandlung sind vorhanden.
- Dokumentation in `README.md` und `docs/engineering-contracts.md` ist auf MVP+-Stand.

## Naechste technische Milestones

1. Provider-Integrationen hinter Adaptern aktivieren (Maps/Wetter/SEO-Sitemap) inkl. API-Key Secret-Handling.
2. CMS-/DB-Source-Adapter statt statischem Seed anschliessen (z. B. Postgres + ingestion pipeline).
3. Search/Filter UX auf Orts-/Regionsebene mit Caching + ISR/Tag-Revalidation.
4. End-to-end Tests fuer Kernrouten und API-Contracts.

## Risiken und Blocker

- Externe Provider fehlen noch (Maps/Wetter): aktuell fallback-only.
- Kein echtes CMS/Datenbackend angebunden: Content ist seed-basiert.
- Kein Auth-/Role-Modell fuer spaetere Content Operations definiert.
