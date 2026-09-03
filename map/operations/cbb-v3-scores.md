<!-- Generated file — do not edit; regenerated with the SDK. -->

# CbbV3Scores — operations

Accessor: `client.cbbV3Scores` · Source: `src/resources/cbb-v3-scores.ts` · 22 operations · Request and error types: namespace `CbbV3Scores`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### cbbV3ScoresAreGamesInProgress

- **Signature**: `cbbV3ScoresAreGamesInProgress(request: CbbV3Scores.CbbV3ScoresAreGamesInProgressRequest, options?: RequestOptions): ApiPromise<boolean, CbbV3Scores.CbbV3ScoresAreGamesInProgressError>`
- **Wire**: `GET /v3/cbb/scores/{format}/AreAnyGamesInProgress`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `boolean` — a bare `application/json` boolean; the success type *is* the boolean
- **Error**: `CbbV3Scores.CbbV3ScoresAreGamesInProgressError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Scores.CbbV3ScoresAreGamesInProgressRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3ScoresGamesByDateFinal

- **Signature**: `cbbV3ScoresGamesByDateFinal(request: CbbV3Scores.CbbV3ScoresGamesByDateFinalRequest, options?: RequestOptions): ApiPromise<Game9[], CbbV3Scores.CbbV3ScoresGamesByDateFinalError>`
- **Wire**: `GET /v3/cbb/scores/{format}/GamesByDateFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Game9[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Scores.CbbV3ScoresGamesByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Scores.CbbV3ScoresGamesByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Game9` | `game9Schema` | `src/models/game9.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3ScoresGamesByDateLiveFinal

- **Signature**: `cbbV3ScoresGamesByDateLiveFinal(request: CbbV3Scores.CbbV3ScoresGamesByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<Game9[], CbbV3Scores.CbbV3ScoresGamesByDateLiveFinalError>`
- **Wire**: `GET /v3/cbb/scores/{format}/GamesByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Game9[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Scores.CbbV3ScoresGamesByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Scores.CbbV3ScoresGamesByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Game9` | `game9Schema` | `src/models/game9.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3ScoresGamesBySeason

- **Signature**: `cbbV3ScoresGamesBySeason(request: CbbV3Scores.CbbV3ScoresGamesBySeasonRequest, options?: RequestOptions): ApiPromise<Game9[], CbbV3Scores.CbbV3ScoresGamesBySeasonError>`
- **Wire**: `GET /v3/cbb/scores/{format}/Games/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Game9[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Scores.CbbV3ScoresGamesBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Scores.CbbV3ScoresGamesBySeasonRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Game9` | `game9Schema` | `src/models/game9.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3ScoresGamesBySeasonFinal

- **Signature**: `cbbV3ScoresGamesBySeasonFinal(request: CbbV3Scores.CbbV3ScoresGamesBySeasonFinalRequest, options?: RequestOptions): ApiPromise<Game9[], CbbV3Scores.CbbV3ScoresGamesBySeasonFinalError>`
- **Wire**: `GET /v3/cbb/scores/{format}/GamesFinal/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Game9[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Scores.CbbV3ScoresGamesBySeasonFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Scores.CbbV3ScoresGamesBySeasonFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Game9` | `game9Schema` | `src/models/game9.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3ScoresGamesBasicByDate

- **Signature**: `cbbV3ScoresGamesBasicByDate(request: CbbV3Scores.CbbV3ScoresGamesBasicByDateRequest, options?: RequestOptions): ApiPromise<ScoreBasic5[], CbbV3Scores.CbbV3ScoresGamesBasicByDateError>`
- **Wire**: `GET /v3/cbb/scores/{format}/ScoresBasic/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScoreBasic5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Scores.CbbV3ScoresGamesBasicByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Scores.CbbV3ScoresGamesBasicByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ScoreBasic5` | `scoreBasic5Schema` | `src/models/score-basic5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3ScoresLeagueHierarchy

- **Signature**: `cbbV3ScoresLeagueHierarchy(request: CbbV3Scores.CbbV3ScoresLeagueHierarchyRequest, options?: RequestOptions): ApiPromise<Conference1[], CbbV3Scores.CbbV3ScoresLeagueHierarchyError>`
- **Wire**: `GET /v3/cbb/scores/{format}/LeagueHierarchy`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Conference1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Scores.CbbV3ScoresLeagueHierarchyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Scores.CbbV3ScoresLeagueHierarchyRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Conference1` | `conference1Schema` | `src/models/conference1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3ScoresPlayerDetailsByActive

- **Signature**: `cbbV3ScoresPlayerDetailsByActive(request: CbbV3Scores.CbbV3ScoresPlayerDetailsByActiveRequest, options?: RequestOptions): ApiPromise<Player5[], CbbV3Scores.CbbV3ScoresPlayerDetailsByActiveError>`
- **Wire**: `GET /v3/cbb/scores/{format}/Players`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Scores.CbbV3ScoresPlayerDetailsByActiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Scores.CbbV3ScoresPlayerDetailsByActiveRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player5` | `player5Schema` | `src/models/player5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3ScoresPlayerDetailsByActive2

- **Signature**: `cbbV3ScoresPlayerDetailsByActive2(request: CbbV3Scores.CbbV3ScoresPlayerDetailsByActive2Request, options?: RequestOptions): ApiPromise<PlayerBasic5[], CbbV3Scores.CbbV3ScoresPlayerDetailsByActive2Error>`
- **Wire**: `GET /v3/cbb/scores/{format}/PlayersByActive`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerBasic5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Scores.CbbV3ScoresPlayerDetailsByActive2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Scores.CbbV3ScoresPlayerDetailsByActive2Request` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerBasic5` | `playerBasic5Schema` | `src/models/player-basic5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3ScoresPlayerDetailsByInjured

- **Signature**: `cbbV3ScoresPlayerDetailsByInjured(request: CbbV3Scores.CbbV3ScoresPlayerDetailsByInjuredRequest, options?: RequestOptions): ApiPromise<Player5[], CbbV3Scores.CbbV3ScoresPlayerDetailsByInjuredError>`
- **Wire**: `GET /v3/cbb/scores/{format}/InjuredPlayers`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Scores.CbbV3ScoresPlayerDetailsByInjuredError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Scores.CbbV3ScoresPlayerDetailsByInjuredRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player5` | `player5Schema` | `src/models/player5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3ScoresPlayerDetailsByTeam

- **Signature**: `cbbV3ScoresPlayerDetailsByTeam(request: CbbV3Scores.CbbV3ScoresPlayerDetailsByTeamRequest, options?: RequestOptions): ApiPromise<Player5[], CbbV3Scores.CbbV3ScoresPlayerDetailsByTeamError>`
- **Wire**: `GET /v3/cbb/scores/{format}/Players/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Scores.CbbV3ScoresPlayerDetailsByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Scores.CbbV3ScoresPlayerDetailsByTeamRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player5` | `player5Schema` | `src/models/player5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3ScoresPlayerProfilesByTeam

- **Signature**: `cbbV3ScoresPlayerProfilesByTeam(request: CbbV3Scores.CbbV3ScoresPlayerProfilesByTeamRequest, options?: RequestOptions): ApiPromise<PlayerBasic5[], CbbV3Scores.CbbV3ScoresPlayerProfilesByTeamError>`
- **Wire**: `GET /v3/cbb/scores/{format}/PlayersBasic/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerBasic5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Scores.CbbV3ScoresPlayerProfilesByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Scores.CbbV3ScoresPlayerProfilesByTeamRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerBasic5` | `playerBasic5Schema` | `src/models/player-basic5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3ScoresSchedulesByTeam

- **Signature**: `cbbV3ScoresSchedulesByTeam(request: CbbV3Scores.CbbV3ScoresSchedulesByTeamRequest, options?: RequestOptions): ApiPromise<Game9[], CbbV3Scores.CbbV3ScoresSchedulesByTeamError>`
- **Wire**: `GET /v3/cbb/scores/{format}/TeamSchedule/{season}/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Game9[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Scores.CbbV3ScoresSchedulesByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Scores.CbbV3ScoresSchedulesByTeamRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Game9` | `game9Schema` | `src/models/game9.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3ScoresSchedulesBasic

- **Signature**: `cbbV3ScoresSchedulesBasic(request: CbbV3Scores.CbbV3ScoresSchedulesBasicRequest, options?: RequestOptions): ApiPromise<ScheduleBasic5[], CbbV3Scores.CbbV3ScoresSchedulesBasicError>`
- **Wire**: `GET /v3/cbb/scores/{format}/SchedulesBasic/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScheduleBasic5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Scores.CbbV3ScoresSchedulesBasicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Scores.CbbV3ScoresSchedulesBasicRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ScheduleBasic5` | `scheduleBasic5Schema` | `src/models/schedule-basic5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3ScoresSeasonCurrent

- **Signature**: `cbbV3ScoresSeasonCurrent(request: CbbV3Scores.CbbV3ScoresSeasonCurrentRequest, options?: RequestOptions): ApiPromise<Season3, CbbV3Scores.CbbV3ScoresSeasonCurrentError>`
- **Wire**: `GET /v3/cbb/scores/{format}/CurrentSeason`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Season3`
- **Error**: `CbbV3Scores.CbbV3ScoresSeasonCurrentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Scores.CbbV3ScoresSeasonCurrentRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Season3` | `season3Schema` | `src/models/season3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3ScoresStadiums

- **Signature**: `cbbV3ScoresStadiums(request: CbbV3Scores.CbbV3ScoresStadiumsRequest, options?: RequestOptions): ApiPromise<Stadium1[], CbbV3Scores.CbbV3ScoresStadiumsError>`
- **Wire**: `GET /v3/cbb/scores/{format}/Stadiums`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Stadium1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Scores.CbbV3ScoresStadiumsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Scores.CbbV3ScoresStadiumsRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Stadium1` | `stadium1Schema` | `src/models/stadium1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3ScoresTeamGameLogsBySeason

- **Signature**: `cbbV3ScoresTeamGameLogsBySeason(request: CbbV3Scores.CbbV3ScoresTeamGameLogsBySeasonRequest, options?: RequestOptions): ApiPromise<TeamGame5[], CbbV3Scores.CbbV3ScoresTeamGameLogsBySeasonError>`
- **Wire**: `GET /v3/cbb/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamGame5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Scores.CbbV3ScoresTeamGameLogsBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Scores.CbbV3ScoresTeamGameLogsBySeasonRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `teamid` | `path` | `string` | yes | — |
| `numberofgames` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamGame5` | `teamGame5Schema` | `src/models/team-game5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3ScoresTeamGameStatsByDateLiveFinal

- **Signature**: `cbbV3ScoresTeamGameStatsByDateLiveFinal(request: CbbV3Scores.CbbV3ScoresTeamGameStatsByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<TeamGame5[], CbbV3Scores.CbbV3ScoresTeamGameStatsByDateLiveFinalError>`
- **Wire**: `GET /v3/cbb/scores/{format}/TeamGameStatsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamGame5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Scores.CbbV3ScoresTeamGameStatsByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Scores.CbbV3ScoresTeamGameStatsByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamGame5` | `teamGame5Schema` | `src/models/team-game5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3ScoresTeamProfilesAll

- **Signature**: `cbbV3ScoresTeamProfilesAll(request: CbbV3Scores.CbbV3ScoresTeamProfilesAllRequest, options?: RequestOptions): ApiPromise<Team5[], CbbV3Scores.CbbV3ScoresTeamProfilesAllError>`
- **Wire**: `GET /v3/cbb/scores/{format}/teams`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Team5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Scores.CbbV3ScoresTeamProfilesAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Scores.CbbV3ScoresTeamProfilesAllRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Team5` | `team5Schema` | `src/models/team5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3ScoresTeamSeasonStats

- **Signature**: `cbbV3ScoresTeamSeasonStats(request: CbbV3Scores.CbbV3ScoresTeamSeasonStatsRequest, options?: RequestOptions): ApiPromise<TeamSeason5[], CbbV3Scores.CbbV3ScoresTeamSeasonStatsError>`
- **Wire**: `GET /v3/cbb/scores/{format}/TeamSeasonStats/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamSeason5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Scores.CbbV3ScoresTeamSeasonStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Scores.CbbV3ScoresTeamSeasonStatsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamSeason5` | `teamSeason5Schema` | `src/models/team-season5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3ScoresTeamsBasicAll

- **Signature**: `cbbV3ScoresTeamsBasicAll(request: CbbV3Scores.CbbV3ScoresTeamsBasicAllRequest, options?: RequestOptions): ApiPromise<TeamBasic2[], CbbV3Scores.CbbV3ScoresTeamsBasicAllError>`
- **Wire**: `GET /v3/cbb/scores/{format}/TeamsBasic`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamBasic2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CbbV3Scores.CbbV3ScoresTeamsBasicAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Scores.CbbV3ScoresTeamsBasicAllRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamBasic2` | `teamBasic2Schema` | `src/models/team-basic2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cbbV3ScoresTournamentHierarchy

- **Signature**: `cbbV3ScoresTournamentHierarchy(request: CbbV3Scores.CbbV3ScoresTournamentHierarchyRequest, options?: RequestOptions): ApiPromise<Tournament, CbbV3Scores.CbbV3ScoresTournamentHierarchyError>`
- **Wire**: `GET /v3/cbb/scores/{format}/Tournament/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Tournament`
- **Error**: `CbbV3Scores.CbbV3ScoresTournamentHierarchyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CbbV3Scores.CbbV3ScoresTournamentHierarchyRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Tournament` | `tournamentSchema` | `src/models/tournament.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

