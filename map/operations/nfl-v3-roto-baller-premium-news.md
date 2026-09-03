<!-- Generated file — do not edit; regenerated with the SDK. -->

# NflV3RotoBallerPremiumNews — operations

Accessor: `client.nflV3RotoBallerPremiumNews` · Source: `src/resources/nfl-v3-roto-baller-premium-news.ts` · 3 operations · Request and error types: namespace `NflV3RotoBallerPremiumNews`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### nflV3NewsRotoballerPremiumNews

- **Signature**: `nflV3NewsRotoballerPremiumNews(request: NflV3RotoBallerPremiumNews.NflV3NewsRotoballerPremiumNewsRequest, options?: RequestOptions): ApiPromise<News[], NflV3RotoBallerPremiumNews.NflV3NewsRotoballerPremiumNewsError>`
- **Wire**: `GET /v3/nfl/news-rotoballer/{format}/RotoBallerPremiumNews`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `News[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3RotoBallerPremiumNews.NflV3NewsRotoballerPremiumNewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3RotoBallerPremiumNews.NflV3NewsRotoballerPremiumNewsRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `News` | `newsSchema` | `src/models/news.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3NewsRotoballerPremiumNewsByDate

- **Signature**: `nflV3NewsRotoballerPremiumNewsByDate(request: NflV3RotoBallerPremiumNews.NflV3NewsRotoballerPremiumNewsByDateRequest, options?: RequestOptions): ApiPromise<News[], NflV3RotoBallerPremiumNews.NflV3NewsRotoballerPremiumNewsByDateError>`
- **Wire**: `GET /v3/nfl/news-rotoballer/{format}/RotoBallerPremiumNewsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `News[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3RotoBallerPremiumNews.NflV3NewsRotoballerPremiumNewsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3RotoBallerPremiumNews.NflV3NewsRotoballerPremiumNewsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `News` | `newsSchema` | `src/models/news.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nflV3NewsRotoballerPremiumNewsByTeam

- **Signature**: `nflV3NewsRotoballerPremiumNewsByTeam(request: NflV3RotoBallerPremiumNews.NflV3NewsRotoballerPremiumNewsByTeamRequest, options?: RequestOptions): ApiPromise<News[], NflV3RotoBallerPremiumNews.NflV3NewsRotoballerPremiumNewsByTeamError>`
- **Wire**: `GET /v3/nfl/news-rotoballer/{format}/RotoBallerPremiumNewsByTeam/{team}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `News[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NflV3RotoBallerPremiumNews.NflV3NewsRotoballerPremiumNewsByTeamError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NflV3RotoBallerPremiumNews.NflV3NewsRotoballerPremiumNewsByTeamRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `team` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `News` | `newsSchema` | `src/models/news.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

