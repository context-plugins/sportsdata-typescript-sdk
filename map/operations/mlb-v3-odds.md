<!-- Generated file — do not edit; regenerated with the SDK. -->

# MlbV3Odds — operations

Accessor: `client.mlbV3Odds` · Source: `src/resources/mlb-v3-odds.ts` · 34 operations · Request and error types: namespace `MlbV3Odds`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### mlbV3OddsBettingEventsByDate

- **Signature**: `mlbV3OddsBettingEventsByDate(request: MlbV3Odds.MlbV3OddsBettingEventsByDateRequest, options?: RequestOptions): ApiPromise<BettingEvent1[], MlbV3Odds.MlbV3OddsBettingEventsByDateError>`
- **Wire**: `GET /v3/mlb/odds/{format}/BettingEventsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Odds.MlbV3OddsBettingEventsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsBettingEventsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent1` | `bettingEvent1Schema` | `src/models/betting-event1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsBettingEventsBySeason

- **Signature**: `mlbV3OddsBettingEventsBySeason(request: MlbV3Odds.MlbV3OddsBettingEventsBySeasonRequest, options?: RequestOptions): ApiPromise<BettingEvent1[], MlbV3Odds.MlbV3OddsBettingEventsBySeasonError>`
- **Wire**: `GET /v3/mlb/odds/{format}/BettingEvents/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Odds.MlbV3OddsBettingEventsBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsBettingEventsBySeasonRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent1` | `bettingEvent1Schema` | `src/models/betting-event1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsBettingFuturesBySeason

- **Signature**: `mlbV3OddsBettingFuturesBySeason(request: MlbV3Odds.MlbV3OddsBettingFuturesBySeasonRequest, options?: RequestOptions): ApiPromise<BettingEvent1[], MlbV3Odds.MlbV3OddsBettingFuturesBySeasonError>`
- **Wire**: `GET /v3/mlb/odds/{format}/BettingFuturesBySeason/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Odds.MlbV3OddsBettingFuturesBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsBettingFuturesBySeasonRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent1` | `bettingEvent1Schema` | `src/models/betting-event1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsBettingFuturesBySeasonSportsbookGroup

- **Signature**: `mlbV3OddsBettingFuturesBySeasonSportsbookGroup(request: MlbV3Odds.MlbV3OddsBettingFuturesBySeasonSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingEvent1[], MlbV3Odds.MlbV3OddsBettingFuturesBySeasonSportsbookGroupError>`
- **Wire**: `GET /v3/mlb/odds/{format}/BettingFuturesBySeason/{season}/{sportsbookGroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Odds.MlbV3OddsBettingFuturesBySeasonSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsBettingFuturesBySeasonSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `sportsbookGroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent1` | `bettingEvent1Schema` | `src/models/betting-event1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsBettingMarket

- **Signature**: `mlbV3OddsBettingMarket(request: MlbV3Odds.MlbV3OddsBettingMarketRequest, options?: RequestOptions): ApiPromise<BettingMarket, MlbV3Odds.MlbV3OddsBettingMarketError>`
- **Wire**: `GET /v3/mlb/odds/{format}/BettingMarket/{marketId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket`
- **Error**: `MlbV3Odds.MlbV3OddsBettingMarketError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsBettingMarketRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `marketId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsBettingMarketSportsbookGroup

- **Signature**: `mlbV3OddsBettingMarketSportsbookGroup(request: MlbV3Odds.MlbV3OddsBettingMarketSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket, MlbV3Odds.MlbV3OddsBettingMarketSportsbookGroupError>`
- **Wire**: `GET /v3/mlb/odds/{format}/BettingMarket/{marketId}/{sportsbookGroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket`
- **Error**: `MlbV3Odds.MlbV3OddsBettingMarketSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsBettingMarketSportsbookGroupRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `marketId` | `path` | `string` | yes | — |
| `sportsbookGroup` | `path` | `string` | yes | — |
| `include` | `query` | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsBettingMarketsByEvent

- **Signature**: `mlbV3OddsBettingMarketsByEvent(request: MlbV3Odds.MlbV3OddsBettingMarketsByEventRequest, options?: RequestOptions): ApiPromise<BettingMarket[], MlbV3Odds.MlbV3OddsBettingMarketsByEventError>`
- **Wire**: `GET /v3/mlb/odds/{format}/BettingMarkets/{eventId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Odds.MlbV3OddsBettingMarketsByEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsBettingMarketsByEventRequest` (3):

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

### mlbV3OddsBettingMarketsByEventSportsbookGroup

- **Signature**: `mlbV3OddsBettingMarketsByEventSportsbookGroup(request: MlbV3Odds.MlbV3OddsBettingMarketsByEventSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket[], MlbV3Odds.MlbV3OddsBettingMarketsByEventSportsbookGroupError>`
- **Wire**: `GET /v3/mlb/odds/{format}/BettingMarketsByEvent/{eventId}/{sportsbookGroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Odds.MlbV3OddsBettingMarketsByEventSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsBettingMarketsByEventSportsbookGroupRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `eventId` | `path` | `string` | yes | — |
| `sportsbookGroup` | `path` | `string` | yes | — |
| `include` | `query` | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsBettingMarketsByGame

- **Signature**: `mlbV3OddsBettingMarketsByGame(request: MlbV3Odds.MlbV3OddsBettingMarketsByGameRequest, options?: RequestOptions): ApiPromise<BettingMarket[], MlbV3Odds.MlbV3OddsBettingMarketsByGameError>`
- **Wire**: `GET /v3/mlb/odds/{format}/BettingMarketsByGameID/{gameID}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Odds.MlbV3OddsBettingMarketsByGameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsBettingMarketsByGameRequest` (3):

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

### mlbV3OddsBettingMarketsByGameSportsbookGroup

- **Signature**: `mlbV3OddsBettingMarketsByGameSportsbookGroup(request: MlbV3Odds.MlbV3OddsBettingMarketsByGameSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket[], MlbV3Odds.MlbV3OddsBettingMarketsByGameSportsbookGroupError>`
- **Wire**: `GET /v3/mlb/odds/{format}/BettingMarketsByGameID/{gameID}/{sportsbookGroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Odds.MlbV3OddsBettingMarketsByGameSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsBettingMarketsByGameSportsbookGroupRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `format` | `path` | — | `Format` | no | `Format.Json` |
| `gameId` | `path` | `gameID` | `string` | yes | — |
| `sportsbookGroup` | `path` | — | `string` | yes | — |
| `include` | `query` | — | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsBettingMarketsByMarketType

- **Signature**: `mlbV3OddsBettingMarketsByMarketType(request: MlbV3Odds.MlbV3OddsBettingMarketsByMarketTypeRequest, options?: RequestOptions): ApiPromise<BettingMarket[], MlbV3Odds.MlbV3OddsBettingMarketsByMarketTypeError>`
- **Wire**: `GET /v3/mlb/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Odds.MlbV3OddsBettingMarketsByMarketTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsBettingMarketsByMarketTypeRequest` (4):

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

### mlbV3OddsBettingMarketsByMarketTypeSportsbookGroup

- **Signature**: `mlbV3OddsBettingMarketsByMarketTypeSportsbookGroup(request: MlbV3Odds.MlbV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket[], MlbV3Odds.MlbV3OddsBettingMarketsByMarketTypeSportsbookGroupError>`
- **Wire**: `GET /v3/mlb/odds/{format}/BettingMarketsByMarketType/{eventID}/{marketTypeID}/{sportsbookGroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Odds.MlbV3OddsBettingMarketsByMarketTypeSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `format` | `path` | — | `Format` | no | `Format.Json` |
| `eventId` | `path` | `eventID` | `string` | yes | — |
| `marketTypeId` | `path` | `marketTypeID` | `string` | yes | — |
| `sportsbookGroup` | `path` | — | `string` | yes | — |
| `include` | `query` | — | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsBettingMetadata

- **Signature**: `mlbV3OddsBettingMetadata(request: MlbV3Odds.MlbV3OddsBettingMetadataRequest, options?: RequestOptions): ApiPromise<BettingEntityMetadataCollection, MlbV3Odds.MlbV3OddsBettingMetadataError>`
- **Wire**: `GET /v3/mlb/odds/{format}/BettingMetadata`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEntityMetadataCollection`
- **Error**: `MlbV3Odds.MlbV3OddsBettingMetadataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsBettingMetadataRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEntityMetadataCollection` | `bettingEntityMetadataCollectionSchema` | `src/models/betting-entity-metadata-collection.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsBettingPlayerPropsByGame

- **Signature**: `mlbV3OddsBettingPlayerPropsByGame(request: MlbV3Odds.MlbV3OddsBettingPlayerPropsByGameRequest, options?: RequestOptions): ApiPromise<BettingMarket[], MlbV3Odds.MlbV3OddsBettingPlayerPropsByGameError>`
- **Wire**: `GET /v3/mlb/odds/{format}/BettingPlayerPropsByGameID/{gameId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Odds.MlbV3OddsBettingPlayerPropsByGameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsBettingPlayerPropsByGameRequest` (3):

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

### mlbV3OddsBettingPlayerPropsByGameSportsbookGroup

- **Signature**: `mlbV3OddsBettingPlayerPropsByGameSportsbookGroup(request: MlbV3Odds.MlbV3OddsBettingPlayerPropsByGameSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket[], MlbV3Odds.MlbV3OddsBettingPlayerPropsByGameSportsbookGroupError>`
- **Wire**: `GET /v3/mlb/odds/{format}/BettingPlayerPropsByGameID/{gameId}/{sportsbookGroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Odds.MlbV3OddsBettingPlayerPropsByGameSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsBettingPlayerPropsByGameSportsbookGroupRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameId` | `path` | `string` | yes | — |
| `sportsbookGroup` | `path` | `string` | yes | — |
| `include` | `query` | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsBettingResultsByMarket

- **Signature**: `mlbV3OddsBettingResultsByMarket(request: MlbV3Odds.MlbV3OddsBettingResultsByMarketRequest, options?: RequestOptions): ApiPromise<BettingMarketResult, MlbV3Odds.MlbV3OddsBettingResultsByMarketError>`
- **Wire**: `GET /v3/mlb/odds/{format}/BettingMarketResults/{marketId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarketResult`
- **Error**: `MlbV3Odds.MlbV3OddsBettingResultsByMarketError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsBettingResultsByMarketRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `marketId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarketResult` | `bettingMarketResultSchema` | `src/models/betting-market-result.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsBettingResultsByMarketSportsbookGroup

- **Signature**: `mlbV3OddsBettingResultsByMarketSportsbookGroup(request: MlbV3Odds.MlbV3OddsBettingResultsByMarketSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarketResult, MlbV3Odds.MlbV3OddsBettingResultsByMarketSportsbookGroupError>`
- **Wire**: `GET /v3/mlb/odds/{format}/BettingResultsByMarket/{marketID}/{sportsbookGroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarketResult`
- **Error**: `MlbV3Odds.MlbV3OddsBettingResultsByMarketSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsBettingResultsByMarketSportsbookGroupRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `format` | `path` | — | `Format` | no | `Format.Json` |
| `marketId` | `path` | `marketID` | `string` | yes | — |
| `sportsbookGroup` | `path` | — | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarketResult` | `bettingMarketResultSchema` | `src/models/betting-market-result.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsBettingSplitsByGame

- **Signature**: `mlbV3OddsBettingSplitsByGame(request: MlbV3Odds.MlbV3OddsBettingSplitsByGameRequest, options?: RequestOptions): ApiPromise<GameBettingSplit1, MlbV3Odds.MlbV3OddsBettingSplitsByGameError>`
- **Wire**: `GET /v3/mlb/odds/{format}/BettingSplitsByGameId/{gameId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameBettingSplit1`
- **Error**: `MlbV3Odds.MlbV3OddsBettingSplitsByGameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsBettingSplitsByGameRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameBettingSplit1` | `gameBettingSplit1Schema` | `src/models/game-betting-split1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsBettingSplitsByBettingMarket

- **Signature**: `mlbV3OddsBettingSplitsByBettingMarket(request: MlbV3Odds.MlbV3OddsBettingSplitsByBettingMarketRequest, options?: RequestOptions): ApiPromise<BettingMarketSplit, MlbV3Odds.MlbV3OddsBettingSplitsByBettingMarketError>`
- **Wire**: `GET /v3/mlb/odds/{format}/BettingSplitsByMarketId/{marketId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarketSplit`
- **Error**: `MlbV3Odds.MlbV3OddsBettingSplitsByBettingMarketError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsBettingSplitsByBettingMarketRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `marketId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarketSplit` | `bettingMarketSplitSchema` | `src/models/betting-market-split.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsBettingTrendsByMatchup

- **Signature**: `mlbV3OddsBettingTrendsByMatchup(request: MlbV3Odds.MlbV3OddsBettingTrendsByMatchupRequest, options?: RequestOptions): ApiPromise<MatchupTrends2, MlbV3Odds.MlbV3OddsBettingTrendsByMatchupError>`
- **Wire**: `GET /v3/mlb/odds/{format}/MatchupTrends/{team}/{opponent}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MatchupTrends2`
- **Error**: `MlbV3Odds.MlbV3OddsBettingTrendsByMatchupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsBettingTrendsByMatchupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `team` | `path` | `string` | yes | — |
| `opponent` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `MatchupTrends2` | `matchupTrends2Schema` | `src/models/matchup-trends2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsBettingTrendsByTeam

- **Signature**: `mlbV3OddsBettingTrendsByTeam(request: MlbV3Odds.MlbV3OddsBettingTrendsByTeamRequest, options?: RequestOptions): ApiPromise<TeamTrends1, MlbV3Odds.MlbV3OddsBettingTrendsByTeamError>`
- **Wire**: `GET /v3/mlb/odds/{format}/TeamTrends/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamTrends1`
- **Error**: `MlbV3Odds.MlbV3OddsBettingTrendsByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsBettingTrendsByTeamRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamTrends1` | `teamTrends1Schema` | `src/models/team-trends1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsInGameOddsByDate

- **Signature**: `mlbV3OddsInGameOddsByDate(request: MlbV3Odds.MlbV3OddsInGameOddsByDateRequest, options?: RequestOptions): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsInGameOddsByDateError>`
- **Wire**: `GET /v3/mlb/odds/{format}/LiveGameOddsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Odds.MlbV3OddsInGameOddsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsInGameOddsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo2` | `gameInfo2Schema` | `src/models/game-info2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsInGameOddsByDateSportsbookGroup

- **Signature**: `mlbV3OddsInGameOddsByDateSportsbookGroup(request: MlbV3Odds.MlbV3OddsInGameOddsByDateSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsInGameOddsByDateSportsbookGroupError>`
- **Wire**: `GET /v3/mlb/odds/{format}/InGameOddsByDate/{date}/{sportsbookGroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Odds.MlbV3OddsInGameOddsByDateSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsInGameOddsByDateSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |
| `sportsbookGroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo2` | `gameInfo2Schema` | `src/models/game-info2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsInGameOddsLineMovement

- **Signature**: `mlbV3OddsInGameOddsLineMovement(request: MlbV3Odds.MlbV3OddsInGameOddsLineMovementRequest, options?: RequestOptions): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsInGameOddsLineMovementError>`
- **Wire**: `GET /v3/mlb/odds/{format}/LiveGameOddsLineMovement/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Odds.MlbV3OddsInGameOddsLineMovementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsInGameOddsLineMovementRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo2` | `gameInfo2Schema` | `src/models/game-info2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsInGameOddsLineMovementSportsbookGroup

- **Signature**: `mlbV3OddsInGameOddsLineMovementSportsbookGroup(request: MlbV3Odds.MlbV3OddsInGameOddsLineMovementSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsInGameOddsLineMovementSportsbookGroupError>`
- **Wire**: `GET /v3/mlb/odds/{format}/InGameOddsLineMovement/{gameid}/{sportsbookGroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Odds.MlbV3OddsInGameOddsLineMovementSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsInGameOddsLineMovementSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |
| `sportsbookGroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo2` | `gameInfo2Schema` | `src/models/game-info2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsInGameOddsLineMovementWithResultingSportsbookGroup

- **Signature**: `mlbV3OddsInGameOddsLineMovementWithResultingSportsbookGroup(request: MlbV3Odds.MlbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfoResult2[], MlbV3Odds.MlbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError>`
- **Wire**: `GET /v3/mlb/odds/{format}/InGameOddsLineMovementWithResulting/{gameid}/{sportsbookGroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfoResult2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Odds.MlbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |
| `sportsbookGroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfoResult2` | `gameInfoResult2Schema` | `src/models/game-info-result2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsPeriodGameOddsByDate

- **Signature**: `mlbV3OddsPeriodGameOddsByDate(request: MlbV3Odds.MlbV3OddsPeriodGameOddsByDateRequest, options?: RequestOptions): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsPeriodGameOddsByDateError>`
- **Wire**: `GET /v3/mlb/odds/{format}/AlternateMarketGameOddsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Odds.MlbV3OddsPeriodGameOddsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsPeriodGameOddsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo2` | `gameInfo2Schema` | `src/models/game-info2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsPeriodGameOddsLineMovement

- **Signature**: `mlbV3OddsPeriodGameOddsLineMovement(request: MlbV3Odds.MlbV3OddsPeriodGameOddsLineMovementRequest, options?: RequestOptions): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsPeriodGameOddsLineMovementError>`
- **Wire**: `GET /v3/mlb/odds/{format}/AlternateMarketGameOddsLineMovement/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Odds.MlbV3OddsPeriodGameOddsLineMovementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsPeriodGameOddsLineMovementRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo2` | `gameInfo2Schema` | `src/models/game-info2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroup

- **Signature**: `mlbV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroup(request: MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError>`
- **Wire**: `GET /v3/mlb/odds/{format}/PreGameOddsByDate/{date}/{sportsbookGroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |
| `sportsbookGroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo2` | `gameInfo2Schema` | `src/models/game-info2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup

- **Signature**: `mlbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup(request: MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError>`
- **Wire**: `GET /v3/mlb/odds/{format}/PreGameOddsLineMovement/{gameid}/{sportsbookGroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |
| `sportsbookGroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo2` | `gameInfo2Schema` | `src/models/game-info2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroup

- **Signature**: `mlbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroup(request: MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfoResult2[], MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError>`
- **Wire**: `GET /v3/mlb/odds/{format}/PreGameOddsLineMovementWithResulting/{gameid}/{sportsbookGroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfoResult2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |
| `sportsbookGroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfoResult2` | `gameInfoResult2Schema` | `src/models/game-info-result2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsPreGameOddsByDate

- **Signature**: `mlbV3OddsPreGameOddsByDate(request: MlbV3Odds.MlbV3OddsPreGameOddsByDateRequest, options?: RequestOptions): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsPreGameOddsByDateError>`
- **Wire**: `GET /v3/mlb/odds/{format}/GameOddsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Odds.MlbV3OddsPreGameOddsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsPreGameOddsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo2` | `gameInfo2Schema` | `src/models/game-info2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsPreGameOddsLineMovement

- **Signature**: `mlbV3OddsPreGameOddsLineMovement(request: MlbV3Odds.MlbV3OddsPreGameOddsLineMovementRequest, options?: RequestOptions): ApiPromise<GameInfo2[], MlbV3Odds.MlbV3OddsPreGameOddsLineMovementError>`
- **Wire**: `GET /v3/mlb/odds/{format}/GameOddsLineMovement/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Odds.MlbV3OddsPreGameOddsLineMovementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsPreGameOddsLineMovementRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo2` | `gameInfo2Schema` | `src/models/game-info2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3OddsSportsbooksByActive

- **Signature**: `mlbV3OddsSportsbooksByActive(request: MlbV3Odds.MlbV3OddsSportsbooksByActiveRequest, options?: RequestOptions): ApiPromise<Sportsbook[], MlbV3Odds.MlbV3OddsSportsbooksByActiveError>`
- **Wire**: `GET /v3/mlb/odds/{format}/ActiveSportsbooks`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Sportsbook[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Odds.MlbV3OddsSportsbooksByActiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Odds.MlbV3OddsSportsbooksByActiveRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Sportsbook` | `sportsbookSchema` | `src/models/sportsbook.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

