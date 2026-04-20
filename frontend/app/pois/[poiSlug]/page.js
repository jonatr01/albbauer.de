import Link from 'next/link';
import { notFound } from 'next/navigation';

import { loadContentBundle, loadPoiBySlug } from '@/lib/data/content-repository';
import { createPoiDetailContract } from '@/lib/domain/contracts';

export async function generateStaticParams() {
  const { bundle } = await loadContentBundle();
  return bundle.pois.map((poi) => ({ poiSlug: poi.slug }));
}

export default async function PoiPage({ params }) {
  const { poiSlug } = await params;
  const poi = await loadPoiBySlug(poiSlug);

  if (!poi) {
    notFound();
  }

  const { bundle } = await loadContentBundle();
  const detail = createPoiDetailContract(poi, bundle);

  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">POI</p>
        <h1>{detail.name}</h1>
        <p className="lead">{detail.summary}</p>
      </section>

      <section className="contract-panel">
        <h2>Kontext</h2>
        <p>Typ: {detail.type}</p>
        <p>
          Ort:{' '}
          {detail.place ? <Link href={`/orte/${detail.place.slug}`}>{detail.place.name}</Link> : 'N/A'}
        </p>
        <p>
          Region:{' '}
          {detail.region ? (
            <Link href={`/regionen/${detail.region.slug}`}>{detail.region.name}</Link>
          ) : (
            'N/A'
          )}
        </p>
      </section>

      <section className="contract-panel">
        <h2>Zugehoerige Routen</h2>
        <ul>
          {detail.relatedRoutes.map((route) => (
            <li key={route.id}>
              <Link href={`/routen/${route.slug}`}>{route.name}</Link> ({route.distanceKm.toFixed(1)} km)
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
