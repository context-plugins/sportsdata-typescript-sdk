<!-- Generated file — do not edit; regenerated with the SDK. -->

# NbaV3Projections — operations

Accessor: `client.nbaV3Projections` · Source: `src/resources/nba-v3-projections.ts` · 6 operations · Request and error types: namespace `NbaV3Projections`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### nbaV3ProjectionsDfsSlatesByDate

- **Signature**: `nbaV3ProjectionsDfsSlatesByDate(request: NbaV3Projections.NbaV3ProjectionsDfsSlatesByDateRequest, options?: RequestOptions): ApiPromise<DfsSlate[], NbaV3Projections.NbaV3ProjectionsDfsSlatesByDateError>`
- **Wire**: `GET /v3/nba/projections/{format}/DfsSlatesByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DfsSlate[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Projections.NbaV3ProjectionsDfsSlatesByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Projections.NbaV3ProjectionsDfsSlatesByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `DfsSlate` | `dfsSlateSchema` | `src/models/dfs-slate.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ProjectionsPlayerDetailsByInjured

- **Signature**: `nbaV3ProjectionsPlayerDetailsByInjured(request: NbaV3Projections.NbaV3ProjectionsPlayerDetailsByInjuredRequest, options?: RequestOptions): ApiPromise<Player1[], NbaV3Projections.NbaV3ProjectionsPlayerDetailsByInjuredError>`
- **Wire**: `GET /v3/nba/projections/{format}/InjuredPlayers`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Projections.NbaV3ProjectionsPlayerDetailsByInjuredError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Projections.NbaV3ProjectionsPlayerDetailsByInjuredRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player1` | `player1Schema` | `src/models/player1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ProjectionsProjectedPlayerGameStatsByDate

- **Signature**: `nbaV3ProjectionsProjectedPlayerGameStatsByDate(request: NbaV3Projections.NbaV3ProjectionsProjectedPlayerGameStatsByDateRequest, options?: RequestOptions): ApiPromise<PlayerGameProjection1[], NbaV3Projections.NbaV3ProjectionsProjectedPlayerGameStatsByDateError>`
- **Wire**: `GET /v3/nba/projections/{format}/PlayerGameProjectionStatsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGameProjection1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Projections.NbaV3ProjectionsProjectedPlayerGameStatsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Projections.NbaV3ProjectionsProjectedPlayerGameStatsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGameProjection1` | `playerGameProjection1Schema` | `src/models/player-game-projection1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ProjectionsProjectedPlayerSeasonStats

- **Signature**: `nbaV3ProjectionsProjectedPlayerSeasonStats(request: NbaV3Projections.NbaV3ProjectionsProjectedPlayerSeasonStatsRequest, options?: RequestOptions): ApiPromise<PlayerSeasonProjection1[], NbaV3Projections.NbaV3ProjectionsProjectedPlayerSeasonStatsError>`
- **Wire**: `GET /v3/nba/projections/{format}/PlayerSeasonProjectionStats/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeasonProjection1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Projections.NbaV3ProjectionsProjectedPlayerSeasonStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Projections.NbaV3ProjectionsProjectedPlayerSeasonStatsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeasonProjection1` | `playerSeasonProjection1Schema` | `src/models/player-season-projection1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ProjectionsProjectedPlayerSeasonStatsByTeam

- **Signature**: `nbaV3ProjectionsProjectedPlayerSeasonStatsByTeam(request: NbaV3Projections.NbaV3ProjectionsProjectedPlayerSeasonStatsByTeamRequest, options?: RequestOptions): ApiPromise<PlayerSeasonProjection1[], NbaV3Projections.NbaV3ProjectionsProjectedPlayerSeasonStatsByTeamError>`
- **Wire**: `GET /v3/nba/projections/{format}/PlayerSeasonProjectionStatsByTeam/{season}/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeasonProjection1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Projections.NbaV3ProjectionsProjectedPlayerSeasonStatsByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Projections.NbaV3ProjectionsProjectedPlayerSeasonStatsByTeamRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeasonProjection1` | `playerSeasonProjection1Schema` | `src/models/player-season-projection1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ProjectionsStartingLineupsByDate

- **Signature**: `nbaV3ProjectionsStartingLineupsByDate(request: NbaV3Projections.NbaV3ProjectionsStartingLineupsByDateRequest, options?: RequestOptions): ApiPromise<StartingLineups[], NbaV3Projections.NbaV3ProjectionsStartingLineupsByDateError>`
- **Wire**: `GET /v3/nba/projections/{format}/StartingLineupsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StartingLineups[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Projections.NbaV3ProjectionsStartingLineupsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Projections.NbaV3ProjectionsStartingLineupsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `StartingLineups` | `startingLineupsSchema` | `src/models/starting-lineups.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

