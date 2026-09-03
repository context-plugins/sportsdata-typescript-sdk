<!-- Generated file — do not edit; regenerated with the SDK. -->

# MlbV3Projections — operations

Accessor: `client.mlbV3Projections` · Source: `src/resources/mlb-v3-projections.ts` · 8 operations · Request and error types: namespace `MlbV3Projections`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### mlbV3ProjectionsDepthCharts

- **Signature**: `mlbV3ProjectionsDepthCharts(request: MlbV3Projections.MlbV3ProjectionsDepthChartsRequest, options?: RequestOptions): ApiPromise<TeamDepthChart1[], MlbV3Projections.MlbV3ProjectionsDepthChartsError>`
- **Wire**: `GET /v3/mlb/projections/{format}/DepthCharts`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamDepthChart1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Projections.MlbV3ProjectionsDepthChartsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Projections.MlbV3ProjectionsDepthChartsRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamDepthChart1` | `teamDepthChart1Schema` | `src/models/team-depth-chart1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ProjectionsDfsSlateOwnershipProjectionsBySlate

- **Signature**: `mlbV3ProjectionsDfsSlateOwnershipProjectionsBySlate(request: MlbV3Projections.MlbV3ProjectionsDfsSlateOwnershipProjectionsBySlateRequest, options?: RequestOptions): ApiPromise<DfsSlateWithOwnershipProjection, MlbV3Projections.MlbV3ProjectionsDfsSlateOwnershipProjectionsBySlateError>`
- **Wire**: `GET /v3/mlb/projections/{format}/DfsSlateOwnershipProjectionsBySlateID/{slateId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DfsSlateWithOwnershipProjection`
- **Error**: `MlbV3Projections.MlbV3ProjectionsDfsSlateOwnershipProjectionsBySlateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Projections.MlbV3ProjectionsDfsSlateOwnershipProjectionsBySlateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `slateId` | `path` | `number` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `DfsSlateWithOwnershipProjection` | `dfsSlateWithOwnershipProjectionSchema` | `src/models/dfs-slate-with-ownership-projection.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ProjectionsDfsSlateOwnershipProjectionsUpcoming

- **Signature**: `mlbV3ProjectionsDfsSlateOwnershipProjectionsUpcoming(request: MlbV3Projections.MlbV3ProjectionsDfsSlateOwnershipProjectionsUpcomingRequest, options?: RequestOptions): ApiPromise<DfsSlateWithOwnershipProjection[], MlbV3Projections.MlbV3ProjectionsDfsSlateOwnershipProjectionsUpcomingError>`
- **Wire**: `GET /v3/mlb/projections/{format}/UpcomingDfsSlateOwnershipProjections`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DfsSlateWithOwnershipProjection[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Projections.MlbV3ProjectionsDfsSlateOwnershipProjectionsUpcomingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Projections.MlbV3ProjectionsDfsSlateOwnershipProjectionsUpcomingRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `DfsSlateWithOwnershipProjection` | `dfsSlateWithOwnershipProjectionSchema` | `src/models/dfs-slate-with-ownership-projection.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ProjectionsDfsSlatesByDate

- **Signature**: `mlbV3ProjectionsDfsSlatesByDate(request: MlbV3Projections.MlbV3ProjectionsDfsSlatesByDateRequest, options?: RequestOptions): ApiPromise<DfsSlate[], MlbV3Projections.MlbV3ProjectionsDfsSlatesByDateError>`
- **Wire**: `GET /v3/mlb/projections/{format}/DfsSlatesByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DfsSlate[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Projections.MlbV3ProjectionsDfsSlatesByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Projections.MlbV3ProjectionsDfsSlatesByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `DfsSlate` | `dfsSlateSchema` | `src/models/dfs-slate.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ProjectionsPlayerDetailsByInjured

- **Signature**: `mlbV3ProjectionsPlayerDetailsByInjured(request: MlbV3Projections.MlbV3ProjectionsPlayerDetailsByInjuredRequest, options?: RequestOptions): ApiPromise<Player2[], MlbV3Projections.MlbV3ProjectionsPlayerDetailsByInjuredError>`
- **Wire**: `GET /v3/mlb/projections/{format}/InjuredPlayers`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Projections.MlbV3ProjectionsPlayerDetailsByInjuredError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Projections.MlbV3ProjectionsPlayerDetailsByInjuredRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player2` | `player2Schema` | `src/models/player2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ProjectionsProjectedPlayerGameStatsByDate

- **Signature**: `mlbV3ProjectionsProjectedPlayerGameStatsByDate(request: MlbV3Projections.MlbV3ProjectionsProjectedPlayerGameStatsByDateRequest, options?: RequestOptions): ApiPromise<PlayerGameProjection2[], MlbV3Projections.MlbV3ProjectionsProjectedPlayerGameStatsByDateError>`
- **Wire**: `GET /v3/mlb/projections/{format}/PlayerGameProjectionStatsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGameProjection2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Projections.MlbV3ProjectionsProjectedPlayerGameStatsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Projections.MlbV3ProjectionsProjectedPlayerGameStatsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGameProjection2` | `playerGameProjection2Schema` | `src/models/player-game-projection2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ProjectionsProjectedPlayerSeasonStatsWithAdp

- **Signature**: `mlbV3ProjectionsProjectedPlayerSeasonStatsWithAdp(request: MlbV3Projections.MlbV3ProjectionsProjectedPlayerSeasonStatsWithAdpRequest, options?: RequestOptions): ApiPromise<PlayerSeasonProjection2[], MlbV3Projections.MlbV3ProjectionsProjectedPlayerSeasonStatsWithAdpError>`
- **Wire**: `GET /v3/mlb/projections/{format}/PlayerSeasonProjectionStats/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeasonProjection2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Projections.MlbV3ProjectionsProjectedPlayerSeasonStatsWithAdpError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Projections.MlbV3ProjectionsProjectedPlayerSeasonStatsWithAdpRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeasonProjection2` | `playerSeasonProjection2Schema` | `src/models/player-season-projection2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ProjectionsStartingLineupsByDate

- **Signature**: `mlbV3ProjectionsStartingLineupsByDate(request: MlbV3Projections.MlbV3ProjectionsStartingLineupsByDateRequest, options?: RequestOptions): ApiPromise<StartingLineups1[], MlbV3Projections.MlbV3ProjectionsStartingLineupsByDateError>`
- **Wire**: `GET /v3/mlb/projections/{format}/StartingLineupsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StartingLineups1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Projections.MlbV3ProjectionsStartingLineupsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Projections.MlbV3ProjectionsStartingLineupsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `StartingLineups1` | `startingLineups1Schema` | `src/models/starting-lineups1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

