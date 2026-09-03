<!-- Generated file — do not edit; regenerated with the SDK. -->

# MlbV3Scores — operations

Accessor: `client.mlbV3Scores` · Source: `src/resources/mlb-v3-scores.ts` · 26 operations · Request and error types: namespace `MlbV3Scores`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### mlbV3ScoresAreGamesInProgress

- **Signature**: `mlbV3ScoresAreGamesInProgress(request: MlbV3Scores.MlbV3ScoresAreGamesInProgressRequest, options?: RequestOptions): ApiPromise<boolean, MlbV3Scores.MlbV3ScoresAreGamesInProgressError>`
- **Wire**: `GET /v3/mlb/scores/{format}/AreAnyGamesInProgress`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `boolean` — a bare `application/json` boolean; the success type *is* the boolean
- **Error**: `MlbV3Scores.MlbV3ScoresAreGamesInProgressError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Scores.MlbV3ScoresAreGamesInProgressRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ScoresGamesByDateFinal

- **Signature**: `mlbV3ScoresGamesByDateFinal(request: MlbV3Scores.MlbV3ScoresGamesByDateFinalRequest, options?: RequestOptions): ApiPromise<Game6[], MlbV3Scores.MlbV3ScoresGamesByDateFinalError>`
- **Wire**: `GET /v3/mlb/scores/{format}/GamesByDateFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Game6[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Scores.MlbV3ScoresGamesByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Scores.MlbV3ScoresGamesByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Game6` | `game6Schema` | `src/models/game6.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ScoresGamesByDateLiveFinal

- **Signature**: `mlbV3ScoresGamesByDateLiveFinal(request: MlbV3Scores.MlbV3ScoresGamesByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<Game6[], MlbV3Scores.MlbV3ScoresGamesByDateLiveFinalError>`
- **Wire**: `GET /v3/mlb/scores/{format}/GamesByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Game6[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Scores.MlbV3ScoresGamesByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Scores.MlbV3ScoresGamesByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Game6` | `game6Schema` | `src/models/game6.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ScoresGamesBasicByDateFinal

- **Signature**: `mlbV3ScoresGamesBasicByDateFinal(request: MlbV3Scores.MlbV3ScoresGamesBasicByDateFinalRequest, options?: RequestOptions): ApiPromise<ScoreBasic2[], MlbV3Scores.MlbV3ScoresGamesBasicByDateFinalError>`
- **Wire**: `GET /v3/mlb/scores/{format}/ScoresBasicFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScoreBasic2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Scores.MlbV3ScoresGamesBasicByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Scores.MlbV3ScoresGamesBasicByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ScoreBasic2` | `scoreBasic2Schema` | `src/models/score-basic2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ScoresGamesBasicByDateLiveFinal

- **Signature**: `mlbV3ScoresGamesBasicByDateLiveFinal(request: MlbV3Scores.MlbV3ScoresGamesBasicByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<ScoreBasic2[], MlbV3Scores.MlbV3ScoresGamesBasicByDateLiveFinalError>`
- **Wire**: `GET /v3/mlb/scores/{format}/ScoresBasic/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScoreBasic2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Scores.MlbV3ScoresGamesBasicByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Scores.MlbV3ScoresGamesBasicByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ScoreBasic2` | `scoreBasic2Schema` | `src/models/score-basic2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ScoresNews

- **Signature**: `mlbV3ScoresNews(request: MlbV3Scores.MlbV3ScoresNewsRequest, options?: RequestOptions): ApiPromise<News[], MlbV3Scores.MlbV3ScoresNewsError>`
- **Wire**: `GET /v3/mlb/scores/{format}/News`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `News[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Scores.MlbV3ScoresNewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Scores.MlbV3ScoresNewsRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `News` | `newsSchema` | `src/models/news.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ScoresNewsByDate

- **Signature**: `mlbV3ScoresNewsByDate(request: MlbV3Scores.MlbV3ScoresNewsByDateRequest, options?: RequestOptions): ApiPromise<News[], MlbV3Scores.MlbV3ScoresNewsByDateError>`
- **Wire**: `GET /v3/mlb/scores/{format}/NewsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `News[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Scores.MlbV3ScoresNewsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Scores.MlbV3ScoresNewsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `News` | `newsSchema` | `src/models/news.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ScoresPlayerDetailsByActive

- **Signature**: `mlbV3ScoresPlayerDetailsByActive(request: MlbV3Scores.MlbV3ScoresPlayerDetailsByActiveRequest, options?: RequestOptions): ApiPromise<Player2[], MlbV3Scores.MlbV3ScoresPlayerDetailsByActiveError>`
- **Wire**: `GET /v3/mlb/scores/{format}/Players`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Scores.MlbV3ScoresPlayerDetailsByActiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Scores.MlbV3ScoresPlayerDetailsByActiveRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player2` | `player2Schema` | `src/models/player2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ScoresPlayerDetailsByFreeAgents

- **Signature**: `mlbV3ScoresPlayerDetailsByFreeAgents(request: MlbV3Scores.MlbV3ScoresPlayerDetailsByFreeAgentsRequest, options?: RequestOptions): ApiPromise<Player2[], MlbV3Scores.MlbV3ScoresPlayerDetailsByFreeAgentsError>`
- **Wire**: `GET /v3/mlb/scores/{format}/FreeAgents`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Scores.MlbV3ScoresPlayerDetailsByFreeAgentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Scores.MlbV3ScoresPlayerDetailsByFreeAgentsRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player2` | `player2Schema` | `src/models/player2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ScoresPlayerProfilesByActive

- **Signature**: `mlbV3ScoresPlayerProfilesByActive(request: MlbV3Scores.MlbV3ScoresPlayerProfilesByActiveRequest, options?: RequestOptions): ApiPromise<PlayerBasic2[], MlbV3Scores.MlbV3ScoresPlayerProfilesByActiveError>`
- **Wire**: `GET /v3/mlb/scores/{format}/PlayersByActive`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerBasic2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Scores.MlbV3ScoresPlayerProfilesByActiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Scores.MlbV3ScoresPlayerProfilesByActiveRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerBasic2` | `playerBasic2Schema` | `src/models/player-basic2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ScoresPlayerProfilesByFreeAgents

- **Signature**: `mlbV3ScoresPlayerProfilesByFreeAgents(request: MlbV3Scores.MlbV3ScoresPlayerProfilesByFreeAgentsRequest, options?: RequestOptions): ApiPromise<PlayerBasic2[], MlbV3Scores.MlbV3ScoresPlayerProfilesByFreeAgentsError>`
- **Wire**: `GET /v3/mlb/scores/{format}/PlayersByFreeAgents`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerBasic2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Scores.MlbV3ScoresPlayerProfilesByFreeAgentsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Scores.MlbV3ScoresPlayerProfilesByFreeAgentsRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerBasic2` | `playerBasic2Schema` | `src/models/player-basic2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ScoresPlayerProfilesByTeam

- **Signature**: `mlbV3ScoresPlayerProfilesByTeam(request: MlbV3Scores.MlbV3ScoresPlayerProfilesByTeamRequest, options?: RequestOptions): ApiPromise<PlayerBasic2[], MlbV3Scores.MlbV3ScoresPlayerProfilesByTeamError>`
- **Wire**: `GET /v3/mlb/scores/{format}/PlayersBasic/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerBasic2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Scores.MlbV3ScoresPlayerProfilesByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Scores.MlbV3ScoresPlayerProfilesByTeamRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerBasic2` | `playerBasic2Schema` | `src/models/player-basic2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ScoresPlayersDetailsByTeam

- **Signature**: `mlbV3ScoresPlayersDetailsByTeam(request: MlbV3Scores.MlbV3ScoresPlayersDetailsByTeamRequest, options?: RequestOptions): ApiPromise<Player2[], MlbV3Scores.MlbV3ScoresPlayersDetailsByTeamError>`
- **Wire**: `GET /v3/mlb/scores/{format}/Players/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Scores.MlbV3ScoresPlayersDetailsByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Scores.MlbV3ScoresPlayersDetailsByTeamRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player2` | `player2Schema` | `src/models/player2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ScoresSchedules

- **Signature**: `mlbV3ScoresSchedules(request: MlbV3Scores.MlbV3ScoresSchedulesRequest, options?: RequestOptions): ApiPromise<Game6[], MlbV3Scores.MlbV3ScoresSchedulesError>`
- **Wire**: `GET /v3/mlb/scores/{format}/Games/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Game6[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Scores.MlbV3ScoresSchedulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Scores.MlbV3ScoresSchedulesRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Game6` | `game6Schema` | `src/models/game6.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ScoresSchedulesBasic

- **Signature**: `mlbV3ScoresSchedulesBasic(request: MlbV3Scores.MlbV3ScoresSchedulesBasicRequest, options?: RequestOptions): ApiPromise<ScheduleBasic2[], MlbV3Scores.MlbV3ScoresSchedulesBasicError>`
- **Wire**: `GET /v3/mlb/scores/{format}/SchedulesBasic/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScheduleBasic2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Scores.MlbV3ScoresSchedulesBasicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Scores.MlbV3ScoresSchedulesBasicRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ScheduleBasic2` | `scheduleBasic2Schema` | `src/models/schedule-basic2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ScoresSeasonCurrent

- **Signature**: `mlbV3ScoresSeasonCurrent(request: MlbV3Scores.MlbV3ScoresSeasonCurrentRequest, options?: RequestOptions): ApiPromise<Season1, MlbV3Scores.MlbV3ScoresSeasonCurrentError>`
- **Wire**: `GET /v3/mlb/scores/{format}/CurrentSeason`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Season1`
- **Error**: `MlbV3Scores.MlbV3ScoresSeasonCurrentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Scores.MlbV3ScoresSeasonCurrentRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Season1` | `season1Schema` | `src/models/season1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ScoresStadiums

- **Signature**: `mlbV3ScoresStadiums(request: MlbV3Scores.MlbV3ScoresStadiumsRequest, options?: RequestOptions): ApiPromise<Stadium3[], MlbV3Scores.MlbV3ScoresStadiumsError>`
- **Wire**: `GET /v3/mlb/scores/{format}/Stadiums`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Stadium3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Scores.MlbV3ScoresStadiumsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Scores.MlbV3ScoresStadiumsRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Stadium3` | `stadium3Schema` | `src/models/stadium3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ScoresStandings

- **Signature**: `mlbV3ScoresStandings(request: MlbV3Scores.MlbV3ScoresStandingsRequest, options?: RequestOptions): ApiPromise<Standing2[], MlbV3Scores.MlbV3ScoresStandingsError>`
- **Wire**: `GET /v3/mlb/scores/{format}/Standings/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Standing2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Scores.MlbV3ScoresStandingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Scores.MlbV3ScoresStandingsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Standing2` | `standing2Schema` | `src/models/standing2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ScoresTeamGameLogsBySeason

- **Signature**: `mlbV3ScoresTeamGameLogsBySeason(request: MlbV3Scores.MlbV3ScoresTeamGameLogsBySeasonRequest, options?: RequestOptions): ApiPromise<TeamGame2[], MlbV3Scores.MlbV3ScoresTeamGameLogsBySeasonError>`
- **Wire**: `GET /v3/mlb/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamGame2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Scores.MlbV3ScoresTeamGameLogsBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Scores.MlbV3ScoresTeamGameLogsBySeasonRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `teamid` | `path` | `string` | yes | — |
| `numberofgames` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamGame2` | `teamGame2Schema` | `src/models/team-game2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ScoresTeamGameStatsByDateFinal

- **Signature**: `mlbV3ScoresTeamGameStatsByDateFinal(request: MlbV3Scores.MlbV3ScoresTeamGameStatsByDateFinalRequest, options?: RequestOptions): ApiPromise<TeamGame2[], MlbV3Scores.MlbV3ScoresTeamGameStatsByDateFinalError>`
- **Wire**: `GET /v3/mlb/scores/{format}/TeamGameStatsByDateFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamGame2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Scores.MlbV3ScoresTeamGameStatsByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Scores.MlbV3ScoresTeamGameStatsByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamGame2` | `teamGame2Schema` | `src/models/team-game2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ScoresTeamGameStatsByDateLiveFinal

- **Signature**: `mlbV3ScoresTeamGameStatsByDateLiveFinal(request: MlbV3Scores.MlbV3ScoresTeamGameStatsByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<TeamGame2[], MlbV3Scores.MlbV3ScoresTeamGameStatsByDateLiveFinalError>`
- **Wire**: `GET /v3/mlb/scores/{format}/TeamGameStatsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamGame2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Scores.MlbV3ScoresTeamGameStatsByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Scores.MlbV3ScoresTeamGameStatsByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamGame2` | `teamGame2Schema` | `src/models/team-game2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ScoresTeamProfilesAll

- **Signature**: `mlbV3ScoresTeamProfilesAll(request: MlbV3Scores.MlbV3ScoresTeamProfilesAllRequest, options?: RequestOptions): ApiPromise<Team2[], MlbV3Scores.MlbV3ScoresTeamProfilesAllError>`
- **Wire**: `GET /v3/mlb/scores/{format}/AllTeams`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Team2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Scores.MlbV3ScoresTeamProfilesAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Scores.MlbV3ScoresTeamProfilesAllRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Team2` | `team2Schema` | `src/models/team2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ScoresTeamProfilesByActive

- **Signature**: `mlbV3ScoresTeamProfilesByActive(request: MlbV3Scores.MlbV3ScoresTeamProfilesByActiveRequest, options?: RequestOptions): ApiPromise<Team2[], MlbV3Scores.MlbV3ScoresTeamProfilesByActiveError>`
- **Wire**: `GET /v3/mlb/scores/{format}/teams`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Team2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Scores.MlbV3ScoresTeamProfilesByActiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Scores.MlbV3ScoresTeamProfilesByActiveRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Team2` | `team2Schema` | `src/models/team2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ScoresTeamProfilesBySeason

- **Signature**: `mlbV3ScoresTeamProfilesBySeason(request: MlbV3Scores.MlbV3ScoresTeamProfilesBySeasonRequest, options?: RequestOptions): ApiPromise<Team2[], MlbV3Scores.MlbV3ScoresTeamProfilesBySeasonError>`
- **Wire**: `GET /v3/mlb/scores/{format}/teams/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Team2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Scores.MlbV3ScoresTeamProfilesBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Scores.MlbV3ScoresTeamProfilesBySeasonRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Team2` | `team2Schema` | `src/models/team2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ScoresTeamSeasonStats

- **Signature**: `mlbV3ScoresTeamSeasonStats(request: MlbV3Scores.MlbV3ScoresTeamSeasonStatsRequest, options?: RequestOptions): ApiPromise<TeamSeason2[], MlbV3Scores.MlbV3ScoresTeamSeasonStatsError>`
- **Wire**: `GET /v3/mlb/scores/{format}/TeamSeasonStats/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamSeason2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Scores.MlbV3ScoresTeamSeasonStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Scores.MlbV3ScoresTeamSeasonStatsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamSeason2` | `teamSeason2Schema` | `src/models/team-season2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3ScoresTransactions

- **Signature**: `mlbV3ScoresTransactions(request: MlbV3Scores.MlbV3ScoresTransactionsRequest, options?: RequestOptions): ApiPromise<Transaction[], MlbV3Scores.MlbV3ScoresTransactionsError>`
- **Wire**: `GET /v3/mlb/scores/{format}/TransactionsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Transaction[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3Scores.MlbV3ScoresTransactionsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3Scores.MlbV3ScoresTransactionsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Transaction` | `transactionSchema` | `src/models/transaction.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

