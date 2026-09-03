<!-- Generated file — do not edit; regenerated with the SDK. -->

# WnbaV3Scores — operations

Accessor: `client.wnbaV3Scores` · Source: `src/resources/wnba-v3-scores.ts` · 40 operations · Request and error types: namespace `WnbaV3Scores`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### wnbaV3ScoresAreGamesInProgress

- **Signature**: `wnbaV3ScoresAreGamesInProgress(request: WnbaV3Scores.WnbaV3ScoresAreGamesInProgressRequest, options?: RequestOptions): ApiPromise<boolean, WnbaV3Scores.WnbaV3ScoresAreGamesInProgressError>`
- **Wire**: `GET /v3/wnba/scores/{format}/AreAnyGamesInProgress`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `boolean` — a bare `application/json` boolean; the success type *is* the boolean
- **Error**: `WnbaV3Scores.WnbaV3ScoresAreGamesInProgressError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresAreGamesInProgressRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresBettingEventsByDate

- **Signature**: `wnbaV3ScoresBettingEventsByDate(request: WnbaV3Scores.WnbaV3ScoresBettingEventsByDateRequest, options?: RequestOptions): ApiPromise<BettingEvent1[], WnbaV3Scores.WnbaV3ScoresBettingEventsByDateError>`
- **Wire**: `GET /v3/wnba/scores/{format}/BettingEventsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresBettingEventsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresBettingEventsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent1` | `bettingEvent1Schema` | `src/models/betting-event1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresBettingEventsBySeason

- **Signature**: `wnbaV3ScoresBettingEventsBySeason(request: WnbaV3Scores.WnbaV3ScoresBettingEventsBySeasonRequest, options?: RequestOptions): ApiPromise<BettingEvent1[], WnbaV3Scores.WnbaV3ScoresBettingEventsBySeasonError>`
- **Wire**: `GET /v3/wnba/scores/{format}/BettingEvents/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresBettingEventsBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresBettingEventsBySeasonRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent1` | `bettingEvent1Schema` | `src/models/betting-event1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresBettingFuturesBySeason

- **Signature**: `wnbaV3ScoresBettingFuturesBySeason(request: WnbaV3Scores.WnbaV3ScoresBettingFuturesBySeasonRequest, options?: RequestOptions): ApiPromise<BettingEvent1[], WnbaV3Scores.WnbaV3ScoresBettingFuturesBySeasonError>`
- **Wire**: `GET /v3/wnba/scores/{format}/BettingFuturesBySeason/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresBettingFuturesBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresBettingFuturesBySeasonRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent1` | `bettingEvent1Schema` | `src/models/betting-event1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresBettingFuturesBySeasonSportsbookGroup

- **Signature**: `wnbaV3ScoresBettingFuturesBySeasonSportsbookGroup(request: WnbaV3Scores.WnbaV3ScoresBettingFuturesBySeasonSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingEvent1[], WnbaV3Scores.WnbaV3ScoresBettingFuturesBySeasonSportsbookGroupError>`
- **Wire**: `GET /v3/wnba/scores/{format}/BettingFuturesBySeason/{season}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresBettingFuturesBySeasonSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresBettingFuturesBySeasonSportsbookGroupRequest` (3):

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

### wnbaV3ScoresBettingMarket

- **Signature**: `wnbaV3ScoresBettingMarket(request: WnbaV3Scores.WnbaV3ScoresBettingMarketRequest, options?: RequestOptions): ApiPromise<BettingMarket, WnbaV3Scores.WnbaV3ScoresBettingMarketError>`
- **Wire**: `GET /v3/wnba/scores/{format}/BettingMarket/{marketId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket`
- **Error**: `WnbaV3Scores.WnbaV3ScoresBettingMarketError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresBettingMarketRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `marketId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresBettingMarketSportsbookGroup

- **Signature**: `wnbaV3ScoresBettingMarketSportsbookGroup(request: WnbaV3Scores.WnbaV3ScoresBettingMarketSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket, WnbaV3Scores.WnbaV3ScoresBettingMarketSportsbookGroupError>`
- **Wire**: `GET /v3/wnba/scores/{format}/BettingMarket/{marketId}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket`
- **Error**: `WnbaV3Scores.WnbaV3ScoresBettingMarketSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresBettingMarketSportsbookGroupRequest` (3):

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

### wnbaV3ScoresBettingMarketsByEvent

- **Signature**: `wnbaV3ScoresBettingMarketsByEvent(request: WnbaV3Scores.WnbaV3ScoresBettingMarketsByEventRequest, options?: RequestOptions): ApiPromise<BettingMarket[], WnbaV3Scores.WnbaV3ScoresBettingMarketsByEventError>`
- **Wire**: `GET /v3/wnba/scores/{format}/BettingMarkets/{eventId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresBettingMarketsByEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresBettingMarketsByEventRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `eventId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresBettingMarketsByEventSportsbookGroup

- **Signature**: `wnbaV3ScoresBettingMarketsByEventSportsbookGroup(request: WnbaV3Scores.WnbaV3ScoresBettingMarketsByEventSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket[], WnbaV3Scores.WnbaV3ScoresBettingMarketsByEventSportsbookGroupError>`
- **Wire**: `GET /v3/wnba/scores/{format}/BettingMarketsByEvent/{eventId}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresBettingMarketsByEventSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresBettingMarketsByEventSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `eventId` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresBettingMarketsByGame

- **Signature**: `wnbaV3ScoresBettingMarketsByGame(request: WnbaV3Scores.WnbaV3ScoresBettingMarketsByGameRequest, options?: RequestOptions): ApiPromise<BettingMarket[], WnbaV3Scores.WnbaV3ScoresBettingMarketsByGameError>`
- **Wire**: `GET /v3/wnba/scores/{format}/BettingMarketsByGameID/{gameID}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresBettingMarketsByGameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresBettingMarketsByGameRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `format` | `path` | — | `Format` | no | `Format.Json` |
| `gameId` | `path` | `gameID` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresBettingMarketsByGameSportsbookGroup

- **Signature**: `wnbaV3ScoresBettingMarketsByGameSportsbookGroup(request: WnbaV3Scores.WnbaV3ScoresBettingMarketsByGameSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket[], WnbaV3Scores.WnbaV3ScoresBettingMarketsByGameSportsbookGroupError>`
- **Wire**: `GET /v3/wnba/scores/{format}/BettingMarketsByGameID/{gameID}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresBettingMarketsByGameSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresBettingMarketsByGameSportsbookGroupRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `format` | `path` | — | `Format` | no | `Format.Json` |
| `gameId` | `path` | `gameID` | `string` | yes | — |
| `sportsbookgroup` | `path` | — | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresBettingMarketsByMarketType

- **Signature**: `wnbaV3ScoresBettingMarketsByMarketType(request: WnbaV3Scores.WnbaV3ScoresBettingMarketsByMarketTypeRequest, options?: RequestOptions): ApiPromise<BettingMarket[], WnbaV3Scores.WnbaV3ScoresBettingMarketsByMarketTypeError>`
- **Wire**: `GET /v3/wnba/scores/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresBettingMarketsByMarketTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresBettingMarketsByMarketTypeRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `format` | `path` | — | `Format` | no | `Format.Json` |
| `eventId` | `path` | — | `string` | yes | — |
| `marketTypeId` | `path` | `marketTypeID` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresBettingMarketsByMarketTypeSportsbookGroup

- **Signature**: `wnbaV3ScoresBettingMarketsByMarketTypeSportsbookGroup(request: WnbaV3Scores.WnbaV3ScoresBettingMarketsByMarketTypeSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket[], WnbaV3Scores.WnbaV3ScoresBettingMarketsByMarketTypeSportsbookGroupError>`
- **Wire**: `GET /v3/wnba/scores/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresBettingMarketsByMarketTypeSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresBettingMarketsByMarketTypeSportsbookGroupRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `format` | `path` | — | `Format` | no | `Format.Json` |
| `eventId` | `path` | — | `string` | yes | — |
| `marketTypeId` | `path` | `marketTypeID` | `string` | yes | — |
| `sportsbookgroup` | `path` | — | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresBettingMetadata

- **Signature**: `wnbaV3ScoresBettingMetadata(request: WnbaV3Scores.WnbaV3ScoresBettingMetadataRequest, options?: RequestOptions): ApiPromise<BettingEntityMetadataCollection, WnbaV3Scores.WnbaV3ScoresBettingMetadataError>`
- **Wire**: `GET /v3/wnba/scores/{format}/BettingMetadata`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEntityMetadataCollection`
- **Error**: `WnbaV3Scores.WnbaV3ScoresBettingMetadataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresBettingMetadataRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEntityMetadataCollection` | `bettingEntityMetadataCollectionSchema` | `src/models/betting-entity-metadata-collection.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresBettingPlayerPropsByGame

- **Signature**: `wnbaV3ScoresBettingPlayerPropsByGame(request: WnbaV3Scores.WnbaV3ScoresBettingPlayerPropsByGameRequest, options?: RequestOptions): ApiPromise<BettingMarket[], WnbaV3Scores.WnbaV3ScoresBettingPlayerPropsByGameError>`
- **Wire**: `GET /v3/wnba/scores/{format}/BettingPlayerPropsByGameID/{gameId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresBettingPlayerPropsByGameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresBettingPlayerPropsByGameRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresBettingPlayerPropsByGameSportsbookGroup

- **Signature**: `wnbaV3ScoresBettingPlayerPropsByGameSportsbookGroup(request: WnbaV3Scores.WnbaV3ScoresBettingPlayerPropsByGameSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket[], WnbaV3Scores.WnbaV3ScoresBettingPlayerPropsByGameSportsbookGroupError>`
- **Wire**: `GET /v3/wnba/scores/{format}/BettingPlayerPropsByGameID/{gameId}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresBettingPlayerPropsByGameSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresBettingPlayerPropsByGameSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameId` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresBoxScoreFinal

- **Signature**: `wnbaV3ScoresBoxScoreFinal(request: WnbaV3Scores.WnbaV3ScoresBoxScoreFinalRequest, options?: RequestOptions): ApiPromise<BoxScore5, WnbaV3Scores.WnbaV3ScoresBoxScoreFinalError>`
- **Wire**: `GET /v3/wnba/scores/{format}/BoxScoreFinal/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore5`
- **Error**: `WnbaV3Scores.WnbaV3ScoresBoxScoreFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresBoxScoreFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore5` | `boxScore5Schema` | `src/models/box-score5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresBoxScoreLiveFinal

- **Signature**: `wnbaV3ScoresBoxScoreLiveFinal(request: WnbaV3Scores.WnbaV3ScoresBoxScoreLiveFinalRequest, options?: RequestOptions): ApiPromise<BoxScore5, WnbaV3Scores.WnbaV3ScoresBoxScoreLiveFinalError>`
- **Wire**: `GET /v3/wnba/scores/{format}/BoxScore/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore5`
- **Error**: `WnbaV3Scores.WnbaV3ScoresBoxScoreLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresBoxScoreLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore5` | `boxScore5Schema` | `src/models/box-score5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresBoxScoresByDateFinal

- **Signature**: `wnbaV3ScoresBoxScoresByDateFinal(request: WnbaV3Scores.WnbaV3ScoresBoxScoresByDateFinalRequest, options?: RequestOptions): ApiPromise<BoxScore5[], WnbaV3Scores.WnbaV3ScoresBoxScoresByDateFinalError>`
- **Wire**: `GET /v3/wnba/scores/{format}/BoxScoresFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresBoxScoresByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresBoxScoresByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore5` | `boxScore5Schema` | `src/models/box-score5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresBoxScoresByDateLiveFinal

- **Signature**: `wnbaV3ScoresBoxScoresByDateLiveFinal(request: WnbaV3Scores.WnbaV3ScoresBoxScoresByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<BoxScore5[], WnbaV3Scores.WnbaV3ScoresBoxScoresByDateLiveFinalError>`
- **Wire**: `GET /v3/wnba/scores/{format}/BoxScores/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresBoxScoresByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresBoxScoresByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore5` | `boxScore5Schema` | `src/models/box-score5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresGamesByDateFinal

- **Signature**: `wnbaV3ScoresGamesByDateFinal(request: WnbaV3Scores.WnbaV3ScoresGamesByDateFinalRequest, options?: RequestOptions): ApiPromise<Game10[], WnbaV3Scores.WnbaV3ScoresGamesByDateFinalError>`
- **Wire**: `GET /v3/wnba/scores/{format}/GamesByDateFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Game10[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresGamesByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresGamesByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Game10` | `game10Schema` | `src/models/game10.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresGamesByDateLiveFinal

- **Signature**: `wnbaV3ScoresGamesByDateLiveFinal(request: WnbaV3Scores.WnbaV3ScoresGamesByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<Game10[], WnbaV3Scores.WnbaV3ScoresGamesByDateLiveFinalError>`
- **Wire**: `GET /v3/wnba/scores/{format}/GamesByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Game10[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresGamesByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresGamesByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Game10` | `game10Schema` | `src/models/game10.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresGamesBasicByDateFinal

- **Signature**: `wnbaV3ScoresGamesBasicByDateFinal(request: WnbaV3Scores.WnbaV3ScoresGamesBasicByDateFinalRequest, options?: RequestOptions): ApiPromise<ScoreBasic6[], WnbaV3Scores.WnbaV3ScoresGamesBasicByDateFinalError>`
- **Wire**: `GET /v3/wnba/scores/{format}/ScoresBasicFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScoreBasic6[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresGamesBasicByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresGamesBasicByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ScoreBasic6` | `scoreBasic6Schema` | `src/models/score-basic6.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresGamesBasicByDateLiveFinal

- **Signature**: `wnbaV3ScoresGamesBasicByDateLiveFinal(request: WnbaV3Scores.WnbaV3ScoresGamesBasicByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<ScoreBasic6[], WnbaV3Scores.WnbaV3ScoresGamesBasicByDateLiveFinalError>`
- **Wire**: `GET /v3/wnba/scores/{format}/ScoresBasic/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScoreBasic6[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresGamesBasicByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresGamesBasicByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ScoreBasic6` | `scoreBasic6Schema` | `src/models/score-basic6.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresPlayerDetailsByActive

- **Signature**: `wnbaV3ScoresPlayerDetailsByActive(request: WnbaV3Scores.WnbaV3ScoresPlayerDetailsByActiveRequest, options?: RequestOptions): ApiPromise<Player6[], WnbaV3Scores.WnbaV3ScoresPlayerDetailsByActiveError>`
- **Wire**: `GET /v3/wnba/scores/{format}/Players`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player6[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresPlayerDetailsByActiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresPlayerDetailsByActiveRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player6` | `player6Schema` | `src/models/player6.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresPlayerDetailsByTeam

- **Signature**: `wnbaV3ScoresPlayerDetailsByTeam(request: WnbaV3Scores.WnbaV3ScoresPlayerDetailsByTeamRequest, options?: RequestOptions): ApiPromise<Player6[], WnbaV3Scores.WnbaV3ScoresPlayerDetailsByTeamError>`
- **Wire**: `GET /v3/wnba/scores/{format}/Players/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player6[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresPlayerDetailsByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresPlayerDetailsByTeamRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player6` | `player6Schema` | `src/models/player6.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresPlayerSeasonStats

- **Signature**: `wnbaV3ScoresPlayerSeasonStats(request: WnbaV3Scores.WnbaV3ScoresPlayerSeasonStatsRequest, options?: RequestOptions): ApiPromise<PlayerSeason7[], WnbaV3Scores.WnbaV3ScoresPlayerSeasonStatsError>`
- **Wire**: `GET /v3/wnba/scores/{format}/PlayerSeasonStats/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeason7[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresPlayerSeasonStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresPlayerSeasonStatsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeason7` | `playerSeason7Schema` | `src/models/player-season7.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresPlayerSeasonStatsByTeam

- **Signature**: `wnbaV3ScoresPlayerSeasonStatsByTeam(request: WnbaV3Scores.WnbaV3ScoresPlayerSeasonStatsByTeamRequest, options?: RequestOptions): ApiPromise<PlayerSeason7[], WnbaV3Scores.WnbaV3ScoresPlayerSeasonStatsByTeamError>`
- **Wire**: `GET /v3/wnba/scores/{format}/PlayerSeasonStatsByTeam/{season}/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeason7[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresPlayerSeasonStatsByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresPlayerSeasonStatsByTeamRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeason7` | `playerSeason7Schema` | `src/models/player-season7.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresPreGameOddsByDate

- **Signature**: `wnbaV3ScoresPreGameOddsByDate(request: WnbaV3Scores.WnbaV3ScoresPreGameOddsByDateRequest, options?: RequestOptions): ApiPromise<GameInfo6[], WnbaV3Scores.WnbaV3ScoresPreGameOddsByDateError>`
- **Wire**: `GET /v3/wnba/scores/{format}/GameOddsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo6[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresPreGameOddsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresPreGameOddsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo6` | `gameInfo6Schema` | `src/models/game-info6.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresPreGameOddsLineMovement

- **Signature**: `wnbaV3ScoresPreGameOddsLineMovement(request: WnbaV3Scores.WnbaV3ScoresPreGameOddsLineMovementRequest, options?: RequestOptions): ApiPromise<GameInfo6[], WnbaV3Scores.WnbaV3ScoresPreGameOddsLineMovementError>`
- **Wire**: `GET /v3/wnba/scores/{format}/GameOddsLineMovement/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo6[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresPreGameOddsLineMovementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresPreGameOddsLineMovementRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo6` | `gameInfo6Schema` | `src/models/game-info6.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresSchedules

- **Signature**: `wnbaV3ScoresSchedules(request: WnbaV3Scores.WnbaV3ScoresSchedulesRequest, options?: RequestOptions): ApiPromise<Game10[], WnbaV3Scores.WnbaV3ScoresSchedulesError>`
- **Wire**: `GET /v3/wnba/scores/{format}/Games/{Season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Game10[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresSchedulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresSchedulesRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `format` | `path` | — | `Format` | no | `Format.Json` |
| `season` | `path` | `Season` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Game10` | `game10Schema` | `src/models/game10.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresSchedulesBasic

- **Signature**: `wnbaV3ScoresSchedulesBasic(request: WnbaV3Scores.WnbaV3ScoresSchedulesBasicRequest, options?: RequestOptions): ApiPromise<SchedulesBasic[], WnbaV3Scores.WnbaV3ScoresSchedulesBasicError>`
- **Wire**: `GET /v3/wnba/scores/{format}/SchedulesBasic/{Season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SchedulesBasic[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresSchedulesBasicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresSchedulesBasicRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `format` | `path` | — | `Format` | no | `Format.Json` |
| `season` | `path` | `Season` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `SchedulesBasic` | `schedulesBasicSchema` | `src/models/schedules-basic.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresSeasonCurrent

- **Signature**: `wnbaV3ScoresSeasonCurrent(request: WnbaV3Scores.WnbaV3ScoresSeasonCurrentRequest, options?: RequestOptions): ApiPromise<Season4, WnbaV3Scores.WnbaV3ScoresSeasonCurrentError>`
- **Wire**: `GET /v3/wnba/scores/{format}/CurrentSeason`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Season4`
- **Error**: `WnbaV3Scores.WnbaV3ScoresSeasonCurrentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresSeasonCurrentRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Season4` | `season4Schema` | `src/models/season4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresSportsbooksByActive

- **Signature**: `wnbaV3ScoresSportsbooksByActive(request: WnbaV3Scores.WnbaV3ScoresSportsbooksByActiveRequest, options?: RequestOptions): ApiPromise<Sportsbook[], WnbaV3Scores.WnbaV3ScoresSportsbooksByActiveError>`
- **Wire**: `GET /v3/wnba/scores/{format}/ActiveSportsbooks`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Sportsbook[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresSportsbooksByActiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresSportsbooksByActiveRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Sportsbook` | `sportsbookSchema` | `src/models/sportsbook.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresStadiums

- **Signature**: `wnbaV3ScoresStadiums(request: WnbaV3Scores.WnbaV3ScoresStadiumsRequest, options?: RequestOptions): ApiPromise<Stadium6[], WnbaV3Scores.WnbaV3ScoresStadiumsError>`
- **Wire**: `GET /v3/wnba/scores/{format}/Stadiums`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Stadium6[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresStadiumsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresStadiumsRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Stadium6` | `stadium6Schema` | `src/models/stadium6.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresStandings

- **Signature**: `wnbaV3ScoresStandings(request: WnbaV3Scores.WnbaV3ScoresStandingsRequest, options?: RequestOptions): ApiPromise<undefined, WnbaV3Scores.WnbaV3ScoresStandingsError>`
- **Wire**: `GET /v3/wnba/scores/{format}/Standings/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `undefined` — the operation resolves to nothing
- **Error**: `WnbaV3Scores.WnbaV3ScoresStandingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresStandingsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresTeamGameStatsByDateFinal

- **Signature**: `wnbaV3ScoresTeamGameStatsByDateFinal(request: WnbaV3Scores.WnbaV3ScoresTeamGameStatsByDateFinalRequest, options?: RequestOptions): ApiPromise<TeamGame6[], WnbaV3Scores.WnbaV3ScoresTeamGameStatsByDateFinalError>`
- **Wire**: `GET /v3/wnba/scores/{format}/TeamGameStatsByDateFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamGame6[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresTeamGameStatsByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresTeamGameStatsByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamGame6` | `teamGame6Schema` | `src/models/team-game6.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresTeamGameStatsByDateLiveFinal

- **Signature**: `wnbaV3ScoresTeamGameStatsByDateLiveFinal(request: WnbaV3Scores.WnbaV3ScoresTeamGameStatsByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<TeamGame6[], WnbaV3Scores.WnbaV3ScoresTeamGameStatsByDateLiveFinalError>`
- **Wire**: `GET /v3/wnba/scores/{format}/TeamGameStatsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamGame6[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresTeamGameStatsByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresTeamGameStatsByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamGame6` | `teamGame6Schema` | `src/models/team-game6.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresTeamProfilesAll

- **Signature**: `wnbaV3ScoresTeamProfilesAll(request: WnbaV3Scores.WnbaV3ScoresTeamProfilesAllRequest, options?: RequestOptions): ApiPromise<Team6[], WnbaV3Scores.WnbaV3ScoresTeamProfilesAllError>`
- **Wire**: `GET /v3/wnba/scores/{format}/Teams`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Team6[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresTeamProfilesAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresTeamProfilesAllRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Team6` | `team6Schema` | `src/models/team6.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### wnbaV3ScoresTeamSeasonStats

- **Signature**: `wnbaV3ScoresTeamSeasonStats(request: WnbaV3Scores.WnbaV3ScoresTeamSeasonStatsRequest, options?: RequestOptions): ApiPromise<TeamSeason6[], WnbaV3Scores.WnbaV3ScoresTeamSeasonStatsError>`
- **Wire**: `GET /v3/wnba/scores/{format}/TeamSeasonStats/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamSeason6[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `WnbaV3Scores.WnbaV3ScoresTeamSeasonStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `WnbaV3Scores.WnbaV3ScoresTeamSeasonStatsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamSeason6` | `teamSeason6Schema` | `src/models/team-season6.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

