import { NextResponse } from 'next/server';

import { loadContentBundle } from '@/lib/data/content-repository';
import { createRoutePlannerContract } from '@/lib/domain/contracts';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const originPlaceSlug = searchParams.get('originPlaceSlug');

  const { bundle } = await loadContentBundle();
  const planner = createRoutePlannerContract(bundle);

  if (!originPlaceSlug) {
    return NextResponse.json(planner, { status: 200 });
  }

  const originPlace = planner.places.find((place) => place.slug === originPlaceSlug);

  if (!originPlace) {
    return NextResponse.json(
      {
        error: 'place_not_found',
        message: `No place found for originPlaceSlug=${originPlaceSlug}`
      },
      { status: 404 }
    );
  }

  const filteredRoutes = planner.routeOptions.filter(
    (routeOption) => routeOption.startPlaceId === originPlace.id
  );

  return NextResponse.json(
    {
      ...planner,
      originPlace,
      routeOptions: filteredRoutes
    },
    { status: 200 }
  );
}
