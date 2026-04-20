import { NextResponse } from 'next/server';

import { loadNearMeSnapshot } from '@/lib/data/content-repository';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const lat = Number(searchParams.get('lat'));
  const lon = Number(searchParams.get('lon'));
  const maxDistanceKm = Number(searchParams.get('maxDistanceKm') ?? 25);

  if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
    return NextResponse.json(
      {
        error: 'invalid_query',
        message: 'Expected numeric lat and lon query parameters.'
      },
      { status: 400 }
    );
  }

  const snapshot = await loadNearMeSnapshot({ lat, lon, maxDistanceKm });
  return NextResponse.json(snapshot, { status: 200 });
}
