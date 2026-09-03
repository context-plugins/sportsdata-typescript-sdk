<!-- Generated file — do not edit; regenerated with the SDK. -->

# NascarV3Odds — operations

Accessor: `client.nascarV3Odds` · Source: `src/resources/nascar-v3-odds.ts` · 10 operations · Request and error types: namespace `NascarV3Odds`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### nascarV3OddsBettingEventsByDate

- **Signature**: `nascarV3OddsBettingEventsByDate(request: NascarV3Odds.NascarV3OddsBettingEventsByDateRequest, options?: RequestOptions): ApiPromise<BettingEvent5[], NascarV3Odds.NascarV3OddsBettingEventsByDateError>`
- **Wire**: `GET /v3/nascar/odds/{format}/BettingEventsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NascarV3Odds.NascarV3OddsBettingEventsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NascarV3Odds.NascarV3OddsBettingEventsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent5` | `bettingEvent5Schema` | `src/models/betting-event5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nascarV3OddsBettingEventsBySeason

- **Signature**: `nascarV3OddsBettingEventsBySeason(request: NascarV3Odds.NascarV3OddsBettingEventsBySeasonRequest, options?: RequestOptions): ApiPromise<BettingEvent5[], NascarV3Odds.NascarV3OddsBettingEventsBySeasonError>`
- **Wire**: `GET /v3/nascar/odds/{format}/BettingEvents/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEvent5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NascarV3Odds.NascarV3OddsBettingEventsBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NascarV3Odds.NascarV3OddsBettingEventsBySeasonRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEvent5` | `bettingEvent5Schema` | `src/models/betting-event5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nascarV3OddsBettingMarket

- **Signature**: `nascarV3OddsBettingMarket(request: NascarV3Odds.NascarV3OddsBettingMarketRequest, options?: RequestOptions): ApiPromise<BettingMarket3, NascarV3Odds.NascarV3OddsBettingMarketError>`
- **Wire**: `GET /v3/nascar/odds/{format}/BettingMarket/{marketId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket3`
- **Error**: `NascarV3Odds.NascarV3OddsBettingMarketError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NascarV3Odds.NascarV3OddsBettingMarketRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `marketId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingMarket3` | `bettingMarket3Schema` | `src/models/betting-market3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nascarV3OddsBettingMarketsByEvent

- **Signature**: `nascarV3OddsBettingMarketsByEvent(request: NascarV3Odds.NascarV3OddsBettingMarketsByEventRequest, options?: RequestOptions): ApiPromise<BettingMarket3[], NascarV3Odds.NascarV3OddsBettingMarketsByEventError>`
- **Wire**: `GET /v3/nascar/odds/{format}/BettingMarkets/{eventId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NascarV3Odds.NascarV3OddsBettingMarketsByEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NascarV3Odds.NascarV3OddsBettingMarketsByEventRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `eventId` | `path` | `string` | yes | — |
| `include` | `query` | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket3` | `bettingMarket3Schema` | `src/models/betting-market3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nascarV3OddsBettingMarketsByMarketType

- **Signature**: `nascarV3OddsBettingMarketsByMarketType(request: NascarV3Odds.NascarV3OddsBettingMarketsByMarketTypeRequest, options?: RequestOptions): ApiPromise<BettingMarket3[], NascarV3Odds.NascarV3OddsBettingMarketsByMarketTypeError>`
- **Wire**: `GET /v3/nascar/odds/{format}/BettingMarketsByMarketType/{eventID}/{marketTypeID}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NascarV3Odds.NascarV3OddsBettingMarketsByMarketTypeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NascarV3Odds.NascarV3OddsBettingMarketsByMarketTypeRequest` (4):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `format` | `path` | — | `Format` | no | `Format.Json` |
| `eventId` | `path` | `eventID` | `string` | yes | — |
| `marketTypeId` | `path` | `marketTypeID` | `string` | yes | — |
| `include` | `query` | — | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket3` | `bettingMarket3Schema` | `src/models/betting-market3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nascarV3OddsBettingMarketsByRace

- **Signature**: `nascarV3OddsBettingMarketsByRace(request: NascarV3Odds.NascarV3OddsBettingMarketsByRaceRequest, options?: RequestOptions): ApiPromise<BettingMarket3[], NascarV3Odds.NascarV3OddsBettingMarketsByRaceError>`
- **Wire**: `GET /v3/nascar/odds/{format}/BettingMarketsByRaceID/{raceID}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingMarket3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NascarV3Odds.NascarV3OddsBettingMarketsByRaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NascarV3Odds.NascarV3OddsBettingMarketsByRaceRequest` (3):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `format` | `path` | — | `Format` | no | `Format.Json` |
| `raceId` | `path` | `raceID` | `string` | yes | — |
| `include` | `query` | — | `Include` | no | `Include.Available` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Include` | `includeSchema` | `src/models/include.ts` |
| `BettingMarket3` | `bettingMarket3Schema` | `src/models/betting-market3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nascarV3OddsBettingMetadata

- **Signature**: `nascarV3OddsBettingMetadata(request: NascarV3Odds.NascarV3OddsBettingMetadataRequest, options?: RequestOptions): ApiPromise<BettingEntityMetadataCollection3, NascarV3Odds.NascarV3OddsBettingMetadataError>`
- **Wire**: `GET /v3/nascar/odds/{format}/BettingMetaData`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BettingEntityMetadataCollection3`
- **Error**: `NascarV3Odds.NascarV3OddsBettingMetadataError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NascarV3Odds.NascarV3OddsBettingMetadataRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BettingEntityMetadataCollection3` | `bettingEntityMetadataCollection3Schema` | `src/models/betting-entity-metadata-collection3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nascarV3OddsRaceOdds

- **Signature**: `nascarV3OddsRaceOdds(request: NascarV3Odds.NascarV3OddsRaceOddsRequest, options?: RequestOptions): ApiPromise<RaceOdds, NascarV3Odds.NascarV3OddsRaceOddsError>`
- **Wire**: `GET /v3/nascar/odds/{format}/RaceOdds/{Raceid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RaceOdds`
- **Error**: `NascarV3Odds.NascarV3OddsRaceOddsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NascarV3Odds.NascarV3OddsRaceOddsRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `format` | `path` | — | `Format` | no | `Format.Json` |
| `raceid` | `path` | `Raceid` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `RaceOdds` | `raceOddsSchema` | `src/models/race-odds.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nascarV3OddsRaceOddsLineMovement

- **Signature**: `nascarV3OddsRaceOddsLineMovement(request: NascarV3Odds.NascarV3OddsRaceOddsLineMovementRequest, options?: RequestOptions): ApiPromise<RaceOdds, NascarV3Odds.NascarV3OddsRaceOddsLineMovementError>`
- **Wire**: `GET /v3/nascar/odds/{format}/RaceOddsLineMovement/{Raceid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RaceOdds`
- **Error**: `NascarV3Odds.NascarV3OddsRaceOddsLineMovementError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NascarV3Odds.NascarV3OddsRaceOddsLineMovementRequest` (2):

| Field | Channel | Wire | Type | Req | Default |
| --- | --- | --- | --- | --- | --- |
| `format` | `path` | — | `Format` | no | `Format.Json` |
| `raceid` | `path` | `Raceid` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `RaceOdds` | `raceOddsSchema` | `src/models/race-odds.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nascarV3OddsSportsbooksByActive

- **Signature**: `nascarV3OddsSportsbooksByActive(request: NascarV3Odds.NascarV3OddsSportsbooksByActiveRequest, options?: RequestOptions): ApiPromise<Sportsbook[], NascarV3Odds.NascarV3OddsSportsbooksByActiveError>`
- **Wire**: `GET /v3/nascar/odds/{format}/ActiveSportsbooks`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Sportsbook[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NascarV3Odds.NascarV3OddsSportsbooksByActiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NascarV3Odds.NascarV3OddsSportsbooksByActiveRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Sportsbook` | `sportsbookSchema` | `src/models/sportsbook.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

