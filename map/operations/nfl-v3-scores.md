<!-- Generated file — do not edit; regenerated with the SDK. -->

# NflV3Scores — operations

Accessor: `client.nflV3Scores` · Source: `src/resources/nfl-v3-scores.ts` · 44 operations · Request and error types: namespace `NflV3Scores`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### nflV3ScoresAreGamesInProgress

- **Signature**: `nflV3ScoresAreGamesInProgress(request: NflV3Scores.NflV3ScoresAreGamesInProgressRequest, options?: RequestOptions): ApiPromise<boolean, NflV3Scores.NflV3ScoresAreGamesInProgressError>`
- **Wire**: `GET /v3/nfl/scores/{format}/AreAnyGamesInProgress`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `boolean` — a bare `application/json` boolean; the success type *is* the boolean
- **Error**: `NflV3Scores.NflV3ScoresAreGamesInProgressError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresAreGamesInProgressRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresByeWeeks

- **Signature**: `nflV3ScoresByeWeeks(request: NflV3Scores.NflV3ScoresByeWeeksRequest, options?: RequestOptions): ApiPromise<Bye[], NflV3Scores.NflV3ScoresByeWeeksError>`
- **Wire**: `GET /v3/nfl/scores/{format}/Byes/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Bye[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresByeWeeksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresByeWeeksRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Bye` | `byeSchema` | `src/models/bye.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresDepthChartsAll

- **Signature**: `nflV3ScoresDepthChartsAll(request: NflV3Scores.NflV3ScoresDepthChartsAllRequest, options?: RequestOptions): ApiPromise<TeamDepthChart[], NflV3Scores.NflV3ScoresDepthChartsAllError>`
- **Wire**: `GET /v3/nfl/scores/{format}/DepthChartsAll`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamDepthChart[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresDepthChartsAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresDepthChartsAllRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamDepthChart` | `teamDepthChartSchema` | `src/models/team-depth-chart.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresDepthChartsByActive

- **Signature**: `nflV3ScoresDepthChartsByActive(request: NflV3Scores.NflV3ScoresDepthChartsByActiveRequest, options?: RequestOptions): ApiPromise<TeamDepthChart[], NflV3Scores.NflV3ScoresDepthChartsByActiveError>`
- **Wire**: `GET /v3/nfl/scores/{format}/DepthCharts`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamDepthChart[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresDepthChartsByActiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresDepthChartsByActiveRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamDepthChart` | `teamDepthChartSchema` | `src/models/team-depth-chart.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresDepthChartsByWeek

- **Signature**: `nflV3ScoresDepthChartsByWeek(request: NflV3Scores.NflV3ScoresDepthChartsByWeekRequest, options?: RequestOptions): ApiPromise<TeamDepthChartWeekly[], NflV3Scores.NflV3ScoresDepthChartsByWeekError>`
- **Wire**: `GET /v3/nfl/scores/{format}/DepthChartsByWeek/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamDepthChartWeekly[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresDepthChartsByWeekError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresDepthChartsByWeekRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamDepthChartWeekly` | `teamDepthChartWeeklySchema` | `src/models/team-depth-chart-weekly.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresGamesByDateFinal

- **Signature**: `nflV3ScoresGamesByDateFinal(request: NflV3Scores.NflV3ScoresGamesByDateFinalRequest, options?: RequestOptions): ApiPromise<Score[], NflV3Scores.NflV3ScoresGamesByDateFinalError>`
- **Wire**: `GET /v3/nfl/scores/{format}/ScoresByDateFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Score[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresGamesByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresGamesByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Score` | `scoreSchema` | `src/models/score.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresGamesByDateLiveFinal

- **Signature**: `nflV3ScoresGamesByDateLiveFinal(request: NflV3Scores.NflV3ScoresGamesByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<Score[], NflV3Scores.NflV3ScoresGamesByDateLiveFinalError>`
- **Wire**: `GET /v3/nfl/scores/{format}/ScoresByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Score[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresGamesByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresGamesByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Score` | `scoreSchema` | `src/models/score.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresGamesBySeasonLiveFinal

- **Signature**: `nflV3ScoresGamesBySeasonLiveFinal(request: NflV3Scores.NflV3ScoresGamesBySeasonLiveFinalRequest, options?: RequestOptions): ApiPromise<Score[], NflV3Scores.NflV3ScoresGamesBySeasonLiveFinalError>`
- **Wire**: `GET /v3/nfl/scores/{format}/Scores/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Score[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresGamesBySeasonLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresGamesBySeasonLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Score` | `scoreSchema` | `src/models/score.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresGamesByWeekFinal

- **Signature**: `nflV3ScoresGamesByWeekFinal(request: NflV3Scores.NflV3ScoresGamesByWeekFinalRequest, options?: RequestOptions): ApiPromise<Score[], NflV3Scores.NflV3ScoresGamesByWeekFinalError>`
- **Wire**: `GET /v3/nfl/scores/{format}/ScoresByWeekFinal/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Score[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresGamesByWeekFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresGamesByWeekFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Score` | `scoreSchema` | `src/models/score.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresGamesByWeekLiveFinal

- **Signature**: `nflV3ScoresGamesByWeekLiveFinal(request: NflV3Scores.NflV3ScoresGamesByWeekLiveFinalRequest, options?: RequestOptions): ApiPromise<Score[], NflV3Scores.NflV3ScoresGamesByWeekLiveFinalError>`
- **Wire**: `GET /v3/nfl/scores/{format}/ScoresByWeek/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Score[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresGamesByWeekLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresGamesByWeekLiveFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Score` | `scoreSchema` | `src/models/score.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresGamesBasicByWeekFinal

- **Signature**: `nflV3ScoresGamesBasicByWeekFinal(request: NflV3Scores.NflV3ScoresGamesBasicByWeekFinalRequest, options?: RequestOptions): ApiPromise<ScoreBasic[], NflV3Scores.NflV3ScoresGamesBasicByWeekFinalError>`
- **Wire**: `GET /v3/nfl/scores/{format}/ScoresBasicFinal/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScoreBasic[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresGamesBasicByWeekFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresGamesBasicByWeekFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ScoreBasic` | `scoreBasicSchema` | `src/models/score-basic.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresGamesBasicByWeekLiveFinal

- **Signature**: `nflV3ScoresGamesBasicByWeekLiveFinal(request: NflV3Scores.NflV3ScoresGamesBasicByWeekLiveFinalRequest, options?: RequestOptions): ApiPromise<ScoreBasic[], NflV3Scores.NflV3ScoresGamesBasicByWeekLiveFinalError>`
- **Wire**: `GET /v3/nfl/scores/{format}/ScoresBasic/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScoreBasic[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresGamesBasicByWeekLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresGamesBasicByWeekLiveFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ScoreBasic` | `scoreBasicSchema` | `src/models/score-basic.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresNews

- **Signature**: `nflV3ScoresNews(request: NflV3Scores.NflV3ScoresNewsRequest, options?: RequestOptions): ApiPromise<News[], NflV3Scores.NflV3ScoresNewsError>`
- **Wire**: `GET /v3/nfl/scores/{format}/News`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `News[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresNewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresNewsRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `News` | `newsSchema` | `src/models/news.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresNewsByDate

- **Signature**: `nflV3ScoresNewsByDate(request: NflV3Scores.NflV3ScoresNewsByDateRequest, options?: RequestOptions): ApiPromise<News[], NflV3Scores.NflV3ScoresNewsByDateError>`
- **Wire**: `GET /v3/nfl/scores/{format}/NewsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `News[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresNewsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresNewsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `News` | `newsSchema` | `src/models/news.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresNewsByTeam

- **Signature**: `nflV3ScoresNewsByTeam(request: NflV3Scores.NflV3ScoresNewsByTeamRequest, options?: RequestOptions): ApiPromise<News[], NflV3Scores.NflV3ScoresNewsByTeamError>`
- **Wire**: `GET /v3/nfl/scores/{format}/NewsByTeam/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `News[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresNewsByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresNewsByTeamRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `News` | `newsSchema` | `src/models/news.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresPlayerDetailsAll

- **Signature**: `nflV3ScoresPlayerDetailsAll(request: NflV3Scores.NflV3ScoresPlayerDetailsAllRequest, options?: RequestOptions): ApiPromise<Player[], NflV3Scores.NflV3ScoresPlayerDetailsAllError>`
- **Wire**: `GET /v3/nfl/scores/{format}/Players`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresPlayerDetailsAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresPlayerDetailsAllRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player` | `playerSchema` | `src/models/player.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresPlayerDetailsByFreeAgents

- **Signature**: `nflV3ScoresPlayerDetailsByFreeAgents(request: NflV3Scores.NflV3ScoresPlayerDetailsByFreeAgentsRequest, options?: RequestOptions): ApiPromise<Player[], NflV3Scores.NflV3ScoresPlayerDetailsByFreeAgentsError>`
- **Wire**: `GET /v3/nfl/scores/{format}/FreeAgents`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresPlayerDetailsByFreeAgentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresPlayerDetailsByFreeAgentsRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player` | `playerSchema` | `src/models/player.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresPlayerDetailsByRookieDraftYear

- **Signature**: `nflV3ScoresPlayerDetailsByRookieDraftYear(request: NflV3Scores.NflV3ScoresPlayerDetailsByRookieDraftYearRequest, options?: RequestOptions): ApiPromise<Player[], NflV3Scores.NflV3ScoresPlayerDetailsByRookieDraftYearError>`
- **Wire**: `GET /v3/nfl/scores/{format}/Rookies/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresPlayerDetailsByRookieDraftYearError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresPlayerDetailsByRookieDraftYearRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player` | `playerSchema` | `src/models/player.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresPlayerDetailsByTeam

- **Signature**: `nflV3ScoresPlayerDetailsByTeam(request: NflV3Scores.NflV3ScoresPlayerDetailsByTeamRequest, options?: RequestOptions): ApiPromise<PlayerDetail[], NflV3Scores.NflV3ScoresPlayerDetailsByTeamError>`
- **Wire**: `GET /v3/nfl/scores/{format}/Players/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerDetail[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresPlayerDetailsByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresPlayerDetailsByTeamRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerDetail` | `playerDetailSchema` | `src/models/player-detail.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresPlayerGameLogsBySeason

- **Signature**: `nflV3ScoresPlayerGameLogsBySeason(request: NflV3Scores.NflV3ScoresPlayerGameLogsBySeasonRequest, options?: RequestOptions): ApiPromise<TeamGame[], NflV3Scores.NflV3ScoresPlayerGameLogsBySeasonError>`
- **Wire**: `GET /v3/nfl/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamGame[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresPlayerGameLogsBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresPlayerGameLogsBySeasonRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `teamid` | `path` | `string` | yes | — |
| `numberofgames` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamGame` | `teamGameSchema` | `src/models/team-game.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresPlayerProfilesAll

- **Signature**: `nflV3ScoresPlayerProfilesAll(request: NflV3Scores.NflV3ScoresPlayerProfilesAllRequest, options?: RequestOptions): ApiPromise<PlayerBasic[], NflV3Scores.NflV3ScoresPlayerProfilesAllError>`
- **Wire**: `GET /v3/nfl/scores/{format}/PlayersByAvailable`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerBasic[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresPlayerProfilesAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresPlayerProfilesAllRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerBasic` | `playerBasicSchema` | `src/models/player-basic.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresPlayerProfilesByFreeAgent

- **Signature**: `nflV3ScoresPlayerProfilesByFreeAgent(request: NflV3Scores.NflV3ScoresPlayerProfilesByFreeAgentRequest, options?: RequestOptions): ApiPromise<PlayerBasic[], NflV3Scores.NflV3ScoresPlayerProfilesByFreeAgentError>`
- **Wire**: `GET /v3/nfl/scores/{format}/PlayersByFreeAgents`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerBasic[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresPlayerProfilesByFreeAgentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresPlayerProfilesByFreeAgentRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerBasic` | `playerBasicSchema` | `src/models/player-basic.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresPlayerProfilesByRookieDraftYear

- **Signature**: `nflV3ScoresPlayerProfilesByRookieDraftYear(request: NflV3Scores.NflV3ScoresPlayerProfilesByRookieDraftYearRequest, options?: RequestOptions): ApiPromise<PlayerBasic[], NflV3Scores.NflV3ScoresPlayerProfilesByRookieDraftYearError>`
- **Wire**: `GET /v3/nfl/scores/{format}/PlayersByRookieDraftYear/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerBasic[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresPlayerProfilesByRookieDraftYearError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresPlayerProfilesByRookieDraftYearRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerBasic` | `playerBasicSchema` | `src/models/player-basic.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresPlayerProfilesByTeam

- **Signature**: `nflV3ScoresPlayerProfilesByTeam(request: NflV3Scores.NflV3ScoresPlayerProfilesByTeamRequest, options?: RequestOptions): ApiPromise<PlayerBasic[], NflV3Scores.NflV3ScoresPlayerProfilesByTeamError>`
- **Wire**: `GET /v3/nfl/scores/{format}/PlayersBasic/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerBasic[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresPlayerProfilesByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresPlayerProfilesByTeamRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerBasic` | `playerBasicSchema` | `src/models/player-basic.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresReferees

- **Signature**: `nflV3ScoresReferees(request: NflV3Scores.NflV3ScoresRefereesRequest, options?: RequestOptions): ApiPromise<Referee[], NflV3Scores.NflV3ScoresRefereesError>`
- **Wire**: `GET /v3/nfl/scores/{format}/Referees`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Referee[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresRefereesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresRefereesRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Referee` | `refereeSchema` | `src/models/referee.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresSchedules

- **Signature**: `nflV3ScoresSchedules(request: NflV3Scores.NflV3ScoresSchedulesRequest, options?: RequestOptions): ApiPromise<Schedule[], NflV3Scores.NflV3ScoresSchedulesError>`
- **Wire**: `GET /v3/nfl/scores/{format}/Schedules/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Schedule[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresSchedulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresSchedulesRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Schedule` | `scheduleSchema` | `src/models/schedule.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresSchedulesBasic

- **Signature**: `nflV3ScoresSchedulesBasic(request: NflV3Scores.NflV3ScoresSchedulesBasicRequest, options?: RequestOptions): ApiPromise<ScheduleBasic[], NflV3Scores.NflV3ScoresSchedulesBasicError>`
- **Wire**: `GET /v3/nfl/scores/{format}/SchedulesBasic/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScheduleBasic[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresSchedulesBasicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresSchedulesBasicRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ScheduleBasic` | `scheduleBasicSchema` | `src/models/schedule-basic.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresScoresByWeekSimulation

- **Signature**: `nflV3ScoresScoresByWeekSimulation(request: NflV3Scores.NflV3ScoresScoresByWeekSimulationRequest, options?: RequestOptions): ApiPromise<Score[], NflV3Scores.NflV3ScoresScoresByWeekSimulationError>`
- **Wire**: `GET /v3/nfl/scores/{format}/SimulatedScores/{numberofplays}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Score[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresScoresByWeekSimulationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresScoresByWeekSimulationRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `numberofplays` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Score` | `scoreSchema` | `src/models/score.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresSeasonCurrent

- **Signature**: `nflV3ScoresSeasonCurrent(request: NflV3Scores.NflV3ScoresSeasonCurrentRequest, options?: RequestOptions): ApiPromise<number | null, NflV3Scores.NflV3ScoresSeasonCurrentError>`
- **Wire**: `GET /v3/nfl/scores/{format}/CurrentSeason`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `number` — a bare `application/json` number; the success type *is* the number
- **Error**: `NflV3Scores.NflV3ScoresSeasonCurrentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresSeasonCurrentRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresSeasonLastCompleted

- **Signature**: `nflV3ScoresSeasonLastCompleted(request: NflV3Scores.NflV3ScoresSeasonLastCompletedRequest, options?: RequestOptions): ApiPromise<number | null, NflV3Scores.NflV3ScoresSeasonLastCompletedError>`
- **Wire**: `GET /v3/nfl/scores/{format}/LastCompletedSeason`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `number` — a bare `application/json` number; the success type *is* the number
- **Error**: `NflV3Scores.NflV3ScoresSeasonLastCompletedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresSeasonLastCompletedRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresSeasonUpcoming

- **Signature**: `nflV3ScoresSeasonUpcoming(request: NflV3Scores.NflV3ScoresSeasonUpcomingRequest, options?: RequestOptions): ApiPromise<number | null, NflV3Scores.NflV3ScoresSeasonUpcomingError>`
- **Wire**: `GET /v3/nfl/scores/{format}/UpcomingSeason`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `number` — a bare `application/json` number; the success type *is* the number
- **Error**: `NflV3Scores.NflV3ScoresSeasonUpcomingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresSeasonUpcomingRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresStadiums

- **Signature**: `nflV3ScoresStadiums(request: NflV3Scores.NflV3ScoresStadiumsRequest, options?: RequestOptions): ApiPromise<Stadium[], NflV3Scores.NflV3ScoresStadiumsError>`
- **Wire**: `GET /v3/nfl/scores/{format}/Stadiums`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Stadium[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresStadiumsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresStadiumsRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Stadium` | `stadiumSchema` | `src/models/stadium.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresStandings

- **Signature**: `nflV3ScoresStandings(request: NflV3Scores.NflV3ScoresStandingsRequest, options?: RequestOptions): ApiPromise<Standing[], NflV3Scores.NflV3ScoresStandingsError>`
- **Wire**: `GET /v3/nfl/scores/{format}/Standings/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Standing[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresStandingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresStandingsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Standing` | `standingSchema` | `src/models/standing.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresTeamGameStatsLiveFinal

- **Signature**: `nflV3ScoresTeamGameStatsLiveFinal(request: NflV3Scores.NflV3ScoresTeamGameStatsLiveFinalRequest, options?: RequestOptions): ApiPromise<TeamGame[], NflV3Scores.NflV3ScoresTeamGameStatsLiveFinalError>`
- **Wire**: `GET /v3/nfl/scores/{format}/TeamGameStats/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamGame[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresTeamGameStatsLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresTeamGameStatsLiveFinalRequest` (3):

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

### nflV3ScoresTeamProfilesAll

- **Signature**: `nflV3ScoresTeamProfilesAll(request: NflV3Scores.NflV3ScoresTeamProfilesAllRequest, options?: RequestOptions): ApiPromise<Team[], NflV3Scores.NflV3ScoresTeamProfilesAllError>`
- **Wire**: `GET /v3/nfl/scores/{format}/AllTeams`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Team[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresTeamProfilesAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresTeamProfilesAllRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Team` | `teamSchema` | `src/models/team.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresTeamProfilesByActive

- **Signature**: `nflV3ScoresTeamProfilesByActive(request: NflV3Scores.NflV3ScoresTeamProfilesByActiveRequest, options?: RequestOptions): ApiPromise<Team[], NflV3Scores.NflV3ScoresTeamProfilesByActiveError>`
- **Wire**: `GET /v3/nfl/scores/{format}/Teams`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Team[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresTeamProfilesByActiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresTeamProfilesByActiveRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Team` | `teamSchema` | `src/models/team.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresTeamProfilesBySeason

- **Signature**: `nflV3ScoresTeamProfilesBySeason(request: NflV3Scores.NflV3ScoresTeamProfilesBySeasonRequest, options?: RequestOptions): ApiPromise<Team[], NflV3Scores.NflV3ScoresTeamProfilesBySeasonError>`
- **Wire**: `GET /v3/nfl/scores/{format}/Teams/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Team[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresTeamProfilesBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresTeamProfilesBySeasonRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Team` | `teamSchema` | `src/models/team.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresTeamProfilesBasicAll

- **Signature**: `nflV3ScoresTeamProfilesBasicAll(request: NflV3Scores.NflV3ScoresTeamProfilesBasicAllRequest, options?: RequestOptions): ApiPromise<TeamBasic[], NflV3Scores.NflV3ScoresTeamProfilesBasicAllError>`
- **Wire**: `GET /v3/nfl/scores/{format}/TeamsBasic`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamBasic[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresTeamProfilesBasicAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresTeamProfilesBasicAllRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamBasic` | `teamBasicSchema` | `src/models/team-basic.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresTeamSeasonStats

- **Signature**: `nflV3ScoresTeamSeasonStats(request: NflV3Scores.NflV3ScoresTeamSeasonStatsRequest, options?: RequestOptions): ApiPromise<TeamSeason[], NflV3Scores.NflV3ScoresTeamSeasonStatsError>`
- **Wire**: `GET /v3/nfl/scores/{format}/TeamSeasonStats/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamSeason[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresTeamSeasonStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresTeamSeasonStatsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamSeason` | `teamSeasonSchema` | `src/models/team-season.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresTimeframes

- **Signature**: `nflV3ScoresTimeframes(request: NflV3Scores.NflV3ScoresTimeframesRequest, options?: RequestOptions): ApiPromise<Timeframe[], NflV3Scores.NflV3ScoresTimeframesError>`
- **Wire**: `GET /v3/nfl/scores/{format}/Timeframes/{type}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Timeframe[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresTimeframesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresTimeframesRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `type` | `path` | `Type` | no | `Type.Current` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Type` | `typeSchema` | `src/models/type.ts` |
| `Timeframe` | `timeframeSchema` | `src/models/timeframe.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresTransactionsByDate

- **Signature**: `nflV3ScoresTransactionsByDate(request: NflV3Scores.NflV3ScoresTransactionsByDateRequest, options?: RequestOptions): ApiPromise<Transaction[], NflV3Scores.NflV3ScoresTransactionsByDateError>`
- **Wire**: `GET /v3/nfl/scores/{format}/TransactionsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Transaction[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Scores.NflV3ScoresTransactionsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresTransactionsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Transaction` | `transactionSchema` | `src/models/transaction.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresWeekCurrent

- **Signature**: `nflV3ScoresWeekCurrent(request: NflV3Scores.NflV3ScoresWeekCurrentRequest, options?: RequestOptions): ApiPromise<number | null, NflV3Scores.NflV3ScoresWeekCurrentError>`
- **Wire**: `GET /v3/nfl/scores/{format}/CurrentWeek`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `number` — a bare `application/json` number; the success type *is* the number
- **Error**: `NflV3Scores.NflV3ScoresWeekCurrentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresWeekCurrentRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresWeekLastCompleted

- **Signature**: `nflV3ScoresWeekLastCompleted(request: NflV3Scores.NflV3ScoresWeekLastCompletedRequest, options?: RequestOptions): ApiPromise<number | null, NflV3Scores.NflV3ScoresWeekLastCompletedError>`
- **Wire**: `GET /v3/nfl/scores/{format}/LastCompletedWeek`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `number` — a bare `application/json` number; the success type *is* the number
- **Error**: `NflV3Scores.NflV3ScoresWeekLastCompletedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresWeekLastCompletedRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3ScoresWeekUpcoming

- **Signature**: `nflV3ScoresWeekUpcoming(request: NflV3Scores.NflV3ScoresWeekUpcomingRequest, options?: RequestOptions): ApiPromise<number | null, NflV3Scores.NflV3ScoresWeekUpcomingError>`
- **Wire**: `GET /v3/nfl/scores/{format}/UpcomingWeek`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `number` — a bare `application/json` number; the success type *is* the number
- **Error**: `NflV3Scores.NflV3ScoresWeekUpcomingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Scores.NflV3ScoresWeekUpcomingRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

