import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyHeaderAuth, apiKeyQueryAuth } from "./core/auth/schemes.js";

export type AuthSchemes = {
  readonly apiKeyHeader: AuthScheme;
  readonly apiKeyQuery: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    apiKeyHeader: apiKeyHeaderAuth({ name: "Ocp-Apim-Subscription-Key", token: options.apiKeyHeader }),
    apiKeyQuery: apiKeyQueryAuth({ name: "key", token: options.apiKeyQuery }),
  };
}
