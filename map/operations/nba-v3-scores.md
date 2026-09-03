<!-- Generated file — do not edit; regenerated with the SDK. -->

# NbaV3Scores — operations

Accessor: `client.nbaV3Scores` · Source: `src/resources/nba-v3-scores.ts` · 27 operations · Request and error types: namespace `NbaV3Scores`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### nbaV3ScoresAreGamesInProgress

- **Signature**: `nbaV3ScoresAreGamesInProgress(request: NbaV3Scores.NbaV3ScoresAreGamesInProgressRequest, options?: RequestOptions): ApiPromise<boolean, NbaV3Scores.NbaV3ScoresAreGamesInProgressError>`
- **Wire**: `GET /v3/nba/scores/{format}/AreAnyGamesInProgress`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `boolean` — a bare `application/json` boolean; the success type *is* the boolean
- **Error**: `NbaV3Scores.NbaV3ScoresAreGamesInProgressError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Scores.NbaV3ScoresAreGamesInProgressRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ScoresDepthCharts

- **Signature**: `nbaV3ScoresDepthCharts(request: NbaV3Scores.NbaV3ScoresDepthChartsRequest, options?: RequestOptions): ApiPromise<TeamDepthChart1[], NbaV3Scores.NbaV3ScoresDepthChartsError>`
- **Wire**: `GET /v3/nba/scores/{format}/DepthCharts`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamDepthChart1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Scores.NbaV3ScoresDepthChartsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Scores.NbaV3ScoresDepthChartsRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamDepthChart1` | `teamDepthChart1Schema` | `src/models/team-depth-chart1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ScoresGamesByDateFinal

- **Signature**: `nbaV3ScoresGamesByDateFinal(request: NbaV3Scores.NbaV3ScoresGamesByDateFinalRequest, options?: RequestOptions): ApiPromise<Game[], NbaV3Scores.NbaV3ScoresGamesByDateFinalError>`
- **Wire**: `GET /v3/nba/scores/{format}/GamesByDateFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Game[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Scores.NbaV3ScoresGamesByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Scores.NbaV3ScoresGamesByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Game` | `gameSchema` | `src/models/game.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ScoresGamesByDateLiveFinal

- **Signature**: `nbaV3ScoresGamesByDateLiveFinal(request: NbaV3Scores.NbaV3ScoresGamesByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<Game[], NbaV3Scores.NbaV3ScoresGamesByDateLiveFinalError>`
- **Wire**: `GET /v3/nba/scores/{format}/GamesByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Game[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Scores.NbaV3ScoresGamesByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Scores.NbaV3ScoresGamesByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Game` | `gameSchema` | `src/models/game.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ScoresGamesBasicByDateFinal

- **Signature**: `nbaV3ScoresGamesBasicByDateFinal(request: NbaV3Scores.NbaV3ScoresGamesBasicByDateFinalRequest, options?: RequestOptions): ApiPromise<ScoreBasic1[], NbaV3Scores.NbaV3ScoresGamesBasicByDateFinalError>`
- **Wire**: `GET /v3/nba/scores/{format}/ScoresBasicFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScoreBasic1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Scores.NbaV3ScoresGamesBasicByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Scores.NbaV3ScoresGamesBasicByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ScoreBasic1` | `scoreBasic1Schema` | `src/models/score-basic1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ScoresGamesBasicByDateLiveFinal

- **Signature**: `nbaV3ScoresGamesBasicByDateLiveFinal(request: NbaV3Scores.NbaV3ScoresGamesBasicByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<ScoreBasic1[], NbaV3Scores.NbaV3ScoresGamesBasicByDateLiveFinalError>`
- **Wire**: `GET /v3/nba/scores/{format}/ScoresBasic/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScoreBasic1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Scores.NbaV3ScoresGamesBasicByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Scores.NbaV3ScoresGamesBasicByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ScoreBasic1` | `scoreBasic1Schema` | `src/models/score-basic1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ScoresNews

- **Signature**: `nbaV3ScoresNews(request: NbaV3Scores.NbaV3ScoresNewsRequest, options?: RequestOptions): ApiPromise<News[], NbaV3Scores.NbaV3ScoresNewsError>`
- **Wire**: `GET /v3/nba/scores/{format}/News`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `News[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Scores.NbaV3ScoresNewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Scores.NbaV3ScoresNewsRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `News` | `newsSchema` | `src/models/news.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ScoresNewsByDate

- **Signature**: `nbaV3ScoresNewsByDate(request: NbaV3Scores.NbaV3ScoresNewsByDateRequest, options?: RequestOptions): ApiPromise<News[], NbaV3Scores.NbaV3ScoresNewsByDateError>`
- **Wire**: `GET /v3/nba/scores/{format}/NewsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `News[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Scores.NbaV3ScoresNewsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Scores.NbaV3ScoresNewsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `News` | `newsSchema` | `src/models/news.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ScoresPlayerDetailsByActive

- **Signature**: `nbaV3ScoresPlayerDetailsByActive(request: NbaV3Scores.NbaV3ScoresPlayerDetailsByActiveRequest, options?: RequestOptions): ApiPromise<Player1[], NbaV3Scores.NbaV3ScoresPlayerDetailsByActiveError>`
- **Wire**: `GET /v3/nba/scores/{format}/Players`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Scores.NbaV3ScoresPlayerDetailsByActiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Scores.NbaV3ScoresPlayerDetailsByActiveRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player1` | `player1Schema` | `src/models/player1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ScoresPlayerDetailsByFreeAgent

- **Signature**: `nbaV3ScoresPlayerDetailsByFreeAgent(request: NbaV3Scores.NbaV3ScoresPlayerDetailsByFreeAgentRequest, options?: RequestOptions): ApiPromise<Player1[], NbaV3Scores.NbaV3ScoresPlayerDetailsByFreeAgentError>`
- **Wire**: `GET /v3/nba/scores/{format}/FreeAgents`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Scores.NbaV3ScoresPlayerDetailsByFreeAgentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Scores.NbaV3ScoresPlayerDetailsByFreeAgentRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player1` | `player1Schema` | `src/models/player1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ScoresPlayerDetailsByTeam

- **Signature**: `nbaV3ScoresPlayerDetailsByTeam(request: NbaV3Scores.NbaV3ScoresPlayerDetailsByTeamRequest, options?: RequestOptions): ApiPromise<Player1[], NbaV3Scores.NbaV3ScoresPlayerDetailsByTeamError>`
- **Wire**: `GET /v3/nba/scores/{format}/Players/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Scores.NbaV3ScoresPlayerDetailsByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Scores.NbaV3ScoresPlayerDetailsByTeamRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player1` | `player1Schema` | `src/models/player1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ScoresPlayerProfilesByActive

- **Signature**: `nbaV3ScoresPlayerProfilesByActive(request: NbaV3Scores.NbaV3ScoresPlayerProfilesByActiveRequest, options?: RequestOptions): ApiPromise<PlayerBasic1[], NbaV3Scores.NbaV3ScoresPlayerProfilesByActiveError>`
- **Wire**: `GET /v3/nba/scores/{format}/PlayersActiveBasic`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerBasic1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Scores.NbaV3ScoresPlayerProfilesByActiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Scores.NbaV3ScoresPlayerProfilesByActiveRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerBasic1` | `playerBasic1Schema` | `src/models/player-basic1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ScoresPlayerProfilesByFreeAgent

- **Signature**: `nbaV3ScoresPlayerProfilesByFreeAgent(request: NbaV3Scores.NbaV3ScoresPlayerProfilesByFreeAgentRequest, options?: RequestOptions): ApiPromise<PlayerBasic1[], NbaV3Scores.NbaV3ScoresPlayerProfilesByFreeAgentError>`
- **Wire**: `GET /v3/nba/scores/{format}/PlayersByFreeAgents`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerBasic1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Scores.NbaV3ScoresPlayerProfilesByFreeAgentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Scores.NbaV3ScoresPlayerProfilesByFreeAgentRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerBasic1` | `playerBasic1Schema` | `src/models/player-basic1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ScoresPlayersProfilesByTeam

- **Signature**: `nbaV3ScoresPlayersProfilesByTeam(request: NbaV3Scores.NbaV3ScoresPlayersProfilesByTeamRequest, options?: RequestOptions): ApiPromise<PlayerBasic1[], NbaV3Scores.NbaV3ScoresPlayersProfilesByTeamError>`
- **Wire**: `GET /v3/nba/scores/{format}/PlayersBasic/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerBasic1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Scores.NbaV3ScoresPlayersProfilesByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Scores.NbaV3ScoresPlayersProfilesByTeamRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerBasic1` | `playerBasic1Schema` | `src/models/player-basic1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ScoresReferees

- **Signature**: `nbaV3ScoresReferees(request: NbaV3Scores.NbaV3ScoresRefereesRequest, options?: RequestOptions): ApiPromise<Referee1[], NbaV3Scores.NbaV3ScoresRefereesError>`
- **Wire**: `GET /v3/nba/scores/{format}/Referees`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Referee1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Scores.NbaV3ScoresRefereesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Scores.NbaV3ScoresRefereesRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Referee1` | `referee1Schema` | `src/models/referee1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ScoresSchedules

- **Signature**: `nbaV3ScoresSchedules(request: NbaV3Scores.NbaV3ScoresSchedulesRequest, options?: RequestOptions): ApiPromise<Game[], NbaV3Scores.NbaV3ScoresSchedulesError>`
- **Wire**: `GET /v3/nba/scores/{format}/Games/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Game[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Scores.NbaV3ScoresSchedulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Scores.NbaV3ScoresSchedulesRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Game` | `gameSchema` | `src/models/game.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ScoresSchedulesBasic

- **Signature**: `nbaV3ScoresSchedulesBasic(request: NbaV3Scores.NbaV3ScoresSchedulesBasicRequest, options?: RequestOptions): ApiPromise<ScheduleBasic1[], NbaV3Scores.NbaV3ScoresSchedulesBasicError>`
- **Wire**: `GET /v3/nba/scores/{format}/SchedulesBasic/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScheduleBasic1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Scores.NbaV3ScoresSchedulesBasicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Scores.NbaV3ScoresSchedulesBasicRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ScheduleBasic1` | `scheduleBasic1Schema` | `src/models/schedule-basic1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ScoresSeasonCurrent

- **Signature**: `nbaV3ScoresSeasonCurrent(request: NbaV3Scores.NbaV3ScoresSeasonCurrentRequest, options?: RequestOptions): ApiPromise<Season, NbaV3Scores.NbaV3ScoresSeasonCurrentError>`
- **Wire**: `GET /v3/nba/scores/{format}/CurrentSeason`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Season`
- **Error**: `NbaV3Scores.NbaV3ScoresSeasonCurrentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Scores.NbaV3ScoresSeasonCurrentRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Season` | `seasonSchema` | `src/models/season.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ScoresStadiums

- **Signature**: `nbaV3ScoresStadiums(request: NbaV3Scores.NbaV3ScoresStadiumsRequest, options?: RequestOptions): ApiPromise<Stadium1[], NbaV3Scores.NbaV3ScoresStadiumsError>`
- **Wire**: `GET /v3/nba/scores/{format}/Stadiums`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Stadium1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Scores.NbaV3ScoresStadiumsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Scores.NbaV3ScoresStadiumsRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Stadium1` | `stadium1Schema` | `src/models/stadium1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ScoresStandings

- **Signature**: `nbaV3ScoresStandings(request: NbaV3Scores.NbaV3ScoresStandingsRequest, options?: RequestOptions): ApiPromise<Standing1[], NbaV3Scores.NbaV3ScoresStandingsError>`
- **Wire**: `GET /v3/nba/scores/{format}/Standings/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Standing1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Scores.NbaV3ScoresStandingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Scores.NbaV3ScoresStandingsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Standing1` | `standing1Schema` | `src/models/standing1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ScoresTeamGameLogsBySeason

- **Signature**: `nbaV3ScoresTeamGameLogsBySeason(request: NbaV3Scores.NbaV3ScoresTeamGameLogsBySeasonRequest, options?: RequestOptions): ApiPromise<TeamGame1[], NbaV3Scores.NbaV3ScoresTeamGameLogsBySeasonError>`
- **Wire**: `GET /v3/nba/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamGame1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Scores.NbaV3ScoresTeamGameLogsBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Scores.NbaV3ScoresTeamGameLogsBySeasonRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `teamid` | `path` | `string` | yes | — |
| `numberofgames` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamGame1` | `teamGame1Schema` | `src/models/team-game1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ScoresTeamGameStatsByDateLiveFinal

- **Signature**: `nbaV3ScoresTeamGameStatsByDateLiveFinal(request: NbaV3Scores.NbaV3ScoresTeamGameStatsByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<TeamGame1[], NbaV3Scores.NbaV3ScoresTeamGameStatsByDateLiveFinalError>`
- **Wire**: `GET /v3/nba/scores/{format}/TeamGameStatsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamGame1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Scores.NbaV3ScoresTeamGameStatsByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Scores.NbaV3ScoresTeamGameStatsByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamGame1` | `teamGame1Schema` | `src/models/team-game1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ScoresTeamProfilesAll

- **Signature**: `nbaV3ScoresTeamProfilesAll(request: NbaV3Scores.NbaV3ScoresTeamProfilesAllRequest, options?: RequestOptions): ApiPromise<Team1[], NbaV3Scores.NbaV3ScoresTeamProfilesAllError>`
- **Wire**: `GET /v3/nba/scores/{format}/AllTeams`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Team1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Scores.NbaV3ScoresTeamProfilesAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Scores.NbaV3ScoresTeamProfilesAllRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Team1` | `team1Schema` | `src/models/team1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ScoresTeamProfilesByActive

- **Signature**: `nbaV3ScoresTeamProfilesByActive(request: NbaV3Scores.NbaV3ScoresTeamProfilesByActiveRequest, options?: RequestOptions): ApiPromise<Team1[], NbaV3Scores.NbaV3ScoresTeamProfilesByActiveError>`
- **Wire**: `GET /v3/nba/scores/{format}/teams`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Team1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Scores.NbaV3ScoresTeamProfilesByActiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Scores.NbaV3ScoresTeamProfilesByActiveRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Team1` | `team1Schema` | `src/models/team1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ScoresTeamProfilesBySeason

- **Signature**: `nbaV3ScoresTeamProfilesBySeason(request: NbaV3Scores.NbaV3ScoresTeamProfilesBySeasonRequest, options?: RequestOptions): ApiPromise<Team1[], NbaV3Scores.NbaV3ScoresTeamProfilesBySeasonError>`
- **Wire**: `GET /v3/nba/scores/{format}/teams/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Team1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Scores.NbaV3ScoresTeamProfilesBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Scores.NbaV3ScoresTeamProfilesBySeasonRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Team1` | `team1Schema` | `src/models/team1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ScoresTeamSeasonStats

- **Signature**: `nbaV3ScoresTeamSeasonStats(request: NbaV3Scores.NbaV3ScoresTeamSeasonStatsRequest, options?: RequestOptions): ApiPromise<TeamSeason1[], NbaV3Scores.NbaV3ScoresTeamSeasonStatsError>`
- **Wire**: `GET /v3/nba/scores/{format}/TeamSeasonStats/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamSeason1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Scores.NbaV3ScoresTeamSeasonStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Scores.NbaV3ScoresTeamSeasonStatsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamSeason1` | `teamSeason1Schema` | `src/models/team-season1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3ScoresTransactions

- **Signature**: `nbaV3ScoresTransactions(request: NbaV3Scores.NbaV3ScoresTransactionsRequest, options?: RequestOptions): ApiPromise<Transaction[], NbaV3Scores.NbaV3ScoresTransactionsError>`
- **Wire**: `GET /v3/nba/scores/{format}/TransactionsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Transaction[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3Scores.NbaV3ScoresTransactionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3Scores.NbaV3ScoresTransactionsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Transaction` | `transactionSchema` | `src/models/transaction.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

