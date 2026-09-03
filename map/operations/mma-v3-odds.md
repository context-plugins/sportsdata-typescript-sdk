<!-- Generated file — do not edit; regenerated with the SDK. -->

# MmaV3Odds — operations

Accessor: `client.mmaV3Odds` · Source: `src/resources/mma-v3-odds.ts` · 10 operations · Request and error types: namespace `MmaV3Odds`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### mmaV3OddsBettingEventsByEvent

- **Signature**: `mmaV3OddsBettingEventsByEvent(request: MmaV3Odds.MmaV3OddsBettingEventsByEventRequest, options?: RequestOptions): ApiPromise<BettingEvent6[], MmaV3Odds.MmaV3OddsBettingEventsByEventError>`
- **Wire**: `GET /v3/mma/odds/{format}/BettingEventsByEvent/{eventId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent6[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MmaV3Odds.MmaV3OddsBettingEventsByEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MmaV3Odds.MmaV3OddsBettingEventsByEventRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `eventId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent6` | `bettingEvent6Schema` | `src/models/betting-event6.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mmaV3OddsBettingEventsUpcoming

- **Signature**: `mmaV3OddsBettingEventsUpcoming(request: MmaV3Odds.MmaV3OddsBettingEventsUpcomingRequest, options?: RequestOptions): ApiPromise<BettingEvent6[], MmaV3Odds.MmaV3OddsBettingEventsUpcomingError>`
- **Wire**: `GET /v3/mma/odds/{format}/UpcomingBettingEvents`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent6[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MmaV3Odds.MmaV3OddsBettingEventsUpcomingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MmaV3Odds.MmaV3OddsBettingEventsUpcomingRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent6` | `bettingEvent6Schema` | `src/models/betting-event6.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mmaV3OddsBettingFighterPropsByEvent

- **Signature**: `mmaV3OddsBettingFighterPropsByEvent(request: MmaV3Odds.MmaV3OddsBettingFighterPropsByEventRequest, options?: RequestOptions): ApiPromise<BettingMarket4[], MmaV3Odds.MmaV3OddsBettingFighterPropsByEventError>`
- **Wire**: `GET /v3/mma/odds/{format}/BettingFighterPropsByEvent/{eventId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MmaV3Odds.MmaV3OddsBettingFighterPropsByEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MmaV3Odds.MmaV3OddsBettingFighterPropsByEventRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `eventId` | `path` | `string` | yes | — |
| `include` | `query` | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket4` | `bettingMarket4Schema` | `src/models/betting-market4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mmaV3OddsBettingMarket

- **Signature**: `mmaV3OddsBettingMarket(request: MmaV3Odds.MmaV3OddsBettingMarketRequest, options?: RequestOptions): ApiPromise<BettingMarket4, MmaV3Odds.MmaV3OddsBettingMarketError>`
- **Wire**: `GET /v3/mma/odds/{format}/BettingMarket/{marketId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket4`
- **Error**: `MmaV3Odds.MmaV3OddsBettingMarketError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MmaV3Odds.MmaV3OddsBettingMarketRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `marketId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket4` | `bettingMarket4Schema` | `src/models/betting-market4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mmaV3OddsBettingMarketsByEvent

- **Signature**: `mmaV3OddsBettingMarketsByEvent(request: MmaV3Odds.MmaV3OddsBettingMarketsByEventRequest, options?: RequestOptions): ApiPromise<BettingMarket4[], MmaV3Odds.MmaV3OddsBettingMarketsByEventError>`
- **Wire**: `GET /v3/mma/odds/{format}/BettingMarketsByBettingEvent/{bettingEventId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MmaV3Odds.MmaV3OddsBettingMarketsByEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MmaV3Odds.MmaV3OddsBettingMarketsByEventRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `bettingEventId` | `path` | `string` | yes | — |
| `include` | `query` | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket4` | `bettingMarket4Schema` | `src/models/betting-market4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mmaV3OddsBettingMarketsByMarketType

- **Signature**: `mmaV3OddsBettingMarketsByMarketType(request: MmaV3Odds.MmaV3OddsBettingMarketsByMarketTypeRequest, options?: RequestOptions): ApiPromise<BettingMarket4[], MmaV3Odds.MmaV3OddsBettingMarketsByMarketTypeError>`
- **Wire**: `GET /v3/mma/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MmaV3Odds.MmaV3OddsBettingMarketsByMarketTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MmaV3Odds.MmaV3OddsBettingMarketsByMarketTypeRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `eventId` | `path` | `string` | yes | — |
| `marketTypeId` | `path` | `string` | yes | — |
| `include` | `query` | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket4` | `bettingMarket4Schema` | `src/models/betting-market4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mmaV3OddsBettingMetadata

- **Signature**: `mmaV3OddsBettingMetadata(request: MmaV3Odds.MmaV3OddsBettingMetadataRequest, options?: RequestOptions): ApiPromise<BettingEntityMetadataCollection4, MmaV3Odds.MmaV3OddsBettingMetadataError>`
- **Wire**: `GET /v3/mma/odds/{format}/BettingMetadata`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEntityMetadataCollection4`
- **Error**: `MmaV3Odds.MmaV3OddsBettingMetadataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MmaV3Odds.MmaV3OddsBettingMetadataRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEntityMetadataCollection4` | `bettingEntityMetadataCollection4Schema` | `src/models/betting-entity-metadata-collection4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mmaV3OddsEventFightOdds

- **Signature**: `mmaV3OddsEventFightOdds(request: MmaV3Odds.MmaV3OddsEventFightOddsRequest, options?: RequestOptions): ApiPromise<EventOdds, MmaV3Odds.MmaV3OddsEventFightOddsError>`
- **Wire**: `GET /v3/mma/odds/{format}/EventOdds/{eventid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventOdds`
- **Error**: `MmaV3Odds.MmaV3OddsEventFightOddsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MmaV3Odds.MmaV3OddsEventFightOddsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `eventid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `EventOdds` | `eventOddsSchema` | `src/models/event-odds.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mmaV3OddsEventFightOddsLineMovement

- **Signature**: `mmaV3OddsEventFightOddsLineMovement(request: MmaV3Odds.MmaV3OddsEventFightOddsLineMovementRequest, options?: RequestOptions): ApiPromise<EventOdds, MmaV3Odds.MmaV3OddsEventFightOddsLineMovementError>`
- **Wire**: `GET /v3/mma/odds/{format}/EventOddsLineMovement/{eventid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventOdds`
- **Error**: `MmaV3Odds.MmaV3OddsEventFightOddsLineMovementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MmaV3Odds.MmaV3OddsEventFightOddsLineMovementRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `eventid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `EventOdds` | `eventOddsSchema` | `src/models/event-odds.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mmaV3OddsSportsbooksByActive

- **Signature**: `mmaV3OddsSportsbooksByActive(request: MmaV3Odds.MmaV3OddsSportsbooksByActiveRequest, options?: RequestOptions): ApiPromise<Sportsbook[], MmaV3Odds.MmaV3OddsSportsbooksByActiveError>`
- **Wire**: `GET /v3/mma/odds/{format}/ActiveSportsbooks`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Sportsbook[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MmaV3Odds.MmaV3OddsSportsbooksByActiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MmaV3Odds.MmaV3OddsSportsbooksByActiveRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Sportsbook` | `sportsbookSchema` | `src/models/sportsbook.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

