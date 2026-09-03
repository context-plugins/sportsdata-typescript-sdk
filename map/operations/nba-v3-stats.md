<!-- Generated file — do not edit; regenerated with the SDK. -->

# NbaV3Stats — operations

Accessor: `client.nbaV3Stats` · Source: `src/resources/nba-v3-stats.ts` · 14 operations · Request and error types: namespace `NbaV3Stats`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### nbaV3StatsAllStars

- **Signature**: `nbaV3StatsAllStars(request: NbaV3Stats.NbaV3StatsAllStarsRequest, options?: RequestOptions): ApiPromise<PlayerInfo[], NbaV3Stats.NbaV3StatsAllStarsError>`
- **Wire**: `GET /v3/nba/stats/{format}/AllStars/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerInfo[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Stats.NbaV3StatsAllStarsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Stats.NbaV3StatsAllStarsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerInfo` | `playerInfoSchema` | `src/models/player-info.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3StatsBoxScoreFinal

- **Signature**: `nbaV3StatsBoxScoreFinal(request: NbaV3Stats.NbaV3StatsBoxScoreFinalRequest, options?: RequestOptions): ApiPromise<BoxScore, NbaV3Stats.NbaV3StatsBoxScoreFinalError>`
- **Wire**: `GET /v3/nba/stats/{format}/BoxScoreFinal/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore`
- **Error**: `NbaV3Stats.NbaV3StatsBoxScoreFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Stats.NbaV3StatsBoxScoreFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore` | `boxScoreSchema` | `src/models/box-score.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3StatsBoxScoreLiveFinal

- **Signature**: `nbaV3StatsBoxScoreLiveFinal(request: NbaV3Stats.NbaV3StatsBoxScoreLiveFinalRequest, options?: RequestOptions): ApiPromise<BoxScore, NbaV3Stats.NbaV3StatsBoxScoreLiveFinalError>`
- **Wire**: `GET /v3/nba/stats/{format}/BoxScore/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore`
- **Error**: `NbaV3Stats.NbaV3StatsBoxScoreLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Stats.NbaV3StatsBoxScoreLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore` | `boxScoreSchema` | `src/models/box-score.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3StatsBoxScoresByDateFinal

- **Signature**: `nbaV3StatsBoxScoresByDateFinal(request: NbaV3Stats.NbaV3StatsBoxScoresByDateFinalRequest, options?: RequestOptions): ApiPromise<BoxScore[], NbaV3Stats.NbaV3StatsBoxScoresByDateFinalError>`
- **Wire**: `GET /v3/nba/stats/{format}/BoxScoresFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Stats.NbaV3StatsBoxScoresByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Stats.NbaV3StatsBoxScoresByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore` | `boxScoreSchema` | `src/models/box-score.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3StatsBoxScoresByDateLiveFinal

- **Signature**: `nbaV3StatsBoxScoresByDateLiveFinal(request: NbaV3Stats.NbaV3StatsBoxScoresByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<BoxScore[], NbaV3Stats.NbaV3StatsBoxScoresByDateLiveFinalError>`
- **Wire**: `GET /v3/nba/stats/{format}/BoxScores/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Stats.NbaV3StatsBoxScoresByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Stats.NbaV3StatsBoxScoresByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore` | `boxScoreSchema` | `src/models/box-score.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3StatsBoxScoresDeltaByDate

- **Signature**: `nbaV3StatsBoxScoresDeltaByDate(request: NbaV3Stats.NbaV3StatsBoxScoresDeltaByDateRequest, options?: RequestOptions): ApiPromise<BoxScore[], NbaV3Stats.NbaV3StatsBoxScoresDeltaByDateError>`
- **Wire**: `GET /v3/nba/stats/{format}/BoxScoresDelta/{date}/{minutes}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Stats.NbaV3StatsBoxScoresDeltaByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Stats.NbaV3StatsBoxScoresDeltaByDateRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |
| `minutes` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore` | `boxScoreSchema` | `src/models/box-score.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3StatsFantasyPointsByDate

- **Signature**: `nbaV3StatsFantasyPointsByDate(request: NbaV3Stats.NbaV3StatsFantasyPointsByDateRequest, options?: RequestOptions): ApiPromise<FantasyGame1[], NbaV3Stats.NbaV3StatsFantasyPointsByDateError>`
- **Wire**: `GET /v3/nba/stats/{format}/FantasyGameStatsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FantasyGame1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Stats.NbaV3StatsFantasyPointsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Stats.NbaV3StatsFantasyPointsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `FantasyGame1` | `fantasyGame1Schema` | `src/models/fantasy-game1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3StatsPlayerGameLogsBySeason

- **Signature**: `nbaV3StatsPlayerGameLogsBySeason(request: NbaV3Stats.NbaV3StatsPlayerGameLogsBySeasonRequest, options?: RequestOptions): ApiPromise<PlayerGame1[], NbaV3Stats.NbaV3StatsPlayerGameLogsBySeasonError>`
- **Wire**: `GET /v3/nba/stats/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGame1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Stats.NbaV3StatsPlayerGameLogsBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Stats.NbaV3StatsPlayerGameLogsBySeasonRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `playerid` | `path` | `string` | yes | — |
| `numberofgames` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGame1` | `playerGame1Schema` | `src/models/player-game1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3StatsPlayerGameStatsByDateFinal

- **Signature**: `nbaV3StatsPlayerGameStatsByDateFinal(request: NbaV3Stats.NbaV3StatsPlayerGameStatsByDateFinalRequest, options?: RequestOptions): ApiPromise<PlayerGame1[], NbaV3Stats.NbaV3StatsPlayerGameStatsByDateFinalError>`
- **Wire**: `GET /v3/nba/stats/{format}/PlayerGameStatsByDateFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGame1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Stats.NbaV3StatsPlayerGameStatsByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Stats.NbaV3StatsPlayerGameStatsByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGame1` | `playerGame1Schema` | `src/models/player-game1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3StatsPlayerGameStatsByDateLiveFinal

- **Signature**: `nbaV3StatsPlayerGameStatsByDateLiveFinal(request: NbaV3Stats.NbaV3StatsPlayerGameStatsByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<PlayerGame1[], NbaV3Stats.NbaV3StatsPlayerGameStatsByDateLiveFinalError>`
- **Wire**: `GET /v3/nba/stats/{format}/PlayerGameStatsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGame1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Stats.NbaV3StatsPlayerGameStatsByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Stats.NbaV3StatsPlayerGameStatsByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGame1` | `playerGame1Schema` | `src/models/player-game1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3StatsPlayerSeasonStats

- **Signature**: `nbaV3StatsPlayerSeasonStats(request: NbaV3Stats.NbaV3StatsPlayerSeasonStatsRequest, options?: RequestOptions): ApiPromise<PlayerSeason1[], NbaV3Stats.NbaV3StatsPlayerSeasonStatsError>`
- **Wire**: `GET /v3/nba/stats/{format}/PlayerSeasonStats/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeason1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Stats.NbaV3StatsPlayerSeasonStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Stats.NbaV3StatsPlayerSeasonStatsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeason1` | `playerSeason1Schema` | `src/models/player-season1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3StatsPlayerSeasonStatsByTeam

- **Signature**: `nbaV3StatsPlayerSeasonStatsByTeam(request: NbaV3Stats.NbaV3StatsPlayerSeasonStatsByTeamRequest, options?: RequestOptions): ApiPromise<PlayerSeason1[], NbaV3Stats.NbaV3StatsPlayerSeasonStatsByTeamError>`
- **Wire**: `GET /v3/nba/stats/{format}/PlayerSeasonStatsByTeam/{season}/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeason1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Stats.NbaV3StatsPlayerSeasonStatsByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Stats.NbaV3StatsPlayerSeasonStatsByTeamRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeason1` | `playerSeason1Schema` | `src/models/player-season1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3StatsTeamGameStatsByDateFinal

- **Signature**: `nbaV3StatsTeamGameStatsByDateFinal(request: NbaV3Stats.NbaV3StatsTeamGameStatsByDateFinalRequest, options?: RequestOptions): ApiPromise<TeamGame1[], NbaV3Stats.NbaV3StatsTeamGameStatsByDateFinalError>`
- **Wire**: `GET /v3/nba/stats/{format}/TeamGameStatsByDateFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamGame1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Stats.NbaV3StatsTeamGameStatsByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Stats.NbaV3StatsTeamGameStatsByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamGame1` | `teamGame1Schema` | `src/models/team-game1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3StatsTeamStatsAllowedByPosition

- **Signature**: `nbaV3StatsTeamStatsAllowedByPosition(request: NbaV3Stats.NbaV3StatsTeamStatsAllowedByPositionRequest, options?: RequestOptions): ApiPromise<TeamSeason1[], NbaV3Stats.NbaV3StatsTeamStatsAllowedByPositionError>`
- **Wire**: `GET /v3/nba/stats/{format}/TeamStatsAllowedByPosition/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamSeason1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Stats.NbaV3StatsTeamStatsAllowedByPositionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Stats.NbaV3StatsTeamStatsAllowedByPositionRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamSeason1` | `teamSeason1Schema` | `src/models/team-season1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

