<!-- Generated file — do not edit; regenerated with the SDK. -->

# CwbbV3Scores — operations

Accessor: `client.cwbbV3Scores` · Source: `src/resources/cwbb-v3-scores.ts` · 8 operations · Request and error types: namespace `CwbbV3Scores`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### cwbbV3ScoresAreAnyGamesInProgress

- **Signature**: `cwbbV3ScoresAreAnyGamesInProgress(request: CwbbV3Scores.CwbbV3ScoresAreAnyGamesInProgressRequest, options?: RequestOptions): ApiPromise<boolean, CwbbV3Scores.CwbbV3ScoresAreAnyGamesInProgressError>`
- **Wire**: `GET /v3/cwbb/scores/{format}/AreAnyGamesInProgress`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `boolean` — a bare `application/json` boolean; the success type *is* the boolean
- **Error**: `CwbbV3Scores.CwbbV3ScoresAreAnyGamesInProgressError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CwbbV3Scores.CwbbV3ScoresAreAnyGamesInProgressRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cwbbV3ScoresGamesByDateFinal

- **Signature**: `cwbbV3ScoresGamesByDateFinal(request: CwbbV3Scores.CwbbV3ScoresGamesByDateFinalRequest, options?: RequestOptions): ApiPromise<Game16[], CwbbV3Scores.CwbbV3ScoresGamesByDateFinalError>`
- **Wire**: `GET /v3/cwbb/scores/{format}/GamesByDateFinal/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Game16[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CwbbV3Scores.CwbbV3ScoresGamesByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CwbbV3Scores.CwbbV3ScoresGamesByDateFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Game16` | `game16Schema` | `src/models/game16.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cwbbV3ScoresGamesByDateLiveFinal

- **Signature**: `cwbbV3ScoresGamesByDateLiveFinal(request: CwbbV3Scores.CwbbV3ScoresGamesByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<Game16[], CwbbV3Scores.CwbbV3ScoresGamesByDateLiveFinalError>`
- **Wire**: `GET /v3/cwbb/scores/{format}/GamesByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Game16[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CwbbV3Scores.CwbbV3ScoresGamesByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CwbbV3Scores.CwbbV3ScoresGamesByDateLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Game16` | `game16Schema` | `src/models/game16.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cwbbV3ScoresLeagueHierarchy

- **Signature**: `cwbbV3ScoresLeagueHierarchy(request: CwbbV3Scores.CwbbV3ScoresLeagueHierarchyRequest, options?: RequestOptions): ApiPromise<Conference2[], CwbbV3Scores.CwbbV3ScoresLeagueHierarchyError>`
- **Wire**: `GET /v3/cwbb/scores/{format}/LeagueHierarchy`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Conference2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CwbbV3Scores.CwbbV3ScoresLeagueHierarchyError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CwbbV3Scores.CwbbV3ScoresLeagueHierarchyRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Conference2` | `conference2Schema` | `src/models/conference2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cwbbV3ScoresSchedules

- **Signature**: `cwbbV3ScoresSchedules(request: CwbbV3Scores.CwbbV3ScoresSchedulesRequest, options?: RequestOptions): ApiPromise<Game16[], CwbbV3Scores.CwbbV3ScoresSchedulesError>`
- **Wire**: `GET /v3/cwbb/scores/{format}/Games/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Game16[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CwbbV3Scores.CwbbV3ScoresSchedulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CwbbV3Scores.CwbbV3ScoresSchedulesRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Game16` | `game16Schema` | `src/models/game16.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cwbbV3ScoresSchedulesBasic

- **Signature**: `cwbbV3ScoresSchedulesBasic(request: CwbbV3Scores.CwbbV3ScoresSchedulesBasicRequest, options?: RequestOptions): ApiPromise<ScheduleBasic6[], CwbbV3Scores.CwbbV3ScoresSchedulesBasicError>`
- **Wire**: `GET /v3/cwbb/scores/{format}/SchedulesBasic/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScheduleBasic6[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CwbbV3Scores.CwbbV3ScoresSchedulesBasicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CwbbV3Scores.CwbbV3ScoresSchedulesBasicRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ScheduleBasic6` | `scheduleBasic6Schema` | `src/models/schedule-basic6.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cwbbV3ScoresSeasonCurrent

- **Signature**: `cwbbV3ScoresSeasonCurrent(request: CwbbV3Scores.CwbbV3ScoresSeasonCurrentRequest, options?: RequestOptions): ApiPromise<Season5, CwbbV3Scores.CwbbV3ScoresSeasonCurrentError>`
- **Wire**: `GET /v3/cwbb/scores/{format}/CurrentSeason`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Season5`
- **Error**: `CwbbV3Scores.CwbbV3ScoresSeasonCurrentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CwbbV3Scores.CwbbV3ScoresSeasonCurrentRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Season5` | `season5Schema` | `src/models/season5.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### cwbbV3ScoresTeamProfilesAll

- **Signature**: `cwbbV3ScoresTeamProfilesAll(request: CwbbV3Scores.CwbbV3ScoresTeamProfilesAllRequest, options?: RequestOptions): ApiPromise<Team7[], CwbbV3Scores.CwbbV3ScoresTeamProfilesAllError>`
- **Wire**: `GET /v3/cwbb/scores/{format}/Teams`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Team7[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `CwbbV3Scores.CwbbV3ScoresTeamProfilesAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `CwbbV3Scores.CwbbV3ScoresTeamProfilesAllRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Team7` | `team7Schema` | `src/models/team7.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

