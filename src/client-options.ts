import type { TokenProvider } from "./core/auth/credentials.js";
import type { CoreClientOptions } from "./core/client-options.js";

export type ClientOptions = SdkClientOptions & CoreClientOptions;

type SdkClientOptions = ServerOptions & {
  readonly apiKeyHeader?: TokenProvider | undefined;
  readonly apiKeyQuery?: TokenProvider | undefined;
};

type ServerOptions = {
  /** Production server */
  readonly serverOptions?: {
    baseUrl?: string;
  };
};
