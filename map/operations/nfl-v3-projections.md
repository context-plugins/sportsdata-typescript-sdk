<!-- Generated file — do not edit; regenerated with the SDK. -->

# NflV3Projections — operations

Accessor: `client.nflV3Projections` · Source: `src/resources/nfl-v3-projections.ts` · 13 operations · Request and error types: namespace `NflV3Projections`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### nflV3ProjectionsDfsSlateOwnershipProjectionsBySlate

- **Signature**: `nflV3ProjectionsDfsSlateOwnershipProjectionsBySlate(request: NflV3Projections.NflV3ProjectionsDfsSlateOwnershipProjectionsBySlateRequest, options?: RequestOptions): ApiPromise<DfsSlateWithOwnershipProjection, NflV3Projections.NflV3ProjectionsDfsSlateOwnershipProjectionsBySlateError>`
- **Wire**: `GET /v3/nfl/projections/{format}/DfsSlateOwnershipProjectionsBySlateID/{slateId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DfsSlateWithOwnershipProjection`
- **Error**: `NflV3Projections.NflV3ProjectionsDfsSlateOwnershipProjectionsBySlateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Projections.NflV3ProjectionsDfsSlateOwnershipProjectionsBySlateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `slateId` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `DfsSlateWithOwnershipProjection` | `dfsSlateWithOwnershipProjectionSchema` | `src/models/dfs-slate-with-ownership-projection.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ProjectionsDfsSlateOwnershipProjectionsUpcoming

- **Signature**: `nflV3ProjectionsDfsSlateOwnershipProjectionsUpcoming(request: NflV3Projections.NflV3ProjectionsDfsSlateOwnershipProjectionsUpcomingRequest, options?: RequestOptions): ApiPromise<DfsSlateWithOwnershipProjection[], NflV3Projections.NflV3ProjectionsDfsSlateOwnershipProjectionsUpcomingError>`
- **Wire**: `GET /v3/nfl/projections/{format}/UpcomingDfsSlateOwnershipProjections`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DfsSlateWithOwnershipProjection[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Projections.NflV3ProjectionsDfsSlateOwnershipProjectionsUpcomingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Projections.NflV3ProjectionsDfsSlateOwnershipProjectionsUpcomingRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `DfsSlateWithOwnershipProjection` | `dfsSlateWithOwnershipProjectionSchema` | `src/models/dfs-slate-with-ownership-projection.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ProjectionsDfsSlatesByDate

- **Signature**: `nflV3ProjectionsDfsSlatesByDate(request: NflV3Projections.NflV3ProjectionsDfsSlatesByDateRequest, options?: RequestOptions): ApiPromise<DfsSlate[], NflV3Projections.NflV3ProjectionsDfsSlatesByDateError>`
- **Wire**: `GET /v3/nfl/projections/{format}/DfsSlatesByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DfsSlate[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Projections.NflV3ProjectionsDfsSlatesByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Projections.NflV3ProjectionsDfsSlatesByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `DfsSlate` | `dfsSlateSchema` | `src/models/dfs-slate.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ProjectionsDfsSlatesByWeek

- **Signature**: `nflV3ProjectionsDfsSlatesByWeek(request: NflV3Projections.NflV3ProjectionsDfsSlatesByWeekRequest, options?: RequestOptions): ApiPromise<DfsSlate[], NflV3Projections.NflV3ProjectionsDfsSlatesByWeekError>`
- **Wire**: `GET /v3/nfl/projections/{format}/DfsSlatesByWeek/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DfsSlate[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Projections.NflV3ProjectionsDfsSlatesByWeekError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Projections.NflV3ProjectionsDfsSlatesByWeekRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `DfsSlate` | `dfsSlateSchema` | `src/models/dfs-slate.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ProjectionsIdpProjectedPlayerGameStatsByTeam

- **Signature**: `nflV3ProjectionsIdpProjectedPlayerGameStatsByTeam(request: NflV3Projections.NflV3ProjectionsIdpProjectedPlayerGameStatsByTeamRequest, options?: RequestOptions): ApiPromise<PlayerGameProjection[], NflV3Projections.NflV3ProjectionsIdpProjectedPlayerGameStatsByTeamError>`
- **Wire**: `GET /v3/nfl/projections/{format}/IdpPlayerGameProjectionStatsByTeam/{season}/{week}/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGameProjection[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Projections.NflV3ProjectionsIdpProjectedPlayerGameStatsByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Projections.NflV3ProjectionsIdpProjectedPlayerGameStatsByTeamRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGameProjection` | `playerGameProjectionSchema` | `src/models/player-game-projection.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ProjectionsIdpProjectedPlayerGameStatsByWeek

- **Signature**: `nflV3ProjectionsIdpProjectedPlayerGameStatsByWeek(request: NflV3Projections.NflV3ProjectionsIdpProjectedPlayerGameStatsByWeekRequest, options?: RequestOptions): ApiPromise<PlayerGameProjection[], NflV3Projections.NflV3ProjectionsIdpProjectedPlayerGameStatsByWeekError>`
- **Wire**: `GET /v3/nfl/projections/{format}/IdpPlayerGameProjectionStatsByWeek/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGameProjection[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Projections.NflV3ProjectionsIdpProjectedPlayerGameStatsByWeekError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Projections.NflV3ProjectionsIdpProjectedPlayerGameStatsByWeekRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGameProjection` | `playerGameProjectionSchema` | `src/models/player-game-projection.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ProjectionsPlayerDetailsByInjured

- **Signature**: `nflV3ProjectionsPlayerDetailsByInjured(request: NflV3Projections.NflV3ProjectionsPlayerDetailsByInjuredRequest, options?: RequestOptions): ApiPromise<Player[], NflV3Projections.NflV3ProjectionsPlayerDetailsByInjuredError>`
- **Wire**: `GET /v3/nfl/projections/{format}/InjuredPlayers`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Projections.NflV3ProjectionsPlayerDetailsByInjuredError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Projections.NflV3ProjectionsPlayerDetailsByInjuredRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player` | `playerSchema` | `src/models/player.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ProjectionsProjectedFantasyDefenseGameStatsWithDfsSalaries

- **Signature**: `nflV3ProjectionsProjectedFantasyDefenseGameStatsWithDfsSalaries(request: NflV3Projections.NflV3ProjectionsProjectedFantasyDefenseGameStatsWithDfsSalariesRequest, options?: RequestOptions): ApiPromise<FantasyDefenseGameProjection[], NflV3Projections.NflV3ProjectionsProjectedFantasyDefenseGameStatsWithDfsSalariesError>`
- **Wire**: `GET /v3/nfl/projections/{format}/FantasyDefenseProjectionsByGame/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FantasyDefenseGameProjection[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Projections.NflV3ProjectionsProjectedFantasyDefenseGameStatsWithDfsSalariesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Projections.NflV3ProjectionsProjectedFantasyDefenseGameStatsWithDfsSalariesRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `FantasyDefenseGameProjection` | `fantasyDefenseGameProjectionSchema` | `src/models/fantasy-defense-game-projection.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ProjectionsProjectedFantasyDefenseSeasonStatsWithAdp

- **Signature**: `nflV3ProjectionsProjectedFantasyDefenseSeasonStatsWithAdp(request: NflV3Projections.NflV3ProjectionsProjectedFantasyDefenseSeasonStatsWithAdpRequest, options?: RequestOptions): ApiPromise<FantasyDefenseSeasonProjection[], NflV3Projections.NflV3ProjectionsProjectedFantasyDefenseSeasonStatsWithAdpError>`
- **Wire**: `GET /v3/nfl/projections/{format}/FantasyDefenseProjectionsBySeason/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FantasyDefenseSeasonProjection[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Projections.NflV3ProjectionsProjectedFantasyDefenseSeasonStatsWithAdpError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Projections.NflV3ProjectionsProjectedFantasyDefenseSeasonStatsWithAdpRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `FantasyDefenseSeasonProjection` | `fantasyDefenseSeasonProjectionSchema` | `src/models/fantasy-defense-season-projection.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ProjectionsProjectedPlayerGameStatsByTeam

- **Signature**: `nflV3ProjectionsProjectedPlayerGameStatsByTeam(request: NflV3Projections.NflV3ProjectionsProjectedPlayerGameStatsByTeamRequest, options?: RequestOptions): ApiPromise<PlayerGameProjection[], NflV3Projections.NflV3ProjectionsProjectedPlayerGameStatsByTeamError>`
- **Wire**: `GET /v3/nfl/projections/{format}/PlayerGameProjectionStatsByTeam/{season}/{week}/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGameProjection[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Projections.NflV3ProjectionsProjectedPlayerGameStatsByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Projections.NflV3ProjectionsProjectedPlayerGameStatsByTeamRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGameProjection` | `playerGameProjectionSchema` | `src/models/player-game-projection.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ProjectionsProjectedPlayerGameStatsByWeek

- **Signature**: `nflV3ProjectionsProjectedPlayerGameStatsByWeek(request: NflV3Projections.NflV3ProjectionsProjectedPlayerGameStatsByWeekRequest, options?: RequestOptions): ApiPromise<PlayerGameProjection[], NflV3Projections.NflV3ProjectionsProjectedPlayerGameStatsByWeekError>`
- **Wire**: `GET /v3/nfl/projections/{format}/PlayerGameProjectionStatsByWeek/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGameProjection[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Projections.NflV3ProjectionsProjectedPlayerGameStatsByWeekError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Projections.NflV3ProjectionsProjectedPlayerGameStatsByWeekRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGameProjection` | `playerGameProjectionSchema` | `src/models/player-game-projection.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ProjectionsProjectedPlayerSeasonStatsWithAdp

- **Signature**: `nflV3ProjectionsProjectedPlayerSeasonStatsWithAdp(request: NflV3Projections.NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpRequest, options?: RequestOptions): ApiPromise<PlayerSeasonProjection[], NflV3Projections.NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpError>`
- **Wire**: `GET /v3/nfl/projections/{format}/PlayerSeasonProjectionStats/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeasonProjection[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Projections.NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Projections.NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeasonProjection` | `playerSeasonProjectionSchema` | `src/models/player-season-projection.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ProjectionsProjectedPlayerSeasonStatsWithAdpByTeam

- **Signature**: `nflV3ProjectionsProjectedPlayerSeasonStatsWithAdpByTeam(request: NflV3Projections.NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpByTeamRequest, options?: RequestOptions): ApiPromise<PlayerSeasonProjection[], NflV3Projections.NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpByTeamError>`
- **Wire**: `GET /v3/nfl/projections/{format}/PlayerSeasonProjectionStatsByTeam/{season}/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeasonProjection[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Projections.NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Projections.NflV3ProjectionsProjectedPlayerSeasonStatsWithAdpByTeamRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeasonProjection` | `playerSeasonProjectionSchema` | `src/models/player-season-projection.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

