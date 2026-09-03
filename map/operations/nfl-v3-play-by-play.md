<!-- Generated file — do not edit; regenerated with the SDK. -->

# NflV3PlayByPlay — operations

Accessor: `client.nflV3PlayByPlay` · Source: `src/resources/nfl-v3-play-by-play.ts` · 6 operations · Request and error types: namespace `NflV3PlayByPlay`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### nflV3PbpPlayByPlayByTeamFinal

- **Signature**: `nflV3PbpPlayByPlayByTeamFinal(request: NflV3PlayByPlay.NflV3PbpPlayByPlayByTeamFinalRequest, options?: RequestOptions): ApiPromise<PlayByPlay, NflV3PlayByPlay.NflV3PbpPlayByPlayByTeamFinalError>`
- **Wire**: `GET /v3/nfl/pbp/{format}/PlayByPlayFinal/{season}/{week}/{hometeam}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayByPlay`
- **Error**: `NflV3PlayByPlay.NflV3PbpPlayByPlayByTeamFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3PlayByPlay.NflV3PbpPlayByPlayByTeamFinalRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |
| `hometeam` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayByPlay` | `playByPlaySchema` | `src/models/play-by-play.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3PbpPlayByPlayByTeamLiveFinal

- **Signature**: `nflV3PbpPlayByPlayByTeamLiveFinal(request: NflV3PlayByPlay.NflV3PbpPlayByPlayByTeamLiveFinalRequest, options?: RequestOptions): ApiPromise<PlayByPlay, NflV3PlayByPlay.NflV3PbpPlayByPlayByTeamLiveFinalError>`
- **Wire**: `GET /v3/nfl/pbp/{format}/PlayByPlay/{season}/{week}/{hometeam}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayByPlay`
- **Error**: `NflV3PlayByPlay.NflV3PbpPlayByPlayByTeamLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3PlayByPlay.NflV3PbpPlayByPlayByTeamLiveFinalRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |
| `hometeam` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayByPlay` | `playByPlaySchema` | `src/models/play-by-play.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3PbpPlayByPlayFinal

- **Signature**: `nflV3PbpPlayByPlayFinal(request: NflV3PlayByPlay.NflV3PbpPlayByPlayFinalRequest, options?: RequestOptions): ApiPromise<PlayByPlay, NflV3PlayByPlay.NflV3PbpPlayByPlayFinalError>`
- **Wire**: `GET /v3/nfl/pbp/{format}/PlayByPlayFinal/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayByPlay`
- **Error**: `NflV3PlayByPlay.NflV3PbpPlayByPlayFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3PlayByPlay.NflV3PbpPlayByPlayFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayByPlay` | `playByPlaySchema` | `src/models/play-by-play.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3PbpPlayByPlayLiveFinal

- **Signature**: `nflV3PbpPlayByPlayLiveFinal(request: NflV3PlayByPlay.NflV3PbpPlayByPlayLiveFinalRequest, options?: RequestOptions): ApiPromise<PlayByPlay, NflV3PlayByPlay.NflV3PbpPlayByPlayLiveFinalError>`
- **Wire**: `GET /v3/nfl/pbp/{format}/PlayByPlay/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayByPlay`
- **Error**: `NflV3PlayByPlay.NflV3PbpPlayByPlayLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3PlayByPlay.NflV3PbpPlayByPlayLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayByPlay` | `playByPlaySchema` | `src/models/play-by-play.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3PbpPlayByPlayDelta

- **Signature**: `nflV3PbpPlayByPlayDelta(request: NflV3PlayByPlay.NflV3PbpPlayByPlayDeltaRequest, options?: RequestOptions): ApiPromise<PlayByPlay[], NflV3PlayByPlay.NflV3PbpPlayByPlayDeltaError>`
- **Wire**: `GET /v3/nfl/pbp/{format}/PlayByPlayDelta/{season}/{week}/{minutes}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayByPlay[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3PlayByPlay.NflV3PbpPlayByPlayDeltaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3PlayByPlay.NflV3PbpPlayByPlayDeltaRequest` (4):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |
| `week` | `path` | `string` | yes | — |
| `minutes` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayByPlay` | `playByPlaySchema` | `src/models/play-by-play.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3PbpPlayByPlaySimulation

- **Signature**: `nflV3PbpPlayByPlaySimulation(request: NflV3PlayByPlay.NflV3PbpPlayByPlaySimulationRequest, options?: RequestOptions): ApiPromise<PlayByPlay[], NflV3PlayByPlay.NflV3PbpPlayByPlaySimulationError>`
- **Wire**: `GET /v3/nfl/pbp/{format}/SimulatedPlayByPlay/{numberofplays}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayByPlay[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3PlayByPlay.NflV3PbpPlayByPlaySimulationError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3PlayByPlay.NflV3PbpPlayByPlaySimulationRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `numberofplays` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayByPlay` | `playByPlaySchema` | `src/models/play-by-play.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

