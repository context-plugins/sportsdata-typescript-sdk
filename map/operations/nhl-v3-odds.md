<!-- Generated file — do not edit; regenerated with the SDK. -->

# NhlV3Odds — operations

Accessor: `client.nhlV3Odds` · Source: `src/resources/nhl-v3-odds.ts` · 34 operations · Request and error types: namespace `NhlV3Odds`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### nhlV3OddsBettingEventsByDate

- **Signature**: `nhlV3OddsBettingEventsByDate(request: NhlV3Odds.NhlV3OddsBettingEventsByDateRequest, options?: RequestOptions): ApiPromise<BettingEvent1[], NhlV3Odds.NhlV3OddsBettingEventsByDateError>`
- **Wire**: `GET /v3/nhl/odds/{format}/BettingEventsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Odds.NhlV3OddsBettingEventsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsBettingEventsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent1` | `bettingEvent1Schema` | `src/models/betting-event1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3OddsBettingEventsBySeason

- **Signature**: `nhlV3OddsBettingEventsBySeason(request: NhlV3Odds.NhlV3OddsBettingEventsBySeasonRequest, options?: RequestOptions): ApiPromise<BettingEvent1[], NhlV3Odds.NhlV3OddsBettingEventsBySeasonError>`
- **Wire**: `GET /v3/nhl/odds/{format}/BettingEvents/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Odds.NhlV3OddsBettingEventsBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsBettingEventsBySeasonRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent1` | `bettingEvent1Schema` | `src/models/betting-event1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3OddsBettingFuturesBySeason

- **Signature**: `nhlV3OddsBettingFuturesBySeason(request: NhlV3Odds.NhlV3OddsBettingFuturesBySeasonRequest, options?: RequestOptions): ApiPromise<BettingEvent1[], NhlV3Odds.NhlV3OddsBettingFuturesBySeasonError>`
- **Wire**: `GET /v3/nhl/odds/{format}/BettingFuturesBySeason/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Odds.NhlV3OddsBettingFuturesBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsBettingFuturesBySeasonRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent1` | `bettingEvent1Schema` | `src/models/betting-event1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3OddsBettingFuturesBySeasonSportsbookGroup

- **Signature**: `nhlV3OddsBettingFuturesBySeasonSportsbookGroup(request: NhlV3Odds.NhlV3OddsBettingFuturesBySeasonSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingEvent1[], NhlV3Odds.NhlV3OddsBettingFuturesBySeasonSportsbookGroupError>`
- **Wire**: `GET /v3/nhl/odds/{format}/BettingFuturesBySeason/{season}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Odds.NhlV3OddsBettingFuturesBySeasonSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsBettingFuturesBySeasonSportsbookGroupRequest` (3):

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

### nhlV3OddsBettingMarket

- **Signature**: `nhlV3OddsBettingMarket(request: NhlV3Odds.NhlV3OddsBettingMarketRequest, options?: RequestOptions): ApiPromise<BettingMarket, NhlV3Odds.NhlV3OddsBettingMarketError>`
- **Wire**: `GET /v3/nhl/odds/{format}/BettingMarket/{marketId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket`
- **Error**: `NhlV3Odds.NhlV3OddsBettingMarketError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsBettingMarketRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `marketId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3OddsBettingMarketSportsbookGroup

- **Signature**: `nhlV3OddsBettingMarketSportsbookGroup(request: NhlV3Odds.NhlV3OddsBettingMarketSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket, NhlV3Odds.NhlV3OddsBettingMarketSportsbookGroupError>`
- **Wire**: `GET /v3/nhl/odds/{format}/BettingMarket/{marketId}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket`
- **Error**: `NhlV3Odds.NhlV3OddsBettingMarketSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsBettingMarketSportsbookGroupRequest` (3):

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

### nhlV3OddsBettingMarketsByEvent

- **Signature**: `nhlV3OddsBettingMarketsByEvent(request: NhlV3Odds.NhlV3OddsBettingMarketsByEventRequest, options?: RequestOptions): ApiPromise<BettingMarket[], NhlV3Odds.NhlV3OddsBettingMarketsByEventError>`
- **Wire**: `GET /v3/nhl/odds/{format}/BettingMarkets/{eventId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Odds.NhlV3OddsBettingMarketsByEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsBettingMarketsByEventRequest` (3):

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

### nhlV3OddsBettingMarketsByEventSportsbookGroup

- **Signature**: `nhlV3OddsBettingMarketsByEventSportsbookGroup(request: NhlV3Odds.NhlV3OddsBettingMarketsByEventSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket[], NhlV3Odds.NhlV3OddsBettingMarketsByEventSportsbookGroupError>`
- **Wire**: `GET /v3/nhl/odds/{format}/BettingMarketsByEvent/{eventId}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Odds.NhlV3OddsBettingMarketsByEventSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsBettingMarketsByEventSportsbookGroupRequest` (4):

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

### nhlV3OddsBettingMarketsByGame

- **Signature**: `nhlV3OddsBettingMarketsByGame(request: NhlV3Odds.NhlV3OddsBettingMarketsByGameRequest, options?: RequestOptions): ApiPromise<BettingMarket[], NhlV3Odds.NhlV3OddsBettingMarketsByGameError>`
- **Wire**: `GET /v3/nhl/odds/{format}/BettingMarketsByGameID/{gameID}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Odds.NhlV3OddsBettingMarketsByGameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsBettingMarketsByGameRequest` (3):

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

### nhlV3OddsBettingMarketsByGameSportsbookGroup

- **Signature**: `nhlV3OddsBettingMarketsByGameSportsbookGroup(request: NhlV3Odds.NhlV3OddsBettingMarketsByGameSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket[], NhlV3Odds.NhlV3OddsBettingMarketsByGameSportsbookGroupError>`
- **Wire**: `GET /v3/nhl/odds/{format}/BettingMarketsByGameID/{gameID}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Odds.NhlV3OddsBettingMarketsByGameSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsBettingMarketsByGameSportsbookGroupRequest` (4):

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

### nhlV3OddsBettingMarketsByMarketType

- **Signature**: `nhlV3OddsBettingMarketsByMarketType(request: NhlV3Odds.NhlV3OddsBettingMarketsByMarketTypeRequest, options?: RequestOptions): ApiPromise<BettingMarket[], NhlV3Odds.NhlV3OddsBettingMarketsByMarketTypeError>`
- **Wire**: `GET /v3/nhl/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Odds.NhlV3OddsBettingMarketsByMarketTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsBettingMarketsByMarketTypeRequest` (4):

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

### nhlV3OddsBettingMarketsByMarketTypeSportsbookGroup

- **Signature**: `nhlV3OddsBettingMarketsByMarketTypeSportsbookGroup(request: NhlV3Odds.NhlV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket[], NhlV3Odds.NhlV3OddsBettingMarketsByMarketTypeSportsbookGroupError>`
- **Wire**: `GET /v3/nhl/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Odds.NhlV3OddsBettingMarketsByMarketTypeSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest` (5):

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

### nhlV3OddsBettingMetadata

- **Signature**: `nhlV3OddsBettingMetadata(request: NhlV3Odds.NhlV3OddsBettingMetadataRequest, options?: RequestOptions): ApiPromise<BettingEntityMetadataCollection, NhlV3Odds.NhlV3OddsBettingMetadataError>`
- **Wire**: `GET /v3/nhl/odds/{format}/Bettingmetadata`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEntityMetadataCollection`
- **Error**: `NhlV3Odds.NhlV3OddsBettingMetadataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsBettingMetadataRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEntityMetadataCollection` | `bettingEntityMetadataCollectionSchema` | `src/models/betting-entity-metadata-collection.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3OddsBettingPlayerPropsByGame

- **Signature**: `nhlV3OddsBettingPlayerPropsByGame(request: NhlV3Odds.NhlV3OddsBettingPlayerPropsByGameRequest, options?: RequestOptions): ApiPromise<BettingMarket[], NhlV3Odds.NhlV3OddsBettingPlayerPropsByGameError>`
- **Wire**: `GET /v3/nhl/odds/{format}/BettingPlayerPropsByGameID/{gameId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Odds.NhlV3OddsBettingPlayerPropsByGameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsBettingPlayerPropsByGameRequest` (3):

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

### nhlV3OddsBettingPlayerPropsByGameSportsbookGroup

- **Signature**: `nhlV3OddsBettingPlayerPropsByGameSportsbookGroup(request: NhlV3Odds.NhlV3OddsBettingPlayerPropsByGameSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket[], NhlV3Odds.NhlV3OddsBettingPlayerPropsByGameSportsbookGroupError>`
- **Wire**: `GET /v3/nhl/odds/{format}/BettingPlayerPropsByGameID/{gameId}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Odds.NhlV3OddsBettingPlayerPropsByGameSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsBettingPlayerPropsByGameSportsbookGroupRequest` (4):

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

### nhlV3OddsBettingResultsByMarket

- **Signature**: `nhlV3OddsBettingResultsByMarket(request: NhlV3Odds.NhlV3OddsBettingResultsByMarketRequest, options?: RequestOptions): ApiPromise<BettingMarketResult, NhlV3Odds.NhlV3OddsBettingResultsByMarketError>`
- **Wire**: `GET /v3/nhl/odds/{format}/BettingMarketResults/{marketId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarketResult`
- **Error**: `NhlV3Odds.NhlV3OddsBettingResultsByMarketError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsBettingResultsByMarketRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `marketId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarketResult` | `bettingMarketResultSchema` | `src/models/betting-market-result.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3OddsBettingResultsByMarketSportsbookGroup

- **Signature**: `nhlV3OddsBettingResultsByMarketSportsbookGroup(request: NhlV3Odds.NhlV3OddsBettingResultsByMarketSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarketResult, NhlV3Odds.NhlV3OddsBettingResultsByMarketSportsbookGroupError>`
- **Wire**: `GET /v3/nhl/odds/{format}/BettingResultsByMarket/{marketId}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarketResult`
- **Error**: `NhlV3Odds.NhlV3OddsBettingResultsByMarketSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsBettingResultsByMarketSportsbookGroupRequest` (3):

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

### nhlV3OddsBettingSplitsByBettingMarket

- **Signature**: `nhlV3OddsBettingSplitsByBettingMarket(request: NhlV3Odds.NhlV3OddsBettingSplitsByBettingMarketRequest, options?: RequestOptions): ApiPromise<BettingMarketSplit, NhlV3Odds.NhlV3OddsBettingSplitsByBettingMarketError>`
- **Wire**: `GET /v3/nhl/odds/{format}/BettingSplitsByMarketId/{marketId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarketSplit`
- **Error**: `NhlV3Odds.NhlV3OddsBettingSplitsByBettingMarketError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsBettingSplitsByBettingMarketRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `marketId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarketSplit` | `bettingMarketSplitSchema` | `src/models/betting-market-split.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3OddsBettingSplitsByGame

- **Signature**: `nhlV3OddsBettingSplitsByGame(request: NhlV3Odds.NhlV3OddsBettingSplitsByGameRequest, options?: RequestOptions): ApiPromise<GameBettingSplit1, NhlV3Odds.NhlV3OddsBettingSplitsByGameError>`
- **Wire**: `GET /v3/nhl/odds/{format}/BettingSplitsByGameId/{gameId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameBettingSplit1`
- **Error**: `NhlV3Odds.NhlV3OddsBettingSplitsByGameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsBettingSplitsByGameRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameBettingSplit1` | `gameBettingSplit1Schema` | `src/models/game-betting-split1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3OddsBettingTrendsByMatchup

- **Signature**: `nhlV3OddsBettingTrendsByMatchup(request: NhlV3Odds.NhlV3OddsBettingTrendsByMatchupRequest, options?: RequestOptions): ApiPromise<MatchupTrends3, NhlV3Odds.NhlV3OddsBettingTrendsByMatchupError>`
- **Wire**: `GET /v3/nhl/odds/{format}/MatchupTrends/{team}/{opponent}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MatchupTrends3`
- **Error**: `NhlV3Odds.NhlV3OddsBettingTrendsByMatchupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsBettingTrendsByMatchupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `team` | `path` | `string` | yes | — |
| `opponent` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `MatchupTrends3` | `matchupTrends3Schema` | `src/models/matchup-trends3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3OddsBettingTrendsByTeam

- **Signature**: `nhlV3OddsBettingTrendsByTeam(request: NhlV3Odds.NhlV3OddsBettingTrendsByTeamRequest, options?: RequestOptions): ApiPromise<TeamTrends1, NhlV3Odds.NhlV3OddsBettingTrendsByTeamError>`
- **Wire**: `GET /v3/nhl/odds/{format}/TeamTrends/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamTrends1`
- **Error**: `NhlV3Odds.NhlV3OddsBettingTrendsByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsBettingTrendsByTeamRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamTrends1` | `teamTrends1Schema` | `src/models/team-trends1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3OddsInGameOddsByDate

- **Signature**: `nhlV3OddsInGameOddsByDate(request: NhlV3Odds.NhlV3OddsInGameOddsByDateRequest, options?: RequestOptions): ApiPromise<GameInfo3[], NhlV3Odds.NhlV3OddsInGameOddsByDateError>`
- **Wire**: `GET /v3/nhl/odds/{format}/LiveGameOddsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Odds.NhlV3OddsInGameOddsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsInGameOddsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo3` | `gameInfo3Schema` | `src/models/game-info3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3OddsInGameOddsByDateSportsbookGroup

- **Signature**: `nhlV3OddsInGameOddsByDateSportsbookGroup(request: NhlV3Odds.NhlV3OddsInGameOddsByDateSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfo3[], NhlV3Odds.NhlV3OddsInGameOddsByDateSportsbookGroupError>`
- **Wire**: `GET /v3/nhl/odds/{format}/InGameOddsByDate/{date}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Odds.NhlV3OddsInGameOddsByDateSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsInGameOddsByDateSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo3` | `gameInfo3Schema` | `src/models/game-info3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3OddsInGameOddsLineMovement

- **Signature**: `nhlV3OddsInGameOddsLineMovement(request: NhlV3Odds.NhlV3OddsInGameOddsLineMovementRequest, options?: RequestOptions): ApiPromise<GameInfo3[], NhlV3Odds.NhlV3OddsInGameOddsLineMovementError>`
- **Wire**: `GET /v3/nhl/odds/{format}/LiveGameOddsLineMovement/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Odds.NhlV3OddsInGameOddsLineMovementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsInGameOddsLineMovementRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo3` | `gameInfo3Schema` | `src/models/game-info3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3OddsInGameOddsLineMovementSportsbookGroup

- **Signature**: `nhlV3OddsInGameOddsLineMovementSportsbookGroup(request: NhlV3Odds.NhlV3OddsInGameOddsLineMovementSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfo3[], NhlV3Odds.NhlV3OddsInGameOddsLineMovementSportsbookGroupError>`
- **Wire**: `GET /v3/nhl/odds/{format}/InGameLineMovement/{gameid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Odds.NhlV3OddsInGameOddsLineMovementSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsInGameOddsLineMovementSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo3` | `gameInfo3Schema` | `src/models/game-info3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3OddsInGameOddsLineMovementWithResultingSportsbookGroup

- **Signature**: `nhlV3OddsInGameOddsLineMovementWithResultingSportsbookGroup(request: NhlV3Odds.NhlV3OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfoResult3[], NhlV3Odds.NhlV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError>`
- **Wire**: `GET /v3/nhl/odds/{format}/InGameLineMovementWithResulting/{gameid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfoResult3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Odds.NhlV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfoResult3` | `gameInfoResult3Schema` | `src/models/game-info-result3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3OddsPeriodGameOddsByDate

- **Signature**: `nhlV3OddsPeriodGameOddsByDate(request: NhlV3Odds.NhlV3OddsPeriodGameOddsByDateRequest, options?: RequestOptions): ApiPromise<GameInfo3[], NhlV3Odds.NhlV3OddsPeriodGameOddsByDateError>`
- **Wire**: `GET /v3/nhl/odds/{format}/AlternateMarketGameOddsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Odds.NhlV3OddsPeriodGameOddsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsPeriodGameOddsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo3` | `gameInfo3Schema` | `src/models/game-info3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3OddsPeriodGameOddsLineMovement

- **Signature**: `nhlV3OddsPeriodGameOddsLineMovement(request: NhlV3Odds.NhlV3OddsPeriodGameOddsLineMovementRequest, options?: RequestOptions): ApiPromise<GameInfo3[], NhlV3Odds.NhlV3OddsPeriodGameOddsLineMovementError>`
- **Wire**: `GET /v3/nhl/odds/{format}/AlternateMarketGameOddsLineMovement/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Odds.NhlV3OddsPeriodGameOddsLineMovementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsPeriodGameOddsLineMovementRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo3` | `gameInfo3Schema` | `src/models/game-info3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroup

- **Signature**: `nhlV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroup(request: NhlV3Odds.NhlV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfo3[], NhlV3Odds.NhlV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError>`
- **Wire**: `GET /v3/nhl/odds/{format}/PreGameOddsByDate/{date}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Odds.NhlV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo3` | `gameInfo3Schema` | `src/models/game-info3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup

- **Signature**: `nhlV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup(request: NhlV3Odds.NhlV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfo3[], NhlV3Odds.NhlV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError>`
- **Wire**: `GET /v3/nhl/odds/{format}/PreGameOddsLineMovement/{gameid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Odds.NhlV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo3` | `gameInfo3Schema` | `src/models/game-info3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroup

- **Signature**: `nhlV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroup(request: NhlV3Odds.NhlV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfoResult3[], NhlV3Odds.NhlV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError>`
- **Wire**: `GET /v3/nhl/odds/{format}/PreGameOddsLineMovementWithResulting/{gameid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfoResult3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Odds.NhlV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfoResult3` | `gameInfoResult3Schema` | `src/models/game-info-result3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3OddsPreGameOddsByDate

- **Signature**: `nhlV3OddsPreGameOddsByDate(request: NhlV3Odds.NhlV3OddsPreGameOddsByDateRequest, options?: RequestOptions): ApiPromise<GameInfo3[], NhlV3Odds.NhlV3OddsPreGameOddsByDateError>`
- **Wire**: `GET /v3/nhl/odds/{format}/GameOddsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Odds.NhlV3OddsPreGameOddsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsPreGameOddsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo3` | `gameInfo3Schema` | `src/models/game-info3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3OddsPreGameOddsLineMovement

- **Signature**: `nhlV3OddsPreGameOddsLineMovement(request: NhlV3Odds.NhlV3OddsPreGameOddsLineMovementRequest, options?: RequestOptions): ApiPromise<GameInfo3[], NhlV3Odds.NhlV3OddsPreGameOddsLineMovementError>`
- **Wire**: `GET /v3/nhl/odds/{format}/GameOddsLineMovement/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Odds.NhlV3OddsPreGameOddsLineMovementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsPreGameOddsLineMovementRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo3` | `gameInfo3Schema` | `src/models/game-info3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3OddsSportsbooksByActive

- **Signature**: `nhlV3OddsSportsbooksByActive(request: NhlV3Odds.NhlV3OddsSportsbooksByActiveRequest, options?: RequestOptions): ApiPromise<Sportsbook[], NhlV3Odds.NhlV3OddsSportsbooksByActiveError>`
- **Wire**: `GET /v3/nhl/odds/{format}/ActiveSportsbooks`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Sportsbook[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Odds.NhlV3OddsSportsbooksByActiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Odds.NhlV3OddsSportsbooksByActiveRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Sportsbook` | `sportsbookSchema` | `src/models/sportsbook.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

