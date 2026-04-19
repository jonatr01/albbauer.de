# TRE-109 Conversion and Trust-Signal UX Spec

Source issue: [TRE-109](/TRE/issues/TRE-109)  
Parent stream: [TRE-9](/TRE/issues/TRE-9)  
Build dependency targets: [TRE-44](/TRE/issues/TRE-44), [TRE-62](/TRE/issues/TRE-62)

## 1. Objective

Standardize conversion and confidence behavior across homepage, region, city, and detail templates so users can always:
- understand the next best action in the first viewport
- validate trust quickly before committing
- continue forward without dead-end states

## 2. CTA Hierarchy Specification

## CTA roles
- Primary CTA: highest-intent conversion action for template context; must be visible above fold on desktop and mobile.
- Secondary CTA: lower-friction alternative action; always adjacent to primary in hero/action zone.
- Tertiary CTA: optional utility action (`Save`, `Share`, `Map`) in icon/text utility row.

## Placement and timing rules
- Initial visibility: primary + secondary CTA must appear in first viewport for all templates.
- Scroll persistence:
  - desktop: compact sticky header keeps one primary CTA visible after 70% viewport scroll
  - mobile: sticky bottom CTA bar appears after user passes first CTA block or 30% page depth (whichever comes first)
- CTA count limits:
  - hero zone: max 2 button-style CTAs
  - sticky zones: max 1 primary + 1 overflow trigger
- Generic labels such as `Mehr erfahren` are disallowed for primary CTAs.

## Fallback CTA rules
- If booking/reservation/action endpoint is unavailable, fallback primary CTA becomes `Route planen` or `Auf Karte ansehen` based on template type.
- If contact method is missing, secondary CTA must switch to `Speichern`.
- If both conversion endpoint and fallback utility fail, inject alert panel and route to nearest valid parent (`Region` or `Stadt`) with explicit next-step CTA.

## Template CTA matrix

| Template | Primary CTA | Secondary CTA | Sticky mobile CTA | Fallback primary |
|---|---|---|---|---|
| Homepage | Region entdecken | In meiner Nähe | Region entdecken | Karte der Regionen |
| Region hub | Orte entdecken | Top-Routen ansehen | Orte entdecken | Highlights auf Karte |
| City hub | Aktivität wählen | Tagesplan starten | Aktivität wählen | Umgebung ansehen |
| Trail detail | Route planen | GPX/Map ansehen | Route planen | Ähnliche Route ansehen |
| Attraction detail | Besuch planen | Route starten | Besuch planen | Sehenswürdigkeiten in der Nähe |
| Gastro/Farm/Event detail | Besuch/Teilnahme planen | Kontakt/Route | Besuch/Teilnahme planen | In der Nähe entdecken |

## 3. Trust-Signal System

## Required trust modules
- Proof row (always above fold on detail templates):
  - `Zuletzt aktualisiert` date badge
  - source badge (`Offizielle Quelle`, `Partner verifiziert`, `Redaktion geprüft`)
  - location confidence chip (`Distanz bestätigt`, `Koordinate bestätigt`)
- Social proof module (within first 40% of page):
  - rating snapshot or qualitative endorsement
  - count context (reviews, visits, recommendations)
- Local authority module (before final CTA section):
  - regional partner logos/badges
  - municipality/tourism office verification where available

## Trust placement rules by template
- Homepage: editorial trust band directly below hero (platform credibility + freshness timestamp).
- Region and city hubs: trust band after intro section and before first content grid.
- Detail templates: trust proof row in hero metadata and expanded trust panel before `Practical info` closes.

## Trust fallback rules
- Missing `updated_at`: show `Aktualisierung ausstehend` warning state + reduced confidence styling.
- Missing source attribution: suppress verification badge and display `Quelle wird geprüft` text.
- Stale record (>180 days): inject refresh warning banner before primary CTA rail.

## 4. Required Component States Across Template Family

## Homepage states
- Default: hero CTA pair + trust band + region quick paths.
- Geo-personalized: `In meiner Nähe` promoted to primary if location permission granted.
- Sparse-data fallback: replace curated cards with `Top-Regionen` + map explorer CTA.

## Region hub states
- Default: city clusters + featured routes/attractions + trust band.
- Seasonal override: seasonal module inserted after hero with matching CTA (`Frühling entdecken`, etc.).
- Low inventory fallback: promote parent-level guides and nearest high-density city hub.

## City hub states
- Default: category pivots (`Wandern`, `Sehenswertes`, `Essen`, `Events`) with persistent action rail.
- High-intent state: if user arrived from search query intent, auto-prioritize matching category module.
- Dead-end prevention fallback: mandatory `Weitere Optionen im Umkreis` module with >=4 links.

## Detail template states (trail/attraction/gastro/farm/event)
- Default: summary + CTA pair + trust proof row + practical info + continue exploring.
- No-booking state: CTA fallback activated with map/save route.
- Trust-degraded state: stale/missing-source warning and lowered visual emphasis for commercial CTA.
- Recovery state: unresolved metadata opens parent-city pathway module with clear next action.

## 5. Discoverability and Continuity Rules

- Every template must expose one upward path (breadcrumb/parent CTA) and one forward path (`Continue exploring` or sibling action module).
- `Continue exploring` is mandatory on all detail templates and must contain >=4 links spanning at least 2 content types.
- First meaningful internal link must appear before 35% content depth.
- Mobile users must reach an actionable CTA within <=2 scroll screens from page load.

## 6. QA Acceptance Checklist (Pass/Fail)

1. Primary CTA is visible in first viewport on homepage, region, city, and detail templates.
2. Secondary CTA is present next to primary CTA at first CTA block on all templates.
3. Mobile sticky CTA appears no later than 30% page depth and remains tappable.
4. Desktop sticky conversion control appears after 70% viewport scroll on long templates.
5. Every detail template shows trust proof row with update + source + location confidence fields.
6. Missing source data triggers trust fallback state (`Quelle wird geprüft`) instead of fake verification.
7. Records older than 180 days show stale-data warning before conversion CTA.
8. Each detail page renders `Continue exploring` with >=4 valid links across >=2 types.
9. Breadcrumb/parent route always resolves to a live page (no 404/orphan path).
10. First internal contextual link appears before 35% content depth.
11. No-booking endpoint state switches primary CTA to approved fallback action.
12. City and region low-inventory fallbacks still provide at least one high-confidence next step.

## 7. Engineering and Content Handoff Notes

## Implementation implications for [TRE-62](/TRE/issues/TRE-62)
- Add shared CTA state engine: `default`, `no_booking`, `trust_degraded`, `recovery`.
- Implement mobile sticky CTA trigger by scroll depth threshold (`>=30%`) with template-specific labels.
- Enforce `Continue exploring` minimum link counts at render-time with nearest-city/region resolver fallback.
- Add trust module slots to region/city hubs and detail templates with consistent order.

## Instrumentation implications for [TRE-44](/TRE/issues/TRE-44)
- Track CTA state exposures and clicks:
  - `cta_impression` (`template_type`, `cta_role`, `state`)
  - `cta_click` (`template_type`, `cta_label`, `state`, `device`)
- Track trust fallback visibility:
  - `trust_warning_impression` (`reason`: `missing_source` | `stale_data`)
- Track continuity health:
  - `continue_exploring_impression` and `continue_exploring_click` with link-count and type-mix fields
- Extend schema/data contract with:
  - `content_updated_at`
  - `source_verification_type`
  - `location_confidence_level`

## 8. Open Blockers

None at spec level. Implementation blockers, if discovered during build, should be routed to [CTO](/TRE/agents/cto) and tracked against [TRE-62](/TRE/issues/TRE-62) with explicit failing state + required data contract.
