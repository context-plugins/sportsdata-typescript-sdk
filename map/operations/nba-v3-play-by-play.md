<!-- Generated file — do not edit; regenerated with the SDK. -->

# NbaV3PlayByPlay — operations

Accessor: `client.nbaV3PlayByPlay` · Source: `src/resources/nba-v3-play-by-play.ts` · 3 operations · Request and error types: namespace `NbaV3PlayByPlay`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### nbaV3PbpPlayByPlayFinal

- **Signature**: `nbaV3PbpPlayByPlayFinal(request: NbaV3PlayByPlay.NbaV3PbpPlayByPlayFinalRequest, options?: RequestOptions): ApiPromise<PlayByPlay1, NbaV3PlayByPlay.NbaV3PbpPlayByPlayFinalError>`
- **Wire**: `GET /v3/nba/pbp/{format}/PlayByPlayFinal/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayByPlay1`
- **Error**: `NbaV3PlayByPlay.NbaV3PbpPlayByPlayFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3PlayByPlay.NbaV3PbpPlayByPlayFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayByPlay1` | `playByPlay1Schema` | `src/models/play-by-play1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3PbpPlayByPlayLiveFinal

- **Signature**: `nbaV3PbpPlayByPlayLiveFinal(request: NbaV3PlayByPlay.NbaV3PbpPlayByPlayLiveFinalRequest, options?: RequestOptions): ApiPromise<PlayByPlay1, NbaV3PlayByPlay.NbaV3PbpPlayByPlayLiveFinalError>`
- **Wire**: `GET /v3/nba/pbp/{format}/PlayByPlay/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayByPlay1`
- **Error**: `NbaV3PlayByPlay.NbaV3PbpPlayByPlayLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3PlayByPlay.NbaV3PbpPlayByPlayLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayByPlay1` | `playByPlay1Schema` | `src/models/play-by-play1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3PbpPlayByPlayDelta

- **Signature**: `nbaV3PbpPlayByPlayDelta(request: NbaV3PlayByPlay.NbaV3PbpPlayByPlayDeltaRequest, options?: RequestOptions): ApiPromise<PlayByPlay1[], NbaV3PlayByPlay.NbaV3PbpPlayByPlayDeltaError>`
- **Wire**: `GET /v3/nba/pbp/{format}/PlayByPlayDelta/{date}/{minutes}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayByPlay1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3PlayByPlay.NbaV3PbpPlayByPlayDeltaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3PlayByPlay.NbaV3PbpPlayByPlayDeltaRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |
| `minutes` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayByPlay1` | `playByPlay1Schema` | `src/models/play-by-play1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

