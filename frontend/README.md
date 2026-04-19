# ALB.BIZ Web Scaffold

Dieses Repository enthaelt das Next.js-Grundgeruest fuer die ALB.BIZ Website inklusive erster Content- und Integrationsvertraege.

## Voraussetzungen

- Node.js 20+
- npm 10+

## Startbefehle

```bash
npm install
npm run dev
```

Lokale Entwicklung: http://localhost:3000

## Production Build pruefen

```bash
npm run build
npm run start
```

## Struktur

- `app/`: Next.js App Router (`layout`, `page`, globale Styles)
- `app/regionen/[regionSlug]`: Regions-Template
- `app/orte/[placeSlug]`: Orts-Template inkl. Near-Me/Route-Planer Previews
- `app/pois/[poiSlug]`: POI-Detail-Template
- `app/routen/[routeSlug]`: Routen-Template
- `app/api/near-me`: API-Vertrag fuer geobasierte Vorschlaege
- `app/api/route-planner`: API-Vertrag fuer Routenplaner-Optionen
- `components/`: wiederverwendbare UI-Komponenten
- `lib/domain/`: Domain-Typen, Seed-Daten und Rendering-Contracts
- `lib/data/`: Data-Layer mit austauschbarem Source-Adapter
- `lib/integrations/`: SEO/Maps/Wetter Adapter-Skelette plus Cache-Policies
- `docs/`: technische Contracts und Integrationsrichtlinien
- `public/`: statische Assets
