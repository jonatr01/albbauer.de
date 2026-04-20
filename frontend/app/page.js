import Link from 'next/link';

import SectionCard from '@/components/SectionCard';
import { buildRenderingContracts } from '@/lib/domain/contracts';
import { loadContentBundle } from '@/lib/data/content-repository';
import { createIntegrations } from '@/lib/integrations';

function formatDistance(distanceKm) {
  return `${distanceKm.toFixed(1)} km`;
}

export default async function HomePage() {
  const { source, generatedAtIso, bundle } = await loadContentBundle();
  const contracts = buildRenderingContracts(bundle);
  const routeDetail = contracts.routeDetails[0];
  const firstRegion = contracts.regionListing[0];
  const firstPlace = contracts.placeListing[0];
  const firstPoi = contracts.poiDetails[0];

  const integrations = createIntegrations({ siteUrl: 'https://albbauer.de' });
  const weather = await integrations.weather.getForecastForPlace(routeDetail.startPlace);
  const routeSchema = integrations.seo.buildRouteSchema(routeDetail);
  const mapPreview = await integrations.maps.getRoutePreview(routeDetail);

  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">ALB.BIZ</p>
        <h1>MVP+ Architektur steht: skalierbare Regionen-, Orts-, POI- und Routen-Templates</h1>
        <p className="lead">
          Das technische Backbone liefert Domain-Modelle, Seed-Daten, App-Router Templates,
          API-Contracts fuer Near-Me/Route-Planner und Adapter-Skelette mit Fallback-Verhalten.
        </p>
      </section>

      <section className="grid">
        <SectionCard
          title="Data Layer"
          body={`Quelle: ${source}; Datensatz erzeugt: ${new Date(generatedAtIso).toISOString()}`}
        />
        <SectionCard
          title="Route-Contract"
          body={`${routeDetail.name} (${formatDistance(routeDetail.distanceKm)}, ${routeDetail.difficulty})`}
        />
        <SectionCard
          title="Place-Template"
          body={firstPlace ? `${firstPlace.name} (${firstPlace.regionName})` : 'Kein Place vorhanden'}
        />
        <SectionCard
          title="Fallback-Wetter"
          body={`${weather.summary} (${weather.source})`}
        />
      </section>

      <section className="contract-panel">
        <h2>Listing- und Detail-Contracts</h2>
        <p>
          Region-Listings: {contracts.regionListing.length} | Event-Listings:{' '}
          {contracts.eventListing.length}
        </p>
        <ul>
          {routeDetail.pois.map((poi) => (
            <li key={poi.id}>
              <Link href={`/pois/${poi.slug}`}>
                {poi.name} ({poi.type})
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="contract-panel">
        <h2>Integrations-Layer Snapshot</h2>
        <p>SEO-Typ: {routeSchema['@type']}</p>
        <p>Map-Source: {mapPreview.source}</p>
        <p>Marker: {mapPreview.markers.length}</p>
      </section>

      <section className="contract-panel">
        <h2>Template Navigation</h2>
        <ul>
          <li>
            Region:{' '}
            {firstRegion ? (
              <Link href={`/regionen/${firstRegion.slug}`}>{firstRegion.name}</Link>
            ) : (
              'N/A'
            )}
          </li>
          <li>
            Ort:{' '}
            {firstPlace ? <Link href={`/orte/${firstPlace.slug}`}>{firstPlace.name}</Link> : 'N/A'}
          </li>
          <li>
            POI:{' '}
            {firstPoi ? <Link href={`/pois/${firstPoi.slug}`}>{firstPoi.name}</Link> : 'N/A'}
          </li>
          <li>
            Route: <Link href={`/routen/${routeDetail.slug}`}>{routeDetail.name}</Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
