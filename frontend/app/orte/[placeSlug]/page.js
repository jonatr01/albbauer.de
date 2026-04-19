import Link from 'next/link';
import { notFound } from 'next/navigation';

import { loadContentBundle, loadNearMeSnapshot, loadPlaceBySlug } from '@/lib/data/content-repository';
import { createRoutePlannerContract } from '@/lib/domain/contracts';

export async function generateStaticParams() {
  const { bundle } = await loadContentBundle();
  return bundle.places.map((place) => ({ placeSlug: place.slug }));
}

export default async function PlacePage({ params }) {
  const { placeSlug } = await params;
  const place = await loadPlaceBySlug(placeSlug);

  if (!place) {
    notFound();
  }

  const { bundle } = await loadContentBundle();
  const routes = bundle.routes.filter((route) => route.startPlaceId === place.id);
  const pois = bundle.pois.filter((poi) => poi.placeId === place.id);

  const nearMe = await loadNearMeSnapshot({
    lat: place.coordinates.lat,
    lon: place.coordinates.lon,
    maxDistanceKm: 20
  });

  const routePlanner = createRoutePlannerContract(bundle);
  const routeOptionsFromPlace = routePlanner.routeOptions.filter(
    (routeOption) => routeOption.startPlaceId === place.id
  );

  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">Ort</p>
        <h1>{place.name}</h1>
        <p className="lead">{place.summary}</p>
      </section>

      <section className="contract-panel">
        <h2>Routen ab {place.name}</h2>
        <ul>
          {routes.map((route) => (
            <li key={route.id}>
              <Link href={`/routen/${route.slug}`}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="contract-panel">
        <h2>POIs im Ort</h2>
        <ul>
          {pois.map((poi) => (
            <li key={poi.id}>
              <Link href={`/pois/${poi.slug}`}>{poi.name}</Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="contract-panel">
        <h2>Near-Me Vorbereitung</h2>
        <p>Nahe Orte im 20-km Radius: {nearMe.nearbyPlaces.length}</p>
        <p>Near-Me Endpoint: `/api/near-me?lat={place.coordinates.lat}&lon={place.coordinates.lon}`</p>
      </section>

      <section className="contract-panel">
        <h2>Route Planner Vorbereitung</h2>
        <p>Moegliche Start-Routen: {routeOptionsFromPlace.length}</p>
        <p>Route-Planner Endpoint: `/api/route-planner?originPlaceSlug={place.slug}`</p>
      </section>
    </main>
  );
}
