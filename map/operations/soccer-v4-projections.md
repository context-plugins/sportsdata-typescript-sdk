<!-- Generated file — do not edit; regenerated with the SDK. -->

# SoccerV4Projections — operations

Accessor: `client.soccerV4Projections` · Source: `src/resources/soccer-v4-projections.ts` · 4 operations · Request and error types: namespace `SoccerV4Projections`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### soccerV4ProjectionsDfsSlatesByDate

- **Signature**: `soccerV4ProjectionsDfsSlatesByDate(request: SoccerV4Projections.SoccerV4ProjectionsDfsSlatesByDateRequest, options?: RequestOptions): ApiPromise<DfsSlate1[], SoccerV4Projections.SoccerV4ProjectionsDfsSlatesByDateError>`
- **Wire**: `GET /v4/soccer/projections/{format}/DfsSlatesByDate/{competition}/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DfsSlate1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Projections.SoccerV4ProjectionsDfsSlatesByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Projections.SoccerV4ProjectionsDfsSlatesByDateRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `DfsSlate1` | `dfsSlate1Schema` | `src/models/dfs-slate1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4ProjectionsPlayerDetailsByInjured

- **Signature**: `soccerV4ProjectionsPlayerDetailsByInjured(request: SoccerV4Projections.SoccerV4ProjectionsPlayerDetailsByInjuredRequest, options?: RequestOptions): ApiPromise<Player7[], SoccerV4Projections.SoccerV4ProjectionsPlayerDetailsByInjuredError>`
- **Wire**: `GET /v4/soccer/projections/{format}/InjuredPlayers/{competition}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player7[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Projections.SoccerV4ProjectionsPlayerDetailsByInjuredError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Projections.SoccerV4ProjectionsPlayerDetailsByInjuredRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player7` | `player7Schema` | `src/models/player7.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4ProjectionsProjectedPlayerGameStatsByDate

- **Signature**: `soccerV4ProjectionsProjectedPlayerGameStatsByDate(request: SoccerV4Projections.SoccerV4ProjectionsProjectedPlayerGameStatsByDateRequest, options?: RequestOptions): ApiPromise<PlayerGameProjection4[], SoccerV4Projections.SoccerV4ProjectionsProjectedPlayerGameStatsByDateError>`
- **Wire**: `GET /v4/soccer/projections/{format}/PlayerGameProjectionStatsByDate/{competition}/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGameProjection4[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Projections.SoccerV4ProjectionsProjectedPlayerGameStatsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Projections.SoccerV4ProjectionsProjectedPlayerGameStatsByDateRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGameProjection4` | `playerGameProjection4Schema` | `src/models/player-game-projection4.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### soccerV4ProjectionsUpcomingDfsSlatesByCompetition

- **Signature**: `soccerV4ProjectionsUpcomingDfsSlatesByCompetition(request: SoccerV4Projections.SoccerV4ProjectionsUpcomingDfsSlatesByCompetitionRequest, options?: RequestOptions): ApiPromise<DfsSlate1[], SoccerV4Projections.SoccerV4ProjectionsUpcomingDfsSlatesByCompetitionError>`
- **Wire**: `GET /v4/soccer/projections/{format}/UpcomingDfsSlatesByCompetition/{competition}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DfsSlate1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `SoccerV4Projections.SoccerV4ProjectionsUpcomingDfsSlatesByCompetitionError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `SoccerV4Projections.SoccerV4ProjectionsUpcomingDfsSlatesByCompetitionRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `competition` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `DfsSlate1` | `dfsSlate1Schema` | `src/models/dfs-slate1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

