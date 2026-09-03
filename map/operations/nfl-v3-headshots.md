<!-- Generated file — do not edit; regenerated with the SDK. -->

# NflV3Headshots — operations

Accessor: `client.nflV3Headshots` · Source: `src/resources/nfl-v3-headshots.ts` · 1 operation · Request and error types: namespace `NflV3Headshots`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### nflV3HeadshotsHeadshots

- **Signature**: `nflV3HeadshotsHeadshots(request: NflV3Headshots.NflV3HeadshotsHeadshotsRequest, options?: RequestOptions): ApiPromise<Headshot[], NflV3Headshots.NflV3HeadshotsHeadshotsError>`
- **Wire**: `GET /v3/nfl/headshots/{format}/Headshots`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Headshot[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3Headshots.NflV3HeadshotsHeadshotsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3Headshots.NflV3HeadshotsHeadshotsRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Headshot` | `headshotSchema` | `src/models/headshot.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

