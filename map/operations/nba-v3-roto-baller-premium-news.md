<!-- Generated file — do not edit; regenerated with the SDK. -->

# NbaV3RotoBallerPremiumNews — operations

Accessor: `client.nbaV3RotoBallerPremiumNews` · Source: `src/resources/nba-v3-roto-baller-premium-news.ts` · 2 operations · Request and error types: namespace `NbaV3RotoBallerPremiumNews`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### nbaV3NewsRotoballerPremiumNews

- **Signature**: `nbaV3NewsRotoballerPremiumNews(request: NbaV3RotoBallerPremiumNews.NbaV3NewsRotoballerPremiumNewsRequest, options?: RequestOptions): ApiPromise<News[], NbaV3RotoBallerPremiumNews.NbaV3NewsRotoballerPremiumNewsError>`
- **Wire**: `GET /v3/nba/news-rotoballer/{format}/RotoBallerPremiumNews`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `News[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3RotoBallerPremiumNews.NbaV3NewsRotoballerPremiumNewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3RotoBallerPremiumNews.NbaV3NewsRotoballerPremiumNewsRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `News` | `newsSchema` | `src/models/news.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nbaV3NewsRotoballerPremiumNewsByDate

- **Signature**: `nbaV3NewsRotoballerPremiumNewsByDate(request: NbaV3RotoBallerPremiumNews.NbaV3NewsRotoballerPremiumNewsByDateRequest, options?: RequestOptions): ApiPromise<News[], NbaV3RotoBallerPremiumNews.NbaV3NewsRotoballerPremiumNewsByDateError>`
- **Wire**: `GET /v3/nba/news-rotoballer/{format}/RotoBallerPremiumNewsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `News[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NbaV3RotoBallerPremiumNews.NbaV3NewsRotoballerPremiumNewsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NbaV3RotoBallerPremiumNews.NbaV3NewsRotoballerPremiumNewsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `News` | `newsSchema` | `src/models/news.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

