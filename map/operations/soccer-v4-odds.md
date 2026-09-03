<!-- Generated file — do not edit; regenerated with the SDK. -->

# SoccerV4Odds — operations

Accessor: `client.soccerV4Odds` · Source: `src/resources/soccer-v4-odds.ts` · 28 operations · Request and error types: namespace `SoccerV4Odds`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### soccerV4OddsBettingEventsByDate

- **Signature**: `soccerV4OddsBettingEventsByDate(request: SoccerV4Odds.SoccerV4OddsBettingEventsByDateRequest, options?: RequestOptions): ApiPromise<BettingEvent3[], SoccerV4Odds.SoccerV4OddsBettingEventsByDateError>`
- **Wire**: `GET /v4/soccer/odds/{format}/BettingEventsByDate/{competition}/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Odds.SoccerV4OddsBettingEventsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsBettingEventsByDateRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent3` | `bettingEvent3Schema` | `src/models/betting-event3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4OddsBettingEventsBySeason

- **Signature**: `soccerV4OddsBettingEventsBySeason(request: SoccerV4Odds.SoccerV4OddsBettingEventsBySeasonRequest, options?: RequestOptions): ApiPromise<BettingEvent3[], SoccerV4Odds.SoccerV4OddsBettingEventsBySeasonError>`
- **Wire**: `GET /v4/soccer/odds/{format}/BettingEventsBySeason/{competition}/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Odds.SoccerV4OddsBettingEventsBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsBettingEventsBySeasonRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent3` | `bettingEvent3Schema` | `src/models/betting-event3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4OddsBettingFuturesBySeason

- **Signature**: `soccerV4OddsBettingFuturesBySeason(request: SoccerV4Odds.SoccerV4OddsBettingFuturesBySeasonRequest, options?: RequestOptions): ApiPromise<BettingEvent3[], SoccerV4Odds.SoccerV4OddsBettingFuturesBySeasonError>`
- **Wire**: `GET /v4/soccer/odds/{format}/BettingFuturesBySeason/{competition}/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Odds.SoccerV4OddsBettingFuturesBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsBettingFuturesBySeasonRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent3` | `bettingEvent3Schema` | `src/models/betting-event3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4OddsBettingFuturesBySeasonSportsbookGroup

- **Signature**: `soccerV4OddsBettingFuturesBySeasonSportsbookGroup(request: SoccerV4Odds.SoccerV4OddsBettingFuturesBySeasonSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingEvent3[], SoccerV4Odds.SoccerV4OddsBettingFuturesBySeasonSportsbookGroupError>`
- **Wire**: `GET /v4/soccer/odds/{format}/BettingFuturesBySeason/{competition}/{season}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Odds.SoccerV4OddsBettingFuturesBySeasonSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsBettingFuturesBySeasonSportsbookGroupRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `season` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent3` | `bettingEvent3Schema` | `src/models/betting-event3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4OddsBettingMarket

- **Signature**: `soccerV4OddsBettingMarket(request: SoccerV4Odds.SoccerV4OddsBettingMarketRequest, options?: RequestOptions): ApiPromise<BettingMarket1, SoccerV4Odds.SoccerV4OddsBettingMarketError>`
- **Wire**: `GET /v4/soccer/odds/{format}/BettingMarket/{competition}/{marketId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket1`
- **Error**: `SoccerV4Odds.SoccerV4OddsBettingMarketError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsBettingMarketRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `marketId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket1` | `bettingMarket1Schema` | `src/models/betting-market1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4OddsBettingMarketSportsbookGroup

- **Signature**: `soccerV4OddsBettingMarketSportsbookGroup(request: SoccerV4Odds.SoccerV4OddsBettingMarketSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket1, SoccerV4Odds.SoccerV4OddsBettingMarketSportsbookGroupError>`
- **Wire**: `GET /v4/soccer/odds/{format}/BettingMarket/{competition}/{marketId}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket1`
- **Error**: `SoccerV4Odds.SoccerV4OddsBettingMarketSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsBettingMarketSportsbookGroupRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `marketId` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket1` | `bettingMarket1Schema` | `src/models/betting-market1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4OddsBettingMarketsByEvent

- **Signature**: `soccerV4OddsBettingMarketsByEvent(request: SoccerV4Odds.SoccerV4OddsBettingMarketsByEventRequest, options?: RequestOptions): ApiPromise<BettingMarket1[], SoccerV4Odds.SoccerV4OddsBettingMarketsByEventError>`
- **Wire**: `GET /v4/soccer/odds/{format}/BettingMarkets/{competition}/{eventId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Odds.SoccerV4OddsBettingMarketsByEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsBettingMarketsByEventRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `eventId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket1` | `bettingMarket1Schema` | `src/models/betting-market1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4OddsBettingMarketsByEventSportsbookGroup

- **Signature**: `soccerV4OddsBettingMarketsByEventSportsbookGroup(request: SoccerV4Odds.SoccerV4OddsBettingMarketsByEventSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket1[], SoccerV4Odds.SoccerV4OddsBettingMarketsByEventSportsbookGroupError>`
- **Wire**: `GET /v4/soccer/odds/{format}/BettingMarketsByEvent/{competition}/{eventId}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Odds.SoccerV4OddsBettingMarketsByEventSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsBettingMarketsByEventSportsbookGroupRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `eventId` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket1` | `bettingMarket1Schema` | `src/models/betting-market1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4OddsBettingMarketsByGame

- **Signature**: `soccerV4OddsBettingMarketsByGame(request: SoccerV4Odds.SoccerV4OddsBettingMarketsByGameRequest, options?: RequestOptions): ApiPromise<BettingMarket1[], SoccerV4Odds.SoccerV4OddsBettingMarketsByGameError>`
- **Wire**: `GET /v4/soccer/odds/{format}/BettingMarketsByGameID/{competition}/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Odds.SoccerV4OddsBettingMarketsByGameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsBettingMarketsByGameRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket1` | `bettingMarket1Schema` | `src/models/betting-market1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4OddsBettingMarketsByGameSportsbookGroup

- **Signature**: `soccerV4OddsBettingMarketsByGameSportsbookGroup(request: SoccerV4Odds.SoccerV4OddsBettingMarketsByGameSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket1[], SoccerV4Odds.SoccerV4OddsBettingMarketsByGameSportsbookGroupError>`
- **Wire**: `GET /v4/soccer/odds/{format}/BettingMarketsByGameID/{competition}/{gameid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Odds.SoccerV4OddsBettingMarketsByGameSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsBettingMarketsByGameSportsbookGroupRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `gameid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket1` | `bettingMarket1Schema` | `src/models/betting-market1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4OddsBettingMarketsByMarketType

- **Signature**: `soccerV4OddsBettingMarketsByMarketType(request: SoccerV4Odds.SoccerV4OddsBettingMarketsByMarketTypeRequest, options?: RequestOptions): ApiPromise<BettingMarket1[], SoccerV4Odds.SoccerV4OddsBettingMarketsByMarketTypeError>`
- **Wire**: `GET /v4/soccer/odds/{format}/BettingMarketsByMarketType/{competition}/{eventId}/{marketTypeID}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Odds.SoccerV4OddsBettingMarketsByMarketTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsBettingMarketsByMarketTypeRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `format` | `path` | — | `Format` | no | `Format.Json` |
| `competition` | `path` | — | `string` | yes | — |
| `eventId` | `path` | — | `string` | yes | — |
| `marketTypeId` | `path` | `marketTypeID` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket1` | `bettingMarket1Schema` | `src/models/betting-market1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4OddsBettingMarketsByMarketTypeSportsbookGroup

- **Signature**: `soccerV4OddsBettingMarketsByMarketTypeSportsbookGroup(request: SoccerV4Odds.SoccerV4OddsBettingMarketsByMarketTypeSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket1[], SoccerV4Odds.SoccerV4OddsBettingMarketsByMarketTypeSportsbookGroupError>`
- **Wire**: `GET /v4/soccer/odds/{format}/BettingMarketsByMarketType/{competition}/{eventId}/{marketTypeID}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Odds.SoccerV4OddsBettingMarketsByMarketTypeSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsBettingMarketsByMarketTypeSportsbookGroupRequest` (5):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `format` | `path` | — | `Format` | no | `Format.Json` |
| `competition` | `path` | — | `string` | yes | — |
| `eventId` | `path` | — | `string` | yes | — |
| `marketTypeId` | `path` | `marketTypeID` | `string` | yes | — |
| `sportsbookgroup` | `path` | — | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket1` | `bettingMarket1Schema` | `src/models/betting-market1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4OddsBettingMetadata

- **Signature**: `soccerV4OddsBettingMetadata(request: SoccerV4Odds.SoccerV4OddsBettingMetadataRequest, options?: RequestOptions): ApiPromise<BettingEntityMetadataCollection1, SoccerV4Odds.SoccerV4OddsBettingMetadataError>`
- **Wire**: `GET /v4/soccer/odds/{format}/BettingMetadata`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEntityMetadataCollection1`
- **Error**: `SoccerV4Odds.SoccerV4OddsBettingMetadataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsBettingMetadataRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEntityMetadataCollection1` | `bettingEntityMetadataCollection1Schema` | `src/models/betting-entity-metadata-collection1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4OddsBettingPlayerPropsByGame

- **Signature**: `soccerV4OddsBettingPlayerPropsByGame(request: SoccerV4Odds.SoccerV4OddsBettingPlayerPropsByGameRequest, options?: RequestOptions): ApiPromise<BettingMarket1[], SoccerV4Odds.SoccerV4OddsBettingPlayerPropsByGameError>`
- **Wire**: `GET /v4/soccer/odds/{format}/BettingPlayerPropsByGameID/{competition}/{gameId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Odds.SoccerV4OddsBettingPlayerPropsByGameError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsBettingPlayerPropsByGameRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `gameId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket1` | `bettingMarket1Schema` | `src/models/betting-market1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4OddsBettingPlayerPropsByGameSportsbookGroup

- **Signature**: `soccerV4OddsBettingPlayerPropsByGameSportsbookGroup(request: SoccerV4Odds.SoccerV4OddsBettingPlayerPropsByGameSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket1[], SoccerV4Odds.SoccerV4OddsBettingPlayerPropsByGameSportsbookGroupError>`
- **Wire**: `GET /v4/soccer/odds/{format}/BettingPlayerPropsByGameID/{competition}/{gameId}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Odds.SoccerV4OddsBettingPlayerPropsByGameSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsBettingPlayerPropsByGameSportsbookGroupRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `gameId` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket1` | `bettingMarket1Schema` | `src/models/betting-market1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4OddsInGameOddsByDate

- **Signature**: `soccerV4OddsInGameOddsByDate(request: SoccerV4Odds.SoccerV4OddsInGameOddsByDateRequest, options?: RequestOptions): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsInGameOddsByDateError>`
- **Wire**: `GET /v4/soccer/odds/{format}/LiveGameOddsByDate/{competition}/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo7[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Odds.SoccerV4OddsInGameOddsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsInGameOddsByDateRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo7` | `gameInfo7Schema` | `src/models/game-info7.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4OddsInGameOddsByDateSportsbookGroup

- **Signature**: `soccerV4OddsInGameOddsByDateSportsbookGroup(request: SoccerV4Odds.SoccerV4OddsInGameOddsByDateSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsInGameOddsByDateSportsbookGroupError>`
- **Wire**: `GET /v4/soccer/odds/{format}/InGameOddsByDate/{competition}/{date}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo7[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Odds.SoccerV4OddsInGameOddsByDateSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsInGameOddsByDateSportsbookGroupRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `date` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo7` | `gameInfo7Schema` | `src/models/game-info7.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4OddsInGameOddsLineMovement

- **Signature**: `soccerV4OddsInGameOddsLineMovement(request: SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementRequest, options?: RequestOptions): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementError>`
- **Wire**: `GET /v4/soccer/odds/{format}/LiveGameOddsLineMovement/{competition}/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo7[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo7` | `gameInfo7Schema` | `src/models/game-info7.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4OddsInGameOddsLineMovementSportsbookGroup

- **Signature**: `soccerV4OddsInGameOddsLineMovementSportsbookGroup(request: SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementSportsbookGroupError>`
- **Wire**: `GET /v4/soccer/odds/{format}/InGameOddsLineMovement/{competition}/{gameid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo7[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementSportsbookGroupRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `gameid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo7` | `gameInfo7Schema` | `src/models/game-info7.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4OddsInGameOddsLineMovementWithResultingSportsbookGroup

- **Signature**: `soccerV4OddsInGameOddsLineMovementWithResultingSportsbookGroup(request: SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfoResult6[], SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementWithResultingSportsbookGroupError>`
- **Wire**: `GET /v4/soccer/odds/{format}/InGameOddsLineMovementWithResulting/{competition}/{gameid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfoResult6[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementWithResultingSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsInGameOddsLineMovementWithResultingSportsbookGroupRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `gameid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfoResult6` | `gameInfoResult6Schema` | `src/models/game-info-result6.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4OddsPeriodGameOddsByDate

- **Signature**: `soccerV4OddsPeriodGameOddsByDate(request: SoccerV4Odds.SoccerV4OddsPeriodGameOddsByDateRequest, options?: RequestOptions): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsPeriodGameOddsByDateError>`
- **Wire**: `GET /v4/soccer/odds/{format}/AlternateMarketGameOddsByDate/{competition}/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo7[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Odds.SoccerV4OddsPeriodGameOddsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsPeriodGameOddsByDateRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo7` | `gameInfo7Schema` | `src/models/game-info7.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4OddsPeriodGameOddsLineMovement

- **Signature**: `soccerV4OddsPeriodGameOddsLineMovement(request: SoccerV4Odds.SoccerV4OddsPeriodGameOddsLineMovementRequest, options?: RequestOptions): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsPeriodGameOddsLineMovementError>`
- **Wire**: `GET /v4/soccer/odds/{format}/AlternateMarketGameOddsLineMovement/{competition}/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo7[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Odds.SoccerV4OddsPeriodGameOddsLineMovementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsPeriodGameOddsLineMovementRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo7` | `gameInfo7Schema` | `src/models/game-info7.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4OddsPreGameAndPeriodGameOddsByDateSportsbookGroup

- **Signature**: `soccerV4OddsPreGameAndPeriodGameOddsByDateSportsbookGroup(request: SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsByDateSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError>`
- **Wire**: `GET /v4/soccer/odds/{format}/PreGameOddsByDate/{competition}/{date}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo7[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsByDateSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsByDateSportsbookGroupRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `date` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo7` | `gameInfo7Schema` | `src/models/game-info7.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup

- **Signature**: `soccerV4OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroup(request: SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError>`
- **Wire**: `GET /v4/soccer/odds/{format}/PreGameOddsLineMovement/{competition}/{gameid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo7[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsLineMovementSportsbookGroupRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `gameid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo7` | `gameInfo7Schema` | `src/models/game-info7.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroup

- **Signature**: `soccerV4OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroup(request: SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest, options?: RequestOptions): ApiPromise<GameInfoResult6[], SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError>`
- **Wire**: `GET /v4/soccer/odds/{format}/PreGameOddsLineMovementWithResulting/{competition}/{gameid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfoResult6[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsPreGameAndPeriodGameOddsLineMovementWithResultingSportsbookGroupRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `gameid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfoResult6` | `gameInfoResult6Schema` | `src/models/game-info-result6.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4OddsPreGameOddsByDate

- **Signature**: `soccerV4OddsPreGameOddsByDate(request: SoccerV4Odds.SoccerV4OddsPreGameOddsByDateRequest, options?: RequestOptions): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsPreGameOddsByDateError>`
- **Wire**: `GET /v4/soccer/odds/{format}/GameOddsByDate/{competition}/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo7[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Odds.SoccerV4OddsPreGameOddsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsPreGameOddsByDateRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo7` | `gameInfo7Schema` | `src/models/game-info7.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4OddsPreGameOddsLineMovement

- **Signature**: `soccerV4OddsPreGameOddsLineMovement(request: SoccerV4Odds.SoccerV4OddsPreGameOddsLineMovementRequest, options?: RequestOptions): ApiPromise<GameInfo7[], SoccerV4Odds.SoccerV4OddsPreGameOddsLineMovementError>`
- **Wire**: `GET /v4/soccer/odds/{format}/GameOddsLineMovement/{competition}/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `GameInfo7[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Odds.SoccerV4OddsPreGameOddsLineMovementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsPreGameOddsLineMovementRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `GameInfo7` | `gameInfo7Schema` | `src/models/game-info7.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4OddsSportsbooksByActive

- **Signature**: `soccerV4OddsSportsbooksByActive(request: SoccerV4Odds.SoccerV4OddsSportsbooksByActiveRequest, options?: RequestOptions): ApiPromise<Sportsbook[], SoccerV4Odds.SoccerV4OddsSportsbooksByActiveError>`
- **Wire**: `GET /v4/soccer/odds/{format}/ActiveSportsbooks`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Sportsbook[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Odds.SoccerV4OddsSportsbooksByActiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Odds.SoccerV4OddsSportsbooksByActiveRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Sportsbook` | `sportsbookSchema` | `src/models/sportsbook.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

