module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/components/SectionCard.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function SectionCard({ title, body }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: title
            }, void 0, false, {
                fileName: "[project]/components/SectionCard.js",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: body
            }, void 0, false, {
                fileName: "[project]/components/SectionCard.js",
                lineNumber: 5,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SectionCard.js",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/domain/content-datasets.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/** @type {import('./types').ContentBundle} */ __turbopack_context__.s([
    "staticContentBundle",
    ()=>staticContentBundle
]);
const staticContentBundle = {
    regions: [
        {
            id: 'region-biosphaere',
            slug: 'biosphaerengebiet-schwaebische-alb',
            name: 'Biosphaerengebiet Schwaebische Alb',
            overview: 'UNESCO-Biosphaerengebiet mit Wacholderheiden, Karstlandschaften und dichten Wander- und Radnetzen.',
            heroImage: '/images/regions/biosphaere.jpg',
            tags: [
                'Natur',
                'Wandern',
                'Familie'
            ]
        }
    ],
    places: [
        {
            id: 'place-bad-urach',
            regionId: 'region-biosphaere',
            slug: 'bad-urach',
            name: 'Bad Urach',
            summary: 'Kurstadt mit Wasserfall, Burgruine und historischem Marktplatz.',
            coordinates: {
                lat: 48.4914,
                lon: 9.3998
            },
            population: 12900
        },
        {
            id: 'place-muensingen',
            regionId: 'region-biosphaere',
            slug: 'muensingen',
            name: 'Muensingen',
            summary: 'Ehemalige Garnisonsstadt als Tor in das Herz der Mittleren Alb.',
            coordinates: {
                lat: 48.4128,
                lon: 9.4962
            },
            population: 15100
        }
    ],
    routes: [
        {
            id: 'route-uracher-wasserfall',
            regionId: 'region-biosphaere',
            slug: 'uracher-wasserfall-rundweg',
            name: 'Uracher Wasserfall Rundweg',
            distanceKm: 8.4,
            durationMinutes: 165,
            difficulty: 'mittel',
            startPlaceId: 'place-bad-urach',
            poiIds: [
                'poi-uracher-wasserfall',
                'poi-ruine-hohenurach'
            ]
        },
        {
            id: 'route-albtrauf-panorama',
            regionId: 'region-biosphaere',
            slug: 'albtrauf-panorama-weg',
            name: 'Albtrauf Panorama Weg',
            distanceKm: 12.1,
            durationMinutes: 230,
            difficulty: 'anspruchsvoll',
            startPlaceId: 'place-muensingen',
            poiIds: [
                'poi-biosphaerenzentrum',
                'poi-ruine-hohenurach'
            ]
        }
    ],
    pois: [
        {
            id: 'poi-uracher-wasserfall',
            regionId: 'region-biosphaere',
            placeId: 'place-bad-urach',
            slug: 'uracher-wasserfall',
            name: 'Uracher Wasserfall',
            type: 'natur',
            summary: 'Tuffsteinfall mit starkem saisonalen Wasseraufkommen.',
            coordinates: {
                lat: 48.4869,
                lon: 9.382
            }
        },
        {
            id: 'poi-ruine-hohenurach',
            regionId: 'region-biosphaere',
            placeId: 'place-bad-urach',
            slug: 'ruine-hohenurach',
            name: 'Burgruine Hohenurach',
            type: 'kultur',
            summary: 'Aussichtspunkt ueber das Ermstal mit mittelalterlicher Burgruine.',
            coordinates: {
                lat: 48.4935,
                lon: 9.3777
            }
        },
        {
            id: 'poi-biosphaerenzentrum',
            regionId: 'region-biosphaere',
            placeId: 'place-muensingen',
            slug: 'biosphaerenzentrum-schwaebische-alb',
            name: 'Biosphaerenzentrum Schwaebische Alb',
            type: 'familie',
            summary: 'Interaktive Ausstellung mit Fokus auf Naturschutz und regionale Wertschoepfung.',
            coordinates: {
                lat: 48.4069,
                lon: 9.4928
            }
        }
    ],
    events: [
        {
            id: 'event-urach-markt',
            regionId: 'region-biosphaere',
            placeId: 'place-bad-urach',
            slug: 'regionalmarkt-bad-urach',
            title: 'Regionalmarkt Bad Urach',
            startsAtIso: '2026-05-17T09:00:00+02:00',
            endsAtIso: '2026-05-17T16:00:00+02:00',
            venue: 'Marktplatz Bad Urach',
            category: 'markt',
            teaser: 'Direktvermarkter und Manufakturen aus der Region.'
        }
    ]
};
}),
"[project]/lib/domain/contracts.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildRenderingContracts",
    ()=>buildRenderingContracts,
    "createPlaceListingContract",
    ()=>createPlaceListingContract,
    "createPoiDetailContract",
    ()=>createPoiDetailContract,
    "createRegionListingContract",
    ()=>createRegionListingContract,
    "createRouteDetailContract",
    ()=>createRouteDetailContract,
    "createRoutePlannerContract",
    ()=>createRoutePlannerContract
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$domain$2f$content$2d$datasets$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/domain/content-datasets.js [app-rsc] (ecmascript)");
;
function createRegionListingContract(region) {
    return {
        id: region.id,
        slug: region.slug,
        name: region.name,
        overview: region.overview,
        tags: region.tags
    };
}
function createPlaceListingContract(place, bundle = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$domain$2f$content$2d$datasets$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["staticContentBundle"]) {
    const region = bundle.regions.find((entry)=>entry.id === place.regionId) ?? null;
    return {
        id: place.id,
        slug: place.slug,
        name: place.name,
        summary: place.summary,
        regionSlug: region?.slug ?? null,
        regionName: region?.name ?? null
    };
}
function createRouteDetailContract(route, bundle = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$domain$2f$content$2d$datasets$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["staticContentBundle"]) {
    const startPlace = bundle.places.find((place)=>place.id === route.startPlaceId) ?? null;
    const pois = bundle.pois.filter((poi)=>route.poiIds.includes(poi.id));
    return {
        id: route.id,
        slug: route.slug,
        name: route.name,
        distanceKm: route.distanceKm,
        durationMinutes: route.durationMinutes,
        difficulty: route.difficulty,
        startPlace,
        pois
    };
}
function createPoiDetailContract(poi, bundle = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$domain$2f$content$2d$datasets$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["staticContentBundle"]) {
    const place = bundle.places.find((entry)=>entry.id === poi.placeId) ?? null;
    const region = bundle.regions.find((entry)=>entry.id === poi.regionId) ?? null;
    const relatedRoutes = bundle.routes.filter((route)=>route.poiIds.includes(poi.id)).map((route)=>({
            id: route.id,
            slug: route.slug,
            name: route.name,
            distanceKm: route.distanceKm,
            difficulty: route.difficulty
        }));
    return {
        id: poi.id,
        slug: poi.slug,
        name: poi.name,
        type: poi.type,
        summary: poi.summary,
        place,
        region,
        relatedRoutes
    };
}
function createRoutePlannerContract(bundle = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$domain$2f$content$2d$datasets$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["staticContentBundle"]) {
    return {
        generatedAtIso: new Date().toISOString(),
        places: bundle.places.map((place)=>({
                id: place.id,
                slug: place.slug,
                name: place.name,
                coordinates: place.coordinates
            })),
        routeOptions: bundle.routes.map((route)=>({
                id: route.id,
                slug: route.slug,
                name: route.name,
                startPlaceId: route.startPlaceId,
                distanceKm: route.distanceKm,
                durationMinutes: route.durationMinutes,
                difficulty: route.difficulty
            }))
    };
}
function buildRenderingContracts(bundle = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$domain$2f$content$2d$datasets$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["staticContentBundle"]) {
    return {
        regionListing: bundle.regions.map(createRegionListingContract),
        placeListing: bundle.places.map((place)=>createPlaceListingContract(place, bundle)),
        routeDetails: bundle.routes.map((route)=>createRouteDetailContract(route, bundle)),
        poiDetails: bundle.pois.map((poi)=>createPoiDetailContract(poi, bundle)),
        eventListing: bundle.events.map((event)=>({
                id: event.id,
                slug: event.slug,
                title: event.title,
                startsAtIso: event.startsAtIso,
                venue: event.venue,
                category: event.category,
                placeId: event.placeId
            }))
    };
}
}),
"[project]/lib/data/content-repository.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "loadContentBundle",
    ()=>loadContentBundle,
    "loadNearMeSnapshot",
    ()=>loadNearMeSnapshot,
    "loadPlaceBySlug",
    ()=>loadPlaceBySlug,
    "loadPoiBySlug",
    ()=>loadPoiBySlug,
    "loadRegionBySlug",
    ()=>loadRegionBySlug,
    "loadRouteBySlug",
    ()=>loadRouteBySlug
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$domain$2f$content$2d$datasets$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/domain/content-datasets.js [app-rsc] (ecmascript)");
;
/**
 * @typedef {{
 *   sourceName: string,
 *   fetchBundle: () => Promise<import('@/lib/domain/types').ContentBundle>
 * }} ContentSourceAdapter
 */ /** @type {ContentSourceAdapter} */ const staticSourceAdapter = {
    sourceName: 'static-seed',
    async fetchBundle () {
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$domain$2f$content$2d$datasets$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["staticContentBundle"];
    }
};
async function loadContentBundle(adapter = staticSourceAdapter) {
    const bundle = await adapter.fetchBundle();
    return {
        source: adapter.sourceName,
        generatedAtIso: new Date().toISOString(),
        bundle
    };
}
async function loadRouteBySlug(slug, adapter) {
    const { bundle } = await loadContentBundle(adapter);
    return bundle.routes.find((route)=>route.slug === slug) ?? null;
}
async function loadRegionBySlug(slug, adapter) {
    const { bundle } = await loadContentBundle(adapter);
    return bundle.regions.find((region)=>region.slug === slug) ?? null;
}
async function loadPlaceBySlug(slug, adapter) {
    const { bundle } = await loadContentBundle(adapter);
    return bundle.places.find((place)=>place.slug === slug) ?? null;
}
async function loadPoiBySlug(slug, adapter) {
    const { bundle } = await loadContentBundle(adapter);
    return bundle.pois.find((poi)=>poi.slug === slug) ?? null;
}
function haversineDistanceKm(a, b) {
    const earthRadiusKm = 6371;
    const degToRad = (value)=>value * Math.PI / 180;
    const latDelta = degToRad(b.lat - a.lat);
    const lonDelta = degToRad(b.lon - a.lon);
    const latA = degToRad(a.lat);
    const latB = degToRad(b.lat);
    const h = Math.sin(latDelta / 2) ** 2 + Math.sin(lonDelta / 2) ** 2 * Math.cos(latA) * Math.cos(latB);
    return 2 * earthRadiusKm * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}
async function loadNearMeSnapshot({ lat, lon, maxDistanceKm = 25 }, adapter) {
    const { bundle } = await loadContentBundle(adapter);
    const origin = {
        lat,
        lon
    };
    const nearbyPlaces = bundle.places.map((place)=>({
            ...place,
            distanceKm: haversineDistanceKm(origin, place.coordinates)
        })).filter((place)=>place.distanceKm <= maxDistanceKm).sort((left, right)=>left.distanceKm - right.distanceKm);
    const placeIds = new Set(nearbyPlaces.map((place)=>place.id));
    const nearbyPois = bundle.pois.filter((poi)=>placeIds.has(poi.placeId));
    const suggestedRoutes = bundle.routes.filter((route)=>placeIds.has(route.startPlaceId));
    return {
        generatedAtIso: new Date().toISOString(),
        origin,
        maxDistanceKm,
        nearbyPlaces,
        nearbyPois,
        suggestedRoutes
    };
}
}),
"[project]/lib/integrations/adapters/maps-adapter.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createMapsAdapter",
    ()=>createMapsAdapter
]);
function createMapsAdapter(client = null) {
    return {
        name: 'maps',
        async getRoutePreview (routeContract) {
            if (!client) {
                return {
                    source: 'fallback',
                    polyline: null,
                    markers: routeContract.pois.map((poi)=>({
                            id: poi.id,
                            name: poi.name,
                            coordinates: poi.coordinates
                        }))
                };
            }
            const response = await client.fetchRouteGeometry(routeContract.id);
            return {
                source: 'provider',
                polyline: response.polyline,
                markers: response.markers
            };
        }
    };
}
}),
"[project]/lib/integrations/adapters/seo-schema-adapter.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSeoSchemaAdapter",
    ()=>createSeoSchemaAdapter
]);
function createSeoSchemaAdapter({ siteUrl }) {
    return {
        name: 'seo-schema',
        buildRouteSchema (routeContract) {
            return {
                '@context': 'https://schema.org',
                '@type': 'TouristTrip',
                name: routeContract.name,
                description: `${routeContract.distanceKm} km, Schwierigkeit ${routeContract.difficulty}`,
                touristType: 'Wandern',
                itinerary: {
                    '@type': 'Place',
                    name: routeContract.startPlace?.name ?? 'Schwaebische Alb'
                },
                url: `${siteUrl}/routen/${routeContract.slug}`
            };
        }
    };
}
}),
"[project]/lib/integrations/adapters/weather-adapter.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createWeatherAdapter",
    ()=>createWeatherAdapter
]);
const FALLBACK_WEATHER = {
    summary: 'Vorhersage derzeit nicht verfuegbar',
    temperatureC: null,
    precipitationProbability: null,
    source: 'fallback'
};
function createWeatherAdapter(client = null) {
    return {
        name: 'weather',
        async getForecastForPlace (place) {
            if (!client) {
                return {
                    ...FALLBACK_WEATHER,
                    placeId: place.id
                };
            }
            try {
                const forecast = await client.fetchForecast(place.coordinates);
                return {
                    placeId: place.id,
                    summary: forecast.summary,
                    temperatureC: forecast.temperatureC,
                    precipitationProbability: forecast.precipitationProbability,
                    source: 'provider'
                };
            } catch (error) {
                return {
                    ...FALLBACK_WEATHER,
                    placeId: place.id,
                    errorCode: 'weather_provider_failed'
                };
            }
        }
    };
}
}),
"[project]/lib/integrations/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createIntegrations",
    ()=>createIntegrations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integrations$2f$adapters$2f$maps$2d$adapter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/integrations/adapters/maps-adapter.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integrations$2f$adapters$2f$seo$2d$schema$2d$adapter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/integrations/adapters/seo-schema-adapter.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integrations$2f$adapters$2f$weather$2d$adapter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/integrations/adapters/weather-adapter.js [app-rsc] (ecmascript)");
;
;
;
function createIntegrations({ mapsClient = null, weatherClient = null, siteUrl }) {
    return {
        seo: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integrations$2f$adapters$2f$seo$2d$schema$2d$adapter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createSeoSchemaAdapter"])({
            siteUrl
        }),
        maps: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integrations$2f$adapters$2f$maps$2d$adapter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createMapsAdapter"])(mapsClient),
        weather: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integrations$2f$adapters$2f$weather$2d$adapter$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createWeatherAdapter"])(weatherClient)
    };
}
}),
"[project]/app/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionCard$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SectionCard.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$domain$2f$contracts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/domain/contracts.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$content$2d$repository$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/content-repository.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integrations$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/integrations/index.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
function formatDistance(distanceKm) {
    return `${distanceKm.toFixed(1)} km`;
}
async function HomePage() {
    const { source, generatedAtIso, bundle } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$content$2d$repository$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["loadContentBundle"])();
    const contracts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$domain$2f$contracts$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["buildRenderingContracts"])(bundle);
    const routeDetail = contracts.routeDetails[0];
    const firstRegion = contracts.regionListing[0];
    const firstPlace = contracts.placeListing[0];
    const firstPoi = contracts.poiDetails[0];
    const integrations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$integrations$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createIntegrations"])({
        siteUrl: 'https://albbauer.de'
    });
    const weather = await integrations.weather.getForecastForPlace(routeDetail.startPlace);
    const routeSchema = integrations.seo.buildRouteSchema(routeDetail);
    const mapPreview = await integrations.maps.getRoutePreview(routeDetail);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "page-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "eyebrow",
                        children: "ALB.BIZ"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        children: "MVP+ Architektur steht: skalierbare Regionen-, Orts-, POI- und Routen-Templates"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "lead",
                        children: "Das technische Backbone liefert Domain-Modelle, Seed-Daten, App-Router Templates, API-Contracts fuer Near-Me/Route-Planner und Adapter-Skelette mit Fallback-Verhalten."
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionCard$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        title: "Data Layer",
                        body: `Quelle: ${source}; Datensatz erzeugt: ${new Date(generatedAtIso).toISOString()}`
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionCard$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        title: "Route-Contract",
                        body: `${routeDetail.name} (${formatDistance(routeDetail.distanceKm)}, ${routeDetail.difficulty})`
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionCard$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        title: "Place-Template",
                        body: firstPlace ? `${firstPlace.name} (${firstPlace.regionName})` : 'Kein Place vorhanden'
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SectionCard$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        title: "Fallback-Wetter",
                        body: `${weather.summary} (${weather.source})`
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "contract-panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Listing- und Detail-Contracts"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Region-Listings: ",
                            contracts.regionListing.length,
                            " | Event-Listings:",
                            ' ',
                            contracts.eventListing.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: routeDetail.pois.map((poi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/pois/${poi.slug}`,
                                    children: [
                                        poi.name,
                                        " (",
                                        poi.type,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/page.js",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this)
                            }, poi.id, false, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "contract-panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Integrations-Layer Snapshot"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 73,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "SEO-Typ: ",
                            routeSchema['@type']
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Map-Source: ",
                            mapPreview.source
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Marker: ",
                            mapPreview.markers.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "contract-panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Template Navigation"
                    }, void 0, false, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "Region:",
                                    ' ',
                                    firstRegion ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/regionen/${firstRegion.slug}`,
                                        children: firstRegion.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 85,
                                        columnNumber: 15
                                    }, this) : 'N/A'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "Ort:",
                                    ' ',
                                    firstPlace ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/orte/${firstPlace.slug}`,
                                        children: firstPlace.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 92,
                                        columnNumber: 27
                                    }, this) : 'N/A'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "POI:",
                                    ' ',
                                    firstPoi ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/pois/${firstPoi.slug}`,
                                        children: firstPoi.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 96,
                                        columnNumber: 25
                                    }, this) : 'N/A'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "Route: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/routen/${routeDetail.slug}`,
                                        children: routeDetail.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/page.js",
                                        lineNumber: 99,
                                        columnNumber: 20
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/page.js",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/page.js",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/page.js",
                lineNumber: 79,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/page.js",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0fp5c6j._.js.map