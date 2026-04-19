# TRE-89 Premium UX-System and Template Konzept (albbauer.de)

Source issue: [TRE-89](/TRE/issues/TRE-89)  
Parent issue: [TRE-9](/TRE/issues/TRE-9)

## 1. Executive Direction

`albbauer.de` should feel premium through clarity, confidence, and editorial depth instead of visual overload. The system prioritizes fast decision-making for visitors (what to do, where to go next, and what is practical now) while preserving strong crawl paths and conversion moments.

Primary product goals:
- reduce dead-end content paths
- increase route-to-action conversions (save, plan, book/contact)
- improve trust signals on local business and farm profiles
- keep template consistency high enough for scale

## 2. UX Principles and Design Rails

### P0 Principles (must-have)
- Decision-first hierarchy: each page starts with the core decision summary before long narrative text.
- Context continuity: every page exposes geography context (`Region > Ort > Detail`) and next best actions.
- Zero dead ends: all detail templates must expose a structured "Continue exploring" zone.
- Mobile parity: all primary conversions remain visible and reachable within 1-2 scroll screens on mobile.
- Trust by proof: all commercial and practical claims must be paired with source/proof UI (opening hours freshness, review source, map context, operator details).

### P1 Principles (strongly recommended)
- Seasonal relevance layer (weather/season chips and contextual suggestions).
- Progressive personalization (recently viewed/saved context in nav and detail pages).
- Motion as orientation (small transitions to explain state change; no decorative-only animation).

## 3. Visual System Foundation

## Typography
- Display: `Fraunces` for hero headlines and section intros (premium editorial voice).
- Interface/Text: `Manrope` for navigation, body copy, cards, forms, and metadata.
- Scale:
  - H1: 48/56 desktop, 34/40 mobile
  - H2: 34/42 desktop, 28/34 mobile
  - Body L: 19/30 desktop, 18/28 mobile
  - Body M: 17/26 desktop, 16/24 mobile
  - Meta: 14/20

## Color tokens
- `--ink-950: #111111` (primary text)
- `--ink-700: #2E2E2E` (secondary text)
- `--paper-0: #FBF9F4` (base)
- `--paper-100: #F2EEE4` (surface alt)
- `--forest-600: #1F5B43` (primary action)
- `--forest-700: #164533` (hover)
- `--sun-500: #D9A441` (highlights/tags)
- `--signal-info: #1E6A8D`
- `--signal-success: #2D7A4A`
- `--signal-warning: #A86D1F`

## Motion
- Duration tokens: 120ms (`fast`), 180ms (`base`), 280ms (`slow`).
- Easing: `cubic-bezier(0.22, 0.61, 0.36, 1)`.
- Allowed motion:
  - sticky header compression/expansion
  - section jump active-indicator transitions
  - list-to-map synchronization state changes

## Components (system minimum)
- Global header + compact sticky variant
- Breadcrumb module
- Section jump navigation (desktop rail / mobile dropdown)
- Card family (trail, gastro, hof, event)
- Trust metadata row (updated_at, source, verification badge)
- Primary CTA bar (desktop inline, mobile sticky bottom)
- Continue exploring module (mandatory for detail pages)

## 4. Template Concept (Core Pages)

## A. Wanderrouten Detail
Intent: help users decide if route fits skill level and trip constraints.

P0 blocks:
1. Hero with route summary: difficulty, distance, elevation, duration, season.
2. Primary CTA group: `Route planen`, `Auf Karte sehen`, `Speichern`.
3. Practical info: parking, ÖPNV, route condition, safety alerts.
4. Nearby module: 2 attractions + 2 gastro options.
5. Continue exploring: related routes + parent city/region.

P1 blocks:
- elevation profile interaction
- downloadable GPX and print view

## B. Gastronomie Detail
Intent: convert intent to visit/contact/reservation.

P0 blocks:
1. Hero with cuisine type, location, price range, opening status.
2. CTA group: `Tisch anfragen` / `Anrufen` / `Route starten`.
3. Trust row: last update, source, review context.
4. Menu/specialties preview with dietary tags.
5. Nearby suggestions: trails/attractions within short distance.

P1 blocks:
- timed demand hints (`best times`)
- integrated local itinerary pairing suggestions

## C. Lokale Höfe Detail
Intent: communicate authenticity and availability.

P0 blocks:
1. Farm profile with producer story + key products.
2. Availability/practical panel: opening windows, pickup, payment methods.
3. CTA group: `Besuch planen`, `Kontakt`, `In Route aufnehmen`.
4. Trust signals: certifications, provenance, freshness indicators.
5. Continue exploring with local food + nearby attractions.

P1 blocks:
- seasonal product calendar
- event integration (market dates/workshops)

## D. Events Detail
Intent: let users quickly evaluate fit and plan attendance.

P0 blocks:
1. Event snapshot: date/time, location, audience, ticket status.
2. CTA group: `Teilnahme planen`, `Zum Kalender`, `Route starten`.
3. Practical info: entry rules, accessibility, parking/transit.
4. Nearby stack: before/after suggestions (gastro + attraction).
5. Continue exploring: more events in city/region.

P1 blocks:
- reminder workflow with save-state feedback
- weather-adaptive preparation tips

## 5. Navigation and CTA Strategy

## Desktop
- Header tiers: primary nav + contextual subnav on hubs.
- Sticky compact header after 1 viewport scroll, preserving primary CTA.
- Detail pages include right-side sticky action rail with 2 primary actions max.

## Mobile
- Header: compact title + breadcrumb back pattern.
- Sticky bottom CTA bar on detail templates with up to 2 visible actions and overflow sheet.
- Section jump as pinned dropdown below header on long pages.

## CTA language matrix
- Trail: `Route planen`
- Gastro: `Besuch reservieren` (or `Anfrage senden` fallback)
- Farm: `Hofbesuch planen`
- Event: `Teilnahme planen`

CTA rules:
- no generic `Mehr erfahren` for primary actions
- first CTA always action + intent pair
- CTA remains visible after first major content block on all devices

## 6. IA and User Flow Alignment (SEO/Growth)

Canonical path:
- Home -> Region hub -> Ort hub -> Detail template

Growth and SEO constraints:
- each detail page must link to parent hub and at least 4 onward internal links
- first meaningful internal link appears in first 35% of body
- all hubs maintain reciprocal links to at least 2 child detail pages per content type
- breadcrumb + structured data must mirror canonical IA
- no orphan pages in any of the four core template families

High-intent funnel pattern:
1. Discover (`Region/Ort hubs`)
2. Evaluate (`Detail summary + practical panel`)
3. Commit (`Primary CTA`)
4. Extend (`Continue exploring` or itinerary follow-up)

## 7. Engineering Handoff (CTO-ready)

P0 implementation requirements:
- Build template shell components with slot-based composition for all four core templates.
- Enforce mandatory blocks at CMS validation layer (cannot publish without P0 blocks).
- Implement shared CTA bar behavior: desktop inline + mobile sticky bottom.
- Implement canonical breadcrumb generation from IA graph (not manual text).
- Provide `continue_exploring` resolver with fallback to nearest city + regional picks.
- Add trust metadata schema fields:
  - `verified_at`
  - `source_type`
  - `source_label`
  - `content_freshness_days`

P1 implementation requirements:
- list-map sync state model for route and location pages
- saved-state personalization hooks
- seasonal context service integration

Telemetry events (minimum):
- `detail_cta_click` (template_type, cta_type, location_id)
- `continue_exploring_click` (source_template, target_template)
- `sticky_cta_impression` (device, template_type)
- `nav_jump_use` (device, anchor)

## 8. QA Acceptance Checks

P0 pass conditions:
1. Every core detail template renders all P0 blocks.
2. Mobile detail pages expose a sticky CTA bar with at least one primary action always reachable.
3. Breadcrumbs resolve to valid parent hubs for 100% sampled pages.
4. Each detail page has >= 4 valid continue-exploring links.
5. First internal link appears before 35% content depth.
6. Trust metadata row appears on all gastro/farm/event templates.

P1 pass conditions:
1. Jump navigation appears on pages with >= 5 sections.
2. Motion transitions stay within defined durations/easing.
3. No CTA duplication conflict between sticky and inline placements.

## 9. Rollout and Sequencing

1. Ship P0 shell + mandatory blocks for all four templates.
2. Validate IA link graph and breadcrumb correctness at template level.
3. Enable telemetry and run 1-week baseline measurement.
4. Release P1 enhancements after baseline verifies no conversion regressions.

## 10. Immediate Cross-Team Requests

- CTO ([TRE-44](/TRE/issues/TRE-44)): confirm schema + template slot feasibility and estimate P0 build tranche.
- CMO ([TRE-46](/TRE/issues/TRE-46)): align editorial briefs with mandatory trust row and CTA matrix.
- CEO ([TRE-9](/TRE/issues/TRE-9)): review and approve rollout sequencing and prioritization.
