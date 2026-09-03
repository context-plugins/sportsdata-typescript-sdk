<!-- Generated file — do not edit; regenerated with the SDK. -->

# NbaV3Odds — operations

Accessor: `client.nbaV3Odds` · Source: `src/resources/nba-v3-odds.ts` · 34 operations · Request and error types: namespace `NbaV3Odds`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### nbaV3OddsBettingEventsByDate

- **Signature**: `nbaV3OddsBettingEventsByDate(request: NbaV3Odds.NbaV3OddsBettingEventsByDateRequest, options?: RequestOptions): ApiPromise<BettingEvent1[], NbaV3Odds.NbaV3OddsBettingEventsByDateError>`
- **Wire**: `GET /v3/nba/odds/{format}/BettingEventsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Odds.NbaV3OddsBettingEventsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsBettingEventsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent1` | `bettingEvent1Schema` | `src/models/betting-event1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsBettingEventsBySeason

- **Signature**: `nbaV3OddsBettingEventsBySeason(request: NbaV3Odds.NbaV3OddsBettingEventsBySeasonRequest, options?: RequestOptions): ApiPromise<BettingEvent1[], NbaV3Odds.NbaV3OddsBettingEventsBySeasonError>`
- **Wire**: `GET /v3/nba/odds/{format}/BettingEvents/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Odds.NbaV3OddsBettingEventsBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsBettingEventsBySeasonRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent1` | `bettingEvent1Schema` | `src/models/betting-event1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsBettingFuturesBySeason

- **Signature**: `nbaV3OddsBettingFuturesBySeason(request: NbaV3Odds.NbaV3OddsBettingFuturesBySeasonRequest, options?: RequestOptions): ApiPromise<BettingEvent1[], NbaV3Odds.NbaV3OddsBettingFuturesBySeasonError>`
- **Wire**: `GET /v3/nba/odds/{format}/BettingFuturesBySeason/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Odds.NbaV3OddsBettingFuturesBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsBettingFuturesBySeasonRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent1` | `bettingEvent1Schema` | `src/models/betting-event1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsBettingFuturesBySeasonSportsbookGroup

- **Signature**: `nbaV3OddsBettingFuturesBySeasonSportsbookGroup(request: NbaV3Odds.NbaV3OddsBettingFuturesBySeasonSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingEvent1[], NbaV3Odds.NbaV3OddsBettingFuturesBySeasonSportsbookGroupError>`
- **Wire**: `GET /v3/nba/odds/{format}/BettingFuturesBySeason/{season}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Odds.NbaV3OddsBettingFuturesBySeasonSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsBettingFuturesBySeasonSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent1` | `bettingEvent1Schema` | `src/models/betting-event1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsBettingMarket

- **Signature**: `nbaV3OddsBettingMarket(request: NbaV3Odds.NbaV3OddsBettingMarketRequest, options?: RequestOptions): ApiPromise<BettingMarket, NbaV3Odds.NbaV3OddsBettingMarketError>`
- **Wire**: `GET /v3/nba/odds/{format}/BettingMarket/{marketId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket`
- **Error**: `NbaV3Odds.NbaV3OddsBettingMarketError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsBettingMarketRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `marketId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsBettingMarketSportsbookGroup

- **Signature**: `nbaV3OddsBettingMarketSportsbookGroup(request: NbaV3Odds.NbaV3OddsBettingMarketSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket, NbaV3Odds.NbaV3OddsBettingMarketSportsbookGroupError>`
- **Wire**: `GET /v3/nba/odds/{format}/BettingMarket/{marketId}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket`
- **Error**: `NbaV3Odds.NbaV3OddsBettingMarketSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsBettingMarketSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `marketId` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsBettingMarketsByEvent

- **Signature**: `nbaV3OddsBettingMarketsByEvent(request: NbaV3Odds.NbaV3OddsBettingMarketsByEventRequest, options?: RequestOptions): ApiPromise<BettingMarket[], NbaV3Odds.NbaV3OddsBettingMarketsByEventError>`
- **Wire**: `GET /v3/nba/odds/{format}/BettingMarkets/{eventId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Odds.NbaV3OddsBettingMarketsByEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsBettingMarketsByEventRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `eventId` | `path` | `string` | yes | — |
| `include` | `query` | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsBettingMarketsByEventSportsbookGroup

- **Signature**: `nbaV3OddsBettingMarketsByEventSportsbookGroup(request: NbaV3Odds.NbaV3OddsBettingMarketsByEventSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket[], NbaV3Odds.NbaV3OddsBettingMarketsByEventSportsbookGroupError>`
- **Wire**: `GET /v3/nba/odds/{format}/BettingMarketsByEvent/{eventId}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Odds.NbaV3OddsBettingMarketsByEventSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsBettingMarketsByEventSportsbookGroupRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `eventId` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |
| `include` | `query` | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsBettingMarketsByGame

- **Signature**: `nbaV3OddsBettingMarketsByGame(request: NbaV3Odds.NbaV3OddsBettingMarketsByGameRequest, options?: RequestOptions): ApiPromise<BettingMarket[], NbaV3Odds.NbaV3OddsBettingMarketsByGameError>`
- **Wire**: `GET /v3/nba/odds/{format}/BettingMarketsByGameID/{gameID}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Odds.NbaV3OddsBettingMarketsByGameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsBettingMarketsByGameRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `format` | `path` | — | `Format` | no | `Format.Json` |
| `gameId` | `path` | `gameID` | `string` | yes | — |
| `include` | `query` | — | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsBettingMarketsByGameSportsbookGroup

- **Signature**: `nbaV3OddsBettingMarketsByGameSportsbookGroup(request: NbaV3Odds.NbaV3OddsBettingMarketsByGameSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket[], NbaV3Odds.NbaV3OddsBettingMarketsByGameSportsbookGroupError>`
- **Wire**: `GET /v3/nba/odds/{format}/BettingMarketsByGameID/{gameID}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Odds.NbaV3OddsBettingMarketsByGameSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsBettingMarketsByGameSportsbookGroupRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `format` | `path` | — | `Format` | no | `Format.Json` |
| `gameId` | `path` | `gameID` | `string` | yes | — |
| `sportsbookgroup` | `path` | — | `string` | yes | — |
| `include` | `query` | — | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsBettingMarketsByMarketType

- **Signature**: `nbaV3OddsBettingMarketsByMarketType(request: NbaV3Odds.NbaV3OddsBettingMarketsByMarketTypeRequest, options?: RequestOptions): ApiPromise<BettingMarket[], NbaV3Odds.NbaV3OddsBettingMarketsByMarketTypeError>`
- **Wire**: `GET /v3/nba/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Odds.NbaV3OddsBettingMarketsByMarketTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsBettingMarketsByMarketTypeRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `format` | `path` | — | `Format` | no | `Format.Json` |
| `eventId` | `path` | — | `string` | yes | — |
| `marketTypeId` | `path` | `marketTypeID` | `string` | yes | — |
| `include` | `query` | — | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsBettingMarketsByMarketTypeSportsbookGroup

- **Signature**: `nbaV3OddsBettingMarketsByMarketTypeSportsbookGroup(request: NbaV3Odds.NbaV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket[], NbaV3Odds.NbaV3OddsBettingMarketsByMarketTypeSportsbookGroupError>`
- **Wire**: `GET /v3/nba/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Odds.NbaV3OddsBettingMarketsByMarketTypeSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `format` | `path` | — | `Format` | no | `Format.Json` |
| `eventId` | `path` | — | `string` | yes | — |
| `marketTypeId` | `path` | `marketTypeID` | `string` | yes | — |
| `sportsbookgroup` | `path` | — | `string` | yes | — |
| `include` | `query` | — | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsBettingMetadata

- **Signature**: `nbaV3OddsBettingMetadata(request: NbaV3Odds.NbaV3OddsBettingMetadataRequest, options?: RequestOptions): ApiPromise<BettingEntityMetadataCollection, NbaV3Odds.NbaV3OddsBettingMetadataError>`
- **Wire**: `GET /v3/nba/odds/{format}/BettingMetadata`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEntityMetadataCollection`
- **Error**: `NbaV3Odds.NbaV3OddsBettingMetadataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsBettingMetadataRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEntityMetadataCollection` | `bettingEntityMetadataCollectionSchema` | `src/models/betting-entity-metadata-collection.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsBettingPlayerPropsByGame

- **Signature**: `nbaV3OddsBettingPlayerPropsByGame(request: NbaV3Odds.NbaV3OddsBettingPlayerPropsByGameRequest, options?: RequestOptions): ApiPromise<BettingMarket[], NbaV3Odds.NbaV3OddsBettingPlayerPropsByGameError>`
- **Wire**: `GET /v3/nba/odds/{format}/BettingPlayerPropsByGameID/{gameId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Odds.NbaV3OddsBettingPlayerPropsByGameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsBettingPlayerPropsByGameRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameId` | `path` | `string` | yes | — |
| `include` | `query` | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsBettingPlayerPropsByGameSportsbookGroup

- **Signature**: `nbaV3OddsBettingPlayerPropsByGameSportsbookGroup(request: NbaV3Odds.NbaV3OddsBettingPlayerPropsByGameSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket[], NbaV3Odds.NbaV3OddsBettingPlayerPropsByGameSportsbookGroupError>`
- **Wire**: `GET /v3/nba/odds/{format}/BettingPlayerPropsByGameID/{gameId}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Odds.NbaV3OddsBettingPlayerPropsByGameSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsBettingPlayerPropsByGameSportsbookGroupRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameId` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |
| `include` | `query` | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsBettingResultsByMarket

- **Signature**: `nbaV3OddsBettingResultsByMarket(request: NbaV3Odds.NbaV3OddsBettingResultsByMarketRequest, options?: RequestOptions): ApiPromise<BettingMarketResult, NbaV3Odds.NbaV3OddsBettingResultsByMarketError>`
- **Wire**: `GET /v3/nba/odds/{format}/BettingMarketResults/{marketId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarketResult`
- **Error**: `NbaV3Odds.NbaV3OddsBettingResultsByMarketError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsBettingResultsByMarketRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `marketId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarketResult` | `bettingMarketResultSchema` | `src/models/betting-market-result.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsBettingResultsByMarketSportsbookGroup

- **Signature**: `nbaV3OddsBettingResultsByMarketSportsbookGroup(request: NbaV3Odds.NbaV3OddsBettingResultsByMarketSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarketResult, NbaV3Odds.NbaV3OddsBettingResultsByMarketSportsbookGroupError>`
- **Wire**: `GET /v3/nba/odds/{format}/BettingResultsByMarket/{marketId}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarketResult`
- **Error**: `NbaV3Odds.NbaV3OddsBettingResultsByMarketSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsBettingResultsByMarketSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `marketId` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarketResult` | `bettingMarketResultSchema` | `src/models/betting-market-result.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsBettingSplitsByBettingMarket

- **Signature**: `nbaV3OddsBettingSplitsByBettingMarket(request: NbaV3Odds.NbaV3OddsBettingSplitsByBettingMarketRequest, options?: RequestOptions): ApiPromise<BettingMarketSplit, NbaV3Odds.NbaV3OddsBettingSplitsByBettingMarketError>`
- **Wire**: `GET /v3/nba/odds/{format}/BettingSplitsByMarketId/{marketId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarketSplit`
- **Error**: `NbaV3Odds.NbaV3OddsBettingSplitsByBettingMarketError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsBettingSplitsByBettingMarketRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `marketId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarketSplit` | `bettingMarketSplitSchema` | `src/models/betting-market-split.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsBettingSplitsByGame

- **Signature**: `nbaV3OddsBettingSplitsByGame(request: NbaV3Odds.NbaV3OddsBettingSplitsByGameRequest, options?: RequestOptions): ApiPromise<GameBettingSplit1, NbaV3Odds.NbaV3OddsBettingSplitsByGameError>`
- **Wire**: `GET /v3/nba/odds/{format}/BettingSplitsByGameId/{gameId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameBettingSplit1`
- **Error**: `NbaV3Odds.NbaV3OddsBettingSplitsByGameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsBettingSplitsByGameRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameBettingSplit1` | `gameBettingSplit1Schema` | `src/models/game-betting-split1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsBettingTrendsByMatchup

- **Signature**: `nbaV3OddsBettingTrendsByMatchup(request: NbaV3Odds.NbaV3OddsBettingTrendsByMatchupRequest, options?: RequestOptions): ApiPromise<MatchupTrends1, NbaV3Odds.NbaV3OddsBettingTrendsByMatchupError>`
- **Wire**: `GET /v3/nba/odds/{format}/MatchupTrends/{team}/{opponent}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MatchupTrends1`
- **Error**: `NbaV3Odds.NbaV3OddsBettingTrendsByMatchupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsBettingTrendsByMatchupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `team` | `path` | `string` | yes | — |
| `opponent` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `MatchupTrends1` | `matchupTrends1Schema` | `src/models/matchup-trends1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsBettingTrendsByTeam

- **Signature**: `nbaV3OddsBettingTrendsByTeam(request: NbaV3Odds.NbaV3OddsBettingTrendsByTeamRequest, options?: RequestOptions): ApiPromise<TeamTrends1, NbaV3Odds.NbaV3OddsBettingTrendsByTeamError>`
- **Wire**: `GET /v3/nba/odds/{format}/TeamTrends/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamTrends1`
- **Error**: `NbaV3Odds.NbaV3OddsBettingTrendsByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsBettingTrendsByTeamRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamTrends1` | `teamTrends1Schema` | `src/models/team-trends1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsInGameOddsByDate

- **Signature**: `nbaV3OddsInGameOddsByDate(request: NbaV3Odds.NbaV3OddsInGameOddsByDateRequest, options?: RequestOptions): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsInGameOddsByDateError>`
- **Wire**: `GET /v3/nba/odds/{format}/LiveGameOddsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Odds.NbaV3OddsInGameOddsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsInGameOddsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo1` | `gameInfo1Schema` | `src/models/game-info1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsInGameOddsByDateSportsbookGroup

- **Signature**: `nbaV3OddsInGameOddsByDateSportsbookGroup(request: NbaV3Odds.NbaV3OddsInGameOddsByDateSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsInGameOddsByDateSportsbookGroupError>`
- **Wire**: `GET /v3/nba/odds/{format}/InGameOddsByDate/{date}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Odds.NbaV3OddsInGameOddsByDateSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsInGameOddsByDateSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo1` | `gameInfo1Schema` | `src/models/game-info1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsInGameOddsLineMovement

- **Signature**: `nbaV3OddsInGameOddsLineMovement(request: NbaV3Odds.NbaV3OddsInGameOddsLineMovementRequest, options?: RequestOptions): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsInGameOddsLineMovementError>`
- **Wire**: `GET /v3/nba/odds/{format}/LiveGameOddsLineMovement/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Odds.NbaV3OddsInGameOddsLineMovementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsInGameOddsLineMovementRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo1` | `gameInfo1Schema` | `src/models/game-info1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsInGameOddsLineMovementSportsbookGroup

- **Signature**: `nbaV3OddsInGameOddsLineMovementSportsbookGroup(request: NbaV3Odds.NbaV3OddsInGameOddsLineMovementSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsInGameOddsLineMovementSportsbookGroupError>`
- **Wire**: `GET /v3/nba/odds/{format}/InGameLineMovement/{gameid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Odds.NbaV3OddsInGameOddsLineMovementSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsInGameOddsLineMovementSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo1` | `gameInfo1Schema` | `src/models/game-info1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsInGameOddsLineMovementWithResultingSportsbookGroup

- **Signature**: `nbaV3OddsInGameOddsLineMovementWithResultingSportsbookGroup(request: NbaV3Odds.NbaV3OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfoResult1[], NbaV3Odds.NbaV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError>`
- **Wire**: `GET /v3/nba/odds/{format}/InGameLineMovementWithResulting/{gameid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfoResult1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Odds.NbaV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfoResult1` | `gameInfoResult1Schema` | `src/models/game-info-result1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsPeriodGameOddsByDate

- **Signature**: `nbaV3OddsPeriodGameOddsByDate(request: NbaV3Odds.NbaV3OddsPeriodGameOddsByDateRequest, options?: RequestOptions): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsPeriodGameOddsByDateError>`
- **Wire**: `GET /v3/nba/odds/{format}/AlternateMarketGameOddsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Odds.NbaV3OddsPeriodGameOddsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsPeriodGameOddsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo1` | `gameInfo1Schema` | `src/models/game-info1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsPeriodGameOddsLineMovement

- **Signature**: `nbaV3OddsPeriodGameOddsLineMovement(request: NbaV3Odds.NbaV3OddsPeriodGameOddsLineMovementRequest, options?: RequestOptions): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsPeriodGameOddsLineMovementError>`
- **Wire**: `GET /v3/nba/odds/{format}/AlternateMarketGameOddsLineMovement/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Odds.NbaV3OddsPeriodGameOddsLineMovementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsPeriodGameOddsLineMovementRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo1` | `gameInfo1Schema` | `src/models/game-info1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroup

- **Signature**: `nbaV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroup(request: NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError>`
- **Wire**: `GET /v3/nba/odds/{format}/PreGameOddsByDate/{date}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo1` | `gameInfo1Schema` | `src/models/game-info1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup

- **Signature**: `nbaV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup(request: NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError>`
- **Wire**: `GET /v3/nba/odds/{format}/PreGameOddsLineMovement/{gameid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo1` | `gameInfo1Schema` | `src/models/game-info1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroup

- **Signature**: `nbaV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroup(request: NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfoResult1[], NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError>`
- **Wire**: `GET /v3/nba/odds/{format}/PreGameOddsLineMovementWithResulting/{gameid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfoResult1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfoResult1` | `gameInfoResult1Schema` | `src/models/game-info-result1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsPreGameOddsByDate

- **Signature**: `nbaV3OddsPreGameOddsByDate(request: NbaV3Odds.NbaV3OddsPreGameOddsByDateRequest, options?: RequestOptions): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsPreGameOddsByDateError>`
- **Wire**: `GET /v3/nba/odds/{format}/GameOddsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Odds.NbaV3OddsPreGameOddsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsPreGameOddsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo1` | `gameInfo1Schema` | `src/models/game-info1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsPreGameOddsLineMovement

- **Signature**: `nbaV3OddsPreGameOddsLineMovement(request: NbaV3Odds.NbaV3OddsPreGameOddsLineMovementRequest, options?: RequestOptions): ApiPromise<GameInfo1[], NbaV3Odds.NbaV3OddsPreGameOddsLineMovementError>`
- **Wire**: `GET /v3/nba/odds/{format}/GameOddsLineMovement/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Odds.NbaV3OddsPreGameOddsLineMovementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsPreGameOddsLineMovementRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo1` | `gameInfo1Schema` | `src/models/game-info1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3OddsSportsbooksByActive

- **Signature**: `nbaV3OddsSportsbooksByActive(request: NbaV3Odds.NbaV3OddsSportsbooksByActiveRequest, options?: RequestOptions): ApiPromise<Sportsbook[], NbaV3Odds.NbaV3OddsSportsbooksByActiveError>`
- **Wire**: `GET /v3/nba/odds/{format}/ActiveSportsbooks`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Sportsbook[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Odds.NbaV3OddsSportsbooksByActiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Odds.NbaV3OddsSportsbooksByActiveRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Sportsbook` | `sportsbookSchema` | `src/models/sportsbook.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

