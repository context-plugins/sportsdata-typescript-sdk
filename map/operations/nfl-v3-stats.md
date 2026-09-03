<!-- Generated file — do not edit; regenerated with the SDK. -->

# NflV3Stats — operations

Accessor: `client.nflV3Stats` · Source: `src/resources/nfl-v3-stats.ts` · 34 operations · Request and error types: namespace `NflV3Stats`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### nflV3StatsBoxScoreByTeamFinal

- **Signature**: `nflV3StatsBoxScoreByTeamFinal(request: NflV3Stats.NflV3StatsBoxScoreByTeamFinalRequest, options?: RequestOptions): ApiPromise<BoxScoreV3, NflV3Stats.NflV3StatsBoxScoreByTeamFinalError>`
- **Wire**: `GET /v3/nfl/stats/{format}/BoxScoreByTeamFinal/{season}/{week}/{hometeam}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScoreV3`
- **Error**: `NflV3Stats.NflV3StatsBoxScoreByTeamFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsBoxScoreByTeamFinalRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |
| `hometeam` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScoreV3` | `boxScoreV3Schema` | `src/models/box-score-v3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsBoxScoreByTeamLiveFinal

- **Signature**: `nflV3StatsBoxScoreByTeamLiveFinal(request: NflV3Stats.NflV3StatsBoxScoreByTeamLiveFinalRequest, options?: RequestOptions): ApiPromise<BoxScoreV3, NflV3Stats.NflV3StatsBoxScoreByTeamLiveFinalError>`
- **Wire**: `GET /v3/nfl/stats/{format}/BoxScoreV3/{season}/{week}/{hometeam}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScoreV3`
- **Error**: `NflV3Stats.NflV3StatsBoxScoreByTeamLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsBoxScoreByTeamLiveFinalRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |
| `hometeam` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScoreV3` | `boxScoreV3Schema` | `src/models/box-score-v3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsBoxScoreFinal

- **Signature**: `nflV3StatsBoxScoreFinal(request: NflV3Stats.NflV3StatsBoxScoreFinalRequest, options?: RequestOptions): ApiPromise<BoxScoreV3, NflV3Stats.NflV3StatsBoxScoreFinalError>`
- **Wire**: `GET /v3/nfl/stats/{format}/BoxScoreFinal/{scoreid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScoreV3`
- **Error**: `NflV3Stats.NflV3StatsBoxScoreFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsBoxScoreFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `scoreid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScoreV3` | `boxScoreV3Schema` | `src/models/box-score-v3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsBoxScoreLiveFinal

- **Signature**: `nflV3StatsBoxScoreLiveFinal(request: NflV3Stats.NflV3StatsBoxScoreLiveFinalRequest, options?: RequestOptions): ApiPromise<BoxScoreV3, NflV3Stats.NflV3StatsBoxScoreLiveFinalError>`
- **Wire**: `GET /v3/nfl/stats/{format}/BoxScoreByScoreIDV3/{scoreid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScoreV3`
- **Error**: `NflV3Stats.NflV3StatsBoxScoreLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsBoxScoreLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `scoreid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScoreV3` | `boxScoreV3Schema` | `src/models/box-score-v3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsBoxScoresByWeekFinal

- **Signature**: `nflV3StatsBoxScoresByWeekFinal(request: NflV3Stats.NflV3StatsBoxScoresByWeekFinalRequest, options?: RequestOptions): ApiPromise<BoxScoreV3[], NflV3Stats.NflV3StatsBoxScoresByWeekFinalError>`
- **Wire**: `GET /v3/nfl/stats/{format}/BoxScoresFinal/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScoreV3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsBoxScoresByWeekFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsBoxScoresByWeekFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScoreV3` | `boxScoreV3Schema` | `src/models/box-score-v3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsBoxScoresDeltaByWeek

- **Signature**: `nflV3StatsBoxScoresDeltaByWeek(request: NflV3Stats.NflV3StatsBoxScoresDeltaByWeekRequest, options?: RequestOptions): ApiPromise<BoxScoreV3[], NflV3Stats.NflV3StatsBoxScoresDeltaByWeekError>`
- **Wire**: `GET /v3/nfl/stats/{format}/BoxScoresDeltaV3/{season}/{week}/{playerstoinclude}/{minutes}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScoreV3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsBoxScoresDeltaByWeekError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsBoxScoresDeltaByWeekRequest` (5):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |
| `playerstoinclude` | `path` | `Playerstoinclude` | no | `Playerstoinclude.All` |
| `minutes` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Playerstoinclude` | `playerstoincludeSchema` | `src/models/playerstoinclude.ts` |
| `BoxScoreV3` | `boxScoreV3Schema` | `src/models/box-score-v3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsBoxScoresSimulation

- **Signature**: `nflV3StatsBoxScoresSimulation(request: NflV3Stats.NflV3StatsBoxScoresSimulationRequest, options?: RequestOptions): ApiPromise<BoxScoreV3[], NflV3Stats.NflV3StatsBoxScoresSimulationError>`
- **Wire**: `GET /v3/nfl/stats/{format}/SimulatedBoxScoresV3/{numberofplays}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScoreV3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsBoxScoresSimulationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsBoxScoresSimulationRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `numberofplays` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScoreV3` | `boxScoreV3Schema` | `src/models/box-score-v3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsFantasyDefenseGameStatsAll

- **Signature**: `nflV3StatsFantasyDefenseGameStatsAll(request: NflV3Stats.NflV3StatsFantasyDefenseGameStatsAllRequest, options?: RequestOptions): ApiPromise<FantasyDefenseGame[], NflV3Stats.NflV3StatsFantasyDefenseGameStatsAllError>`
- **Wire**: `GET /v3/nfl/stats/{format}/FantasyDefenseByGame/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FantasyDefenseGame[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsFantasyDefenseGameStatsAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsFantasyDefenseGameStatsAllRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `FantasyDefenseGame` | `fantasyDefenseGameSchema` | `src/models/fantasy-defense-game.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsFantasyDefenseGameStatsByTeam

- **Signature**: `nflV3StatsFantasyDefenseGameStatsByTeam(request: NflV3Stats.NflV3StatsFantasyDefenseGameStatsByTeamRequest, options?: RequestOptions): ApiPromise<FantasyDefenseGame, NflV3Stats.NflV3StatsFantasyDefenseGameStatsByTeamError>`
- **Wire**: `GET /v3/nfl/stats/{format}/FantasyDefenseByGameByTeam/{season}/{week}/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FantasyDefenseGame`
- **Error**: `NflV3Stats.NflV3StatsFantasyDefenseGameStatsByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsFantasyDefenseGameStatsByTeamRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `FantasyDefenseGame` | `fantasyDefenseGameSchema` | `src/models/fantasy-defense-game.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsFantasyDefenseSeasonStatsAll

- **Signature**: `nflV3StatsFantasyDefenseSeasonStatsAll(request: NflV3Stats.NflV3StatsFantasyDefenseSeasonStatsAllRequest, options?: RequestOptions): ApiPromise<FantasyDefenseSeason[], NflV3Stats.NflV3StatsFantasyDefenseSeasonStatsAllError>`
- **Wire**: `GET /v3/nfl/stats/{format}/FantasyDefenseBySeason/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FantasyDefenseSeason[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsFantasyDefenseSeasonStatsAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsFantasyDefenseSeasonStatsAllRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `FantasyDefenseSeason` | `fantasyDefenseSeasonSchema` | `src/models/fantasy-defense-season.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsFantasyDefenseSeasonStatsByTeam

- **Signature**: `nflV3StatsFantasyDefenseSeasonStatsByTeam(request: NflV3Stats.NflV3StatsFantasyDefenseSeasonStatsByTeamRequest, options?: RequestOptions): ApiPromise<FantasyDefenseSeason, NflV3Stats.NflV3StatsFantasyDefenseSeasonStatsByTeamError>`
- **Wire**: `GET /v3/nfl/stats/{format}/FantasyDefenseBySeasonByTeam/{season}/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FantasyDefenseSeason`
- **Error**: `NflV3Stats.NflV3StatsFantasyDefenseSeasonStatsByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsFantasyDefenseSeasonStatsByTeamRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `FantasyDefenseSeason` | `fantasyDefenseSeasonSchema` | `src/models/fantasy-defense-season.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsFantasyPlayerOwnershipPercentagesSeasonLongByWeek

- **Signature**: `nflV3StatsFantasyPlayerOwnershipPercentagesSeasonLongByWeek(request: NflV3Stats.NflV3StatsFantasyPlayerOwnershipPercentagesSeasonLongByWeekRequest, options?: RequestOptions): ApiPromise<PlayerOwnership[], NflV3Stats.NflV3StatsFantasyPlayerOwnershipPercentagesSeasonLongByWeekError>`
- **Wire**: `GET /v3/nfl/stats/{format}/PlayerOwnership/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerOwnership[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsFantasyPlayerOwnershipPercentagesSeasonLongByWeekError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsFantasyPlayerOwnershipPercentagesSeasonLongByWeekRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerOwnership` | `playerOwnershipSchema` | `src/models/player-ownership.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsFantasyPointsByWeek

- **Signature**: `nflV3StatsFantasyPointsByWeek(request: NflV3Stats.NflV3StatsFantasyPointsByWeekRequest, options?: RequestOptions): ApiPromise<FantasyGame[], NflV3Stats.NflV3StatsFantasyPointsByWeekError>`
- **Wire**: `GET /v3/nfl/stats/{format}/FantasyGameStatsByWeek/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FantasyGame[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsFantasyPointsByWeekError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsFantasyPointsByWeekRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `FantasyGame` | `fantasyGameSchema` | `src/models/fantasy-game.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsGamesBySeasonFinal

- **Signature**: `nflV3StatsGamesBySeasonFinal(request: NflV3Stats.NflV3StatsGamesBySeasonFinalRequest, options?: RequestOptions): ApiPromise<Score[], NflV3Stats.NflV3StatsGamesBySeasonFinalError>`
- **Wire**: `GET /v3/nfl/stats/{format}/ScoresFinal/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Score[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsGamesBySeasonFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsGamesBySeasonFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Score` | `scoreSchema` | `src/models/score.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsInjuriesAll

- **Signature**: `nflV3StatsInjuriesAll(request: NflV3Stats.NflV3StatsInjuriesAllRequest, options?: RequestOptions): ApiPromise<Injury[], NflV3Stats.NflV3StatsInjuriesAllError>`
- **Wire**: `GET /v3/nfl/stats/{format}/Injuries/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Injury[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsInjuriesAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsInjuriesAllRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Injury` | `injurySchema` | `src/models/injury.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsInjuriesByTeam

- **Signature**: `nflV3StatsInjuriesByTeam(request: NflV3Stats.NflV3StatsInjuriesByTeamRequest, options?: RequestOptions): ApiPromise<Injury[], NflV3Stats.NflV3StatsInjuriesByTeamError>`
- **Wire**: `GET /v3/nfl/stats/{format}/Injuries/{season}/{week}/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Injury[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsInjuriesByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsInjuriesByTeamRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Injury` | `injurySchema` | `src/models/injury.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsPlayerGameLogsBySeason

- **Signature**: `nflV3StatsPlayerGameLogsBySeason(request: NflV3Stats.NflV3StatsPlayerGameLogsBySeasonRequest, options?: RequestOptions): ApiPromise<PlayerGame[], NflV3Stats.NflV3StatsPlayerGameLogsBySeasonError>`
- **Wire**: `GET /v3/nfl/stats/{format}/PlayerGameStatsBySeason/{season}/{playerid}/{numberofgames}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGame[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsPlayerGameLogsBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsPlayerGameLogsBySeasonRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `playerid` | `path` | `string` | yes | — |
| `numberofgames` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGame` | `playerGameSchema` | `src/models/player-game.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsPlayerGameRedZoneStats

- **Signature**: `nflV3StatsPlayerGameRedZoneStats(request: NflV3Stats.NflV3StatsPlayerGameRedZoneStatsRequest, options?: RequestOptions): ApiPromise<PlayerGameRedZone[], NflV3Stats.NflV3StatsPlayerGameRedZoneStatsError>`
- **Wire**: `GET /v3/nfl/stats/{format}/PlayerGameRedZoneStats/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGameRedZone[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsPlayerGameRedZoneStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsPlayerGameRedZoneStatsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGameRedZone` | `playerGameRedZoneSchema` | `src/models/player-game-red-zone.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsPlayerGameRedZoneStatsInsideFive

- **Signature**: `nflV3StatsPlayerGameRedZoneStatsInsideFive(request: NflV3Stats.NflV3StatsPlayerGameRedZoneStatsInsideFiveRequest, options?: RequestOptions): ApiPromise<PlayerGameRedZone[], NflV3Stats.NflV3StatsPlayerGameRedZoneStatsInsideFiveError>`
- **Wire**: `GET /v3/nfl/stats/{format}/PlayerGameRedZoneInsideFiveStats/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGameRedZone[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsPlayerGameRedZoneStatsInsideFiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsPlayerGameRedZoneStatsInsideFiveRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGameRedZone` | `playerGameRedZoneSchema` | `src/models/player-game-red-zone.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsPlayerGameRedZoneStatsInsideTen

- **Signature**: `nflV3StatsPlayerGameRedZoneStatsInsideTen(request: NflV3Stats.NflV3StatsPlayerGameRedZoneStatsInsideTenRequest, options?: RequestOptions): ApiPromise<PlayerGameRedZone[], NflV3Stats.NflV3StatsPlayerGameRedZoneStatsInsideTenError>`
- **Wire**: `GET /v3/nfl/stats/{format}/PlayerGameRedZoneInsideTenStats/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGameRedZone[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsPlayerGameRedZoneStatsInsideTenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsPlayerGameRedZoneStatsInsideTenRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGameRedZone` | `playerGameRedZoneSchema` | `src/models/player-game-red-zone.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsPlayerGameStatsByTeamFinal

- **Signature**: `nflV3StatsPlayerGameStatsByTeamFinal(request: NflV3Stats.NflV3StatsPlayerGameStatsByTeamFinalRequest, options?: RequestOptions): ApiPromise<PlayerGame[], NflV3Stats.NflV3StatsPlayerGameStatsByTeamFinalError>`
- **Wire**: `GET /v3/nfl/stats/{format}/PlayerGameStatsByTeamFinal/{season}/{week}/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGame[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsPlayerGameStatsByTeamFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsPlayerGameStatsByTeamFinalRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGame` | `playerGameSchema` | `src/models/player-game.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsPlayerGameStatsByTeamLiveFinal

- **Signature**: `nflV3StatsPlayerGameStatsByTeamLiveFinal(request: NflV3Stats.NflV3StatsPlayerGameStatsByTeamLiveFinalRequest, options?: RequestOptions): ApiPromise<PlayerGame[], NflV3Stats.NflV3StatsPlayerGameStatsByTeamLiveFinalError>`
- **Wire**: `GET /v3/nfl/stats/{format}/PlayerGameStatsByTeam/{season}/{week}/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGame[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsPlayerGameStatsByTeamLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsPlayerGameStatsByTeamLiveFinalRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGame` | `playerGameSchema` | `src/models/player-game.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsPlayerGameStatsByWeekFinal

- **Signature**: `nflV3StatsPlayerGameStatsByWeekFinal(request: NflV3Stats.NflV3StatsPlayerGameStatsByWeekFinalRequest, options?: RequestOptions): ApiPromise<PlayerGame[], NflV3Stats.NflV3StatsPlayerGameStatsByWeekFinalError>`
- **Wire**: `GET /v3/nfl/stats/{format}/PlayerGameStatsByWeekFinal/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGame[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsPlayerGameStatsByWeekFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsPlayerGameStatsByWeekFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGame` | `playerGameSchema` | `src/models/player-game.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsPlayerGameStatsByWeekLiveFinal

- **Signature**: `nflV3StatsPlayerGameStatsByWeekLiveFinal(request: NflV3Stats.NflV3StatsPlayerGameStatsByWeekLiveFinalRequest, options?: RequestOptions): ApiPromise<PlayerGame[], NflV3Stats.NflV3StatsPlayerGameStatsByWeekLiveFinalError>`
- **Wire**: `GET /v3/nfl/stats/{format}/PlayerGameStatsByWeek/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGame[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsPlayerGameStatsByWeekLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsPlayerGameStatsByWeekLiveFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGame` | `playerGameSchema` | `src/models/player-game.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsPlayerGameStatsDelta

- **Signature**: `nflV3StatsPlayerGameStatsDelta(request: NflV3Stats.NflV3StatsPlayerGameStatsDeltaRequest, options?: RequestOptions): ApiPromise<PlayerGame[], NflV3Stats.NflV3StatsPlayerGameStatsDeltaError>`
- **Wire**: `GET /v3/nfl/stats/{format}/PlayerGameStatsDelta/{minutes}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGame[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsPlayerGameStatsDeltaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsPlayerGameStatsDeltaRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `minutes` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGame` | `playerGameSchema` | `src/models/player-game.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsPlayerGameStatsDeltaByWeek

- **Signature**: `nflV3StatsPlayerGameStatsDeltaByWeek(request: NflV3Stats.NflV3StatsPlayerGameStatsDeltaByWeekRequest, options?: RequestOptions): ApiPromise<PlayerGame[], NflV3Stats.NflV3StatsPlayerGameStatsDeltaByWeekError>`
- **Wire**: `GET /v3/nfl/stats/{format}/PlayerGameStatsByWeekDelta/{season}/{week}/{minutes}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGame[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsPlayerGameStatsDeltaByWeekError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsPlayerGameStatsDeltaByWeekRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |
| `minutes` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGame` | `playerGameSchema` | `src/models/player-game.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsPlayerSeasonRedZoneStats

- **Signature**: `nflV3StatsPlayerSeasonRedZoneStats(request: NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsRequest, options?: RequestOptions): ApiPromise<PlayerSeasonRedZone[], NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsError>`
- **Wire**: `GET /v3/nfl/stats/{format}/PlayerSeasonRedZoneStats/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeasonRedZone[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeasonRedZone` | `playerSeasonRedZoneSchema` | `src/models/player-season-red-zone.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsPlayerSeasonRedZoneStatsInsideFive

- **Signature**: `nflV3StatsPlayerSeasonRedZoneStatsInsideFive(request: NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsInsideFiveRequest, options?: RequestOptions): ApiPromise<PlayerSeasonRedZone[], NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsInsideFiveError>`
- **Wire**: `GET /v3/nfl/stats/{format}/PlayerSeasonRedZoneInsideFiveStats/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeasonRedZone[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsInsideFiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsInsideFiveRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeasonRedZone` | `playerSeasonRedZoneSchema` | `src/models/player-season-red-zone.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsPlayerSeasonRedZoneStatsInsideTen

- **Signature**: `nflV3StatsPlayerSeasonRedZoneStatsInsideTen(request: NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsInsideTenRequest, options?: RequestOptions): ApiPromise<PlayerSeasonRedZone[], NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsInsideTenError>`
- **Wire**: `GET /v3/nfl/stats/{format}/PlayerSeasonRedZoneInsideTenStats/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeasonRedZone[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsInsideTenError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsPlayerSeasonRedZoneStatsInsideTenRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeasonRedZone` | `playerSeasonRedZoneSchema` | `src/models/player-season-red-zone.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsPlayerSeasonStats

- **Signature**: `nflV3StatsPlayerSeasonStats(request: NflV3Stats.NflV3StatsPlayerSeasonStatsRequest, options?: RequestOptions): ApiPromise<PlayerSeason[], NflV3Stats.NflV3StatsPlayerSeasonStatsError>`
- **Wire**: `GET /v3/nfl/stats/{format}/PlayerSeasonStats/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeason[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsPlayerSeasonStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsPlayerSeasonStatsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeason` | `playerSeasonSchema` | `src/models/player-season.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsPlayerSeasonStatsByTeam

- **Signature**: `nflV3StatsPlayerSeasonStatsByTeam(request: NflV3Stats.NflV3StatsPlayerSeasonStatsByTeamRequest, options?: RequestOptions): ApiPromise<PlayerSeason[], NflV3Stats.NflV3StatsPlayerSeasonStatsByTeamError>`
- **Wire**: `GET /v3/nfl/stats/{format}/PlayerSeasonStatsByTeam/{season}/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeason[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsPlayerSeasonStatsByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsPlayerSeasonStatsByTeamRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeason` | `playerSeasonSchema` | `src/models/player-season.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsPlayerSeasonThirdDownStats

- **Signature**: `nflV3StatsPlayerSeasonThirdDownStats(request: NflV3Stats.NflV3StatsPlayerSeasonThirdDownStatsRequest, options?: RequestOptions): ApiPromise<PlayerSeasonThirdDown[], NflV3Stats.NflV3StatsPlayerSeasonThirdDownStatsError>`
- **Wire**: `GET /v3/nfl/stats/{format}/PlayerSeasonThirdDownStats/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeasonThirdDown[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsPlayerSeasonThirdDownStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsPlayerSeasonThirdDownStatsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeasonThirdDown` | `playerSeasonThirdDownSchema` | `src/models/player-season-third-down.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsProBowlers

- **Signature**: `nflV3StatsProBowlers(request: NflV3Stats.NflV3StatsProBowlersRequest, options?: RequestOptions): ApiPromise<PlayerInfo[], NflV3Stats.NflV3StatsProBowlersError>`
- **Wire**: `GET /v3/nfl/stats/{format}/ProBowlers/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerInfo[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsProBowlersError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsProBowlersRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerInfo` | `playerInfoSchema` | `src/models/player-info.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3StatsTeamGameStatsByGameFinal

- **Signature**: `nflV3StatsTeamGameStatsByGameFinal(request: NflV3Stats.NflV3StatsTeamGameStatsByGameFinalRequest, options?: RequestOptions): ApiPromise<TeamGame[], NflV3Stats.NflV3StatsTeamGameStatsByGameFinalError>`
- **Wire**: `GET /v3/nfl/stats/{format}/TeamGameStatsFinal/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamGame[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Stats.NflV3StatsTeamGameStatsByGameFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Stats.NflV3StatsTeamGameStatsByGameFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamGame` | `teamGameSchema` | `src/models/team-game.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

