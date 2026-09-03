<!-- Generated file — do not edit; regenerated with the SDK. -->

# CfbV3Stats — operations

Accessor: `client.cfbV3Stats` · Source: `src/resources/cfb-v3-stats.ts` · 13 operations · Request and error types: namespace `CfbV3Stats`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### cfbV3StatsBoxScoreFinal

- **Signature**: `cfbV3StatsBoxScoreFinal(request: CfbV3Stats.CfbV3StatsBoxScoreFinalRequest, options?: RequestOptions): ApiPromise<BoxScore3[], CfbV3Stats.CfbV3StatsBoxScoreFinalError>`
- **Wire**: `GET /v3/cfb/stats/{format}/BoxScoreFinal/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Stats.CfbV3StatsBoxScoreFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Stats.CfbV3StatsBoxScoreFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore3` | `boxScore3Schema` | `src/models/box-score3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3StatsBoxScoreLiveFinal

- **Signature**: `cfbV3StatsBoxScoreLiveFinal(request: CfbV3Stats.CfbV3StatsBoxScoreLiveFinalRequest, options?: RequestOptions): ApiPromise<BoxScore3[], CfbV3Stats.CfbV3StatsBoxScoreLiveFinalError>`
- **Wire**: `GET /v3/cfb/stats/{format}/BoxScore/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Stats.CfbV3StatsBoxScoreLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Stats.CfbV3StatsBoxScoreLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore3` | `boxScore3Schema` | `src/models/box-score3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3StatsBoxScoresByDateFinal

- **Signature**: `cfbV3StatsBoxScoresByDateFinal(request: CfbV3Stats.CfbV3StatsBoxScoresByDateFinalRequest, options?: RequestOptions): ApiPromise<BoxScore3[], CfbV3Stats.CfbV3StatsBoxScoresByDateFinalError>`
- **Wire**: `GET /v3/cfb/stats/{format}/BoxScoresFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Stats.CfbV3StatsBoxScoresByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Stats.CfbV3StatsBoxScoresByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore3` | `boxScore3Schema` | `src/models/box-score3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3StatsBoxScoresByDateLiveFinal

- **Signature**: `cfbV3StatsBoxScoresByDateLiveFinal(request: CfbV3Stats.CfbV3StatsBoxScoresByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<BoxScore3[], CfbV3Stats.CfbV3StatsBoxScoresByDateLiveFinalError>`
- **Wire**: `GET /v3/cfb/stats/{format}/BoxScoresByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Stats.CfbV3StatsBoxScoresByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Stats.CfbV3StatsBoxScoresByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore3` | `boxScore3Schema` | `src/models/box-score3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3StatsBoxScoresByWeekFinal

- **Signature**: `cfbV3StatsBoxScoresByWeekFinal(request: CfbV3Stats.CfbV3StatsBoxScoresByWeekFinalRequest, options?: RequestOptions): ApiPromise<BoxScore3[], CfbV3Stats.CfbV3StatsBoxScoresByWeekFinalError>`
- **Wire**: `GET /v3/cfb/stats/{format}/BoxScoresByWeekFinal/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Stats.CfbV3StatsBoxScoresByWeekFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Stats.CfbV3StatsBoxScoresByWeekFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore3` | `boxScore3Schema` | `src/models/box-score3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3StatsBoxScoresByWeekLiveFinal

- **Signature**: `cfbV3StatsBoxScoresByWeekLiveFinal(request: CfbV3Stats.CfbV3StatsBoxScoresByWeekLiveFinalRequest, options?: RequestOptions): ApiPromise<BoxScore3[], CfbV3Stats.CfbV3StatsBoxScoresByWeekLiveFinalError>`
- **Wire**: `GET /v3/cfb/stats/{format}/BoxScoresByWeek/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Stats.CfbV3StatsBoxScoresByWeekLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Stats.CfbV3StatsBoxScoresByWeekLiveFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore3` | `boxScore3Schema` | `src/models/box-score3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3StatsBoxScoresDeltaByWeek

- **Signature**: `cfbV3StatsBoxScoresDeltaByWeek(request: CfbV3Stats.CfbV3StatsBoxScoresDeltaByWeekRequest, options?: RequestOptions): ApiPromise<BoxScore3[], CfbV3Stats.CfbV3StatsBoxScoresDeltaByWeekError>`
- **Wire**: `GET /v3/cfb/stats/{format}/BoxScoresByWeekDelta/{season}/{week}/{minutes}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Stats.CfbV3StatsBoxScoresDeltaByWeekError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Stats.CfbV3StatsBoxScoresDeltaByWeekRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |
| `minutes` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore3` | `boxScore3Schema` | `src/models/box-score3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3StatsPlayerGameLogsBySeason

- **Signature**: `cfbV3StatsPlayerGameLogsBySeason(request: CfbV3Stats.CfbV3StatsPlayerGameLogsBySeasonRequest, options?: RequestOptions): ApiPromise<PlayerGame4[], CfbV3Stats.CfbV3StatsPlayerGameLogsBySeasonError>`
- **Wire**: `GET /v3/cfb/stats/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGame4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Stats.CfbV3StatsPlayerGameLogsBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Stats.CfbV3StatsPlayerGameLogsBySeasonRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `playerid` | `path` | `string` | yes | — |
| `numberofgames` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGame4` | `playerGame4Schema` | `src/models/player-game4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3StatsPlayerGameStatsByWeekFinal

- **Signature**: `cfbV3StatsPlayerGameStatsByWeekFinal(request: CfbV3Stats.CfbV3StatsPlayerGameStatsByWeekFinalRequest, options?: RequestOptions): ApiPromise<PlayerGame4[], CfbV3Stats.CfbV3StatsPlayerGameStatsByWeekFinalError>`
- **Wire**: `GET /v3/cfb/stats/{format}/PlayerGameStatsByWeekFinal/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGame4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Stats.CfbV3StatsPlayerGameStatsByWeekFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Stats.CfbV3StatsPlayerGameStatsByWeekFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGame4` | `playerGame4Schema` | `src/models/player-game4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3StatsPlayerGameStatsByWeekLiveFinal

- **Signature**: `cfbV3StatsPlayerGameStatsByWeekLiveFinal(request: CfbV3Stats.CfbV3StatsPlayerGameStatsByWeekLiveFinalRequest, options?: RequestOptions): ApiPromise<PlayerGame4[], CfbV3Stats.CfbV3StatsPlayerGameStatsByWeekLiveFinalError>`
- **Wire**: `GET /v3/cfb/stats/{format}/PlayerGameStatsByWeek/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGame4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Stats.CfbV3StatsPlayerGameStatsByWeekLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Stats.CfbV3StatsPlayerGameStatsByWeekLiveFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGame4` | `playerGame4Schema` | `src/models/player-game4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3StatsPlayerSeasonStats

- **Signature**: `cfbV3StatsPlayerSeasonStats(request: CfbV3Stats.CfbV3StatsPlayerSeasonStatsRequest, options?: RequestOptions): ApiPromise<PlayerSeason5[], CfbV3Stats.CfbV3StatsPlayerSeasonStatsError>`
- **Wire**: `GET /v3/cfb/stats/{format}/PlayerSeasonStats/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeason5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Stats.CfbV3StatsPlayerSeasonStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Stats.CfbV3StatsPlayerSeasonStatsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeason5` | `playerSeason5Schema` | `src/models/player-season5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3StatsPlayerSeasonStatsByTeam

- **Signature**: `cfbV3StatsPlayerSeasonStatsByTeam(request: CfbV3Stats.CfbV3StatsPlayerSeasonStatsByTeamRequest, options?: RequestOptions): ApiPromise<PlayerSeason5[], CfbV3Stats.CfbV3StatsPlayerSeasonStatsByTeamError>`
- **Wire**: `GET /v3/cfb/stats/{format}/PlayerSeasonStatsByTeam/{season}/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeason5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Stats.CfbV3StatsPlayerSeasonStatsByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Stats.CfbV3StatsPlayerSeasonStatsByTeamRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeason5` | `playerSeason5Schema` | `src/models/player-season5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3StatsTeamGameStatsByWeekFinal

- **Signature**: `cfbV3StatsTeamGameStatsByWeekFinal(request: CfbV3Stats.CfbV3StatsTeamGameStatsByWeekFinalRequest, options?: RequestOptions): ApiPromise<TeamGame4[], CfbV3Stats.CfbV3StatsTeamGameStatsByWeekFinalError>`
- **Wire**: `GET /v3/cfb/stats/{format}/TeamGameStatsByWeekFinal/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamGame4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Stats.CfbV3StatsTeamGameStatsByWeekFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Stats.CfbV3StatsTeamGameStatsByWeekFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamGame4` | `teamGame4Schema` | `src/models/team-game4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

