<!-- Generated file — do not edit; regenerated with the SDK. -->

# GolfV3RotoBallerPremiumNews — operations

Accessor: `client.golfV3RotoBallerPremiumNews` · Source: `src/resources/golf-v3-roto-baller-premium-news.ts` · 2 operations · Request and error types: namespace `GolfV3RotoBallerPremiumNews`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### golfV3NewsRotoballerPremiumNews

- **Signature**: `golfV3NewsRotoballerPremiumNews(request: GolfV3RotoBallerPremiumNews.GolfV3NewsRotoballerPremiumNewsRequest, options?: RequestOptions): ApiPromise<News2[], GolfV3RotoBallerPremiumNews.GolfV3NewsRotoballerPremiumNewsError>`
- **Wire**: `GET /v3/golf/news-rotoballer/{format}/RotoBallerPremiumNews`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `News2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV3RotoBallerPremiumNews.GolfV3NewsRotoballerPremiumNewsError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV3RotoBallerPremiumNews.GolfV3NewsRotoballerPremiumNewsRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `News2` | `news2Schema` | `src/models/news2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### golfV3NewsRotoballerPremiumNewsByDate

- **Signature**: `golfV3NewsRotoballerPremiumNewsByDate(request: GolfV3RotoBallerPremiumNews.GolfV3NewsRotoballerPremiumNewsByDateRequest, options?: RequestOptions): ApiPromise<News2[], GolfV3RotoBallerPremiumNews.GolfV3NewsRotoballerPremiumNewsByDateError>`
- **Wire**: `GET /v3/golf/news-rotoballer/{format}/RotoBallerPremiumNewsByDate/{date}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `News2[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `GolfV3RotoBallerPremiumNews.GolfV3NewsRotoballerPremiumNewsByDateError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `GolfV3RotoBallerPremiumNews.GolfV3NewsRotoballerPremiumNewsByDateRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `date` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `News2` | `news2Schema` | `src/models/news2.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

