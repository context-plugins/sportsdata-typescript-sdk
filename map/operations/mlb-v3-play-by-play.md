<!-- Generated file — do not edit; regenerated with the SDK. -->

# MlbV3PlayByPlay — operations

Accessor: `client.mlbV3PlayByPlay` · Source: `src/resources/mlb-v3-play-by-play.ts` · 3 operations · Request and error types: namespace `MlbV3PlayByPlay`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### mlbV3PbpPlayByPlayFinal

- **Signature**: `mlbV3PbpPlayByPlayFinal(request: MlbV3PlayByPlay.MlbV3PbpPlayByPlayFinalRequest, options?: RequestOptions): ApiPromise<PlayByPlay2, MlbV3PlayByPlay.MlbV3PbpPlayByPlayFinalError>`
- **Wire**: `GET /v3/mlb/pbp/{format}/PlayByPlayFinal/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayByPlay2`
- **Error**: `MlbV3PlayByPlay.MlbV3PbpPlayByPlayFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3PlayByPlay.MlbV3PbpPlayByPlayFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayByPlay2` | `playByPlay2Schema` | `src/models/play-by-play2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3PbpPlayByPlayLiveFinal

- **Signature**: `mlbV3PbpPlayByPlayLiveFinal(request: MlbV3PlayByPlay.MlbV3PbpPlayByPlayLiveFinalRequest, options?: RequestOptions): ApiPromise<PlayByPlay2, MlbV3PlayByPlay.MlbV3PbpPlayByPlayLiveFinalError>`
- **Wire**: `GET /v3/mlb/pbp/{format}/PlayByPlay/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayByPlay2`
- **Error**: `MlbV3PlayByPlay.MlbV3PbpPlayByPlayLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3PlayByPlay.MlbV3PbpPlayByPlayLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayByPlay2` | `playByPlay2Schema` | `src/models/play-by-play2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mlbV3PbpPlayByPlayDelta

- **Signature**: `mlbV3PbpPlayByPlayDelta(request: MlbV3PlayByPlay.MlbV3PbpPlayByPlayDeltaRequest, options?: RequestOptions): ApiPromise<PlayByPlay2[], MlbV3PlayByPlay.MlbV3PbpPlayByPlayDeltaError>`
- **Wire**: `GET /v3/mlb/pbp/{format}/PlayByPlayDelta/{date}/{minutes}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayByPlay2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `MlbV3PlayByPlay.MlbV3PbpPlayByPlayDeltaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MlbV3PlayByPlay.MlbV3PbpPlayByPlayDeltaRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |
| `minutes` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayByPlay2` | `playByPlay2Schema` | `src/models/play-by-play2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

