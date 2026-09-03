<!-- Generated file — do not edit; regenerated with the SDK. -->

# NhlV3Scores — operations

Accessor: `client.nhlV3Scores` · Source: `src/resources/nhl-v3-scores.ts` · 27 operations · Request and error types: namespace `NhlV3Scores`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### nhlV3ScoresAreGamesInProgress

- **Signature**: `nhlV3ScoresAreGamesInProgress(request: NhlV3Scores.NhlV3ScoresAreGamesInProgressRequest, options?: RequestOptions): ApiPromise<boolean, NhlV3Scores.NhlV3ScoresAreGamesInProgressError>`
- **Wire**: `GET /v3/nhl/scores/{format}/AreAnyGamesInProgress`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `boolean` — a bare `application/json` boolean; the success type *is* the boolean
- **Error**: `NhlV3Scores.NhlV3ScoresAreGamesInProgressError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Scores.NhlV3ScoresAreGamesInProgressRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ScoresDepthChartsGoalies

- **Signature**: `nhlV3ScoresDepthChartsGoalies(request: NhlV3Scores.NhlV3ScoresDepthChartsGoaliesRequest, options?: RequestOptions): ApiPromise<TeamGoalieDepthChart[], NhlV3Scores.NhlV3ScoresDepthChartsGoaliesError>`
- **Wire**: `GET /v3/nhl/scores/{format}/GoalieDepthCharts`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamGoalieDepthChart[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Scores.NhlV3ScoresDepthChartsGoaliesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Scores.NhlV3ScoresDepthChartsGoaliesRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamGoalieDepthChart` | `teamGoalieDepthChartSchema` | `src/models/team-goalie-depth-chart.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ScoresGamesByDateFinal

- **Signature**: `nhlV3ScoresGamesByDateFinal(request: NhlV3Scores.NhlV3ScoresGamesByDateFinalRequest, options?: RequestOptions): ApiPromise<Game7[], NhlV3Scores.NhlV3ScoresGamesByDateFinalError>`
- **Wire**: `GET /v3/nhl/scores/{format}/GamesByDateFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Game7[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Scores.NhlV3ScoresGamesByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Scores.NhlV3ScoresGamesByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Game7` | `game7Schema` | `src/models/game7.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ScoresGamesByDateLiveFinal

- **Signature**: `nhlV3ScoresGamesByDateLiveFinal(request: NhlV3Scores.NhlV3ScoresGamesByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<Game7[], NhlV3Scores.NhlV3ScoresGamesByDateLiveFinalError>`
- **Wire**: `GET /v3/nhl/scores/{format}/GamesByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Game7[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Scores.NhlV3ScoresGamesByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Scores.NhlV3ScoresGamesByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Game7` | `game7Schema` | `src/models/game7.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ScoresGamesBasicByDateFinal

- **Signature**: `nhlV3ScoresGamesBasicByDateFinal(request: NhlV3Scores.NhlV3ScoresGamesBasicByDateFinalRequest, options?: RequestOptions): ApiPromise<ScoreBasic3[], NhlV3Scores.NhlV3ScoresGamesBasicByDateFinalError>`
- **Wire**: `GET /v3/nhl/scores/{format}/ScoresBasicFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScoreBasic3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Scores.NhlV3ScoresGamesBasicByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Scores.NhlV3ScoresGamesBasicByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ScoreBasic3` | `scoreBasic3Schema` | `src/models/score-basic3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ScoresGamesBasicByDateLiveFinal

- **Signature**: `nhlV3ScoresGamesBasicByDateLiveFinal(request: NhlV3Scores.NhlV3ScoresGamesBasicByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<ScoreBasic3[], NhlV3Scores.NhlV3ScoresGamesBasicByDateLiveFinalError>`
- **Wire**: `GET /v3/nhl/scores/{format}/ScoresBasic/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScoreBasic3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Scores.NhlV3ScoresGamesBasicByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Scores.NhlV3ScoresGamesBasicByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ScoreBasic3` | `scoreBasic3Schema` | `src/models/score-basic3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ScoresNews

- **Signature**: `nhlV3ScoresNews(request: NhlV3Scores.NhlV3ScoresNewsRequest, options?: RequestOptions): ApiPromise<News1[], NhlV3Scores.NhlV3ScoresNewsError>`
- **Wire**: `GET /v3/nhl/scores/{format}/News`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `News1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Scores.NhlV3ScoresNewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Scores.NhlV3ScoresNewsRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `News1` | `news1Schema` | `src/models/news1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ScoresNewsByDate

- **Signature**: `nhlV3ScoresNewsByDate(request: NhlV3Scores.NhlV3ScoresNewsByDateRequest, options?: RequestOptions): ApiPromise<News1[], NhlV3Scores.NhlV3ScoresNewsByDateError>`
- **Wire**: `GET /v3/nhl/scores/{format}/NewsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `News1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Scores.NhlV3ScoresNewsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Scores.NhlV3ScoresNewsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `News1` | `news1Schema` | `src/models/news1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ScoresPlayerDetailsByActive

- **Signature**: `nhlV3ScoresPlayerDetailsByActive(request: NhlV3Scores.NhlV3ScoresPlayerDetailsByActiveRequest, options?: RequestOptions): ApiPromise<Player3[], NhlV3Scores.NhlV3ScoresPlayerDetailsByActiveError>`
- **Wire**: `GET /v3/nhl/scores/{format}/Players`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Scores.NhlV3ScoresPlayerDetailsByActiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Scores.NhlV3ScoresPlayerDetailsByActiveRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player3` | `player3Schema` | `src/models/player3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ScoresPlayerDetailsByActive2

- **Signature**: `nhlV3ScoresPlayerDetailsByActive2(request: NhlV3Scores.NhlV3ScoresPlayerDetailsByActive2Request, options?: RequestOptions): ApiPromise<PlayerBasic3[], NhlV3Scores.NhlV3ScoresPlayerDetailsByActive2Error>`
- **Wire**: `GET /v3/nhl/scores/{format}/PlayersByActive`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerBasic3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Scores.NhlV3ScoresPlayerDetailsByActive2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Scores.NhlV3ScoresPlayerDetailsByActive2Request` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerBasic3` | `playerBasic3Schema` | `src/models/player-basic3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ScoresPlayerDetailsByFreeAgents

- **Signature**: `nhlV3ScoresPlayerDetailsByFreeAgents(request: NhlV3Scores.NhlV3ScoresPlayerDetailsByFreeAgentsRequest, options?: RequestOptions): ApiPromise<Player3[], NhlV3Scores.NhlV3ScoresPlayerDetailsByFreeAgentsError>`
- **Wire**: `GET /v3/nhl/scores/{format}/FreeAgents`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Scores.NhlV3ScoresPlayerDetailsByFreeAgentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Scores.NhlV3ScoresPlayerDetailsByFreeAgentsRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player3` | `player3Schema` | `src/models/player3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ScoresPlayerDetailsByFreeAgents2

- **Signature**: `nhlV3ScoresPlayerDetailsByFreeAgents2(request: NhlV3Scores.NhlV3ScoresPlayerDetailsByFreeAgents2Request, options?: RequestOptions): ApiPromise<PlayerBasic3[], NhlV3Scores.NhlV3ScoresPlayerDetailsByFreeAgents2Error>`
- **Wire**: `GET /v3/nhl/scores/{format}/PlayersByFreeAgents`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerBasic3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Scores.NhlV3ScoresPlayerDetailsByFreeAgents2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Scores.NhlV3ScoresPlayerDetailsByFreeAgents2Request` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerBasic3` | `playerBasic3Schema` | `src/models/player-basic3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ScoresPlayersDetailsByTeam

- **Signature**: `nhlV3ScoresPlayersDetailsByTeam(request: NhlV3Scores.NhlV3ScoresPlayersDetailsByTeamRequest, options?: RequestOptions): ApiPromise<Player3[], NhlV3Scores.NhlV3ScoresPlayersDetailsByTeamError>`
- **Wire**: `GET /v3/nhl/scores/{format}/Players/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Scores.NhlV3ScoresPlayersDetailsByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Scores.NhlV3ScoresPlayersDetailsByTeamRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player3` | `player3Schema` | `src/models/player3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ScoresPlayersProfilesByTeam

- **Signature**: `nhlV3ScoresPlayersProfilesByTeam(request: NhlV3Scores.NhlV3ScoresPlayersProfilesByTeamRequest, options?: RequestOptions): ApiPromise<PlayerBasic3[], NhlV3Scores.NhlV3ScoresPlayersProfilesByTeamError>`
- **Wire**: `GET /v3/nhl/scores/{format}/PlayersBasic/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerBasic3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Scores.NhlV3ScoresPlayersProfilesByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Scores.NhlV3ScoresPlayersProfilesByTeamRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerBasic3` | `playerBasic3Schema` | `src/models/player-basic3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ScoresReferees

- **Signature**: `nhlV3ScoresReferees(request: NhlV3Scores.NhlV3ScoresRefereesRequest, options?: RequestOptions): ApiPromise<Referee1[], NhlV3Scores.NhlV3ScoresRefereesError>`
- **Wire**: `GET /v3/nhl/scores/{format}/Referees`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Referee1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Scores.NhlV3ScoresRefereesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Scores.NhlV3ScoresRefereesRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Referee1` | `referee1Schema` | `src/models/referee1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ScoresSchedules

- **Signature**: `nhlV3ScoresSchedules(request: NhlV3Scores.NhlV3ScoresSchedulesRequest, options?: RequestOptions): ApiPromise<Game7[], NhlV3Scores.NhlV3ScoresSchedulesError>`
- **Wire**: `GET /v3/nhl/scores/{format}/Games/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Game7[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Scores.NhlV3ScoresSchedulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Scores.NhlV3ScoresSchedulesRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Game7` | `game7Schema` | `src/models/game7.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ScoresSchedulesBasic

- **Signature**: `nhlV3ScoresSchedulesBasic(request: NhlV3Scores.NhlV3ScoresSchedulesBasicRequest, options?: RequestOptions): ApiPromise<ScheduleBasic3[], NhlV3Scores.NhlV3ScoresSchedulesBasicError>`
- **Wire**: `GET /v3/nhl/scores/{format}/SchedulesBasic/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScheduleBasic3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Scores.NhlV3ScoresSchedulesBasicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Scores.NhlV3ScoresSchedulesBasicRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ScheduleBasic3` | `scheduleBasic3Schema` | `src/models/schedule-basic3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ScoresSeasonCurrent

- **Signature**: `nhlV3ScoresSeasonCurrent(request: NhlV3Scores.NhlV3ScoresSeasonCurrentRequest, options?: RequestOptions): ApiPromise<Season, NhlV3Scores.NhlV3ScoresSeasonCurrentError>`
- **Wire**: `GET /v3/nhl/scores/{format}/CurrentSeason`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Season`
- **Error**: `NhlV3Scores.NhlV3ScoresSeasonCurrentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Scores.NhlV3ScoresSeasonCurrentRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Season` | `seasonSchema` | `src/models/season.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ScoresStadiums

- **Signature**: `nhlV3ScoresStadiums(request: NhlV3Scores.NhlV3ScoresStadiumsRequest, options?: RequestOptions): ApiPromise<Stadium1[], NhlV3Scores.NhlV3ScoresStadiumsError>`
- **Wire**: `GET /v3/nhl/scores/{format}/Stadiums`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Stadium1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Scores.NhlV3ScoresStadiumsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Scores.NhlV3ScoresStadiumsRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Stadium1` | `stadium1Schema` | `src/models/stadium1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ScoresStandings

- **Signature**: `nhlV3ScoresStandings(request: NhlV3Scores.NhlV3ScoresStandingsRequest, options?: RequestOptions): ApiPromise<Standing3[], NhlV3Scores.NhlV3ScoresStandingsError>`
- **Wire**: `GET /v3/nhl/scores/{format}/Standings/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Standing3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Scores.NhlV3ScoresStandingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Scores.NhlV3ScoresStandingsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Standing3` | `standing3Schema` | `src/models/standing3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ScoresTeamGameLogsBySeason

- **Signature**: `nhlV3ScoresTeamGameLogsBySeason(request: NhlV3Scores.NhlV3ScoresTeamGameLogsBySeasonRequest, options?: RequestOptions): ApiPromise<TeamGame3[], NhlV3Scores.NhlV3ScoresTeamGameLogsBySeasonError>`
- **Wire**: `GET /v3/nhl/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamGame3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Scores.NhlV3ScoresTeamGameLogsBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Scores.NhlV3ScoresTeamGameLogsBySeasonRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `teamid` | `path` | `string` | yes | — |
| `numberofgames` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamGame3` | `teamGame3Schema` | `src/models/team-game3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ScoresTeamGameStatsByDateLiveFinal

- **Signature**: `nhlV3ScoresTeamGameStatsByDateLiveFinal(request: NhlV3Scores.NhlV3ScoresTeamGameStatsByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<TeamGame3[], NhlV3Scores.NhlV3ScoresTeamGameStatsByDateLiveFinalError>`
- **Wire**: `GET /v3/nhl/scores/{format}/TeamGameStatsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamGame3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Scores.NhlV3ScoresTeamGameStatsByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Scores.NhlV3ScoresTeamGameStatsByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamGame3` | `teamGame3Schema` | `src/models/team-game3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ScoresTeamProfilesAll

- **Signature**: `nhlV3ScoresTeamProfilesAll(request: NhlV3Scores.NhlV3ScoresTeamProfilesAllRequest, options?: RequestOptions): ApiPromise<Team3[], NhlV3Scores.NhlV3ScoresTeamProfilesAllError>`
- **Wire**: `GET /v3/nhl/scores/{format}/AllTeams`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Team3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Scores.NhlV3ScoresTeamProfilesAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Scores.NhlV3ScoresTeamProfilesAllRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Team3` | `team3Schema` | `src/models/team3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ScoresTeamProfilesByActive

- **Signature**: `nhlV3ScoresTeamProfilesByActive(request: NhlV3Scores.NhlV3ScoresTeamProfilesByActiveRequest, options?: RequestOptions): ApiPromise<Team3[], NhlV3Scores.NhlV3ScoresTeamProfilesByActiveError>`
- **Wire**: `GET /v3/nhl/scores/{format}/teams`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Team3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Scores.NhlV3ScoresTeamProfilesByActiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Scores.NhlV3ScoresTeamProfilesByActiveRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Team3` | `team3Schema` | `src/models/team3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ScoresTeamProfilesBySeason

- **Signature**: `nhlV3ScoresTeamProfilesBySeason(request: NhlV3Scores.NhlV3ScoresTeamProfilesBySeasonRequest, options?: RequestOptions): ApiPromise<Team3[], NhlV3Scores.NhlV3ScoresTeamProfilesBySeasonError>`
- **Wire**: `GET /v3/nhl/scores/{format}/teams/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Team3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Scores.NhlV3ScoresTeamProfilesBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Scores.NhlV3ScoresTeamProfilesBySeasonRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Team3` | `team3Schema` | `src/models/team3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ScoresTeamSeasonStats

- **Signature**: `nhlV3ScoresTeamSeasonStats(request: NhlV3Scores.NhlV3ScoresTeamSeasonStatsRequest, options?: RequestOptions): ApiPromise<TeamSeason3[], NhlV3Scores.NhlV3ScoresTeamSeasonStatsError>`
- **Wire**: `GET /v3/nhl/scores/{format}/TeamSeasonStats/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamSeason3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Scores.NhlV3ScoresTeamSeasonStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Scores.NhlV3ScoresTeamSeasonStatsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamSeason3` | `teamSeason3Schema` | `src/models/team-season3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ScoresTransactions

- **Signature**: `nhlV3ScoresTransactions(request: NhlV3Scores.NhlV3ScoresTransactionsRequest, options?: RequestOptions): ApiPromise<Transaction[], NhlV3Scores.NhlV3ScoresTransactionsError>`
- **Wire**: `GET /v3/nhl/scores/{format}/TransactionsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Transaction[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Scores.NhlV3ScoresTransactionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Scores.NhlV3ScoresTransactionsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Transaction` | `transactionSchema` | `src/models/transaction.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

