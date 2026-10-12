import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UnauthorizedError = {
  httpStatusCode?: number;
  code?: number;
  description?: string;
  help?: string;
};

export const unauthorizedErrorSchema: Schema<UnauthorizedError> = s.object<UnauthorizedError>({
  httpStatusCode: s.optional(s.int()),
  code: s.optional(s.int()),
  description: s.optional(s.string()),
  help: s.optional(s.string()),
  _keysMap: {
    httpStatusCode: "HttpStatusCode",
    code: "Code",
    description: "Description",
    help: "Help",
  },
});
