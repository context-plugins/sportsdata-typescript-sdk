<!-- Generated file — do not edit; regenerated with the SDK. -->

# NflV3Odds — operations

Accessor: `client.nflV3Odds` · Source: `src/resources/nfl-v3-odds.ts` · 34 operations · Request and error types: namespace `NflV3Odds`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### nflV3OddsBettingEventsByDate

- **Signature**: `nflV3OddsBettingEventsByDate(request: NflV3Odds.NflV3OddsBettingEventsByDateRequest, options?: RequestOptions): ApiPromise<BettingEvent[], NflV3Odds.NflV3OddsBettingEventsByDateError>`
- **Wire**: `GET /v3/nfl/odds/{format}/BettingEventsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Odds.NflV3OddsBettingEventsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsBettingEventsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent` | `bettingEventSchema` | `src/models/betting-event.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3OddsBettingEventsBySeason

- **Signature**: `nflV3OddsBettingEventsBySeason(request: NflV3Odds.NflV3OddsBettingEventsBySeasonRequest, options?: RequestOptions): ApiPromise<BettingEvent[], NflV3Odds.NflV3OddsBettingEventsBySeasonError>`
- **Wire**: `GET /v3/nfl/odds/{format}/BettingEvents/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Odds.NflV3OddsBettingEventsBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsBettingEventsBySeasonRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent` | `bettingEventSchema` | `src/models/betting-event.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3OddsBettingFuturesBySeason

- **Signature**: `nflV3OddsBettingFuturesBySeason(request: NflV3Odds.NflV3OddsBettingFuturesBySeasonRequest, options?: RequestOptions): ApiPromise<BettingEvent[], NflV3Odds.NflV3OddsBettingFuturesBySeasonError>`
- **Wire**: `GET /v3/nfl/odds/{format}/BettingFuturesBySeason/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Odds.NflV3OddsBettingFuturesBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsBettingFuturesBySeasonRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent` | `bettingEventSchema` | `src/models/betting-event.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3OddsBettingFuturesBySeasonSportsbookGroup

- **Signature**: `nflV3OddsBettingFuturesBySeasonSportsbookGroup(request: NflV3Odds.NflV3OddsBettingFuturesBySeasonSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingEvent[], NflV3Odds.NflV3OddsBettingFuturesBySeasonSportsbookGroupError>`
- **Wire**: `GET /v3/nfl/odds/{format}/BettingFuturesBySeason/{season}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Odds.NflV3OddsBettingFuturesBySeasonSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsBettingFuturesBySeasonSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent` | `bettingEventSchema` | `src/models/betting-event.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3OddsBettingMarket

- **Signature**: `nflV3OddsBettingMarket(request: NflV3Odds.NflV3OddsBettingMarketRequest, options?: RequestOptions): ApiPromise<BettingMarket, NflV3Odds.NflV3OddsBettingMarketError>`
- **Wire**: `GET /v3/nfl/odds/{format}/BettingMarket/{marketId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket`
- **Error**: `NflV3Odds.NflV3OddsBettingMarketError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsBettingMarketRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `marketId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3OddsBettingMarketSportsbookGroup

- **Signature**: `nflV3OddsBettingMarketSportsbookGroup(request: NflV3Odds.NflV3OddsBettingMarketSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket, NflV3Odds.NflV3OddsBettingMarketSportsbookGroupError>`
- **Wire**: `GET /v3/nfl/odds/{format}/BettingMarket/{marketId}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket`
- **Error**: `NflV3Odds.NflV3OddsBettingMarketSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsBettingMarketSportsbookGroupRequest` (3):

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

### nflV3OddsBettingMarketsByEvent

- **Signature**: `nflV3OddsBettingMarketsByEvent(request: NflV3Odds.NflV3OddsBettingMarketsByEventRequest, options?: RequestOptions): ApiPromise<BettingMarket[], NflV3Odds.NflV3OddsBettingMarketsByEventError>`
- **Wire**: `GET /v3/nfl/odds/{format}/BettingMarkets/{eventId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Odds.NflV3OddsBettingMarketsByEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsBettingMarketsByEventRequest` (3):

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

### nflV3OddsBettingMarketsByEventSportsbookGroup

- **Signature**: `nflV3OddsBettingMarketsByEventSportsbookGroup(request: NflV3Odds.NflV3OddsBettingMarketsByEventSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket[], NflV3Odds.NflV3OddsBettingMarketsByEventSportsbookGroupError>`
- **Wire**: `GET /v3/nfl/odds/{format}/BettingMarketsByEvent/{eventId}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Odds.NflV3OddsBettingMarketsByEventSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsBettingMarketsByEventSportsbookGroupRequest` (4):

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

### nflV3OddsBettingMarketsByGame

- **Signature**: `nflV3OddsBettingMarketsByGame(request: NflV3Odds.NflV3OddsBettingMarketsByGameRequest, options?: RequestOptions): ApiPromise<BettingMarket[], NflV3Odds.NflV3OddsBettingMarketsByGameError>`
- **Wire**: `GET /v3/nfl/odds/{format}/BettingMarketsByScoreID/{scoreid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Odds.NflV3OddsBettingMarketsByGameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsBettingMarketsByGameRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `scoreid` | `path` | `string` | yes | — |
| `include` | `query` | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3OddsBettingMarketsByGameSportsbookGroup

- **Signature**: `nflV3OddsBettingMarketsByGameSportsbookGroup(request: NflV3Odds.NflV3OddsBettingMarketsByGameSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket[], NflV3Odds.NflV3OddsBettingMarketsByGameSportsbookGroupError>`
- **Wire**: `GET /v3/nfl/odds/{format}/BettingMarketsByGameID/{gameid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Odds.NflV3OddsBettingMarketsByGameSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsBettingMarketsByGameSportsbookGroupRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |
| `include` | `query` | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3OddsBettingMarketsByMarketType

- **Signature**: `nflV3OddsBettingMarketsByMarketType(request: NflV3Odds.NflV3OddsBettingMarketsByMarketTypeRequest, options?: RequestOptions): ApiPromise<BettingMarket[], NflV3Odds.NflV3OddsBettingMarketsByMarketTypeError>`
- **Wire**: `GET /v3/nfl/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Odds.NflV3OddsBettingMarketsByMarketTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsBettingMarketsByMarketTypeRequest` (4):

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

### nflV3OddsBettingMarketsByMarketTypeSportsbookGroup

- **Signature**: `nflV3OddsBettingMarketsByMarketTypeSportsbookGroup(request: NflV3Odds.NflV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket[], NflV3Odds.NflV3OddsBettingMarketsByMarketTypeSportsbookGroupError>`
- **Wire**: `GET /v3/nfl/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Odds.NflV3OddsBettingMarketsByMarketTypeSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest` (5):

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

### nflV3OddsBettingMetadata

- **Signature**: `nflV3OddsBettingMetadata(request: NflV3Odds.NflV3OddsBettingMetadataRequest, options?: RequestOptions): ApiPromise<BettingEntityMetadataCollection, NflV3Odds.NflV3OddsBettingMetadataError>`
- **Wire**: `GET /v3/nfl/odds/{format}/BettingMetadata`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEntityMetadataCollection`
- **Error**: `NflV3Odds.NflV3OddsBettingMetadataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsBettingMetadataRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEntityMetadataCollection` | `bettingEntityMetadataCollectionSchema` | `src/models/betting-entity-metadata-collection.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3OddsBettingPlayerPropsByGame

- **Signature**: `nflV3OddsBettingPlayerPropsByGame(request: NflV3Odds.NflV3OddsBettingPlayerPropsByGameRequest, options?: RequestOptions): ApiPromise<BettingMarket[], NflV3Odds.NflV3OddsBettingPlayerPropsByGameError>`
- **Wire**: `GET /v3/nfl/odds/{format}/BettingPlayerPropsByScoreID/{scoreid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Odds.NflV3OddsBettingPlayerPropsByGameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsBettingPlayerPropsByGameRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `scoreid` | `path` | `string` | yes | — |
| `include` | `query` | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3OddsBettingPlayerPropsByGameSportsbookGroup

- **Signature**: `nflV3OddsBettingPlayerPropsByGameSportsbookGroup(request: NflV3Odds.NflV3OddsBettingPlayerPropsByGameSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket[], NflV3Odds.NflV3OddsBettingPlayerPropsByGameSportsbookGroupError>`
- **Wire**: `GET /v3/nfl/odds/{format}/BettingPlayerPropsByScoreID/{scoreid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Odds.NflV3OddsBettingPlayerPropsByGameSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsBettingPlayerPropsByGameSportsbookGroupRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `scoreid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |
| `include` | `query` | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3OddsBettingResultsByMarket

- **Signature**: `nflV3OddsBettingResultsByMarket(request: NflV3Odds.NflV3OddsBettingResultsByMarketRequest, options?: RequestOptions): ApiPromise<BettingMarketResult, NflV3Odds.NflV3OddsBettingResultsByMarketError>`
- **Wire**: `GET /v3/nfl/odds/{format}/BettingMarketResults/{marketId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarketResult`
- **Error**: `NflV3Odds.NflV3OddsBettingResultsByMarketError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsBettingResultsByMarketRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `marketId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarketResult` | `bettingMarketResultSchema` | `src/models/betting-market-result.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3OddsBettingResultsByMarketSportsbookGroup

- **Signature**: `nflV3OddsBettingResultsByMarketSportsbookGroup(request: NflV3Odds.NflV3OddsBettingResultsByMarketSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarketResult, NflV3Odds.NflV3OddsBettingResultsByMarketSportsbookGroupError>`
- **Wire**: `GET /v3/nfl/odds/{format}/BettingResultsByMarket/{marketId}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarketResult`
- **Error**: `NflV3Odds.NflV3OddsBettingResultsByMarketSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsBettingResultsByMarketSportsbookGroupRequest` (3):

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

### nflV3OddsBettingSplitsByBettingMarket

- **Signature**: `nflV3OddsBettingSplitsByBettingMarket(request: NflV3Odds.NflV3OddsBettingSplitsByBettingMarketRequest, options?: RequestOptions): ApiPromise<BettingMarketSplit, NflV3Odds.NflV3OddsBettingSplitsByBettingMarketError>`
- **Wire**: `GET /v3/nfl/odds/{format}/BettingSplitsByMarketId/{marketId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarketSplit`
- **Error**: `NflV3Odds.NflV3OddsBettingSplitsByBettingMarketError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsBettingSplitsByBettingMarketRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `marketId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarketSplit` | `bettingMarketSplitSchema` | `src/models/betting-market-split.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3OddsBettingSplitsByGame

- **Signature**: `nflV3OddsBettingSplitsByGame(request: NflV3Odds.NflV3OddsBettingSplitsByGameRequest, options?: RequestOptions): ApiPromise<GameBettingSplit, NflV3Odds.NflV3OddsBettingSplitsByGameError>`
- **Wire**: `GET /v3/nfl/odds/{format}/BettingSplitsByScoreId/{scoreId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameBettingSplit`
- **Error**: `NflV3Odds.NflV3OddsBettingSplitsByGameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsBettingSplitsByGameRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `scoreId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameBettingSplit` | `gameBettingSplitSchema` | `src/models/game-betting-split.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3OddsBettingTrendsByMatchup

- **Signature**: `nflV3OddsBettingTrendsByMatchup(request: NflV3Odds.NflV3OddsBettingTrendsByMatchupRequest, options?: RequestOptions): ApiPromise<MatchupTrends, NflV3Odds.NflV3OddsBettingTrendsByMatchupError>`
- **Wire**: `GET /v3/nfl/odds/{format}/MatchupTrends/{team}/{opponent}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MatchupTrends`
- **Error**: `NflV3Odds.NflV3OddsBettingTrendsByMatchupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsBettingTrendsByMatchupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `team` | `path` | `string` | yes | — |
| `opponent` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `MatchupTrends` | `matchupTrendsSchema` | `src/models/matchup-trends.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3OddsBettingTrendsByTeam

- **Signature**: `nflV3OddsBettingTrendsByTeam(request: NflV3Odds.NflV3OddsBettingTrendsByTeamRequest, options?: RequestOptions): ApiPromise<TeamTrends, NflV3Odds.NflV3OddsBettingTrendsByTeamError>`
- **Wire**: `GET /v3/nfl/odds/{format}/TeamTrends/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamTrends`
- **Error**: `NflV3Odds.NflV3OddsBettingTrendsByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsBettingTrendsByTeamRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamTrends` | `teamTrendsSchema` | `src/models/team-trends.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3OddsInGameOddsByWeek

- **Signature**: `nflV3OddsInGameOddsByWeek(request: NflV3Odds.NflV3OddsInGameOddsByWeekRequest, options?: RequestOptions): ApiPromise<GameInfo[], NflV3Odds.NflV3OddsInGameOddsByWeekError>`
- **Wire**: `GET /v3/nfl/odds/{format}/LiveGameOddsByWeek/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Odds.NflV3OddsInGameOddsByWeekError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsInGameOddsByWeekRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo` | `gameInfoSchema` | `src/models/game-info.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3OddsInGameOddsByWeekSportsbookGroup

- **Signature**: `nflV3OddsInGameOddsByWeekSportsbookGroup(request: NflV3Odds.NflV3OddsInGameOddsByWeekSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfo[], NflV3Odds.NflV3OddsInGameOddsByWeekSportsbookGroupError>`
- **Wire**: `GET /v3/nfl/odds/{format}/InGameOddsByWeek/{season}/{week}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Odds.NflV3OddsInGameOddsByWeekSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsInGameOddsByWeekSportsbookGroupRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo` | `gameInfoSchema` | `src/models/game-info.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3OddsInGameOddsLineMovement

- **Signature**: `nflV3OddsInGameOddsLineMovement(request: NflV3Odds.NflV3OddsInGameOddsLineMovementRequest, options?: RequestOptions): ApiPromise<GameInfo[], NflV3Odds.NflV3OddsInGameOddsLineMovementError>`
- **Wire**: `GET /v3/nfl/odds/{format}/LiveGameOddsLineMovement/{scoreid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Odds.NflV3OddsInGameOddsLineMovementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsInGameOddsLineMovementRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `scoreid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo` | `gameInfoSchema` | `src/models/game-info.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3OddsInGameOddsLineMovementSportsbookGroup

- **Signature**: `nflV3OddsInGameOddsLineMovementSportsbookGroup(request: NflV3Odds.NflV3OddsInGameOddsLineMovementSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfo[], NflV3Odds.NflV3OddsInGameOddsLineMovementSportsbookGroupError>`
- **Wire**: `GET /v3/nfl/odds/{format}/InGameLineMovement/{scoreid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Odds.NflV3OddsInGameOddsLineMovementSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsInGameOddsLineMovementSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `scoreid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo` | `gameInfoSchema` | `src/models/game-info.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3OddsInGameOddsLineMovementWithResultingSportsbookGroup

- **Signature**: `nflV3OddsInGameOddsLineMovementWithResultingSportsbookGroup(request: NflV3Odds.NflV3OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfoResult[], NflV3Odds.NflV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError>`
- **Wire**: `GET /v3/nfl/odds/{format}/InGameLineMovementWithResulting/{scoreid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfoResult[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Odds.NflV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `scoreid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfoResult` | `gameInfoResultSchema` | `src/models/game-info-result.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3OddsPeriodGameOddsByWeek

- **Signature**: `nflV3OddsPeriodGameOddsByWeek(request: NflV3Odds.NflV3OddsPeriodGameOddsByWeekRequest, options?: RequestOptions): ApiPromise<GameInfo[], NflV3Odds.NflV3OddsPeriodGameOddsByWeekError>`
- **Wire**: `GET /v3/nfl/odds/{format}/AlternateMarketGameOddsByWeek/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Odds.NflV3OddsPeriodGameOddsByWeekError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsPeriodGameOddsByWeekRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo` | `gameInfoSchema` | `src/models/game-info.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3OddsPeriodGameOddsLineMovement

- **Signature**: `nflV3OddsPeriodGameOddsLineMovement(request: NflV3Odds.NflV3OddsPeriodGameOddsLineMovementRequest, options?: RequestOptions): ApiPromise<GameInfo[], NflV3Odds.NflV3OddsPeriodGameOddsLineMovementError>`
- **Wire**: `GET /v3/nfl/odds/{format}/AlternateMarketGameOddsLineMovement/{scoreid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Odds.NflV3OddsPeriodGameOddsLineMovementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsPeriodGameOddsLineMovementRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `scoreid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo` | `gameInfoSchema` | `src/models/game-info.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroup

- **Signature**: `nflV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroup(request: NflV3Odds.NflV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfo[], NflV3Odds.NflV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroupError>`
- **Wire**: `GET /v3/nfl/odds/{format}/PreGameOddsByWeek/{season}/{week}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Odds.NflV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsPreGameAndPeriodGameOddsByWeekSportsbookGroupRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo` | `gameInfoSchema` | `src/models/game-info.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup

- **Signature**: `nflV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup(request: NflV3Odds.NflV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfo[], NflV3Odds.NflV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError>`
- **Wire**: `GET /v3/nfl/odds/{format}/PreGameOddsLineMovement/{scoreid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Odds.NflV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `scoreid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo` | `gameInfoSchema` | `src/models/game-info.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroup

- **Signature**: `nflV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroup(request: NflV3Odds.NflV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfoResult[], NflV3Odds.NflV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError>`
- **Wire**: `GET /v3/nfl/odds/{format}/PreGameOddsLineMovementWithResulting/{scoreid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfoResult[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Odds.NflV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `scoreid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfoResult` | `gameInfoResultSchema` | `src/models/game-info-result.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3OddsPreGameOddsByWeek

- **Signature**: `nflV3OddsPreGameOddsByWeek(request: NflV3Odds.NflV3OddsPreGameOddsByWeekRequest, options?: RequestOptions): ApiPromise<GameInfo[], NflV3Odds.NflV3OddsPreGameOddsByWeekError>`
- **Wire**: `GET /v3/nfl/odds/{format}/GameOddsByWeek/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Odds.NflV3OddsPreGameOddsByWeekError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsPreGameOddsByWeekRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo` | `gameInfoSchema` | `src/models/game-info.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3OddsPreGameOddsLineMovement

- **Signature**: `nflV3OddsPreGameOddsLineMovement(request: NflV3Odds.NflV3OddsPreGameOddsLineMovementRequest, options?: RequestOptions): ApiPromise<GameInfo[], NflV3Odds.NflV3OddsPreGameOddsLineMovementError>`
- **Wire**: `GET /v3/nfl/odds/{format}/GameOddsLineMovement/{scoreid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Odds.NflV3OddsPreGameOddsLineMovementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsPreGameOddsLineMovementRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `scoreid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo` | `gameInfoSchema` | `src/models/game-info.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3OddsSportsbooksActive

- **Signature**: `nflV3OddsSportsbooksActive(request: NflV3Odds.NflV3OddsSportsbooksActiveRequest, options?: RequestOptions): ApiPromise<Sportsbook[], NflV3Odds.NflV3OddsSportsbooksActiveError>`
- **Wire**: `GET /v3/nfl/odds/{format}/ActiveSportsbooks`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Sportsbook[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Odds.NflV3OddsSportsbooksActiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Odds.NflV3OddsSportsbooksActiveRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Sportsbook` | `sportsbookSchema` | `src/models/sportsbook.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

