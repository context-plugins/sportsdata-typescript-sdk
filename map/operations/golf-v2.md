<!-- Generated file — do not edit; regenerated with the SDK. -->

# GolfV2 — operations

Accessor: `client.golfV2` · Source: `src/resources/golf-v2.ts` · 23 operations · Request and error types: namespace `GolfV2`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### golfV2CoursesCourses

- **Signature**: `golfV2CoursesCourses(request: GolfV2.GolfV2CoursesCoursesRequest, options?: RequestOptions): ApiPromise<Courses[], GolfV2.GolfV2CoursesCoursesError>`
- **Wire**: `GET /golf/v2/{format}/Courses`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Courses[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV2.GolfV2CoursesCoursesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV2.GolfV2CoursesCoursesRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Courses` | `coursesSchema` | `src/models/courses.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV2CurrentseasonSeasonCurrent

- **Signature**: `golfV2CurrentseasonSeasonCurrent(request: GolfV2.GolfV2CurrentseasonSeasonCurrentRequest, options?: RequestOptions): ApiPromise<Season7, GolfV2.GolfV2CurrentseasonSeasonCurrentError>`
- **Wire**: `GET /golf/v2/{format}/CurrentSeason`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Season7`
- **Error**: `GolfV2.GolfV2CurrentseasonSeasonCurrentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV2.GolfV2CurrentseasonSeasonCurrentRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Season7` | `season7Schema` | `src/models/season7.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV2DfsslateownershipprojectionsbyslateidDfsSlateOwnershipProjectionsBySlate

- **Signature**: `golfV2DfsslateownershipprojectionsbyslateidDfsSlateOwnershipProjectionsBySlate(request: GolfV2.GolfV2DfsslateownershipprojectionsbyslateidDfsSlateOwnershipProjectionsBySlateRequest, options?: RequestOptions): ApiPromise<DfsSlateWithOwnershipProjection, GolfV2.GolfV2DfsslateownershipprojectionsbyslateidDfsSlateOwnershipProjectionsBySlateError>`
- **Wire**: `GET /golf/v2/{format}/DfsSlateOwnershipProjectionsBySlateID/{slateId}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DfsSlateWithOwnershipProjection`
- **Error**: `GolfV2.GolfV2DfsslateownershipprojectionsbyslateidDfsSlateOwnershipProjectionsBySlateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV2.GolfV2DfsslateownershipprojectionsbyslateidDfsSlateOwnershipProjectionsBySlateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `slateId` | `path` | `number` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `DfsSlateWithOwnershipProjection` | `dfsSlateWithOwnershipProjectionSchema` | `src/models/dfs-slate-with-ownership-projection.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV2DfsslatesbytournamentDfsSlatesByTournament

- **Signature**: `golfV2DfsslatesbytournamentDfsSlatesByTournament(request: GolfV2.GolfV2DfsslatesbytournamentDfsSlatesByTournamentRequest, options?: RequestOptions): ApiPromise<DfsSlate2[], GolfV2.GolfV2DfsslatesbytournamentDfsSlatesByTournamentError>`
- **Wire**: `GET /golf/v2/{format}/DfsSlatesByTournament/{tournamentid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DfsSlate2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV2.GolfV2DfsslatesbytournamentDfsSlatesByTournamentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV2.GolfV2DfsslatesbytournamentDfsSlatesByTournamentRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `tournamentid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `DfsSlate2` | `dfsSlate2Schema` | `src/models/dfs-slate2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV2FantasygamestatsbytournamentFantasyPointsByTournament

- **Signature**: `golfV2FantasygamestatsbytournamentFantasyPointsByTournament(request: GolfV2.GolfV2FantasygamestatsbytournamentFantasyPointsByTournamentRequest, options?: RequestOptions): ApiPromise<FantasyTournament, GolfV2.GolfV2FantasygamestatsbytournamentFantasyPointsByTournamentError>`
- **Wire**: `GET /golf/v2/{format}/FantasyGameStatsByTournament/{tournamentid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FantasyTournament`
- **Error**: `GolfV2.GolfV2FantasygamestatsbytournamentFantasyPointsByTournamentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV2.GolfV2FantasygamestatsbytournamentFantasyPointsByTournamentRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `tournamentid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `FantasyTournament` | `fantasyTournamentSchema` | `src/models/fantasy-tournament.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV2LeaderboardLeaderboardLiveFinal

- **Signature**: `golfV2LeaderboardLeaderboardLiveFinal(request: GolfV2.GolfV2LeaderboardLeaderboardLiveFinalRequest, options?: RequestOptions): ApiPromise<Leaderboard, GolfV2.GolfV2LeaderboardLeaderboardLiveFinalError>`
- **Wire**: `GET /golf/v2/{format}/Leaderboard/{tournamentid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Leaderboard`
- **Error**: `GolfV2.GolfV2LeaderboardLeaderboardLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV2.GolfV2LeaderboardLeaderboardLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `tournamentid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Leaderboard` | `leaderboardSchema` | `src/models/leaderboard.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV2LeaderboardbasicLeaderboardBasic

- **Signature**: `golfV2LeaderboardbasicLeaderboardBasic(request: GolfV2.GolfV2LeaderboardbasicLeaderboardBasicRequest, options?: RequestOptions): ApiPromise<LeaderboardBasic, GolfV2.GolfV2LeaderboardbasicLeaderboardBasicError>`
- **Wire**: `GET /golf/v2/{format}/LeaderboardBasic/{tournamentid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LeaderboardBasic`
- **Error**: `GolfV2.GolfV2LeaderboardbasicLeaderboardBasicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV2.GolfV2LeaderboardbasicLeaderboardBasicRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `tournamentid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `LeaderboardBasic` | `leaderboardBasicSchema` | `src/models/leaderboard-basic.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV2LeaderboardbasicfinalLeaderboardBasicFinal

- **Signature**: `golfV2LeaderboardbasicfinalLeaderboardBasicFinal(request: GolfV2.GolfV2LeaderboardbasicfinalLeaderboardBasicFinalRequest, options?: RequestOptions): ApiPromise<LeaderboardBasic, GolfV2.GolfV2LeaderboardbasicfinalLeaderboardBasicFinalError>`
- **Wire**: `GET /golf/v2/{format}/LeaderboardBasicFinal/{tournamentid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `LeaderboardBasic`
- **Error**: `GolfV2.GolfV2LeaderboardbasicfinalLeaderboardBasicFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV2.GolfV2LeaderboardbasicfinalLeaderboardBasicFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `tournamentid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `LeaderboardBasic` | `leaderboardBasicSchema` | `src/models/leaderboard-basic.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV2LeaderboardfinalLeaderboardFinal

- **Signature**: `golfV2LeaderboardfinalLeaderboardFinal(request: GolfV2.GolfV2LeaderboardfinalLeaderboardFinalRequest, options?: RequestOptions): ApiPromise<Leaderboard, GolfV2.GolfV2LeaderboardfinalLeaderboardFinalError>`
- **Wire**: `GET /golf/v2/{format}/LeaderboardFinal/{tournamentid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Leaderboard`
- **Error**: `GolfV2.GolfV2LeaderboardfinalLeaderboardFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV2.GolfV2LeaderboardfinalLeaderboardFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `tournamentid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Leaderboard` | `leaderboardSchema` | `src/models/leaderboard.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV2NewsNews

- **Signature**: `golfV2NewsNews(request: GolfV2.GolfV2NewsNewsRequest, options?: RequestOptions): ApiPromise<News2[], GolfV2.GolfV2NewsNewsError>`
- **Wire**: `GET /golf/v2/{format}/News`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `News2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV2.GolfV2NewsNewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV2.GolfV2NewsNewsRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `News2` | `news2Schema` | `src/models/news2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV2NewsbydateNewsByDate

- **Signature**: `golfV2NewsbydateNewsByDate(request: GolfV2.GolfV2NewsbydateNewsByDateRequest, options?: RequestOptions): ApiPromise<News2[], GolfV2.GolfV2NewsbydateNewsByDateError>`
- **Wire**: `GET /golf/v2/{format}/NewsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `News2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV2.GolfV2NewsbydateNewsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV2.GolfV2NewsbydateNewsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `News2` | `news2Schema` | `src/models/news2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV2PlayerPlayer

- **Signature**: `golfV2PlayerPlayer(request: GolfV2.GolfV2PlayerPlayerRequest, options?: RequestOptions): ApiPromise<Player8, GolfV2.GolfV2PlayerPlayerError>`
- **Wire**: `GET /golf/v2/{format}/Player/{playerid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player8`
- **Error**: `GolfV2.GolfV2PlayerPlayerError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV2.GolfV2PlayerPlayerRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `playerid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player8` | `player8Schema` | `src/models/player8.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV2PlayersPlayerProfilesAll

- **Signature**: `golfV2PlayersPlayerProfilesAll(request: GolfV2.GolfV2PlayersPlayerProfilesAllRequest, options?: RequestOptions): ApiPromise<Player8[], GolfV2.GolfV2PlayersPlayerProfilesAllError>`
- **Wire**: `GET /golf/v2/{format}/Players`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player8[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV2.GolfV2PlayersPlayerProfilesAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV2.GolfV2PlayersPlayerProfilesAllRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player8` | `player8Schema` | `src/models/player8.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV2PlayerseasonstatsPlayerSeasonStats

- **Signature**: `golfV2PlayerseasonstatsPlayerSeasonStats(request: GolfV2.GolfV2PlayerseasonstatsPlayerSeasonStatsRequest, options?: RequestOptions): ApiPromise<PlayerSeason9[], GolfV2.GolfV2PlayerseasonstatsPlayerSeasonStatsError>`
- **Wire**: `GET /golf/v2/{format}/PlayerSeasonStats/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeason9[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV2.GolfV2PlayerseasonstatsPlayerSeasonStatsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV2.GolfV2PlayerseasonstatsPlayerSeasonStatsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeason9` | `playerSeason9Schema` | `src/models/player-season9.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV2PlayertournamentholescoresPlayerHoleScoresByTournamentLiveFinal

- **Signature**: `golfV2PlayertournamentholescoresPlayerHoleScoresByTournamentLiveFinal(request: GolfV2.GolfV2PlayertournamentholescoresPlayerHoleScoresByTournamentLiveFinalRequest, options?: RequestOptions): ApiPromise<PlayerTournamentBasic[], GolfV2.GolfV2PlayertournamentholescoresPlayerHoleScoresByTournamentLiveFinalError>`
- **Wire**: `GET /golf/v2/{format}/PlayerTournamentHoleScores/{tournamentid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerTournamentBasic[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV2.GolfV2PlayertournamentholescoresPlayerHoleScoresByTournamentLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV2.GolfV2PlayertournamentholescoresPlayerHoleScoresByTournamentLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `tournamentid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerTournamentBasic` | `playerTournamentBasicSchema` | `src/models/player-tournament-basic.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV2PlayertournamentholescoresfinalPlayerHoleScoresByTournamentFinal

- **Signature**: `golfV2PlayertournamentholescoresfinalPlayerHoleScoresByTournamentFinal(request: GolfV2.GolfV2PlayertournamentholescoresfinalPlayerHoleScoresByTournamentFinalRequest, options?: RequestOptions): ApiPromise<PlayerTournamentBasic[], GolfV2.GolfV2PlayertournamentholescoresfinalPlayerHoleScoresByTournamentFinalError>`
- **Wire**: `GET /golf/v2/{format}/PlayerTournamentHoleScoresFinal/{tournamentid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerTournamentBasic[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV2.GolfV2PlayertournamentholescoresfinalPlayerHoleScoresByTournamentFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV2.GolfV2PlayertournamentholescoresfinalPlayerHoleScoresByTournamentFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `tournamentid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerTournamentBasic` | `playerTournamentBasicSchema` | `src/models/player-tournament-basic.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV2PlayertournamentprojectionstatsPlayerProjectedStatsByTournament

- **Signature**: `golfV2PlayertournamentprojectionstatsPlayerProjectedStatsByTournament(request: GolfV2.GolfV2PlayertournamentprojectionstatsPlayerProjectedStatsByTournamentRequest, options?: RequestOptions): ApiPromise<PlayerTournamentProjection[], GolfV2.GolfV2PlayertournamentprojectionstatsPlayerProjectedStatsByTournamentError>`
- **Wire**: `GET /golf/v2/{format}/PlayerTournamentProjectionStats/{tournamentid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerTournamentProjection[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV2.GolfV2PlayertournamentprojectionstatsPlayerProjectedStatsByTournamentError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV2.GolfV2PlayertournamentprojectionstatsPlayerProjectedStatsByTournamentRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `tournamentid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerTournamentProjection` | `playerTournamentProjectionSchema` | `src/models/player-tournament-projection.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV2PlayertournamentroundscoresScoresByTournamentLiveFinal

- **Signature**: `golfV2PlayertournamentroundscoresScoresByTournamentLiveFinal(request: GolfV2.GolfV2PlayertournamentroundscoresScoresByTournamentLiveFinalRequest, options?: RequestOptions): ApiPromise<TournamentRound[], GolfV2.GolfV2PlayertournamentroundscoresScoresByTournamentLiveFinalError>`
- **Wire**: `GET /golf/v2/{format}/PlayerTournamentRoundScores/{tournamentid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TournamentRound[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV2.GolfV2PlayertournamentroundscoresScoresByTournamentLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV2.GolfV2PlayertournamentroundscoresScoresByTournamentLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `tournamentid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TournamentRound` | `tournamentRoundSchema` | `src/models/tournament-round.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV2PlayertournamentroundscoresfinalScoresByTournamentFinal

- **Signature**: `golfV2PlayertournamentroundscoresfinalScoresByTournamentFinal(request: GolfV2.GolfV2PlayertournamentroundscoresfinalScoresByTournamentFinalRequest, options?: RequestOptions): ApiPromise<TournamentRound[], GolfV2.GolfV2PlayertournamentroundscoresfinalScoresByTournamentFinalError>`
- **Wire**: `GET /golf/v2/{format}/PlayerTournamentRoundScoresFinal/{tournamentid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `TournamentRound[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV2.GolfV2PlayertournamentroundscoresfinalScoresByTournamentFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV2.GolfV2PlayertournamentroundscoresfinalScoresByTournamentFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `tournamentid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `TournamentRound` | `tournamentRoundSchema` | `src/models/tournament-round.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV2RankingsRankings

- **Signature**: `golfV2RankingsRankings(request: GolfV2.GolfV2RankingsRankingsRequest, options?: RequestOptions): ApiPromise<PlayerSeason9[], GolfV2.GolfV2RankingsRankingsError>`
- **Wire**: `GET /golf/v2/{format}/Rankings/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerSeason9[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV2.GolfV2RankingsRankingsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV2.GolfV2RankingsRankingsRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerSeason9` | `playerSeason9Schema` | `src/models/player-season9.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV2TournamentsScheduleBySeason

- **Signature**: `golfV2TournamentsScheduleBySeason(request: GolfV2.GolfV2TournamentsScheduleBySeasonRequest, options?: RequestOptions): ApiPromise<Tournament1[], GolfV2.GolfV2TournamentsScheduleBySeasonError>`
- **Wire**: `GET /golf/v2/{format}/Tournaments/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Tournament1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV2.GolfV2TournamentsScheduleBySeasonError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV2.GolfV2TournamentsScheduleBySeasonRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Tournament1` | `tournament1Schema` | `src/models/tournament1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV2TournamentsSchedules

- **Signature**: `golfV2TournamentsSchedules(request: GolfV2.GolfV2TournamentsSchedulesRequest, options?: RequestOptions): ApiPromise<Tournament1[], GolfV2.GolfV2TournamentsSchedulesError>`
- **Wire**: `GET /golf/v2/{format}/Tournaments`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Tournament1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV2.GolfV2TournamentsSchedulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV2.GolfV2TournamentsSchedulesRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Tournament1` | `tournament1Schema` | `src/models/tournament1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV2UpcomingdfsslateownershipprojectionsDfsSlateOwnershipProjectionsUpcoming

- **Signature**: `golfV2UpcomingdfsslateownershipprojectionsDfsSlateOwnershipProjectionsUpcoming(request: GolfV2.GolfV2UpcomingdfsslateownershipprojectionsDfsSlateOwnershipProjectionsUpcomingRequest, options?: RequestOptions): ApiPromise<DfsSlateWithOwnershipProjection[], GolfV2.GolfV2UpcomingdfsslateownershipprojectionsDfsSlateOwnershipProjectionsUpcomingError>`
- **Wire**: `GET /golf/v2/{format}/UpcomingDfsSlateOwnershipProjections`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DfsSlateWithOwnershipProjection[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV2.GolfV2UpcomingdfsslateownershipprojectionsDfsSlateOwnershipProjectionsUpcomingError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV2.GolfV2UpcomingdfsslateownershipprojectionsDfsSlateOwnershipProjectionsUpcomingRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `DfsSlateWithOwnershipProjection` | `dfsSlateWithOwnershipProjectionSchema` | `src/models/dfs-slate-with-ownership-projection.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

