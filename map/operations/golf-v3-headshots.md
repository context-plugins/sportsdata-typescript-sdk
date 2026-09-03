<!-- Generated file — do not edit; regenerated with the SDK. -->

# GolfV3Headshots — operations

Accessor: `client.golfV3Headshots` · Source: `src/resources/golf-v3-headshots.ts` · 1 operation · Request and error types: namespace `GolfV3Headshots`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### golfV3HeadshotsHeadshots

- **Signature**: `golfV3HeadshotsHeadshots(request: GolfV3Headshots.GolfV3HeadshotsHeadshotsRequest, options?: RequestOptions): ApiPromise<Headshot1[], GolfV3Headshots.GolfV3HeadshotsHeadshotsError>`
- **Wire**: `GET /v3/golf/headshots/{format}/Headshots`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Headshot1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV3Headshots.GolfV3HeadshotsHeadshotsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV3Headshots.GolfV3HeadshotsHeadshotsRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Headshot1` | `headshot1Schema` | `src/models/headshot1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

