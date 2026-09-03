<!-- Generated file — do not edit; regenerated with the SDK. -->

# MlbV3Stats — operations

Accessor: `client.mlbV3Stats` · Source: `src/resources/mlb-v3-stats.ts` · 17 operations · Request and error types: namespace `MlbV3Stats`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### mlbV3StatsBatterVsPitcherStats

- **Signature**: `mlbV3StatsBatterVsPitcherStats(request: MlbV3Stats.MlbV3StatsBatterVsPitcherStatsRequest, options?: RequestOptions): ApiPromise<PlayerSeason3[], MlbV3Stats.MlbV3StatsBatterVsPitcherStatsError>`
- **Wire**: `GET /v3/mlb/stats/{format}/HitterVsPitcher/{hitterid}/{pitcherid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeason3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Stats.MlbV3StatsBatterVsPitcherStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Stats.MlbV3StatsBatterVsPitcherStatsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `hitterid` | `path` | `string` | yes | — |
| `pitcherid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeason3` | `playerSeason3Schema` | `src/models/player-season3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3StatsBoxScoreFinal

- **Signature**: `mlbV3StatsBoxScoreFinal(request: MlbV3Stats.MlbV3StatsBoxScoreFinalRequest, options?: RequestOptions): ApiPromise<BoxScore1, MlbV3Stats.MlbV3StatsBoxScoreFinalError>`
- **Wire**: `GET /v3/mlb/stats/{format}/BoxScoreFinal/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore1`
- **Error**: `MlbV3Stats.MlbV3StatsBoxScoreFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Stats.MlbV3StatsBoxScoreFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore1` | `boxScore1Schema` | `src/models/box-score1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3StatsBoxScoreLiveFinal

- **Signature**: `mlbV3StatsBoxScoreLiveFinal(request: MlbV3Stats.MlbV3StatsBoxScoreLiveFinalRequest, options?: RequestOptions): ApiPromise<BoxScore1, MlbV3Stats.MlbV3StatsBoxScoreLiveFinalError>`
- **Wire**: `GET /v3/mlb/stats/{format}/BoxScore/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore1`
- **Error**: `MlbV3Stats.MlbV3StatsBoxScoreLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Stats.MlbV3StatsBoxScoreLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore1` | `boxScore1Schema` | `src/models/box-score1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3StatsBoxScoresByDateFinal

- **Signature**: `mlbV3StatsBoxScoresByDateFinal(request: MlbV3Stats.MlbV3StatsBoxScoresByDateFinalRequest, options?: RequestOptions): ApiPromise<BoxScore1[], MlbV3Stats.MlbV3StatsBoxScoresByDateFinalError>`
- **Wire**: `GET /v3/mlb/stats/{format}/BoxScoresFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Stats.MlbV3StatsBoxScoresByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Stats.MlbV3StatsBoxScoresByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore1` | `boxScore1Schema` | `src/models/box-score1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3StatsBoxScoresByDateLiveFinal

- **Signature**: `mlbV3StatsBoxScoresByDateLiveFinal(request: MlbV3Stats.MlbV3StatsBoxScoresByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<BoxScore1[], MlbV3Stats.MlbV3StatsBoxScoresByDateLiveFinalError>`
- **Wire**: `GET /v3/mlb/stats/{format}/BoxScores/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Stats.MlbV3StatsBoxScoresByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Stats.MlbV3StatsBoxScoresByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore1` | `boxScore1Schema` | `src/models/box-score1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3StatsBoxScoresDeltaByDate

- **Signature**: `mlbV3StatsBoxScoresDeltaByDate(request: MlbV3Stats.MlbV3StatsBoxScoresDeltaByDateRequest, options?: RequestOptions): ApiPromise<BoxScore1[], MlbV3Stats.MlbV3StatsBoxScoresDeltaByDateError>`
- **Wire**: `GET /v3/mlb/stats/{format}/BoxScoresDelta/{date}/{minutes}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Stats.MlbV3StatsBoxScoresDeltaByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Stats.MlbV3StatsBoxScoresDeltaByDateRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |
| `minutes` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore1` | `boxScore1Schema` | `src/models/box-score1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3StatsFantasyPointsByDate

- **Signature**: `mlbV3StatsFantasyPointsByDate(request: MlbV3Stats.MlbV3StatsFantasyPointsByDateRequest, options?: RequestOptions): ApiPromise<FantasyGame2[], MlbV3Stats.MlbV3StatsFantasyPointsByDateError>`
- **Wire**: `GET /v3/mlb/stats/{format}/FantasyGameStatsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FantasyGame2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Stats.MlbV3StatsFantasyPointsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Stats.MlbV3StatsFantasyPointsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `FantasyGame2` | `fantasyGame2Schema` | `src/models/fantasy-game2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3StatsPlayerGameLogsBySeason

- **Signature**: `mlbV3StatsPlayerGameLogsBySeason(request: MlbV3Stats.MlbV3StatsPlayerGameLogsBySeasonRequest, options?: RequestOptions): ApiPromise<PlayerGame2[], MlbV3Stats.MlbV3StatsPlayerGameLogsBySeasonError>`
- **Wire**: `GET /v3/mlb/stats/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGame2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Stats.MlbV3StatsPlayerGameLogsBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Stats.MlbV3StatsPlayerGameLogsBySeasonRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `playerid` | `path` | `string` | yes | — |
| `numberofgames` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGame2` | `playerGame2Schema` | `src/models/player-game2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3StatsPlayerGameStatsByDateFinal

- **Signature**: `mlbV3StatsPlayerGameStatsByDateFinal(request: MlbV3Stats.MlbV3StatsPlayerGameStatsByDateFinalRequest, options?: RequestOptions): ApiPromise<PlayerGame2[], MlbV3Stats.MlbV3StatsPlayerGameStatsByDateFinalError>`
- **Wire**: `GET /v3/mlb/stats/{format}/PlayerGameStatsByDateFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGame2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Stats.MlbV3StatsPlayerGameStatsByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Stats.MlbV3StatsPlayerGameStatsByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGame2` | `playerGame2Schema` | `src/models/player-game2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3StatsPlayerGameStatsByDateLiveFinal

- **Signature**: `mlbV3StatsPlayerGameStatsByDateLiveFinal(request: MlbV3Stats.MlbV3StatsPlayerGameStatsByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<PlayerGame2[], MlbV3Stats.MlbV3StatsPlayerGameStatsByDateLiveFinalError>`
- **Wire**: `GET /v3/mlb/stats/{format}/PlayerGameStatsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGame2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Stats.MlbV3StatsPlayerGameStatsByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Stats.MlbV3StatsPlayerGameStatsByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGame2` | `playerGame2Schema` | `src/models/player-game2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3StatsPlayerSeasonSplitStats

- **Signature**: `mlbV3StatsPlayerSeasonSplitStats(request: MlbV3Stats.MlbV3StatsPlayerSeasonSplitStatsRequest, options?: RequestOptions): ApiPromise<PlayerSeason3[], MlbV3Stats.MlbV3StatsPlayerSeasonSplitStatsError>`
- **Wire**: `GET /v3/mlb/stats/{format}/PlayerSeasonSplitStats/{season}/{split}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeason3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Stats.MlbV3StatsPlayerSeasonSplitStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Stats.MlbV3StatsPlayerSeasonSplitStatsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `split` | `path` | `Split` | no | `Split.L` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Split` | `splitSchema` | `src/models/split.ts` |
| `PlayerSeason3` | `playerSeason3Schema` | `src/models/player-season3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3StatsPlayerSeasonStats

- **Signature**: `mlbV3StatsPlayerSeasonStats(request: MlbV3Stats.MlbV3StatsPlayerSeasonStatsRequest, options?: RequestOptions): ApiPromise<PlayerSeason3[], MlbV3Stats.MlbV3StatsPlayerSeasonStatsError>`
- **Wire**: `GET /v3/mlb/stats/{format}/PlayerSeasonStats/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeason3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Stats.MlbV3StatsPlayerSeasonStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Stats.MlbV3StatsPlayerSeasonStatsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeason3` | `playerSeason3Schema` | `src/models/player-season3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3StatsPlayerSeasonStatsByAway

- **Signature**: `mlbV3StatsPlayerSeasonStatsByAway(request: MlbV3Stats.MlbV3StatsPlayerSeasonStatsByAwayRequest, options?: RequestOptions): ApiPromise<PlayerSeason3[], MlbV3Stats.MlbV3StatsPlayerSeasonStatsByAwayError>`
- **Wire**: `GET /v3/mlb/stats/{format}/PlayerSeasonAwayStats/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeason3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Stats.MlbV3StatsPlayerSeasonStatsByAwayError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Stats.MlbV3StatsPlayerSeasonStatsByAwayRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeason3` | `playerSeason3Schema` | `src/models/player-season3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3StatsPlayerSeasonStatsByHome

- **Signature**: `mlbV3StatsPlayerSeasonStatsByHome(request: MlbV3Stats.MlbV3StatsPlayerSeasonStatsByHomeRequest, options?: RequestOptions): ApiPromise<PlayerSeason3[], MlbV3Stats.MlbV3StatsPlayerSeasonStatsByHomeError>`
- **Wire**: `GET /v3/mlb/stats/{format}/PlayerSeasonHomeStats/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeason3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Stats.MlbV3StatsPlayerSeasonStatsByHomeError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Stats.MlbV3StatsPlayerSeasonStatsByHomeRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeason3` | `playerSeason3Schema` | `src/models/player-season3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3StatsPlayerSeasonStatsByTeam

- **Signature**: `mlbV3StatsPlayerSeasonStatsByTeam(request: MlbV3Stats.MlbV3StatsPlayerSeasonStatsByTeamRequest, options?: RequestOptions): ApiPromise<PlayerSeason3[], MlbV3Stats.MlbV3StatsPlayerSeasonStatsByTeamError>`
- **Wire**: `GET /v3/mlb/stats/{format}/PlayerSeasonStatsByTeam/{season}/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeason3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Stats.MlbV3StatsPlayerSeasonStatsByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Stats.MlbV3StatsPlayerSeasonStatsByTeamRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeason3` | `playerSeason3Schema` | `src/models/player-season3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3StatsPlayerSeasonStatsSplitByTeam

- **Signature**: `mlbV3StatsPlayerSeasonStatsSplitByTeam(request: MlbV3Stats.MlbV3StatsPlayerSeasonStatsSplitByTeamRequest, options?: RequestOptions): ApiPromise<PlayerSeason3[], MlbV3Stats.MlbV3StatsPlayerSeasonStatsSplitByTeamError>`
- **Wire**: `GET /v3/mlb/stats/{format}/PlayerSeasonStatsSplitByTeam/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeason3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Stats.MlbV3StatsPlayerSeasonStatsSplitByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Stats.MlbV3StatsPlayerSeasonStatsSplitByTeamRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeason3` | `playerSeason3Schema` | `src/models/player-season3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3StatsTeamHittingVsStartingPitcher

- **Signature**: `mlbV3StatsTeamHittingVsStartingPitcher(request: MlbV3Stats.MlbV3StatsTeamHittingVsStartingPitcherRequest, options?: RequestOptions): ApiPromise<PlayerSeason3[], MlbV3Stats.MlbV3StatsTeamHittingVsStartingPitcherError>`
- **Wire**: `GET /v3/mlb/stats/{format}/TeamHittersVsPitcher/{gameid}/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeason3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Stats.MlbV3StatsTeamHittingVsStartingPitcherError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Stats.MlbV3StatsTeamHittingVsStartingPitcherRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeason3` | `playerSeason3Schema` | `src/models/player-season3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

