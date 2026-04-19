import Link from 'next/link';
import { notFound } from 'next/navigation';

import { loadContentBundle, loadRouteBySlug } from '@/lib/data/content-repository';
import { createRouteDetailContract } from '@/lib/domain/contracts';

export async function generateStaticParams() {
  const { bundle } = await loadContentBundle();
  return bundle.routes.map((route) => ({ routeSlug: route.slug }));
}

function formatDuration(durationMinutes) {
  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;
  return `${hours}h ${minutes}min`;
}

export default async function RouteDetailPage({ params }) {
  const { routeSlug } = await params;
  const route = await loadRouteBySlug(routeSlug);

  if (!route) {
    notFound();
  }

  const { bundle } = await loadContentBundle();
  const routeDetail = createRouteDetailContract(route, bundle);

  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">Route</p>
        <h1>{routeDetail.name}</h1>
        <p className="lead">
          {routeDetail.distanceKm.toFixed(1)} km · {formatDuration(routeDetail.durationMinutes)} ·{' '}
          {routeDetail.difficulty}
        </p>
      </section>

      <section className="contract-panel">
        <h2>Startpunkt</h2>
        <p>{routeDetail.startPlace?.name ?? 'N/A'}</p>
      </section>

      <section className="contract-panel">
        <h2>POIs auf der Route</h2>
        <ul>
          {routeDetail.pois.map((poi) => (
            <li key={poi.id}>
              <Link href={`/pois/${poi.slug}`}>{poi.name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
