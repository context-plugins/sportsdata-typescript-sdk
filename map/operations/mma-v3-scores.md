<!-- Generated file — do not edit; regenerated with the SDK. -->

# MmaV3Scores — operations

Accessor: `client.mmaV3Scores` · Source: `src/resources/mma-v3-scores.ts` · 6 operations · Request and error types: namespace `MmaV3Scores`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### mmaV3ScoresEvent

- **Signature**: `mmaV3ScoresEvent(request: MmaV3Scores.MmaV3ScoresEventRequest, options?: RequestOptions): ApiPromise<EventDetail, MmaV3Scores.MmaV3ScoresEventError>`
- **Wire**: `GET /v3/mma/scores/{format}/Event/{eventid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `EventDetail`
- **Error**: `MmaV3Scores.MmaV3ScoresEventError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MmaV3Scores.MmaV3ScoresEventRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `eventid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `EventDetail` | `eventDetailSchema` | `src/models/event-detail.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mmaV3ScoresFighterProfileByFighter

- **Signature**: `mmaV3ScoresFighterProfileByFighter(request: MmaV3Scores.MmaV3ScoresFighterProfileByFighterRequest, options?: RequestOptions): ApiPromise<Fighter, MmaV3Scores.MmaV3ScoresFighterProfileByFighterError>`
- **Wire**: `GET /v3/mma/scores/{format}/Fighter/{fighterid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Fighter`
- **Error**: `MmaV3Scores.MmaV3ScoresFighterProfileByFighterError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MmaV3Scores.MmaV3ScoresFighterProfileByFighterRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `fighterid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Fighter` | `fighterSchema` | `src/models/fighter.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mmaV3ScoresFighterProfilesAll

- **Signature**: `mmaV3ScoresFighterProfilesAll(request: MmaV3Scores.MmaV3ScoresFighterProfilesAllRequest, options?: RequestOptions): ApiPromise<Fighter[], MmaV3Scores.MmaV3ScoresFighterProfilesAllError>`
- **Wire**: `GET /v3/mma/scores/{format}/Fighters`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Fighter[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MmaV3Scores.MmaV3ScoresFighterProfilesAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MmaV3Scores.MmaV3ScoresFighterProfilesAllRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Fighter` | `fighterSchema` | `src/models/fighter.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mmaV3ScoresFighterProfilesBasicAll

- **Signature**: `mmaV3ScoresFighterProfilesBasicAll(request: MmaV3Scores.MmaV3ScoresFighterProfilesBasicAllRequest, options?: RequestOptions): ApiPromise<FighterBasic[], MmaV3Scores.MmaV3ScoresFighterProfilesBasicAllError>`
- **Wire**: `GET /v3/mma/scores/{format}/FightersBasic`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FighterBasic[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MmaV3Scores.MmaV3ScoresFighterProfilesBasicAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MmaV3Scores.MmaV3ScoresFighterProfilesBasicAllRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `FighterBasic` | `fighterBasicSchema` | `src/models/fighter-basic.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mmaV3ScoresLeagues

- **Signature**: `mmaV3ScoresLeagues(request: MmaV3Scores.MmaV3ScoresLeaguesRequest, options?: RequestOptions): ApiPromise<League[], MmaV3Scores.MmaV3ScoresLeaguesError>`
- **Wire**: `GET /v3/mma/scores/{format}/Leagues`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `League[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MmaV3Scores.MmaV3ScoresLeaguesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MmaV3Scores.MmaV3ScoresLeaguesRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `League` | `leagueSchema` | `src/models/league.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mmaV3ScoresSchedules

- **Signature**: `mmaV3ScoresSchedules(request: MmaV3Scores.MmaV3ScoresSchedulesRequest, options?: RequestOptions): ApiPromise<Event[], MmaV3Scores.MmaV3ScoresSchedulesError>`
- **Wire**: `GET /v3/mma/scores/{format}/Schedule/{league}/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Event[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MmaV3Scores.MmaV3ScoresSchedulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MmaV3Scores.MmaV3ScoresSchedulesRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `league` | `path` | `string` | yes | — |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Event` | `eventSchema` | `src/models/event.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

