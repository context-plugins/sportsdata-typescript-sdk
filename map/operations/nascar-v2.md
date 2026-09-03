<!-- Generated file — do not edit; regenerated with the SDK. -->

# NascarV2 — operations

Accessor: `client.nascarV2` · Source: `src/resources/nascar-v2.ts` · 13 operations · Request and error types: namespace `NascarV2`

**Type sources**: every type an operation names, with the file that declares it and the schema value exported beside it. Import every name from `sports-data-io`; the `Source` path is where to **read** the shape, never what to import. `ResponseError` and the runtime error family are excluded — see sdk-map.md.

### nascarV2DriverDriverProfilesByDriver

- **Signature**: `nascarV2DriverDriverProfilesByDriver(request: NascarV2.NascarV2DriverDriverProfilesByDriverRequest, options?: RequestOptions): ApiPromise<Driver, NascarV2.NascarV2DriverDriverProfilesByDriverError>`
- **Wire**: `GET /nascar/v2/{format}/driver/{driverid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Driver`
- **Error**: `NascarV2.NascarV2DriverDriverProfilesByDriverError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NascarV2.NascarV2DriverDriverProfilesByDriverRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `driverid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Driver` | `driverSchema` | `src/models/driver.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nascarV2DriverraceprojectionsProjectedPlayerRaceStatsByRace

- **Signature**: `nascarV2DriverraceprojectionsProjectedPlayerRaceStatsByRace(request: NascarV2.NascarV2DriverraceprojectionsProjectedPlayerRaceStatsByRaceRequest, options?: RequestOptions): ApiPromise<DriverRaceProjection[], NascarV2.NascarV2DriverraceprojectionsProjectedPlayerRaceStatsByRaceError>`
- **Wire**: `GET /nascar/v2/{format}/DriverRaceProjections/{raceid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DriverRaceProjection[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NascarV2.NascarV2DriverraceprojectionsProjectedPlayerRaceStatsByRaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NascarV2.NascarV2DriverraceprojectionsProjectedPlayerRaceStatsByRaceRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `raceid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `DriverRaceProjection` | `driverRaceProjectionSchema` | `src/models/driver-race-projection.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nascarV2DriversDriverProfilesAll

- **Signature**: `nascarV2DriversDriverProfilesAll(request: NascarV2.NascarV2DriversDriverProfilesAllRequest, options?: RequestOptions): ApiPromise<Driver[], NascarV2.NascarV2DriversDriverProfilesAllError>`
- **Wire**: `GET /nascar/v2/{format}/drivers`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Driver[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NascarV2.NascarV2DriversDriverProfilesAllError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NascarV2.NascarV2DriversDriverProfilesAllRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Driver` | `driverSchema` | `src/models/driver.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nascarV2DriversbyactiveDriversByActive

- **Signature**: `nascarV2DriversbyactiveDriversByActive(request: NascarV2.NascarV2DriversbyactiveDriversByActiveRequest, options?: RequestOptions): ApiPromise<DriverBasic[], NascarV2.NascarV2DriversbyactiveDriversByActiveError>`
- **Wire**: `GET /nascar/v2/{format}/driversbyactive`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DriverBasic[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NascarV2.NascarV2DriversbyactiveDriversByActiveError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NascarV2.NascarV2DriversbyactiveDriversByActiveRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `DriverBasic` | `driverBasicSchema` | `src/models/driver-basic.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nascarV2EntrylistbyraceEntryListByRace

- **Signature**: `nascarV2EntrylistbyraceEntryListByRace(request: NascarV2.NascarV2EntrylistbyraceEntryListByRaceRequest, options?: RequestOptions): ApiPromise<DriverRaceBasic[], NascarV2.NascarV2EntrylistbyraceEntryListByRaceError>`
- **Wire**: `GET /nascar/v2/{format}/EntryListbyRace/{raceid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `DriverRaceBasic[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NascarV2.NascarV2EntrylistbyraceEntryListByRaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NascarV2.NascarV2EntrylistbyraceEntryListByRaceRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `raceid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `DriverRaceBasic` | `driverRaceBasicSchema` | `src/models/driver-race-basic.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nascarV2FantasygamestatsbyraceFantasyPointsByRace

- **Signature**: `nascarV2FantasygamestatsbyraceFantasyPointsByRace(request: NascarV2.NascarV2FantasygamestatsbyraceFantasyPointsByRaceRequest, options?: RequestOptions): ApiPromise<FantasyRace, NascarV2.NascarV2FantasygamestatsbyraceFantasyPointsByRaceError>`
- **Wire**: `GET /nascar/v2/{format}/FantasyGameStatsByRace/{raceid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `FantasyRace`
- **Error**: `NascarV2.NascarV2FantasygamestatsbyraceFantasyPointsByRaceError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NascarV2.NascarV2FantasygamestatsbyraceFantasyPointsByRaceRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `raceid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `FantasyRace` | `fantasyRaceSchema` | `src/models/fantasy-race.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nascarV2LeaderboardbasicLeaderboardBasic

- **Signature**: `nascarV2LeaderboardbasicLeaderboardBasic(request: NascarV2.NascarV2LeaderboardbasicLeaderboardBasicRequest, options?: RequestOptions): ApiPromise<RaceResultBasic, NascarV2.NascarV2LeaderboardbasicLeaderboardBasicError>`
- **Wire**: `GET /nascar/v2/{format}/LeaderboardBasic/{raceid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RaceResultBasic`
- **Error**: `NascarV2.NascarV2LeaderboardbasicLeaderboardBasicError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NascarV2.NascarV2LeaderboardbasicLeaderboardBasicRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `raceid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `RaceResultBasic` | `raceResultBasicSchema` | `src/models/race-result-basic.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nascarV2LeaderboardbasicfinalLeaderboardBasicFinal

- **Signature**: `nascarV2LeaderboardbasicfinalLeaderboardBasicFinal(request: NascarV2.NascarV2LeaderboardbasicfinalLeaderboardBasicFinalRequest, options?: RequestOptions): ApiPromise<RaceResultBasic, NascarV2.NascarV2LeaderboardbasicfinalLeaderboardBasicFinalError>`
- **Wire**: `GET /nascar/v2/{format}/LeaderboardBasicFinal/{raceid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RaceResultBasic`
- **Error**: `NascarV2.NascarV2LeaderboardbasicfinalLeaderboardBasicFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NascarV2.NascarV2LeaderboardbasicfinalLeaderboardBasicFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `raceid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `RaceResultBasic` | `raceResultBasicSchema` | `src/models/race-result-basic.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nascarV2RaceresultLeaderboardLiveFinal

- **Signature**: `nascarV2RaceresultLeaderboardLiveFinal(request: NascarV2.NascarV2RaceresultLeaderboardLiveFinalRequest, options?: RequestOptions): ApiPromise<RaceResult, NascarV2.NascarV2RaceresultLeaderboardLiveFinalError>`
- **Wire**: `GET /nascar/v2/{format}/raceresult/{raceid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RaceResult`
- **Error**: `NascarV2.NascarV2RaceresultLeaderboardLiveFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NascarV2.NascarV2RaceresultLeaderboardLiveFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `raceid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `RaceResult` | `raceResultSchema` | `src/models/race-result.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nascarV2RaceresultfinalLeaderboardFinal

- **Signature**: `nascarV2RaceresultfinalLeaderboardFinal(request: NascarV2.NascarV2RaceresultfinalLeaderboardFinalRequest, options?: RequestOptions): ApiPromise<RaceResult, NascarV2.NascarV2RaceresultfinalLeaderboardFinalError>`
- **Wire**: `GET /nascar/v2/{format}/raceresultfinal/{raceid}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `RaceResult`
- **Error**: `NascarV2.NascarV2RaceresultfinalLeaderboardFinalError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NascarV2.NascarV2RaceresultfinalLeaderboardFinalRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `raceid` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `RaceResult` | `raceResultSchema` | `src/models/race-result.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nascarV2RacesSchedules

- **Signature**: `nascarV2RacesSchedules(request: NascarV2.NascarV2RacesSchedulesRequest, options?: RequestOptions): ApiPromise<Race[], NascarV2.NascarV2RacesSchedulesError>`
- **Wire**: `GET /nascar/v2/{format}/races/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Race[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NascarV2.NascarV2RacesSchedulesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NascarV2.NascarV2RacesSchedulesRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Race` | `raceSchema` | `src/models/race.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nascarV2SeriesSeries

- **Signature**: `nascarV2SeriesSeries(request: NascarV2.NascarV2SeriesSeriesRequest, options?: RequestOptions): ApiPromise<Series1[], NascarV2.NascarV2SeriesSeriesError>`
- **Wire**: `GET /nascar/v2/{format}/series`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Series1[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NascarV2.NascarV2SeriesSeriesError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NascarV2.NascarV2SeriesSeriesRequest` (1):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Series1` | `series1Schema` | `src/models/series1.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

### nascarV2TracksTracks

- **Signature**: `nascarV2TracksTracks(request: NascarV2.NascarV2TracksTracksRequest, options?: RequestOptions): ApiPromise<Tracks[], NascarV2.NascarV2TracksTracksError>`
- **Wire**: `GET /nascar/v2/{format}/tracks/{season}`
- **Auth**: any of `apiKeyHeader`, `apiKeyQuery` — the first one configured is sent
- **Request body**: none — no `Content-Type` header is sent
- **Returns**: `Tracks[]` — a bare `application/json` array; the success type *is* the array, not a wrapper model
- **Error**: `NascarV2.NascarV2TracksTracksError` — **typed arms**, narrowed on `err.payload.kind`
- **Error arms**: `"unauthorized"` [401] `Unauthorized` · `"undeclared"` [any other] `rawBody: ArrayBuffer`

**Fields** — `NascarV2.NascarV2TracksTracksRequest` (2):

| Field | Channel | Type | Req | Default |
| --- | --- | --- | --- | --- |
| `format` | `path` | `Format` | no | `Format.Json` |
| `season` | `path` | `string` | yes | — |

| Type | Schema value | Source |
| --- | --- | --- |
| `Format` | `formatSchema` | `src/models/format.ts` |
| `Tracks` | `tracksSchema` | `src/models/tracks.ts` |
| `Unauthorized` | `unauthorizedSchema` | `src/models/unauthorized.ts` |

