<!-- Generated file — do not edit; regenerated with the SDK. -->

# CfbV3Scores — operations

Accessor: `client.cfbV3Scores` · Source: `src/resources/cfb-v3-scores.ts` · 26 operations · Request and error types: namespace `CfbV3Scores`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### cfbV3ScoresAreGamesInProgress

- **Signature**: `cfbV3ScoresAreGamesInProgress(request: CfbV3Scores.CfbV3ScoresAreGamesInProgressRequest, options?: RequestOptions): ApiPromise<boolean, CfbV3Scores.CfbV3ScoresAreGamesInProgressError>`
- **Wire**: `GET /v3/cfb/scores/{format}/AreAnyGamesInProgress`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `boolean` — a bare `application/json` boolean; the success type *is* the boolean
- **Error**: `CfbV3Scores.CfbV3ScoresAreGamesInProgressError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Scores.CfbV3ScoresAreGamesInProgressRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3ScoresConferenceHierarchy

- **Signature**: `cfbV3ScoresConferenceHierarchy(request: CfbV3Scores.CfbV3ScoresConferenceHierarchyRequest, options?: RequestOptions): ApiPromise<Conference[], CfbV3Scores.CfbV3ScoresConferenceHierarchyError>`
- **Wire**: `GET /v3/cfb/scores/{format}/LeagueHierarchy`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Conference[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Scores.CfbV3ScoresConferenceHierarchyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Scores.CfbV3ScoresConferenceHierarchyRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Conference` | `conferenceSchema` | `src/models/conference.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3ScoresGamesByDateLiveFinal

- **Signature**: `cfbV3ScoresGamesByDateLiveFinal(request: CfbV3Scores.CfbV3ScoresGamesByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<Game8[], CfbV3Scores.CfbV3ScoresGamesByDateLiveFinalError>`
- **Wire**: `GET /v3/cfb/scores/{format}/GamesByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Game8[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Scores.CfbV3ScoresGamesByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Scores.CfbV3ScoresGamesByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Game8` | `game8Schema` | `src/models/game8.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3ScoresGamesByWeekFinal

- **Signature**: `cfbV3ScoresGamesByWeekFinal(request: CfbV3Scores.CfbV3ScoresGamesByWeekFinalRequest, options?: RequestOptions): ApiPromise<Game8[], CfbV3Scores.CfbV3ScoresGamesByWeekFinalError>`
- **Wire**: `GET /v3/cfb/scores/{format}/GamesByWeekFinal/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Game8[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Scores.CfbV3ScoresGamesByWeekFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Scores.CfbV3ScoresGamesByWeekFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Game8` | `game8Schema` | `src/models/game8.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3ScoresGamesByWeekLiveFinal

- **Signature**: `cfbV3ScoresGamesByWeekLiveFinal(request: CfbV3Scores.CfbV3ScoresGamesByWeekLiveFinalRequest, options?: RequestOptions): ApiPromise<Game8[], CfbV3Scores.CfbV3ScoresGamesByWeekLiveFinalError>`
- **Wire**: `GET /v3/cfb/scores/{format}/GamesByWeek/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Game8[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Scores.CfbV3ScoresGamesByWeekLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Scores.CfbV3ScoresGamesByWeekLiveFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Game8` | `game8Schema` | `src/models/game8.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3ScoresGamesBasicByDateLiveFinal

- **Signature**: `cfbV3ScoresGamesBasicByDateLiveFinal(request: CfbV3Scores.CfbV3ScoresGamesBasicByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<ScoreBasic4[], CfbV3Scores.CfbV3ScoresGamesBasicByDateLiveFinalError>`
- **Wire**: `GET /v3/cfb/scores/{format}/ScoresBasic/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScoreBasic4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Scores.CfbV3ScoresGamesBasicByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Scores.CfbV3ScoresGamesBasicByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ScoreBasic4` | `scoreBasic4Schema` | `src/models/score-basic4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3ScoresGamesBasicByWeekFinal

- **Signature**: `cfbV3ScoresGamesBasicByWeekFinal(request: CfbV3Scores.CfbV3ScoresGamesBasicByWeekFinalRequest, options?: RequestOptions): ApiPromise<ScoreBasic4[], CfbV3Scores.CfbV3ScoresGamesBasicByWeekFinalError>`
- **Wire**: `GET /v3/cfb/scores/{format}/ScoresBasicFinal/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScoreBasic4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Scores.CfbV3ScoresGamesBasicByWeekFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Scores.CfbV3ScoresGamesBasicByWeekFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ScoreBasic4` | `scoreBasic4Schema` | `src/models/score-basic4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3ScoresGamesBasicByDateFinal

- **Signature**: `cfbV3ScoresGamesBasicByDateFinal(request: CfbV3Scores.CfbV3ScoresGamesBasicByDateFinalRequest, options?: RequestOptions): ApiPromise<ScoreBasic4[], CfbV3Scores.CfbV3ScoresGamesBasicByDateFinalError>`
- **Wire**: `GET /v3/cfb/scores/{format}/ScoresBasicFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScoreBasic4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Scores.CfbV3ScoresGamesBasicByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Scores.CfbV3ScoresGamesBasicByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ScoreBasic4` | `scoreBasic4Schema` | `src/models/score-basic4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3ScoresGamesByDateFinal

- **Signature**: `cfbV3ScoresGamesByDateFinal(request: CfbV3Scores.CfbV3ScoresGamesByDateFinalRequest, options?: RequestOptions): ApiPromise<Game8[], CfbV3Scores.CfbV3ScoresGamesByDateFinalError>`
- **Wire**: `GET /v3/cfb/scores/{format}/GamesByDateFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Game8[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Scores.CfbV3ScoresGamesByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Scores.CfbV3ScoresGamesByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Game8` | `game8Schema` | `src/models/game8.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3ScoresPlayerDetailsByActive

- **Signature**: `cfbV3ScoresPlayerDetailsByActive(request: CfbV3Scores.CfbV3ScoresPlayerDetailsByActiveRequest, options?: RequestOptions): ApiPromise<Player4[], CfbV3Scores.CfbV3ScoresPlayerDetailsByActiveError>`
- **Wire**: `GET /v3/cfb/scores/{format}/Players`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Scores.CfbV3ScoresPlayerDetailsByActiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Scores.CfbV3ScoresPlayerDetailsByActiveRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player4` | `player4Schema` | `src/models/player4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3ScoresPlayerDetailsByActive2

- **Signature**: `cfbV3ScoresPlayerDetailsByActive2(request: CfbV3Scores.CfbV3ScoresPlayerDetailsByActive2Request, options?: RequestOptions): ApiPromise<PlayerBasic4[], CfbV3Scores.CfbV3ScoresPlayerDetailsByActive2Error>`
- **Wire**: `GET /v3/cfb/scores/{format}/PlayersByActive`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerBasic4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Scores.CfbV3ScoresPlayerDetailsByActive2Error` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Scores.CfbV3ScoresPlayerDetailsByActive2Request` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerBasic4` | `playerBasic4Schema` | `src/models/player-basic4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3ScoresPlayerDetailsByInjured

- **Signature**: `cfbV3ScoresPlayerDetailsByInjured(request: CfbV3Scores.CfbV3ScoresPlayerDetailsByInjuredRequest, options?: RequestOptions): ApiPromise<Player4[], CfbV3Scores.CfbV3ScoresPlayerDetailsByInjuredError>`
- **Wire**: `GET /v3/cfb/scores/{format}/InjuredPlayers`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Scores.CfbV3ScoresPlayerDetailsByInjuredError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Scores.CfbV3ScoresPlayerDetailsByInjuredRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player4` | `player4Schema` | `src/models/player4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3ScoresPlayerDetailsByTeam

- **Signature**: `cfbV3ScoresPlayerDetailsByTeam(request: CfbV3Scores.CfbV3ScoresPlayerDetailsByTeamRequest, options?: RequestOptions): ApiPromise<Player4[], CfbV3Scores.CfbV3ScoresPlayerDetailsByTeamError>`
- **Wire**: `GET /v3/cfb/scores/{format}/Players/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Scores.CfbV3ScoresPlayerDetailsByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Scores.CfbV3ScoresPlayerDetailsByTeamRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player4` | `player4Schema` | `src/models/player4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3ScoresPlayerProfilesByTeam

- **Signature**: `cfbV3ScoresPlayerProfilesByTeam(request: CfbV3Scores.CfbV3ScoresPlayerProfilesByTeamRequest, options?: RequestOptions): ApiPromise<PlayerBasic4[], CfbV3Scores.CfbV3ScoresPlayerProfilesByTeamError>`
- **Wire**: `GET /v3/cfb/scores/{format}/PlayersBasic/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerBasic4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Scores.CfbV3ScoresPlayerProfilesByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Scores.CfbV3ScoresPlayerProfilesByTeamRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerBasic4` | `playerBasic4Schema` | `src/models/player-basic4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3ScoresSchedules

- **Signature**: `cfbV3ScoresSchedules(request: CfbV3Scores.CfbV3ScoresSchedulesRequest, options?: RequestOptions): ApiPromise<Game8[], CfbV3Scores.CfbV3ScoresSchedulesError>`
- **Wire**: `GET /v3/cfb/scores/{format}/Games/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Game8[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Scores.CfbV3ScoresSchedulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Scores.CfbV3ScoresSchedulesRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Game8` | `game8Schema` | `src/models/game8.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3ScoresSchedulesBasic

- **Signature**: `cfbV3ScoresSchedulesBasic(request: CfbV3Scores.CfbV3ScoresSchedulesBasicRequest, options?: RequestOptions): ApiPromise<ScheduleBasic4[], CfbV3Scores.CfbV3ScoresSchedulesBasicError>`
- **Wire**: `GET /v3/cfb/scores/{format}/SchedulesBasic/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScheduleBasic4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Scores.CfbV3ScoresSchedulesBasicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Scores.CfbV3ScoresSchedulesBasicRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ScheduleBasic4` | `scheduleBasic4Schema` | `src/models/schedule-basic4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3ScoresSeasonCurrent

- **Signature**: `cfbV3ScoresSeasonCurrent(request: CfbV3Scores.CfbV3ScoresSeasonCurrentRequest, options?: RequestOptions): ApiPromise<number, CfbV3Scores.CfbV3ScoresSeasonCurrentError>`
- **Wire**: `GET /v3/cfb/scores/{format}/CurrentSeason`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `number` — a bare `application/json` number; the success type *is* the number
- **Error**: `CfbV3Scores.CfbV3ScoresSeasonCurrentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Scores.CfbV3ScoresSeasonCurrentRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3ScoresSeasonCurrentDetails

- **Signature**: `cfbV3ScoresSeasonCurrentDetails(request: CfbV3Scores.CfbV3ScoresSeasonCurrentDetailsRequest, options?: RequestOptions): ApiPromise<Season2, CfbV3Scores.CfbV3ScoresSeasonCurrentDetailsError>`
- **Wire**: `GET /v3/cfb/scores/{format}/CurrentSeasonDetails`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Season2`
- **Error**: `CfbV3Scores.CfbV3ScoresSeasonCurrentDetailsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Scores.CfbV3ScoresSeasonCurrentDetailsRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Season2` | `season2Schema` | `src/models/season2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3ScoresSeasonTypeCurrent

- **Signature**: `cfbV3ScoresSeasonTypeCurrent(request: CfbV3Scores.CfbV3ScoresSeasonTypeCurrentRequest, options?: RequestOptions): ApiPromise<string | null, CfbV3Scores.CfbV3ScoresSeasonTypeCurrentError>`
- **Wire**: `GET /v3/cfb/scores/{format}/CurrentSeasonType`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `string` — a bare `application/json` string; the success type *is* the string
- **Error**: `CfbV3Scores.CfbV3ScoresSeasonTypeCurrentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Scores.CfbV3ScoresSeasonTypeCurrentRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3ScoresStadiums

- **Signature**: `cfbV3ScoresStadiums(request: CfbV3Scores.CfbV3ScoresStadiumsRequest, options?: RequestOptions): ApiPromise<Stadium5[], CfbV3Scores.CfbV3ScoresStadiumsError>`
- **Wire**: `GET /v3/cfb/scores/{format}/Stadiums`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Stadium5[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Scores.CfbV3ScoresStadiumsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Scores.CfbV3ScoresStadiumsRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Stadium5` | `stadium5Schema` | `src/models/stadium5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3ScoresTeamGameLogsBySeason

- **Signature**: `cfbV3ScoresTeamGameLogsBySeason(request: CfbV3Scores.CfbV3ScoresTeamGameLogsBySeasonRequest, options?: RequestOptions): ApiPromise<TeamGame4[], CfbV3Scores.CfbV3ScoresTeamGameLogsBySeasonError>`
- **Wire**: `GET /v3/cfb/scores/{format}/TeamGameStatsBySeason/{season}/{teamid}/{numberofgames}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamGame4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Scores.CfbV3ScoresTeamGameLogsBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Scores.CfbV3ScoresTeamGameLogsBySeasonRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `teamid` | `path` | `string` | yes | — |
| `numberofgames` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamGame4` | `teamGame4Schema` | `src/models/team-game4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3ScoresTeamGameStatsByWeekLiveFinal

- **Signature**: `cfbV3ScoresTeamGameStatsByWeekLiveFinal(request: CfbV3Scores.CfbV3ScoresTeamGameStatsByWeekLiveFinalRequest, options?: RequestOptions): ApiPromise<TeamGame4[], CfbV3Scores.CfbV3ScoresTeamGameStatsByWeekLiveFinalError>`
- **Wire**: `GET /v3/cfb/scores/{format}/TeamGameStatsByWeek/{season}/{week}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamGame4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Scores.CfbV3ScoresTeamGameStatsByWeekLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Scores.CfbV3ScoresTeamGameStatsByWeekLiveFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamGame4` | `teamGame4Schema` | `src/models/team-game4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3ScoresTeamProfilesAll

- **Signature**: `cfbV3ScoresTeamProfilesAll(request: CfbV3Scores.CfbV3ScoresTeamProfilesAllRequest, options?: RequestOptions): ApiPromise<Team4[], CfbV3Scores.CfbV3ScoresTeamProfilesAllError>`
- **Wire**: `GET /v3/cfb/scores/{format}/Teams`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Team4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Scores.CfbV3ScoresTeamProfilesAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Scores.CfbV3ScoresTeamProfilesAllRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Team4` | `team4Schema` | `src/models/team4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3ScoresTeamSeasonStatsStandings

- **Signature**: `cfbV3ScoresTeamSeasonStatsStandings(request: CfbV3Scores.CfbV3ScoresTeamSeasonStatsStandingsRequest, options?: RequestOptions): ApiPromise<TeamSeason4[], CfbV3Scores.CfbV3ScoresTeamSeasonStatsStandingsError>`
- **Wire**: `GET /v3/cfb/scores/{format}/TeamSeasonStats/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamSeason4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Scores.CfbV3ScoresTeamSeasonStatsStandingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Scores.CfbV3ScoresTeamSeasonStatsStandingsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamSeason4` | `teamSeason4Schema` | `src/models/team-season4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3ScoresTeamsBasicAll

- **Signature**: `cfbV3ScoresTeamsBasicAll(request: CfbV3Scores.CfbV3ScoresTeamsBasicAllRequest, options?: RequestOptions): ApiPromise<TeamBasic1[], CfbV3Scores.CfbV3ScoresTeamsBasicAllError>`
- **Wire**: `GET /v3/cfb/scores/{format}/TeamsBasic`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamBasic1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CfbV3Scores.CfbV3ScoresTeamsBasicAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Scores.CfbV3ScoresTeamsBasicAllRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TeamBasic1` | `teamBasic1Schema` | `src/models/team-basic1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cfbV3ScoresWeekCurrent

- **Signature**: `cfbV3ScoresWeekCurrent(request: CfbV3Scores.CfbV3ScoresWeekCurrentRequest, options?: RequestOptions): ApiPromise<number | null, CfbV3Scores.CfbV3ScoresWeekCurrentError>`
- **Wire**: `GET /v3/cfb/scores/{format}/CurrentWeek`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `number` — a bare `application/json` number; the success type *is* the number
- **Error**: `CfbV3Scores.CfbV3ScoresWeekCurrentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CfbV3Scores.CfbV3ScoresWeekCurrentRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

