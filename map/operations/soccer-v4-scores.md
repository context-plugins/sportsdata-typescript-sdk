<!-- Generated file — do not edit; regenerated with the SDK. -->

# SoccerV4Scores — operations

Accessor: `client.soccerV4Scores` · Source: `src/resources/soccer-v4-scores.ts` · 21 operations · Request and error types: namespace `SoccerV4Scores`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### soccerV4ScoresAreasCountries

- **Signature**: `soccerV4ScoresAreasCountries(request: SoccerV4Scores.SoccerV4ScoresAreasCountriesRequest, options?: RequestOptions): ApiPromise<Area[], SoccerV4Scores.SoccerV4ScoresAreasCountriesError>`
- **Wire**: `GET /v4/soccer/scores/{format}/Areas`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Area[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Scores.SoccerV4ScoresAreasCountriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Scores.SoccerV4ScoresAreasCountriesRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Area` | `areaSchema` | `src/models/area.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4ScoresCompetitionsLeagues

- **Signature**: `soccerV4ScoresCompetitionsLeagues(request: SoccerV4Scores.SoccerV4ScoresCompetitionsLeaguesRequest, options?: RequestOptions): ApiPromise<Competition[], SoccerV4Scores.SoccerV4ScoresCompetitionsLeaguesError>`
- **Wire**: `GET /v4/soccer/scores/{format}/Competitions`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Competition[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Scores.SoccerV4ScoresCompetitionsLeaguesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Scores.SoccerV4ScoresCompetitionsLeaguesRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Competition` | `competitionSchema` | `src/models/competition.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4ScoresGamesByCompetitionLiveFinal

- **Signature**: `soccerV4ScoresGamesByCompetitionLiveFinal(request: SoccerV4Scores.SoccerV4ScoresGamesByCompetitionLiveFinalRequest, options?: RequestOptions): ApiPromise<CompetitionDetail, SoccerV4Scores.SoccerV4ScoresGamesByCompetitionLiveFinalError>`
- **Wire**: `GET /v4/soccer/scores/{format}/CompetitionDetails/{competition}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CompetitionDetail`
- **Error**: `SoccerV4Scores.SoccerV4ScoresGamesByCompetitionLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Scores.SoccerV4ScoresGamesByCompetitionLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `CompetitionDetail` | `competitionDetailSchema` | `src/models/competition-detail.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4ScoresGamesByDateFinal

- **Signature**: `soccerV4ScoresGamesByDateFinal(request: SoccerV4Scores.SoccerV4ScoresGamesByDateFinalRequest, options?: RequestOptions): ApiPromise<Game17[], SoccerV4Scores.SoccerV4ScoresGamesByDateFinalError>`
- **Wire**: `GET /v4/soccer/scores/{format}/GamesByDateFinal/{competition}/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Game17[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Scores.SoccerV4ScoresGamesByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Scores.SoccerV4ScoresGamesByDateFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Game17` | `game17Schema` | `src/models/game17.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4ScoresGamesByDateLiveFinal

- **Signature**: `soccerV4ScoresGamesByDateLiveFinal(request: SoccerV4Scores.SoccerV4ScoresGamesByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<Game17[], SoccerV4Scores.SoccerV4ScoresGamesByDateLiveFinalError>`
- **Wire**: `GET /v4/soccer/scores/{format}/GamesByDate/{competition}/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Game17[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Scores.SoccerV4ScoresGamesByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Scores.SoccerV4ScoresGamesByDateLiveFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Game17` | `game17Schema` | `src/models/game17.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4ScoresGamesBasicByDateFinal

- **Signature**: `soccerV4ScoresGamesBasicByDateFinal(request: SoccerV4Scores.SoccerV4ScoresGamesBasicByDateFinalRequest, options?: RequestOptions): ApiPromise<ScoreBasic7[], SoccerV4Scores.SoccerV4ScoresGamesBasicByDateFinalError>`
- **Wire**: `GET /v4/soccer/scores/{format}/ScoresBasicFinal/{competition}/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScoreBasic7[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Scores.SoccerV4ScoresGamesBasicByDateFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Scores.SoccerV4ScoresGamesBasicByDateFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ScoreBasic7` | `scoreBasic7Schema` | `src/models/score-basic7.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4ScoresGamesBasicByDateLiveFinal

- **Signature**: `soccerV4ScoresGamesBasicByDateLiveFinal(request: SoccerV4Scores.SoccerV4ScoresGamesBasicByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<ScoreBasic7[], SoccerV4Scores.SoccerV4ScoresGamesBasicByDateLiveFinalError>`
- **Wire**: `GET /v4/soccer/scores/{format}/ScoresBasic/{competition}/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScoreBasic7[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Scores.SoccerV4ScoresGamesBasicByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Scores.SoccerV4ScoresGamesBasicByDateLiveFinalRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ScoreBasic7` | `scoreBasic7Schema` | `src/models/score-basic7.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4ScoresMembershipsByActive

- **Signature**: `soccerV4ScoresMembershipsByActive(request: SoccerV4Scores.SoccerV4ScoresMembershipsByActiveRequest, options?: RequestOptions): ApiPromise<Membership[], SoccerV4Scores.SoccerV4ScoresMembershipsByActiveError>`
- **Wire**: `GET /v4/soccer/scores/{format}/ActiveMemberships/{competition}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Membership[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Scores.SoccerV4ScoresMembershipsByActiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Scores.SoccerV4ScoresMembershipsByActiveRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Membership` | `membershipSchema` | `src/models/membership.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4ScoresMembershipsByCanceled

- **Signature**: `soccerV4ScoresMembershipsByCanceled(request: SoccerV4Scores.SoccerV4ScoresMembershipsByCanceledRequest, options?: RequestOptions): ApiPromise<CanceledMembership, SoccerV4Scores.SoccerV4ScoresMembershipsByCanceledError>`
- **Wire**: `GET /v4/soccer/scores/{format}/CanceledMemberships`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `CanceledMembership`
- **Error**: `SoccerV4Scores.SoccerV4ScoresMembershipsByCanceledError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Scores.SoccerV4ScoresMembershipsByCanceledRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `CanceledMembership` | `canceledMembershipSchema` | `src/models/canceled-membership.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4ScoresMembershipsByRecentlyChanged

- **Signature**: `soccerV4ScoresMembershipsByRecentlyChanged(request: SoccerV4Scores.SoccerV4ScoresMembershipsByRecentlyChangedRequest, options?: RequestOptions): ApiPromise<Membership[], SoccerV4Scores.SoccerV4ScoresMembershipsByRecentlyChangedError>`
- **Wire**: `GET /v4/soccer/scores/{format}/RecentlyChangedMemberships/{competition}/{days}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Membership[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Scores.SoccerV4ScoresMembershipsByRecentlyChangedError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Scores.SoccerV4ScoresMembershipsByRecentlyChangedRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `days` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Membership` | `membershipSchema` | `src/models/membership.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4ScoresMembershipsHistoricalByTeam

- **Signature**: `soccerV4ScoresMembershipsHistoricalByTeam(request: SoccerV4Scores.SoccerV4ScoresMembershipsHistoricalByTeamRequest, options?: RequestOptions): ApiPromise<Membership[], SoccerV4Scores.SoccerV4ScoresMembershipsHistoricalByTeamError>`
- **Wire**: `GET /v4/soccer/scores/{format}/HistoricalMembershipsByTeam/{competition}/{teamid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Membership[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Scores.SoccerV4ScoresMembershipsHistoricalByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Scores.SoccerV4ScoresMembershipsHistoricalByTeamRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `teamid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Membership` | `membershipSchema` | `src/models/membership.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4ScoresPlayerDetailsByTeam

- **Signature**: `soccerV4ScoresPlayerDetailsByTeam(request: SoccerV4Scores.SoccerV4ScoresPlayerDetailsByTeamRequest, options?: RequestOptions): ApiPromise<Player7[], SoccerV4Scores.SoccerV4ScoresPlayerDetailsByTeamError>`
- **Wire**: `GET /v4/soccer/scores/{format}/PlayersByTeam/{competition}/{teamid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player7[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Scores.SoccerV4ScoresPlayerDetailsByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Scores.SoccerV4ScoresPlayerDetailsByTeamRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `teamid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player7` | `player7Schema` | `src/models/player7.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4ScoresPlayerProfilesByTeam

- **Signature**: `soccerV4ScoresPlayerProfilesByTeam(request: SoccerV4Scores.SoccerV4ScoresPlayerProfilesByTeamRequest, options?: RequestOptions): ApiPromise<PlayerBasic6[], SoccerV4Scores.SoccerV4ScoresPlayerProfilesByTeamError>`
- **Wire**: `GET /v4/soccer/scores/{format}/PlayersByTeamBasic/{competition}/{teamid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerBasic6[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Scores.SoccerV4ScoresPlayerProfilesByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Scores.SoccerV4ScoresPlayerProfilesByTeamRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `teamid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerBasic6` | `playerBasic6Schema` | `src/models/player-basic6.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4ScoresSchedules

- **Signature**: `soccerV4ScoresSchedules(request: SoccerV4Scores.SoccerV4ScoresSchedulesRequest, options?: RequestOptions): ApiPromise<Round[], SoccerV4Scores.SoccerV4ScoresSchedulesError>`
- **Wire**: `GET /v4/soccer/scores/{format}/Schedule/{competition}/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Round[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Scores.SoccerV4ScoresSchedulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Scores.SoccerV4ScoresSchedulesRequest` (3):

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

### soccerV4ScoresSchedulesBasic

- **Signature**: `soccerV4ScoresSchedulesBasic(request: SoccerV4Scores.SoccerV4ScoresSchedulesBasicRequest, options?: RequestOptions): ApiPromise<ScheduleBasic7[], SoccerV4Scores.SoccerV4ScoresSchedulesBasicError>`
- **Wire**: `GET /v4/soccer/scores/{format}/SchedulesBasic/{competition}/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `ScheduleBasic7[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Scores.SoccerV4ScoresSchedulesBasicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Scores.SoccerV4ScoresSchedulesBasicRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `ScheduleBasic7` | `scheduleBasic7Schema` | `src/models/schedule-basic7.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4ScoresStandings

- **Signature**: `soccerV4ScoresStandings(request: SoccerV4Scores.SoccerV4ScoresStandingsRequest, options?: RequestOptions): ApiPromise<Round[], SoccerV4Scores.SoccerV4ScoresStandingsError>`
- **Wire**: `GET /v4/soccer/scores/{format}/Standings/{competition}/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Round[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Scores.SoccerV4ScoresStandingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Scores.SoccerV4ScoresStandingsRequest` (3):

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

### soccerV4ScoresTeamGameStatsByDateLiveFinal

- **Signature**: `soccerV4ScoresTeamGameStatsByDateLiveFinal(request: SoccerV4Scores.SoccerV4ScoresTeamGameStatsByDateLiveFinalRequest, options?: RequestOptions): ApiPromise<TeamGame7[], SoccerV4Scores.SoccerV4ScoresTeamGameStatsByDateLiveFinalError>`
- **Wire**: `GET /v4/soccer/scores/{format}/TeamGameStatsByDate/{competition}/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TeamGame7[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Scores.SoccerV4ScoresTeamGameStatsByDateLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Scores.SoccerV4ScoresTeamGameStatsByDateLiveFinalRequest` (3):

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

### soccerV4ScoresTeamProfilesByCompetition

- **Signature**: `soccerV4ScoresTeamProfilesByCompetition(request: SoccerV4Scores.SoccerV4ScoresTeamProfilesByCompetitionRequest, options?: RequestOptions): ApiPromise<Team8[], SoccerV4Scores.SoccerV4ScoresTeamProfilesByCompetitionError>`
- **Wire**: `GET /v4/soccer/scores/{format}/Teams/{competition}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Team8[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Scores.SoccerV4ScoresTeamProfilesByCompetitionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Scores.SoccerV4ScoresTeamProfilesByCompetitionRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Team8` | `team8Schema` | `src/models/team8.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4ScoresTeamProfilesBySeason

- **Signature**: `soccerV4ScoresTeamProfilesBySeason(request: SoccerV4Scores.SoccerV4ScoresTeamProfilesBySeasonRequest, options?: RequestOptions): ApiPromise<SeasonTeam[], SoccerV4Scores.SoccerV4ScoresTeamProfilesBySeasonError>`
- **Wire**: `GET /v4/soccer/scores/{format}/SeasonTeams/{competition}/{seasonid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `SeasonTeam[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Scores.SoccerV4ScoresTeamProfilesBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Scores.SoccerV4ScoresTeamProfilesBySeasonRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `seasonid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `SeasonTeam` | `seasonTeamSchema` | `src/models/season-team.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4ScoresTeamSeasonStats

- **Signature**: `soccerV4ScoresTeamSeasonStats(request: SoccerV4Scores.SoccerV4ScoresTeamSeasonStatsRequest, options?: RequestOptions): ApiPromise<Round[], SoccerV4Scores.SoccerV4ScoresTeamSeasonStatsError>`
- **Wire**: `GET /v4/soccer/scores/{format}/TeamSeasonStats/{competition}/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Round[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Scores.SoccerV4ScoresTeamSeasonStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Scores.SoccerV4ScoresTeamSeasonStatsRequest` (3):

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

### soccerV4ScoresVenues

- **Signature**: `soccerV4ScoresVenues(request: SoccerV4Scores.SoccerV4ScoresVenuesRequest, options?: RequestOptions): ApiPromise<Venue[], SoccerV4Scores.SoccerV4ScoresVenuesError>`
- **Wire**: `GET /v4/soccer/scores/{format}/Venues`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Venue[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Scores.SoccerV4ScoresVenuesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Scores.SoccerV4ScoresVenuesRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Venue` | `venueSchema` | `src/models/venue.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

