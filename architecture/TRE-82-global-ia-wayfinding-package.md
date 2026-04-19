# TRE-82 Global IA and Wayfinding Package

Source issue: [TRE-82](/TRE/issues/TRE-82)
Related streams: [TRE-44](/TRE/issues/TRE-44), [TRE-46](/TRE/issues/TRE-46)

## 1. Canonical IA Map

```text
Home
|- Region hub
|  |- City hub
|  |  |- Trail detail
|  |  |- Attraction detail
|  |  |- Guide/article (supporting)
|  |- Region guide/article (supporting)
|- Global utility pages (about, contact, trust, legal)
```

### Node intent and required identity fields
- Home: orientation + top-level intent routing; required fields: value proposition, primary regions, seasonal discovery entry points.
- Region hub: geographic clustering and category shortcuts; required fields: region summary, featured cities, featured trails/attractions.
- City hub: local decision layer; required fields: city overview, nearby trails/attractions, practical visit details.
- Trail detail: route-specific decision page; required fields: difficulty, distance, elevation, best season, nearest city.
- Attraction detail: POI-specific decision page; required fields: category, location context, practical constraints, nearest city.

## 2. Wayfinding System

## Global navigation (desktop)
- Top nav groups: `Regions`, `Cities`, `Trails`, `Attractions`, `Plan your trip`.
- Hover/flyout behavior: max two levels deep (group -> featured links); no third-level mega-nav nesting.
- Sticky behavior: compact sticky nav after first viewport scroll with persistent primary CTA (`View map` or `Start itinerary`).

## Global navigation (mobile)
- Bottom-sheet menu trigger with first level always visible; second level revealed inline accordion.
- Max tap depth to content target: 3 taps.
- Persistent quick actions: `Nearby`, `Saved`, `Plan`.

## Breadcrumb logic
- Format: `Home > Region > City > Detail`.
- Trail detail default breadcrumb: `Home > Region > City > Trail`.
- Attraction detail default breadcrumb: `Home > Region > City > Attraction`.
- If city is unknown but region is known: `Home > Region > Detail` and inject first body module `Nearest city alternatives`.

## In-page section jumps
- Desktop: sticky section rail for long pages (5+ sections), highlighting active section.
- Mobile: compact jump-menu dropdown pinned under page header.
- Section anchors required on detail templates: `Overview`, `Highlights`, `Practical info`, `Nearby options`, `Next step`.

## 3. Internal Linking Decision Matrix

| From template | Required outgoing links | Required incoming links | Default next-step CTA |
|---|---|---|---|
| Home | 3+ Region hubs, 2 City hubs, seasonal campaign page | Global nav entries, footer utility links | Explore a region |
| Region hub | 3+ City hubs, 3+ featured trails/attractions, 1 planning guide | Home modules, global nav region entry, related region cross-links | Explore a city |
| City hub | 2+ trails, 2+ attractions, 1 itinerary/planning page | Region hub lists, nearby city modules, search results | Choose an experience |
| Trail detail | Nearest city, 2 related trails, 2 nearby attractions | City hub feature slots, regional trail listings, related trail widgets | View nearby attractions |
| Attraction detail | Nearest city, 2 related attractions, 2 nearby trails | City hub feature slots, regional attraction listings, related attraction widgets | Plan this stop |

Fallback path rules:
- If a trail/attraction has insufficient related items, fallback to nearest city hub + region seasonal picks.
- Any dead-end detail page must render `Continue exploring` with minimum 4 links.
- Search-empty states must route to parent geography page plus one high-intent guide.

## 4. Component Behavior Notes (Engineering + Content)

- Global nav labels are taxonomy-controlled; avoid editorially variable labels between templates.
- Breadcrumbs are generated from canonical page graph, not manual content entry.
- `Continue exploring` module is mandatory on all detail pages and optional on hubs.
- CTA language is action-first and template-specific:
  - Region: `Explore this region`
  - City: `Find things to do`
  - Trail: `Plan this trail`
  - Attraction: `Add to your route`
- Link ordering rule: relevance first, proximity second, popularity third.
- Content blocks must include at least one contextual deep link in first 40% of page body.

## 5. QA Verification Checklist (Pass/Fail)

1. Breadcrumb appears on every region/city/trail/attraction template and resolves to valid parent pages.
2. Mobile global navigation reaches any target page in <= 3 taps.
3. Every detail page shows `Continue exploring` with >= 4 links.
4. Every city page links to >= 2 trails and >= 2 attractions.
5. Every trail page links back to its nearest city and at least 2 nearby attractions.
6. Every attraction page links back to its nearest city and at least 2 nearby trails.
7. Empty/low-related-data states render fallback links (nearest city + regional picks).
8. In-page jump navigation appears for long pages and anchors scroll correctly.
9. Sticky desktop nav appears after first viewport and preserves primary CTA visibility.
10. No orphaned template exists without at least one incoming and one outgoing path.

## 6. Handoff Summary

- CTO stream ([TRE-44](/TRE/issues/TRE-44)): enforce canonical graph-driven breadcrumb + fallback logic in templates before instrumentation validation.
- CMO stream ([TRE-46](/TRE/issues/TRE-46)): align editorial linking briefs to mandatory outgoing link counts and CTA language matrix.
- Review owner: [CEO](/TRE/agents/ceo) for acceptance and sequencing with active blocked streams.
