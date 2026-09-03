<!-- Generated file — do not edit; regenerated with the SDK. -->

# SoccerV4Stats — operations

Accessor: `client.soccerV4Stats` · Source: `src/resources/soccer-v4-stats.ts` · 11 operations · Request and error types: namespace `SoccerV4Stats`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### soccerV4StatsBoxScoreFinal

- **Signature**: `soccerV4StatsBoxScoreFinal(request: SoccerV4Stats.SoccerV4StatsBoxScoreFinalRequest, options?: RequestOptions): ApiPromise<BoxScore6[], SoccerV4Stats.SoccerV4StatsBoxScoreFinalError>`
- **Wire**: `GET /v4/soccer/stats/{format}/BoxScoreFinal/{competition}/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore6[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Stats.SoccerV4StatsBoxScoreFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Stats.SoccerV4StatsBoxScoreFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore6` | `boxScore6Schema` | `src/models/box-score6.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4StatsBoxScoreLiveFinal

- **Signature**: `soccerV4StatsBoxScoreLiveFinal(request: SoccerV4Stats.SoccerV4StatsBoxScoreLiveFinalRequest, options?: RequestOptions): ApiPromise<BoxScore6[], SoccerV4Stats.SoccerV4StatsBoxScoreLiveFinalError>`
- **Wire**: `GET /v4/soccer/stats/{format}/BoxScore/{competition}/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore6[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Stats.SoccerV4StatsBoxScoreLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Stats.SoccerV4StatsBoxScoreLiveFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore6` | `boxScore6Schema` | `src/models/box-score6.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4StatsBoxScoresByDateFinal

- **Signature**: `soccerV4StatsBoxScoresByDateFinal(request: SoccerV4Stats.SoccerV4StatsBoxScoresByDateFinalRequest, options?: RequestOptions): ApiPromise<BoxScore6[], SoccerV4Stats.SoccerV4StatsBoxScoresByDateFinalError>`
- **Wire**: `GET /v4/soccer/stats/{format}/BoxScoresFinal/{competition}/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore6[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Stats.SoccerV4StatsBoxScoresByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Stats.SoccerV4StatsBoxScoresByDateFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore6` | `boxScore6Schema` | `src/models/box-score6.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4StatsBoxScoresByDateLiveFinal

- **Signature**: `soccerV4StatsBoxScoresByDateLiveFinal(request: SoccerV4Stats.SoccerV4StatsBoxScoresByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<BoxScore6[], SoccerV4Stats.SoccerV4StatsBoxScoresByDateLiveFinalError>`
- **Wire**: `GET /v4/soccer/stats/{format}/BoxScoresByDate/{competition}/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore6[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Stats.SoccerV4StatsBoxScoresByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Stats.SoccerV4StatsBoxScoresByDateLiveFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore6` | `boxScore6Schema` | `src/models/box-score6.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4StatsBoxScoresDeltaByDate

- **Signature**: `soccerV4StatsBoxScoresDeltaByDate(request: SoccerV4Stats.SoccerV4StatsBoxScoresDeltaByDateRequest, options?: RequestOptions): ApiPromise<BoxScore6[], SoccerV4Stats.SoccerV4StatsBoxScoresDeltaByDateError>`
- **Wire**: `GET /v4/soccer/stats/{format}/BoxScoresDeltaByDate/{competition}/{date}/{minutes}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `BoxScore6[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Stats.SoccerV4StatsBoxScoresDeltaByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Stats.SoccerV4StatsBoxScoresDeltaByDateRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `date` | `path` | `string` | yes | — |
| `minutes` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `BoxScore6` | `boxScore6Schema` | `src/models/box-score6.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4StatsFantasyPointsByDate

- **Signature**: `soccerV4StatsFantasyPointsByDate(request: SoccerV4Stats.SoccerV4StatsFantasyPointsByDateRequest, options?: RequestOptions): ApiPromise<FantasyGame4[], SoccerV4Stats.SoccerV4StatsFantasyPointsByDateError>`
- **Wire**: `GET /v4/soccer/stats/{format}/FantasyGameStatsByDate/{competition}/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FantasyGame4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Stats.SoccerV4StatsFantasyPointsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Stats.SoccerV4StatsFantasyPointsByDateRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `FantasyGame4` | `fantasyGame4Schema` | `src/models/fantasy-game4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4StatsLineupsByDate

- **Signature**: `soccerV4StatsLineupsByDate(request: SoccerV4Stats.SoccerV4StatsLineupsByDateRequest, options?: RequestOptions): ApiPromise<PlayerGameBasic[], SoccerV4Stats.SoccerV4StatsLineupsByDateError>`
- **Wire**: `GET /v4/soccer/stats/{format}/LineupsByDate/{competition}/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGameBasic[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Stats.SoccerV4StatsLineupsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Stats.SoccerV4StatsLineupsByDateRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGameBasic` | `playerGameBasicSchema` | `src/models/player-game-basic.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4StatsPlayerGameStatsByDateFinal

- **Signature**: `soccerV4StatsPlayerGameStatsByDateFinal(request: SoccerV4Stats.SoccerV4StatsPlayerGameStatsByDateFinalRequest, options?: RequestOptions): ApiPromise<PlayerGame7[], SoccerV4Stats.SoccerV4StatsPlayerGameStatsByDateFinalError>`
- **Wire**: `GET /v4/soccer/stats/{format}/PlayerGameStatsByDateFinal/{competition}/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGame7[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Stats.SoccerV4StatsPlayerGameStatsByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Stats.SoccerV4StatsPlayerGameStatsByDateFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGame7` | `playerGame7Schema` | `src/models/player-game7.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4StatsPlayerGameStatsByDateLiveFinal

- **Signature**: `soccerV4StatsPlayerGameStatsByDateLiveFinal(request: SoccerV4Stats.SoccerV4StatsPlayerGameStatsByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<PlayerGame7[], SoccerV4Stats.SoccerV4StatsPlayerGameStatsByDateLiveFinalError>`
- **Wire**: `GET /v4/soccer/stats/{format}/PlayerGameStatsByDate/{competition}/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGame7[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Stats.SoccerV4StatsPlayerGameStatsByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Stats.SoccerV4StatsPlayerGameStatsByDateLiveFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGame7` | `playerGame7Schema` | `src/models/player-game7.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4StatsPlayerSeasonStats

- **Signature**: `soccerV4StatsPlayerSeasonStats(request: SoccerV4Stats.SoccerV4StatsPlayerSeasonStatsRequest, options?: RequestOptions): ApiPromise<Round[], SoccerV4Stats.SoccerV4StatsPlayerSeasonStatsError>`
- **Wire**: `GET /v4/soccer/stats/{format}/PlayerSeasonStats/{competition}/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Round[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Stats.SoccerV4StatsPlayerSeasonStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Stats.SoccerV4StatsPlayerSeasonStatsRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Round` | `roundSchema` | `src/models/round.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4StatsTeamGameStatsByDateFinal

- **Signature**: `soccerV4StatsTeamGameStatsByDateFinal(request: SoccerV4Stats.SoccerV4StatsTeamGameStatsByDateFinalRequest, options?: RequestOptions): ApiPromise<TeamGame7[], SoccerV4Stats.SoccerV4StatsTeamGameStatsByDateFinalError>`
- **Wire**: `GET /v4/soccer/stats/{format}/TeamGameStatsByDateFinal/{competition}/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamGame7[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Stats.SoccerV4StatsTeamGameStatsByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Stats.SoccerV4StatsTeamGameStatsByDateFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamGame7` | `teamGame7Schema` | `src/models/team-game7.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

