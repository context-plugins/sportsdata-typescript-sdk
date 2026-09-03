<!-- Generated file — do not edit; regenerated with the SDK. -->

# CbbV3Stats — operations

Accessor: `client.cbbV3Stats` · Source: `src/resources/cbb-v3-stats.ts` · 11 operations · Request and error types: namespace `CbbV3Stats`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### cbbV3StatsBoxScoreFinal

- **Signature**: `cbbV3StatsBoxScoreFinal(request: CbbV3Stats.CbbV3StatsBoxScoreFinalRequest, options?: RequestOptions): ApiPromise<BoxScore4, CbbV3Stats.CbbV3StatsBoxScoreFinalError>`
- **Wire**: `GET /v3/cbb/stats/{format}/BoxScoreFinal/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore4`
- **Error**: `CbbV3Stats.CbbV3StatsBoxScoreFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Stats.CbbV3StatsBoxScoreFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore4` | `boxScore4Schema` | `src/models/box-score4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3StatsBoxScoreLiveFinal

- **Signature**: `cbbV3StatsBoxScoreLiveFinal(request: CbbV3Stats.CbbV3StatsBoxScoreLiveFinalRequest, options?: RequestOptions): ApiPromise<BoxScore4, CbbV3Stats.CbbV3StatsBoxScoreLiveFinalError>`
- **Wire**: `GET /v3/cbb/stats/{format}/BoxScore/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore4`
- **Error**: `CbbV3Stats.CbbV3StatsBoxScoreLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Stats.CbbV3StatsBoxScoreLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore4` | `boxScore4Schema` | `src/models/box-score4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3StatsBoxScoresByDateFinal

- **Signature**: `cbbV3StatsBoxScoresByDateFinal(request: CbbV3Stats.CbbV3StatsBoxScoresByDateFinalRequest, options?: RequestOptions): ApiPromise<BoxScore4[], CbbV3Stats.CbbV3StatsBoxScoresByDateFinalError>`
- **Wire**: `GET /v3/cbb/stats/{format}/BoxScoresFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Stats.CbbV3StatsBoxScoresByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Stats.CbbV3StatsBoxScoresByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore4` | `boxScore4Schema` | `src/models/box-score4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3StatsBoxScoresByDateLiveFinal

- **Signature**: `cbbV3StatsBoxScoresByDateLiveFinal(request: CbbV3Stats.CbbV3StatsBoxScoresByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<BoxScore4[], CbbV3Stats.CbbV3StatsBoxScoresByDateLiveFinalError>`
- **Wire**: `GET /v3/cbb/stats/{format}/BoxScores/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Stats.CbbV3StatsBoxScoresByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Stats.CbbV3StatsBoxScoresByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore4` | `boxScore4Schema` | `src/models/box-score4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3StatsBoxScoresDeltaByDate

- **Signature**: `cbbV3StatsBoxScoresDeltaByDate(request: CbbV3Stats.CbbV3StatsBoxScoresDeltaByDateRequest, options?: RequestOptions): ApiPromise<BoxScore4[], CbbV3Stats.CbbV3StatsBoxScoresDeltaByDateError>`
- **Wire**: `GET /v3/cbb/stats/{format}/BoxScoresDelta/{date}/{minutes}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Stats.CbbV3StatsBoxScoresDeltaByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Stats.CbbV3StatsBoxScoresDeltaByDateRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |
| `minutes` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore4` | `boxScore4Schema` | `src/models/box-score4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3StatsPlayerGameLogsBySeason

- **Signature**: `cbbV3StatsPlayerGameLogsBySeason(request: CbbV3Stats.CbbV3StatsPlayerGameLogsBySeasonRequest, options?: RequestOptions): ApiPromise<PlayerGame5[], CbbV3Stats.CbbV3StatsPlayerGameLogsBySeasonError>`
- **Wire**: `GET /v3/cbb/stats/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGame5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Stats.CbbV3StatsPlayerGameLogsBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Stats.CbbV3StatsPlayerGameLogsBySeasonRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `playerid` | `path` | `string` | yes | — |
| `numberofgames` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGame5` | `playerGame5Schema` | `src/models/player-game5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3StatsPlayerGameStatsByDateFinal

- **Signature**: `cbbV3StatsPlayerGameStatsByDateFinal(request: CbbV3Stats.CbbV3StatsPlayerGameStatsByDateFinalRequest, options?: RequestOptions): ApiPromise<PlayerGame5[], CbbV3Stats.CbbV3StatsPlayerGameStatsByDateFinalError>`
- **Wire**: `GET /v3/cbb/stats/{format}/PlayerGameStatsByDateFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGame5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Stats.CbbV3StatsPlayerGameStatsByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Stats.CbbV3StatsPlayerGameStatsByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGame5` | `playerGame5Schema` | `src/models/player-game5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3StatsPlayerGameStatsByDateLiveFinal

- **Signature**: `cbbV3StatsPlayerGameStatsByDateLiveFinal(request: CbbV3Stats.CbbV3StatsPlayerGameStatsByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<PlayerGame5[], CbbV3Stats.CbbV3StatsPlayerGameStatsByDateLiveFinalError>`
- **Wire**: `GET /v3/cbb/stats/{format}/PlayerGameStatsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGame5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Stats.CbbV3StatsPlayerGameStatsByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Stats.CbbV3StatsPlayerGameStatsByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGame5` | `playerGame5Schema` | `src/models/player-game5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3StatsPlayerSeasonStats

- **Signature**: `cbbV3StatsPlayerSeasonStats(request: CbbV3Stats.CbbV3StatsPlayerSeasonStatsRequest, options?: RequestOptions): ApiPromise<PlayerSeason6[], CbbV3Stats.CbbV3StatsPlayerSeasonStatsError>`
- **Wire**: `GET /v3/cbb/stats/{format}/PlayerSeasonStats/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeason6[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Stats.CbbV3StatsPlayerSeasonStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Stats.CbbV3StatsPlayerSeasonStatsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeason6` | `playerSeason6Schema` | `src/models/player-season6.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3StatsPlayerSeasonStatsByTeam

- **Signature**: `cbbV3StatsPlayerSeasonStatsByTeam(request: CbbV3Stats.CbbV3StatsPlayerSeasonStatsByTeamRequest, options?: RequestOptions): ApiPromise<PlayerSeason6[], CbbV3Stats.CbbV3StatsPlayerSeasonStatsByTeamError>`
- **Wire**: `GET /v3/cbb/stats/{format}/PlayerSeasonStatsByTeam/{season}/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeason6[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Stats.CbbV3StatsPlayerSeasonStatsByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Stats.CbbV3StatsPlayerSeasonStatsByTeamRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeason6` | `playerSeason6Schema` | `src/models/player-season6.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3StatsTeamGameStatsByDateFinal

- **Signature**: `cbbV3StatsTeamGameStatsByDateFinal(request: CbbV3Stats.CbbV3StatsTeamGameStatsByDateFinalRequest, options?: RequestOptions): ApiPromise<TeamGame5[], CbbV3Stats.CbbV3StatsTeamGameStatsByDateFinalError>`
- **Wire**: `GET /v3/cbb/stats/{format}/TeamGameStatsByDateFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamGame5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Stats.CbbV3StatsTeamGameStatsByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Stats.CbbV3StatsTeamGameStatsByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamGame5` | `teamGame5Schema` | `src/models/team-game5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

