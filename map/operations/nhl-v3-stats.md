<!-- Generated file — do not edit; regenerated with the SDK. -->

# NhlV3Stats — operations

Accessor: `client.nhlV3Stats` · Source: `src/resources/nhl-v3-stats.ts` · 14 operations · Request and error types: namespace `NhlV3Stats`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### nhlV3StatsBoxScoreFinal

- **Signature**: `nhlV3StatsBoxScoreFinal(request: NhlV3Stats.NhlV3StatsBoxScoreFinalRequest, options?: RequestOptions): ApiPromise<BoxScore2, NhlV3Stats.NhlV3StatsBoxScoreFinalError>`
- **Wire**: `GET /v3/nhl/stats/{format}/BoxScoreFinal/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore2`
- **Error**: `NhlV3Stats.NhlV3StatsBoxScoreFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Stats.NhlV3StatsBoxScoreFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore2` | `boxScore2Schema` | `src/models/box-score2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3StatsBoxScoreLiveFinal

- **Signature**: `nhlV3StatsBoxScoreLiveFinal(request: NhlV3Stats.NhlV3StatsBoxScoreLiveFinalRequest, options?: RequestOptions): ApiPromise<BoxScore2, NhlV3Stats.NhlV3StatsBoxScoreLiveFinalError>`
- **Wire**: `GET /v3/nhl/stats/{format}/BoxScore/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore2`
- **Error**: `NhlV3Stats.NhlV3StatsBoxScoreLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Stats.NhlV3StatsBoxScoreLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore2` | `boxScore2Schema` | `src/models/box-score2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3StatsBoxScoresByDateFinal

- **Signature**: `nhlV3StatsBoxScoresByDateFinal(request: NhlV3Stats.NhlV3StatsBoxScoresByDateFinalRequest, options?: RequestOptions): ApiPromise<BoxScore2[], NhlV3Stats.NhlV3StatsBoxScoresByDateFinalError>`
- **Wire**: `GET /v3/nhl/stats/{format}/BoxScoresFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Stats.NhlV3StatsBoxScoresByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Stats.NhlV3StatsBoxScoresByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore2` | `boxScore2Schema` | `src/models/box-score2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3StatsBoxScoresByDateLiveFinal

- **Signature**: `nhlV3StatsBoxScoresByDateLiveFinal(request: NhlV3Stats.NhlV3StatsBoxScoresByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<BoxScore2[], NhlV3Stats.NhlV3StatsBoxScoresByDateLiveFinalError>`
- **Wire**: `GET /v3/nhl/stats/{format}/BoxScores/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Stats.NhlV3StatsBoxScoresByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Stats.NhlV3StatsBoxScoresByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore2` | `boxScore2Schema` | `src/models/box-score2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3StatsBoxScoresDeltaByDate

- **Signature**: `nhlV3StatsBoxScoresDeltaByDate(request: NhlV3Stats.NhlV3StatsBoxScoresDeltaByDateRequest, options?: RequestOptions): ApiPromise<BoxScore2[], NhlV3Stats.NhlV3StatsBoxScoresDeltaByDateError>`
- **Wire**: `GET /v3/nhl/stats/{format}/BoxScoresDelta/{date}/{minutes}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Stats.NhlV3StatsBoxScoresDeltaByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Stats.NhlV3StatsBoxScoresDeltaByDateRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |
| `minutes` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore2` | `boxScore2Schema` | `src/models/box-score2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3StatsFantasyPointsByDate

- **Signature**: `nhlV3StatsFantasyPointsByDate(request: NhlV3Stats.NhlV3StatsFantasyPointsByDateRequest, options?: RequestOptions): ApiPromise<FantasyGame3[], NhlV3Stats.NhlV3StatsFantasyPointsByDateError>`
- **Wire**: `GET /v3/nhl/stats/{format}/FantasyGameStatsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FantasyGame3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Stats.NhlV3StatsFantasyPointsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Stats.NhlV3StatsFantasyPointsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `FantasyGame3` | `fantasyGame3Schema` | `src/models/fantasy-game3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3StatsLineCombinationsBySeason

- **Signature**: `nhlV3StatsLineCombinationsBySeason(request: NhlV3Stats.NhlV3StatsLineCombinationsBySeasonRequest, options?: RequestOptions): ApiPromise<TeamLine[], NhlV3Stats.NhlV3StatsLineCombinationsBySeasonError>`
- **Wire**: `GET /v3/nhl/stats/{format}/LinesBySeason/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamLine[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Stats.NhlV3StatsLineCombinationsBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Stats.NhlV3StatsLineCombinationsBySeasonRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamLine` | `teamLineSchema` | `src/models/team-line.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3StatsPlayerGameLogsBySeason

- **Signature**: `nhlV3StatsPlayerGameLogsBySeason(request: NhlV3Stats.NhlV3StatsPlayerGameLogsBySeasonRequest, options?: RequestOptions): ApiPromise<PlayerGame3[], NhlV3Stats.NhlV3StatsPlayerGameLogsBySeasonError>`
- **Wire**: `GET /v3/nhl/stats/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGame3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Stats.NhlV3StatsPlayerGameLogsBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Stats.NhlV3StatsPlayerGameLogsBySeasonRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `playerid` | `path` | `string` | yes | — |
| `numberofgames` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGame3` | `playerGame3Schema` | `src/models/player-game3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3StatsPlayerGameStatsByDateFinal

- **Signature**: `nhlV3StatsPlayerGameStatsByDateFinal(request: NhlV3Stats.NhlV3StatsPlayerGameStatsByDateFinalRequest, options?: RequestOptions): ApiPromise<PlayerGame3[], NhlV3Stats.NhlV3StatsPlayerGameStatsByDateFinalError>`
- **Wire**: `GET /v3/nhl/stats/{format}/PlayerGameStatsByDateFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGame3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Stats.NhlV3StatsPlayerGameStatsByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Stats.NhlV3StatsPlayerGameStatsByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGame3` | `playerGame3Schema` | `src/models/player-game3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3StatsPlayerGameStatsByDateLiveFinal

- **Signature**: `nhlV3StatsPlayerGameStatsByDateLiveFinal(request: NhlV3Stats.NhlV3StatsPlayerGameStatsByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<PlayerGame3[], NhlV3Stats.NhlV3StatsPlayerGameStatsByDateLiveFinalError>`
- **Wire**: `GET /v3/nhl/stats/{format}/PlayerGameStatsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGame3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Stats.NhlV3StatsPlayerGameStatsByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Stats.NhlV3StatsPlayerGameStatsByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGame3` | `playerGame3Schema` | `src/models/player-game3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3StatsPlayerSeasonStats

- **Signature**: `nhlV3StatsPlayerSeasonStats(request: NhlV3Stats.NhlV3StatsPlayerSeasonStatsRequest, options?: RequestOptions): ApiPromise<PlayerSeason4[], NhlV3Stats.NhlV3StatsPlayerSeasonStatsError>`
- **Wire**: `GET /v3/nhl/stats/{format}/PlayerSeasonStats/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeason4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Stats.NhlV3StatsPlayerSeasonStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Stats.NhlV3StatsPlayerSeasonStatsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeason4` | `playerSeason4Schema` | `src/models/player-season4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3StatsPlayerSeasonStatsByTeam

- **Signature**: `nhlV3StatsPlayerSeasonStatsByTeam(request: NhlV3Stats.NhlV3StatsPlayerSeasonStatsByTeamRequest, options?: RequestOptions): ApiPromise<PlayerSeason4[], NhlV3Stats.NhlV3StatsPlayerSeasonStatsByTeamError>`
- **Wire**: `GET /v3/nhl/stats/{format}/PlayerSeasonStatsByTeam/{season}/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeason4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Stats.NhlV3StatsPlayerSeasonStatsByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Stats.NhlV3StatsPlayerSeasonStatsByTeamRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeason4` | `playerSeason4Schema` | `src/models/player-season4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3StatsTeamGameStatsByDateFinal

- **Signature**: `nhlV3StatsTeamGameStatsByDateFinal(request: NhlV3Stats.NhlV3StatsTeamGameStatsByDateFinalRequest, options?: RequestOptions): ApiPromise<TeamGame3[], NhlV3Stats.NhlV3StatsTeamGameStatsByDateFinalError>`
- **Wire**: `GET /v3/nhl/stats/{format}/TeamGameStatsByDateFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamGame3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Stats.NhlV3StatsTeamGameStatsByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Stats.NhlV3StatsTeamGameStatsByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamGame3` | `teamGame3Schema` | `src/models/team-game3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3StatsTeamStatsAllowedByPosition

- **Signature**: `nhlV3StatsTeamStatsAllowedByPosition(request: NhlV3Stats.NhlV3StatsTeamStatsAllowedByPositionRequest, options?: RequestOptions): ApiPromise<TeamSeason3[], NhlV3Stats.NhlV3StatsTeamStatsAllowedByPositionError>`
- **Wire**: `GET /v3/nhl/stats/{format}/TeamStatsAllowedByPosition/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamSeason3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Stats.NhlV3StatsTeamStatsAllowedByPositionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Stats.NhlV3StatsTeamStatsAllowedByPositionRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamSeason3` | `teamSeason3Schema` | `src/models/team-season3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

