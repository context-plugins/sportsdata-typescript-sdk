<!-- Generated file — do not edit; regenerated with the SDK. -->

# NhlV3Projections — operations

Accessor: `client.nhlV3Projections` · Source: `src/resources/nhl-v3-projections.ts` · 4 operations · Request and error types: namespace `NhlV3Projections`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### nhlV3ProjectionsDfsSlatesByDate

- **Signature**: `nhlV3ProjectionsDfsSlatesByDate(request: NhlV3Projections.NhlV3ProjectionsDfsSlatesByDateRequest, options?: RequestOptions): ApiPromise<DfsSlate[], NhlV3Projections.NhlV3ProjectionsDfsSlatesByDateError>`
- **Wire**: `GET /v3/nhl/projections/{format}/DfsSlatesByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DfsSlate[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Projections.NhlV3ProjectionsDfsSlatesByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Projections.NhlV3ProjectionsDfsSlatesByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `DfsSlate` | `dfsSlateSchema` | `src/models/dfs-slate.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ProjectionsPlayerDetailsByInjured

- **Signature**: `nhlV3ProjectionsPlayerDetailsByInjured(request: NhlV3Projections.NhlV3ProjectionsPlayerDetailsByInjuredRequest, options?: RequestOptions): ApiPromise<Player3[], NhlV3Projections.NhlV3ProjectionsPlayerDetailsByInjuredError>`
- **Wire**: `GET /v3/nhl/projections/{format}/InjuredPlayers`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Player3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Projections.NhlV3ProjectionsPlayerDetailsByInjuredError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Projections.NhlV3ProjectionsPlayerDetailsByInjuredRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Player3` | `player3Schema` | `src/models/player3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ProjectionsProjectedPlayerGameStatsByDate

- **Signature**: `nhlV3ProjectionsProjectedPlayerGameStatsByDate(request: NhlV3Projections.NhlV3ProjectionsProjectedPlayerGameStatsByDateRequest, options?: RequestOptions): ApiPromise<PlayerGameProjection3[], NhlV3Projections.NhlV3ProjectionsProjectedPlayerGameStatsByDateError>`
- **Wire**: `GET /v3/nhl/projections/{format}/PlayerGameProjectionStatsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `PlayerGameProjection3[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Projections.NhlV3ProjectionsProjectedPlayerGameStatsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Projections.NhlV3ProjectionsProjectedPlayerGameStatsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `PlayerGameProjection3` | `playerGameProjection3Schema` | `src/models/player-game-projection3.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nhlV3ProjectionsStartingGoaltendersByDate

- **Signature**: `nhlV3ProjectionsStartingGoaltendersByDate(request: NhlV3Projections.NhlV3ProjectionsStartingGoaltendersByDateRequest, options?: RequestOptions): ApiPromise<StartingGoaltenders[], NhlV3Projections.NhlV3ProjectionsStartingGoaltendersByDateError>`
- **Wire**: `GET /v3/nhl/projections/{format}/StartingGoaltendersByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `StartingGoaltenders[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NhlV3Projections.NhlV3ProjectionsStartingGoaltendersByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NhlV3Projections.NhlV3ProjectionsStartingGoaltendersByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `StartingGoaltenders` | `startingGoaltendersSchema` | `src/models/starting-goaltenders.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

