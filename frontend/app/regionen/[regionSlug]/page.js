import Link from 'next/link';
import { notFound } from 'next/navigation';

import { loadContentBundle, loadRegionBySlug } from '@/lib/data/content-repository';

export async function generateStaticParams() {
  const { bundle } = await loadContentBundle();
  return bundle.regions.map((region) => ({ regionSlug: region.slug }));
}

export default async function RegionPage({ params }) {
  const { regionSlug } = await params;
  const region = await loadRegionBySlug(regionSlug);

  if (!region) {
    notFound();
  }

  const { bundle } = await loadContentBundle();
  const places = bundle.places.filter((place) => place.regionId === region.id);
  const routes = bundle.routes.filter((route) => route.regionId === region.id);
  const events = bundle.events.filter((event) => event.regionId === region.id);

  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">Region</p>
        <h1>{region.name}</h1>
        <p className="lead">{region.overview}</p>
      </section>

      <section className="contract-panel">
        <h2>Orte</h2>
        <ul>
          {places.map((place) => (
            <li key={place.id}>
              <Link href={`/orte/${place.slug}`}>{place.name}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="contract-panel">
        <h2>Routen</h2>
        <ul>
          {routes.map((route) => (
            <li key={route.id}>
              <Link href={`/routen/${route.slug}`}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="contract-panel">
        <h2>Events</h2>
        <ul>
          {events.map((event) => (
            <li key={event.id}>
              {event.title} ({new Date(event.startsAtIso).toLocaleDateString('de-DE')})
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
