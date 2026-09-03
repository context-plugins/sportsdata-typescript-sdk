<!-- Generated file — do not edit; regenerated with the SDK. -->

# NhlV3PlayByPlay — operations

Accessor: `client.nhlV3PlayByPlay` · Source: `src/resources/nhl-v3-play-by-play.ts` · 3 operations · Request and error types: namespace `NhlV3PlayByPlay`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### nhlV3PbpPlayByPlayFinal

- **Signature**: `nhlV3PbpPlayByPlayFinal(request: NhlV3PlayByPlay.NhlV3PbpPlayByPlayFinalRequest, options?: RequestOptions): ApiPromise<PlayByPlay3, NhlV3PlayByPlay.NhlV3PbpPlayByPlayFinalError>`
- **Wire**: `GET /v3/nhl/pbp/{format}/PlayByPlayFinal/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayByPlay3`
- **Error**: `NhlV3PlayByPlay.NhlV3PbpPlayByPlayFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3PlayByPlay.NhlV3PbpPlayByPlayFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayByPlay3` | `playByPlay3Schema` | `src/models/play-by-play3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3PbpPlayByPlayLiveFinal

- **Signature**: `nhlV3PbpPlayByPlayLiveFinal(request: NhlV3PlayByPlay.NhlV3PbpPlayByPlayLiveFinalRequest, options?: RequestOptions): ApiPromise<PlayByPlay3, NhlV3PlayByPlay.NhlV3PbpPlayByPlayLiveFinalError>`
- **Wire**: `GET /v3/nhl/pbp/{format}/PlayByPlay/{gameid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayByPlay3`
- **Error**: `NhlV3PlayByPlay.NhlV3PbpPlayByPlayLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3PlayByPlay.NhlV3PbpPlayByPlayLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `gameid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayByPlay3` | `playByPlay3Schema` | `src/models/play-by-play3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3PbpPlayByPlayDelta

- **Signature**: `nhlV3PbpPlayByPlayDelta(request: NhlV3PlayByPlay.NhlV3PbpPlayByPlayDeltaRequest, options?: RequestOptions): ApiPromise<PlayByPlay3[], NhlV3PlayByPlay.NhlV3PbpPlayByPlayDeltaError>`
- **Wire**: `GET /v3/nhl/pbp/{format}/PlayByPlayDelta/{date}/{minutes}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayByPlay3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3PlayByPlay.NhlV3PbpPlayByPlayDeltaError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3PlayByPlay.NhlV3PbpPlayByPlayDeltaRequest` (3):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |
| `minutes` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayByPlay3` | `playByPlay3Schema` | `src/models/play-by-play3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

