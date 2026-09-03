<!-- Generated file — do not edit; regenerated with the SDK. -->

# MmaV3Stats — operations

Accessor: `client.mmaV3Stats` · Source: `src/resources/mma-v3-stats.ts` · 4 operations · Request and error types: namespace `MmaV3Stats`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### mmaV3StatsFightBasicFinal

- **Signature**: `mmaV3StatsFightBasicFinal(request: MmaV3Stats.MmaV3StatsFightBasicFinalRequest, options?: RequestOptions): ApiPromise<FightBasic, MmaV3Stats.MmaV3StatsFightBasicFinalError>`
- **Wire**: `GET /v3/mma/stats/{format}/FightBasicFinal/{fightid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FightBasic`
- **Error**: `MmaV3Stats.MmaV3StatsFightBasicFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MmaV3Stats.MmaV3StatsFightBasicFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `fightid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `FightBasic` | `fightBasicSchema` | `src/models/fight-basic.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mmaV3StatsFightBasicLiveFinal

- **Signature**: `mmaV3StatsFightBasicLiveFinal(request: MmaV3Stats.MmaV3StatsFightBasicLiveFinalRequest, options?: RequestOptions): ApiPromise<FightBasic, MmaV3Stats.MmaV3StatsFightBasicLiveFinalError>`
- **Wire**: `GET /v3/mma/stats/{format}/FightBasic/{fightid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FightBasic`
- **Error**: `MmaV3Stats.MmaV3StatsFightBasicLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MmaV3Stats.MmaV3StatsFightBasicLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `fightid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `FightBasic` | `fightBasicSchema` | `src/models/fight-basic.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mmaV3StatsFightFinal

- **Signature**: `mmaV3StatsFightFinal(request: MmaV3Stats.MmaV3StatsFightFinalRequest, options?: RequestOptions): ApiPromise<FightDetail, MmaV3Stats.MmaV3StatsFightFinalError>`
- **Wire**: `GET /v3/mma/stats/{format}/FightFinal/{fightid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FightDetail`
- **Error**: `MmaV3Stats.MmaV3StatsFightFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MmaV3Stats.MmaV3StatsFightFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `fightid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `FightDetail` | `fightDetailSchema` | `src/models/fight-detail.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### mmaV3StatsFightLiveFinal

- **Signature**: `mmaV3StatsFightLiveFinal(request: MmaV3Stats.MmaV3StatsFightLiveFinalRequest, options?: RequestOptions): ApiPromise<FightDetail, MmaV3Stats.MmaV3StatsFightLiveFinalError>`
- **Wire**: `GET /v3/mma/stats/{format}/Fight/{fightid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FightDetail`
- **Error**: `MmaV3Stats.MmaV3StatsFightLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `MmaV3Stats.MmaV3StatsFightLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `fightid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `FightDetail` | `fightDetailSchema` | `src/models/fight-detail.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

