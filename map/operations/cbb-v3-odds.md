<!-- Generated file — do not edit; regenerated with the SDK. -->

# CbbV3Odds — operations

Accessor: `client.cbbV3Odds` · Source: `src/resources/cbb-v3-odds.ts` · 34 operations · Request and error types: namespace `CbbV3Odds`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### cbbV3OddsAlternateMarketPreGameOddsByDate

- **Signature**: `cbbV3OddsAlternateMarketPreGameOddsByDate(request: CbbV3Odds.CbbV3OddsAlternateMarketPreGameOddsByDateRequest, options?: RequestOptions): ApiPromise<GameInfo5[], CbbV3Odds.CbbV3OddsAlternateMarketPreGameOddsByDateError>`
- **Wire**: `GET /v3/cbb/odds/{format}/AlternateMarketGameOddsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Odds.CbbV3OddsAlternateMarketPreGameOddsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsAlternateMarketPreGameOddsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo5` | `gameInfo5Schema` | `src/models/game-info5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3OddsAlternateMarketPreGameOddsLineMovement

- **Signature**: `cbbV3OddsAlternateMarketPreGameOddsLineMovement(request: CbbV3Odds.CbbV3OddsAlternateMarketPreGameOddsLineMovementRequest, options?: RequestOptions): ApiPromise<GameInfo5[], CbbV3Odds.CbbV3OddsAlternateMarketPreGameOddsLineMovementError>`
- **Wire**: `GET /v3/cbb/odds/{format}/AlternateMarketGameOddsLineMovement/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Odds.CbbV3OddsAlternateMarketPreGameOddsLineMovementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsAlternateMarketPreGameOddsLineMovementRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo5` | `gameInfo5Schema` | `src/models/game-info5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3OddsBettingEventsByDate

- **Signature**: `cbbV3OddsBettingEventsByDate(request: CbbV3Odds.CbbV3OddsBettingEventsByDateRequest, options?: RequestOptions): ApiPromise<BettingEvent2[], CbbV3Odds.CbbV3OddsBettingEventsByDateError>`
- **Wire**: `GET /v3/cbb/odds/{format}/BettingEventsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Odds.CbbV3OddsBettingEventsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsBettingEventsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent2` | `bettingEvent2Schema` | `src/models/betting-event2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3OddsBettingEventsBySeason

- **Signature**: `cbbV3OddsBettingEventsBySeason(request: CbbV3Odds.CbbV3OddsBettingEventsBySeasonRequest, options?: RequestOptions): ApiPromise<BettingEvent2[], CbbV3Odds.CbbV3OddsBettingEventsBySeasonError>`
- **Wire**: `GET /v3/cbb/odds/{format}/BettingEvents/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Odds.CbbV3OddsBettingEventsBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsBettingEventsBySeasonRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent2` | `bettingEvent2Schema` | `src/models/betting-event2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3OddsBettingFuturesBySeason

- **Signature**: `cbbV3OddsBettingFuturesBySeason(request: CbbV3Odds.CbbV3OddsBettingFuturesBySeasonRequest, options?: RequestOptions): ApiPromise<BettingEvent2[], CbbV3Odds.CbbV3OddsBettingFuturesBySeasonError>`
- **Wire**: `GET /v3/cbb/odds/{format}/BettingFuturesBySeason/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Odds.CbbV3OddsBettingFuturesBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsBettingFuturesBySeasonRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent2` | `bettingEvent2Schema` | `src/models/betting-event2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3OddsBettingFuturesBySeasonSportsbookGroup

- **Signature**: `cbbV3OddsBettingFuturesBySeasonSportsbookGroup(request: CbbV3Odds.CbbV3OddsBettingFuturesBySeasonSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingEvent2[], CbbV3Odds.CbbV3OddsBettingFuturesBySeasonSportsbookGroupError>`
- **Wire**: `GET /v3/cbb/odds/{format}/BettingFuturesBySeason/{season}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Odds.CbbV3OddsBettingFuturesBySeasonSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsBettingFuturesBySeasonSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent2` | `bettingEvent2Schema` | `src/models/betting-event2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3OddsBettingMarket

- **Signature**: `cbbV3OddsBettingMarket(request: CbbV3Odds.CbbV3OddsBettingMarketRequest, options?: RequestOptions): ApiPromise<BettingMarket, CbbV3Odds.CbbV3OddsBettingMarketError>`
- **Wire**: `GET /v3/cbb/odds/{format}/BettingMarket/{marketId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket`
- **Error**: `CbbV3Odds.CbbV3OddsBettingMarketError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsBettingMarketRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `marketId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3OddsBettingMarketSportsbookGroup

- **Signature**: `cbbV3OddsBettingMarketSportsbookGroup(request: CbbV3Odds.CbbV3OddsBettingMarketSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket, CbbV3Odds.CbbV3OddsBettingMarketSportsbookGroupError>`
- **Wire**: `GET /v3/cbb/odds/{format}/BettingMarket/{marketId}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket`
- **Error**: `CbbV3Odds.CbbV3OddsBettingMarketSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsBettingMarketSportsbookGroupRequest` (3):

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

### cbbV3OddsBettingMarketsByEvent

- **Signature**: `cbbV3OddsBettingMarketsByEvent(request: CbbV3Odds.CbbV3OddsBettingMarketsByEventRequest, options?: RequestOptions): ApiPromise<BettingMarket[], CbbV3Odds.CbbV3OddsBettingMarketsByEventError>`
- **Wire**: `GET /v3/cbb/odds/{format}/BettingMarkets/{eventId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Odds.CbbV3OddsBettingMarketsByEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsBettingMarketsByEventRequest` (3):

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

### cbbV3OddsBettingMarketsByEventSportsbookGroup

- **Signature**: `cbbV3OddsBettingMarketsByEventSportsbookGroup(request: CbbV3Odds.CbbV3OddsBettingMarketsByEventSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket[], CbbV3Odds.CbbV3OddsBettingMarketsByEventSportsbookGroupError>`
- **Wire**: `GET /v3/cbb/odds/{format}/BettingMarketsByEvent/{eventId}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Odds.CbbV3OddsBettingMarketsByEventSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsBettingMarketsByEventSportsbookGroupRequest` (4):

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

### cbbV3OddsBettingMarketsByGame

- **Signature**: `cbbV3OddsBettingMarketsByGame(request: CbbV3Odds.CbbV3OddsBettingMarketsByGameRequest, options?: RequestOptions): ApiPromise<BettingMarket[], CbbV3Odds.CbbV3OddsBettingMarketsByGameError>`
- **Wire**: `GET /v3/cbb/odds/{format}/BettingMarketsByGameID/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Odds.CbbV3OddsBettingMarketsByGameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsBettingMarketsByGameRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |
| `include` | `query` | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket` | `bettingMarketSchema` | `src/models/betting-market.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3OddsBettingMarketsByGameSportsbookGroup

- **Signature**: `cbbV3OddsBettingMarketsByGameSportsbookGroup(request: CbbV3Odds.CbbV3OddsBettingMarketsByGameSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket[], CbbV3Odds.CbbV3OddsBettingMarketsByGameSportsbookGroupError>`
- **Wire**: `GET /v3/cbb/odds/{format}/BettingMarketsByGameID/{gameid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Odds.CbbV3OddsBettingMarketsByGameSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsBettingMarketsByGameSportsbookGroupRequest` (4):

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

### cbbV3OddsBettingMarketsByMarketType

- **Signature**: `cbbV3OddsBettingMarketsByMarketType(request: CbbV3Odds.CbbV3OddsBettingMarketsByMarketTypeRequest, options?: RequestOptions): ApiPromise<BettingMarket[], CbbV3Odds.CbbV3OddsBettingMarketsByMarketTypeError>`
- **Wire**: `GET /v3/cbb/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Odds.CbbV3OddsBettingMarketsByMarketTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsBettingMarketsByMarketTypeRequest` (4):

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

### cbbV3OddsBettingMarketsByMarketTypeSportsbookGroup

- **Signature**: `cbbV3OddsBettingMarketsByMarketTypeSportsbookGroup(request: CbbV3Odds.CbbV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket[], CbbV3Odds.CbbV3OddsBettingMarketsByMarketTypeSportsbookGroupError>`
- **Wire**: `GET /v3/cbb/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Odds.CbbV3OddsBettingMarketsByMarketTypeSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest` (5):

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

### cbbV3OddsBettingMetadata

- **Signature**: `cbbV3OddsBettingMetadata(request: CbbV3Odds.CbbV3OddsBettingMetadataRequest, options?: RequestOptions): ApiPromise<BettingEntityMetadataCollection, CbbV3Odds.CbbV3OddsBettingMetadataError>`
- **Wire**: `GET /v3/cbb/odds/{format}/BettingMetadata`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEntityMetadataCollection`
- **Error**: `CbbV3Odds.CbbV3OddsBettingMetadataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsBettingMetadataRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEntityMetadataCollection` | `bettingEntityMetadataCollectionSchema` | `src/models/betting-entity-metadata-collection.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3OddsBettingPlayerPropsByGame

- **Signature**: `cbbV3OddsBettingPlayerPropsByGame(request: CbbV3Odds.CbbV3OddsBettingPlayerPropsByGameRequest, options?: RequestOptions): ApiPromise<BettingMarket[], CbbV3Odds.CbbV3OddsBettingPlayerPropsByGameError>`
- **Wire**: `GET /v3/cbb/odds/{format}/BettingPlayerPropsByGameID/{gameId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Odds.CbbV3OddsBettingPlayerPropsByGameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsBettingPlayerPropsByGameRequest` (3):

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

### cbbV3OddsBettingPlayerPropsByGameSportsbookGroup

- **Signature**: `cbbV3OddsBettingPlayerPropsByGameSportsbookGroup(request: CbbV3Odds.CbbV3OddsBettingPlayerPropsByGameSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket[], CbbV3Odds.CbbV3OddsBettingPlayerPropsByGameSportsbookGroupError>`
- **Wire**: `GET /v3/cbb/odds/{format}/BettingPlayerPropsByGameID/{gameId}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Odds.CbbV3OddsBettingPlayerPropsByGameSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsBettingPlayerPropsByGameSportsbookGroupRequest` (4):

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

### cbbV3OddsBettingResultsByMarket

- **Signature**: `cbbV3OddsBettingResultsByMarket(request: CbbV3Odds.CbbV3OddsBettingResultsByMarketRequest, options?: RequestOptions): ApiPromise<BettingMarketResult, CbbV3Odds.CbbV3OddsBettingResultsByMarketError>`
- **Wire**: `GET /v3/cbb/odds/{format}/BettingMarketResults/{marketId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarketResult`
- **Error**: `CbbV3Odds.CbbV3OddsBettingResultsByMarketError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsBettingResultsByMarketRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `marketId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarketResult` | `bettingMarketResultSchema` | `src/models/betting-market-result.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3OddsBettingResultsByMarketSportsbookGroup

- **Signature**: `cbbV3OddsBettingResultsByMarketSportsbookGroup(request: CbbV3Odds.CbbV3OddsBettingResultsByMarketSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarketResult, CbbV3Odds.CbbV3OddsBettingResultsByMarketSportsbookGroupError>`
- **Wire**: `GET /v3/cbb/odds/{format}/BettingResultsByMarket/{marketId}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarketResult`
- **Error**: `CbbV3Odds.CbbV3OddsBettingResultsByMarketSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsBettingResultsByMarketSportsbookGroupRequest` (3):

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

### cbbV3OddsBettingSplitsByBettingMarket

- **Signature**: `cbbV3OddsBettingSplitsByBettingMarket(request: CbbV3Odds.CbbV3OddsBettingSplitsByBettingMarketRequest, options?: RequestOptions): ApiPromise<BettingMarketSplit, CbbV3Odds.CbbV3OddsBettingSplitsByBettingMarketError>`
- **Wire**: `GET /v3/cbb/odds/{format}/BettingSplitsByMarketId/{marketId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarketSplit`
- **Error**: `CbbV3Odds.CbbV3OddsBettingSplitsByBettingMarketError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsBettingSplitsByBettingMarketRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `marketId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarketSplit` | `bettingMarketSplitSchema` | `src/models/betting-market-split.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3OddsBettingSplitsByGame

- **Signature**: `cbbV3OddsBettingSplitsByGame(request: CbbV3Odds.CbbV3OddsBettingSplitsByGameRequest, options?: RequestOptions): ApiPromise<GameBettingSplit1, CbbV3Odds.CbbV3OddsBettingSplitsByGameError>`
- **Wire**: `GET /v3/cbb/odds/{format}/BettingSplitsByGameId/{gameId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameBettingSplit1`
- **Error**: `CbbV3Odds.CbbV3OddsBettingSplitsByGameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsBettingSplitsByGameRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameBettingSplit1` | `gameBettingSplit1Schema` | `src/models/game-betting-split1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3OddsBettingTrendsByMatchup

- **Signature**: `cbbV3OddsBettingTrendsByMatchup(request: CbbV3Odds.CbbV3OddsBettingTrendsByMatchupRequest, options?: RequestOptions): ApiPromise<MatchupTrends5, CbbV3Odds.CbbV3OddsBettingTrendsByMatchupError>`
- **Wire**: `GET /v3/cbb/odds/{format}/MatchupTrends/{team}/{opponent}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `MatchupTrends5`
- **Error**: `CbbV3Odds.CbbV3OddsBettingTrendsByMatchupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsBettingTrendsByMatchupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `team` | `path` | `string` | yes | — |
| `opponent` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `MatchupTrends5` | `matchupTrends5Schema` | `src/models/matchup-trends5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3OddsBettingTrendsByTeam

- **Signature**: `cbbV3OddsBettingTrendsByTeam(request: CbbV3Odds.CbbV3OddsBettingTrendsByTeamRequest, options?: RequestOptions): ApiPromise<TeamTrends3, CbbV3Odds.CbbV3OddsBettingTrendsByTeamError>`
- **Wire**: `GET /v3/cbb/odds/{format}/TeamTrends/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamTrends3`
- **Error**: `CbbV3Odds.CbbV3OddsBettingTrendsByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsBettingTrendsByTeamRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamTrends3` | `teamTrends3Schema` | `src/models/team-trends3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3OddsInGameOddsByDate

- **Signature**: `cbbV3OddsInGameOddsByDate(request: CbbV3Odds.CbbV3OddsInGameOddsByDateRequest, options?: RequestOptions): ApiPromise<GameInfo5[], CbbV3Odds.CbbV3OddsInGameOddsByDateError>`
- **Wire**: `GET /v3/cbb/odds/{format}/LiveGameOddsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Odds.CbbV3OddsInGameOddsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsInGameOddsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo5` | `gameInfo5Schema` | `src/models/game-info5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3OddsInGameOddsByDateSportsbookGroup

- **Signature**: `cbbV3OddsInGameOddsByDateSportsbookGroup(request: CbbV3Odds.CbbV3OddsInGameOddsByDateSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfo5[], CbbV3Odds.CbbV3OddsInGameOddsByDateSportsbookGroupError>`
- **Wire**: `GET /v3/cbb/odds/{format}/InGameOddsByDate/{date}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Odds.CbbV3OddsInGameOddsByDateSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsInGameOddsByDateSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo5` | `gameInfo5Schema` | `src/models/game-info5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3OddsInGameOddsLineMovement

- **Signature**: `cbbV3OddsInGameOddsLineMovement(request: CbbV3Odds.CbbV3OddsInGameOddsLineMovementRequest, options?: RequestOptions): ApiPromise<GameInfo5[], CbbV3Odds.CbbV3OddsInGameOddsLineMovementError>`
- **Wire**: `GET /v3/cbb/odds/{format}/LiveGameOddsLineMovement/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Odds.CbbV3OddsInGameOddsLineMovementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsInGameOddsLineMovementRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo5` | `gameInfo5Schema` | `src/models/game-info5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3OddsInGameOddsLineMovementSportsbookGroup

- **Signature**: `cbbV3OddsInGameOddsLineMovementSportsbookGroup(request: CbbV3Odds.CbbV3OddsInGameOddsLineMovementSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfo5[], CbbV3Odds.CbbV3OddsInGameOddsLineMovementSportsbookGroupError>`
- **Wire**: `GET /v3/cbb/odds/{format}/InGameLineMovement/{gameid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Odds.CbbV3OddsInGameOddsLineMovementSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsInGameOddsLineMovementSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo5` | `gameInfo5Schema` | `src/models/game-info5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3OddsInGameOddsLineMovementWithResultingSportsbookGroup

- **Signature**: `cbbV3OddsInGameOddsLineMovementWithResultingSportsbookGroup(request: CbbV3Odds.CbbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfoResult5[], CbbV3Odds.CbbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError>`
- **Wire**: `GET /v3/cbb/odds/{format}/InGameLineMovementWithResulting/{gameid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfoResult5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Odds.CbbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfoResult5` | `gameInfoResult5Schema` | `src/models/game-info-result5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroup

- **Signature**: `cbbV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroup(request: CbbV3Odds.CbbV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfo5[], CbbV3Odds.CbbV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError>`
- **Wire**: `GET /v3/cbb/odds/{format}/PreGameOddsByDate/{date}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Odds.CbbV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsPreGameAndPeriodGameOddsByDateSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo5` | `gameInfo5Schema` | `src/models/game-info5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup

- **Signature**: `cbbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup(request: CbbV3Odds.CbbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfo5[], CbbV3Odds.CbbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError>`
- **Wire**: `GET /v3/cbb/odds/{format}/PreGameOddsLineMovement/{gameid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Odds.CbbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo5` | `gameInfo5Schema` | `src/models/game-info5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroup

- **Signature**: `cbbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroup(request: CbbV3Odds.CbbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfoResult5[], CbbV3Odds.CbbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError>`
- **Wire**: `GET /v3/cbb/odds/{format}/PreGameOddsLineMovementWithResulting/{gameid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfoResult5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Odds.CbbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfoResult5` | `gameInfoResult5Schema` | `src/models/game-info-result5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3OddsPreGameOddsByDate

- **Signature**: `cbbV3OddsPreGameOddsByDate(request: CbbV3Odds.CbbV3OddsPreGameOddsByDateRequest, options?: RequestOptions): ApiPromise<GameInfo5[], CbbV3Odds.CbbV3OddsPreGameOddsByDateError>`
- **Wire**: `GET /v3/cbb/odds/{format}/GameOddsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Odds.CbbV3OddsPreGameOddsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsPreGameOddsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo5` | `gameInfo5Schema` | `src/models/game-info5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3OddsPreGameOddsLineMovement

- **Signature**: `cbbV3OddsPreGameOddsLineMovement(request: CbbV3Odds.CbbV3OddsPreGameOddsLineMovementRequest, options?: RequestOptions): ApiPromise<GameInfo5[], CbbV3Odds.CbbV3OddsPreGameOddsLineMovementError>`
- **Wire**: `GET /v3/cbb/odds/{format}/GameOddsLineMovement/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Odds.CbbV3OddsPreGameOddsLineMovementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsPreGameOddsLineMovementRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo5` | `gameInfo5Schema` | `src/models/game-info5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3OddsSportsbooksByActive

- **Signature**: `cbbV3OddsSportsbooksByActive(request: CbbV3Odds.CbbV3OddsSportsbooksByActiveRequest, options?: RequestOptions): ApiPromise<Sportsbook[], CbbV3Odds.CbbV3OddsSportsbooksByActiveError>`
- **Wire**: `GET /v3/cbb/odds/{format}/ActiveSportsbooks`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Sportsbook[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Odds.CbbV3OddsSportsbooksByActiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Odds.CbbV3OddsSportsbooksByActiveRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Sportsbook` | `sportsbookSchema` | `src/models/sportsbook.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

