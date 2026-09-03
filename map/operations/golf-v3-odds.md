<!-- Generated file — do not edit; regenerated with the SDK. -->

# GolfV3Odds — operations

Accessor: `client.golfV3Odds` · Source: `src/resources/golf-v3-odds.ts` · 21 operations · Request and error types: namespace `GolfV3Odds`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### golfV3OddsBettingEventsByDate

- **Signature**: `golfV3OddsBettingEventsByDate(request: GolfV3Odds.GolfV3OddsBettingEventsByDateRequest, options?: RequestOptions): ApiPromise<BettingEvent4[], GolfV3Odds.GolfV3OddsBettingEventsByDateError>`
- **Wire**: `GET /v3/golf/odds/{format}/BettingEventsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV3Odds.GolfV3OddsBettingEventsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV3Odds.GolfV3OddsBettingEventsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent4` | `bettingEvent4Schema` | `src/models/betting-event4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV3OddsBettingEventsBySeason

- **Signature**: `golfV3OddsBettingEventsBySeason(request: GolfV3Odds.GolfV3OddsBettingEventsBySeasonRequest, options?: RequestOptions): ApiPromise<BettingEvent4[], GolfV3Odds.GolfV3OddsBettingEventsBySeasonError>`
- **Wire**: `GET /v3/golf/odds/{format}/BettingEvents/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV3Odds.GolfV3OddsBettingEventsBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV3Odds.GolfV3OddsBettingEventsBySeasonRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent4` | `bettingEvent4Schema` | `src/models/betting-event4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV3OddsBettingMarket

- **Signature**: `golfV3OddsBettingMarket(request: GolfV3Odds.GolfV3OddsBettingMarketRequest, options?: RequestOptions): ApiPromise<BettingMarket2, GolfV3Odds.GolfV3OddsBettingMarketError>`
- **Wire**: `GET /v3/golf/odds/{format}/BettingMarket/{marketId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket2`
- **Error**: `GolfV3Odds.GolfV3OddsBettingMarketError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV3Odds.GolfV3OddsBettingMarketRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `marketId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket2` | `bettingMarket2Schema` | `src/models/betting-market2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV3OddsBettingMarketSportsbookGroup

- **Signature**: `golfV3OddsBettingMarketSportsbookGroup(request: GolfV3Odds.GolfV3OddsBettingMarketSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket2, GolfV3Odds.GolfV3OddsBettingMarketSportsbookGroupError>`
- **Wire**: `GET /v3/golf/odds/{format}/BettingMarket/{marketId}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket2`
- **Error**: `GolfV3Odds.GolfV3OddsBettingMarketSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV3Odds.GolfV3OddsBettingMarketSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `marketId` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket2` | `bettingMarket2Schema` | `src/models/betting-market2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV3OddsBettingMarketsByEvent

- **Signature**: `golfV3OddsBettingMarketsByEvent(request: GolfV3Odds.GolfV3OddsBettingMarketsByEventRequest, options?: RequestOptions): ApiPromise<BettingMarket2[], GolfV3Odds.GolfV3OddsBettingMarketsByEventError>`
- **Wire**: `GET /v3/golf/odds/{format}/BettingMarkets/{eventId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV3Odds.GolfV3OddsBettingMarketsByEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV3Odds.GolfV3OddsBettingMarketsByEventRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `eventId` | `path` | `string` | yes | — |
| `include` | `query` | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket2` | `bettingMarket2Schema` | `src/models/betting-market2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV3OddsBettingMarketsByEventSportsbookGroup

- **Signature**: `golfV3OddsBettingMarketsByEventSportsbookGroup(request: GolfV3Odds.GolfV3OddsBettingMarketsByEventSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket2[], GolfV3Odds.GolfV3OddsBettingMarketsByEventSportsbookGroupError>`
- **Wire**: `GET /v3/golf/odds/{format}/BettingMarketsByEvent/{eventId}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV3Odds.GolfV3OddsBettingMarketsByEventSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV3Odds.GolfV3OddsBettingMarketsByEventSportsbookGroupRequest` (4):

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
| `BettingMarket2` | `bettingMarket2Schema` | `src/models/betting-market2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV3OddsBettingMarketsByMarketType

- **Signature**: `golfV3OddsBettingMarketsByMarketType(request: GolfV3Odds.GolfV3OddsBettingMarketsByMarketTypeRequest, options?: RequestOptions): ApiPromise<BettingMarket2[], GolfV3Odds.GolfV3OddsBettingMarketsByMarketTypeError>`
- **Wire**: `GET /v3/golf/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV3Odds.GolfV3OddsBettingMarketsByMarketTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV3Odds.GolfV3OddsBettingMarketsByMarketTypeRequest` (4):

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
| `BettingMarket2` | `bettingMarket2Schema` | `src/models/betting-market2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV3OddsBettingMarketsByMarketTypeSportsbookGroup

- **Signature**: `golfV3OddsBettingMarketsByMarketTypeSportsbookGroup(request: GolfV3Odds.GolfV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket2[], GolfV3Odds.GolfV3OddsBettingMarketsByMarketTypeSportsbookGroupError>`
- **Wire**: `GET /v3/golf/odds/{format}/BettingMarketsByMarketType/{eventId}/{marketTypeID}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV3Odds.GolfV3OddsBettingMarketsByMarketTypeSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV3Odds.GolfV3OddsBettingMarketsByMarketTypeSportsbookGroupRequest` (5):

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
| `BettingMarket2` | `bettingMarket2Schema` | `src/models/betting-market2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV3OddsBettingMarketsByTournament

- **Signature**: `golfV3OddsBettingMarketsByTournament(request: GolfV3Odds.GolfV3OddsBettingMarketsByTournamentRequest, options?: RequestOptions): ApiPromise<BettingMarket2[], GolfV3Odds.GolfV3OddsBettingMarketsByTournamentError>`
- **Wire**: `GET /v3/golf/odds/{format}/BettingMarketsByTournamentID/{tournamentid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV3Odds.GolfV3OddsBettingMarketsByTournamentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV3Odds.GolfV3OddsBettingMarketsByTournamentRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `tournamentid` | `path` | `string` | yes | — |
| `include` | `query` | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket2` | `bettingMarket2Schema` | `src/models/betting-market2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV3OddsBettingMarketsByTournamentSportsbookGroup

- **Signature**: `golfV3OddsBettingMarketsByTournamentSportsbookGroup(request: GolfV3Odds.GolfV3OddsBettingMarketsByTournamentSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket2[], GolfV3Odds.GolfV3OddsBettingMarketsByTournamentSportsbookGroupError>`
- **Wire**: `GET /v3/golf/odds/{format}/BettingMarketsByTournamentID/{tournamentid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV3Odds.GolfV3OddsBettingMarketsByTournamentSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV3Odds.GolfV3OddsBettingMarketsByTournamentSportsbookGroupRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `tournamentid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |
| `include` | `query` | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket2` | `bettingMarket2Schema` | `src/models/betting-market2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV3OddsBettingMetadata

- **Signature**: `golfV3OddsBettingMetadata(request: GolfV3Odds.GolfV3OddsBettingMetadataRequest, options?: RequestOptions): ApiPromise<BettingEntityMetadataCollection2, GolfV3Odds.GolfV3OddsBettingMetadataError>`
- **Wire**: `GET /v3/golf/odds/{format}/BettingMetadata`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEntityMetadataCollection2`
- **Error**: `GolfV3Odds.GolfV3OddsBettingMetadataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV3Odds.GolfV3OddsBettingMetadataRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEntityMetadataCollection2` | `bettingEntityMetadataCollection2Schema` | `src/models/betting-entity-metadata-collection2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV3OddsBettingPlayerPropsByTournamentSportsbookGroup

- **Signature**: `golfV3OddsBettingPlayerPropsByTournamentSportsbookGroup(request: GolfV3Odds.GolfV3OddsBettingPlayerPropsByTournamentSportsbookGroupRequest, options?: RequestOptions): ApiPromise<BettingMarket2[], GolfV3Odds.GolfV3OddsBettingPlayerPropsByTournamentSportsbookGroupError>`
- **Wire**: `GET /v3/golf/odds/{format}/BettingPlayerPropsByTournamentID/{tournamentid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV3Odds.GolfV3OddsBettingPlayerPropsByTournamentSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV3Odds.GolfV3OddsBettingPlayerPropsByTournamentSportsbookGroupRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `tournamentid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |
| `include` | `query` | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket2` | `bettingMarket2Schema` | `src/models/betting-market2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV3OddsInPlayTournamentOdds

- **Signature**: `golfV3OddsInPlayTournamentOdds(request: GolfV3Odds.GolfV3OddsInPlayTournamentOddsRequest, options?: RequestOptions): ApiPromise<TournamentOdds, GolfV3Odds.GolfV3OddsInPlayTournamentOddsError>`
- **Wire**: `GET /v3/golf/odds/{format}/InPlayTournamentOdds/{tournamentid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TournamentOdds`
- **Error**: `GolfV3Odds.GolfV3OddsInPlayTournamentOddsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV3Odds.GolfV3OddsInPlayTournamentOddsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `tournamentid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TournamentOdds` | `tournamentOddsSchema` | `src/models/tournament-odds.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV3OddsInPlayTournamentOddsSportsbookGroup

- **Signature**: `golfV3OddsInPlayTournamentOddsSportsbookGroup(request: GolfV3Odds.GolfV3OddsInPlayTournamentOddsSportsbookGroupRequest, options?: RequestOptions): ApiPromise<TournamentOdds, GolfV3Odds.GolfV3OddsInPlayTournamentOddsSportsbookGroupError>`
- **Wire**: `GET /v3/golf/odds/{format}/InPlayTournamentOdds/{tournamentid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TournamentOdds`
- **Error**: `GolfV3Odds.GolfV3OddsInPlayTournamentOddsSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV3Odds.GolfV3OddsInPlayTournamentOddsSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `tournamentid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TournamentOdds` | `tournamentOddsSchema` | `src/models/tournament-odds.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV3OddsInPlayTournamentOddsLineMovement

- **Signature**: `golfV3OddsInPlayTournamentOddsLineMovement(request: GolfV3Odds.GolfV3OddsInPlayTournamentOddsLineMovementRequest, options?: RequestOptions): ApiPromise<TournamentOdds, GolfV3Odds.GolfV3OddsInPlayTournamentOddsLineMovementError>`
- **Wire**: `GET /v3/golf/odds/{format}/InPlayTournamentOddsLineMovement/{tournamentid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TournamentOdds`
- **Error**: `GolfV3Odds.GolfV3OddsInPlayTournamentOddsLineMovementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV3Odds.GolfV3OddsInPlayTournamentOddsLineMovementRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `tournamentid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TournamentOdds` | `tournamentOddsSchema` | `src/models/tournament-odds.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV3OddsInPlayTournamentOddsLineMovementSportsbookGroup

- **Signature**: `golfV3OddsInPlayTournamentOddsLineMovementSportsbookGroup(request: GolfV3Odds.GolfV3OddsInPlayTournamentOddsLineMovementSportsbookGroupRequest, options?: RequestOptions): ApiPromise<TournamentOdds, GolfV3Odds.GolfV3OddsInPlayTournamentOddsLineMovementSportsbookGroupError>`
- **Wire**: `GET /v3/golf/odds/{format}/InPlayTournamentOddsLineMovement/{tournamentid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TournamentOdds`
- **Error**: `GolfV3Odds.GolfV3OddsInPlayTournamentOddsLineMovementSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV3Odds.GolfV3OddsInPlayTournamentOddsLineMovementSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `tournamentid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TournamentOdds` | `tournamentOddsSchema` | `src/models/tournament-odds.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV3OddsSportsbooksByActive

- **Signature**: `golfV3OddsSportsbooksByActive(request: GolfV3Odds.GolfV3OddsSportsbooksByActiveRequest, options?: RequestOptions): ApiPromise<Sportsbook[], GolfV3Odds.GolfV3OddsSportsbooksByActiveError>`
- **Wire**: `GET /v3/golf/odds/{format}/ActiveSportsbooks`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Sportsbook[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV3Odds.GolfV3OddsSportsbooksByActiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV3Odds.GolfV3OddsSportsbooksByActiveRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Sportsbook` | `sportsbookSchema` | `src/models/sportsbook.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV3OddsTournamentOdds

- **Signature**: `golfV3OddsTournamentOdds(request: GolfV3Odds.GolfV3OddsTournamentOddsRequest, options?: RequestOptions): ApiPromise<TournamentOdds, GolfV3Odds.GolfV3OddsTournamentOddsError>`
- **Wire**: `GET /v3/golf/odds/{format}/TournamentOdds/{tournamentid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TournamentOdds`
- **Error**: `GolfV3Odds.GolfV3OddsTournamentOddsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV3Odds.GolfV3OddsTournamentOddsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `tournamentid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TournamentOdds` | `tournamentOddsSchema` | `src/models/tournament-odds.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV3OddsTournamentOddsSportsbookGroup

- **Signature**: `golfV3OddsTournamentOddsSportsbookGroup(request: GolfV3Odds.GolfV3OddsTournamentOddsSportsbookGroupRequest, options?: RequestOptions): ApiPromise<TournamentOdds, GolfV3Odds.GolfV3OddsTournamentOddsSportsbookGroupError>`
- **Wire**: `GET /v3/golf/odds/{format}/TournamentOdds/{tournamentid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TournamentOdds`
- **Error**: `GolfV3Odds.GolfV3OddsTournamentOddsSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV3Odds.GolfV3OddsTournamentOddsSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `tournamentid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TournamentOdds` | `tournamentOddsSchema` | `src/models/tournament-odds.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV3OddsTournamentOddsLineMovement

- **Signature**: `golfV3OddsTournamentOddsLineMovement(request: GolfV3Odds.GolfV3OddsTournamentOddsLineMovementRequest, options?: RequestOptions): ApiPromise<TournamentOdds, GolfV3Odds.GolfV3OddsTournamentOddsLineMovementError>`
- **Wire**: `GET /v3/golf/odds/{format}/TournamentOddsLineMovement/{tournamentid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TournamentOdds`
- **Error**: `GolfV3Odds.GolfV3OddsTournamentOddsLineMovementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV3Odds.GolfV3OddsTournamentOddsLineMovementRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `tournamentid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TournamentOdds` | `tournamentOddsSchema` | `src/models/tournament-odds.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV3OddsTournamentOddsLineMovementSportsbookGroup

- **Signature**: `golfV3OddsTournamentOddsLineMovementSportsbookGroup(request: GolfV3Odds.GolfV3OddsTournamentOddsLineMovementSportsbookGroupRequest, options?: RequestOptions): ApiPromise<TournamentOdds, GolfV3Odds.GolfV3OddsTournamentOddsLineMovementSportsbookGroupError>`
- **Wire**: `GET /v3/golf/odds/{format}/TournamentOddsLineMovement/{tournamentid}/{sportsbookgroup}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TournamentOdds`
- **Error**: `GolfV3Odds.GolfV3OddsTournamentOddsLineMovementSportsbookGroupError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV3Odds.GolfV3OddsTournamentOddsLineMovementSportsbookGroupRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `tournamentid` | `path` | `string` | yes | — |
| `sportsbookgroup` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TournamentOdds` | `tournamentOddsSchema` | `src/models/tournament-odds.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

